# Ergo-Nano keyboard design

A ergodox/moonlander inspired wireless-first split keyboard design, defined in code with [Ergogen](https://github.com/ergogen/ergogen).

Utilizes the [nice!nano](https://nicekeyboards.com/nice-nano/) for a wireless-first methodology. The wireless firmware is built on [ZMK](https://zmk.dev/).

## Important notes

This layout is fully generated, and as of the V0.1 release HAS NOT BEEN BUILT OR TESTED YET. Feel free to use this as a reference, but you are making this at your own risk until it has been build, tested, and vetted.

## Layout

Replaced all the 1.5U keys with 1U keys on the farthest outside rows, moved the thumb cluster closer to the natural thumb resting location, a major complaint with the Ergodox.

Each half is a 5x6 matrix with 5 thumb keys, and the modifier keys removed from the innermost 2 columns.

Built with MX keysizes be default.

## Contents

Case STLs:

* [Bottom Case PCB](cases/bottom_case_pcb.stl) 3d Printable case with walls that sit flush with the top of the PCB
* [Bottom Case Switch](cases/bottom_case_switch.stl) 3D Printable case that sits flush with the top of the switchplate

Plates:

* [Backplate](outlines/backplate.dxf) DXF to cut your own backplate out of acrylic/wood/etc
* [Backplate PCB](gerbers/backplate.zip) Gerber release to get a backplate manufactured out of PCB
* [Switchplate](outlines/switchplate.dxf) DXF to cut your own switchplate out of acrylic/wood/etc
* [Switchplate PCB](gerbers/switchplate.zip) Gerber release to get a switchplate manufactured out of PCB

## Images

### Top (Left Hand)

![Left side keyboard top](docs/images/ergonano_autorouted-top.png)

### Bottom (Right Hand)

![Right side keyboard bottom](docs/images/ergonano_autorouted-bottom.png)