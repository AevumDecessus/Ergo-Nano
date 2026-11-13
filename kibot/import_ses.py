#!/usr/bin/env python3
import getopt
import sys

import pcbnew

"""
This program runs pcbnew and imports a Specctra SES file, then saves the result
as a new KiCad PCB. 
"""

def _endpoint_connected(pt, track, tracks, vias, pads):
  layer = track.GetLayer()
  net = track.GetNetCode()
  for pad in pads.get((net, layer), ()):
    if pad.HitTest(pt):
      return True
  for via in vias.get(net, ()):
    if via.IsOnLayer(layer):
      r = via.GetWidth(layer) / 2
      vp = via.GetPosition()
      if (pt.x - vp.x) ** 2 + (pt.y - vp.y) ** 2 <= r * r:
        return True
  pt_xy = (pt.x, pt.y)
  ts, te = track.GetStart(), track.GetEnd()
  ts_xy, te_xy = (ts.x, ts.y), (te.x, te.y)
  for other in tracks.get((net, layer), ()):
    if other is track:
      continue
    os, oe = other.GetStart(), other.GetEnd()
    os_xy, oe_xy = (os.x, os.y), (oe.x, oe.y)
    if (os_xy == ts_xy and oe_xy == te_xy) or (os_xy == te_xy and oe_xy == ts_xy):
      continue
    if ((pt_xy[0] - os_xy[0]) ** 2 + (pt_xy[1] - os_xy[1]) ** 2 <= 100
        or (pt_xy[0] - oe_xy[0]) ** 2 + (pt_xy[1] - oe_xy[1]) ** 2 <= 100):
      return True
  return False


def remove_dangling_stubs(board, max_length_mm=0.001):
  """Iteratively remove short dead-end track stubs left by SES import."""
  max_len = pcbnew.FromMM(max_length_mm)
  pads = {}
  for fp in board.GetFootprints():
    for pad in fp.Pads():
      net = pad.GetNetCode()
      for layer in (pcbnew.F_Cu, pcbnew.B_Cu):
        if pad.IsOnLayer(layer):
          pads.setdefault((net, layer), []).append(pad)

  removed = 0
  while True:
    tracks, vias = {}, {}
    for item in board.GetTracks():
      if isinstance(item, pcbnew.PCB_VIA):
        vias.setdefault(item.GetNetCode(), []).append(item)
      elif not isinstance(item, pcbnew.PCB_ARC):
        tracks.setdefault((item.GetNetCode(), item.GetLayer()), []).append(item)

    to_remove = []
    for segs in tracks.values():
      for seg in segs:
        if seg.GetLength() > max_len:
          continue
        if not (_endpoint_connected(seg.GetStart(), seg, tracks, vias, pads)
                and _endpoint_connected(seg.GetEnd(), seg, tracks, vias, pads)):
          to_remove.append(seg)

    if not to_remove:
      break
    for seg in to_remove:
      board.Delete(seg)
      removed += 1
  return removed


def main(argv):
  board_file = ''
  output_file = ''
  session_file = ''
  try:
    opts, _args = getopt.getopt(argv, "hb:s:o:",["board=","session=","output="])
  except getopt.GetoptError:
    print ('import_ses.py -b <board_file> -s <session_file> -o <output_file>')
    sys.exit(2)
  for opt, arg in opts:
    if opt == '-h': 
      print ('import_ses.py -b <board_file> -s <session_file> -o <output_file>')
      sys.exit()
    elif opt in ("-b", "--board"):
      board_file = arg
    elif opt in ("-s", "--session"):
      session_file = arg
    elif opt in ("-o", "--output"):
      output_file = arg
  print('Importing Specctra SES ', session_file,' for ', board_file)
  board = pcbnew.LoadBoard(board_file)
  if not pcbnew.ImportSpecctraSES(board, session_file):
    raise RuntimeError('Could not import Specctra SES: ' + session_file)
  removed = remove_dangling_stubs(board)
  if removed:
    print('Removed dangling track stubs:', removed)
  success = pcbnew.SaveBoard(output_file, board, True)
  if success:
    print('Saved output to ', output_file)
  else:
    print('Couldn\'t save output to ', output_file)

if __name__ == "__main__":
   main(sys.argv[1:])