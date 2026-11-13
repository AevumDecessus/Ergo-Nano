# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Flipped `mx` switches `180°` to a north-facing (top-lit) orientation and moved per-key `SK6812MINI-E` LEDs to the top of each switch (`led_pos_y: 4.75`) for better shine-through keycap illumination.
- Moved switch diodes (`diode_x: 6.5`, `diode_y: -6`, `rotate: 270`), static `utility_router` routes, row/column silkscreen labels, `D40`, `LED OR ENC`, and hand labels to match the north-facing switch layout.

## [0.5.1] - 2026-11-13

### Changed

- Release workflow now also commits the build artifacts in addition to attaching them to the release.

## [0.5.0] - 2026-11-13

### Added

- Added series `1N4148` gate protection diode (`D40`, `led_mosfet_gate_diode`) between `J2` (`J_MFET_GATE`) and `LED_MFET_GATE` to isolate `P4` (3.3 V) from `RAW` (up to 4.2 V) when LEDs are off, preventing ESD-diode clamping and idle leakage.
- Added `Q1 AO3401` silkscreen label (`led_mosfet_text`) on the front side.

### Fixed

- Updated `freerouting/freerouting.rules` net names (`index_num`, `encoder_encoder`, `t_col*`, `R0`–`R4`, `RS`, `E1`, `E2`, `P0`, `P4`, `J_LED`, `J_MFET_GATE`, `LED_MFET_GATE`, and explicit `LED_0`–`LED_37` / `ULED_1`–`ULED_10`) to match the actual PCB nets.
- Adjusted `underglow_text` position (`[0, 2.65]`) and size (`0.8` mm) in `ergogen/config.yaml` to eliminate `silk_edge_clearance` warnings.
- Fixed lowercase `'pad'` condition in `kibot/configure_jlcpcb.py` `"JLCPCB Pad to Silkscreen"` rule.
- Updated `kibot/import_ses.py` to remove sub-micron (`<= 0.001 mm`) dangling track stubs left by Specctra SES import.
- Added a scoped `hole_to_hole` ignore rule in `kibot/configure_jlcpcb.py` for intra-footprint reversible switch NPTH overlaps.
- Ignored `lib_footprint_issues` in `kibot/configure_jlcpcb.py` (`.kicad_pro` `rule_severities`) since Ergogen embeds footprints directly from JS rather than a KiCad library table.

## [0.4.0] - 2026-11-09

### Changed

- Switched the nice!view footprint to my tweaked version - fixes silkscreen to pad clearance violation
- Moved the thumb cluster position and changed it's angle slightly
- Moved silkscreen labels to accomodate new thumb cluster position

### Removed

- Removed JLCJLC silkscreen label - no longer required by manufacturer

## [0.3.1] - 2026-11-07

### Changed

- Moved all silkscreen blobs to fit into the dead space between the thumb cluster and the MCU.
- Parameterized the keyboard URL and keyboard author for use in variables within.

## [0.3.0] - 2026-11-07

## Fixed

- Battery switch now routes to `RAW` instead of incorrectly to `VCC`.
- Fixed broken LED data chain between `LED_9` and `LED_10` nets.
- Static switch routes from switch to diode now correctly use `{{colrow}}` instead of `{{col_net}}`.
- Display now correctly uses `MOS` net for both the display and the MCU pin connected to the same net.
- Column static route for thumb cluster corrected to `{{column_net}}` instead of invalid `{{col_net}}`
- LED chain put on it's own `LED_VCC` net instead of the shared `VCC` net coming out of the MCU
- kibot generated DRC rules corrected and expanded.
- Build script no longer uses saved DRC rules and generates them freshly on build.

## Changed

- Labels on board for board name and version now use the parameterized values from the meta section of the board config

## Added

- Added an additional underglow LED to the thumbs cluster.
- Added mosfet in SOT-23 footprint to control power to the `LED_VCC` net fully.
- Added pullup resistor between `RAW` and `LED_MFET_GATE` so that the mosfet is always off unless specifically requested by the MCU.

## Removed

- Remove plated through holes from the keyswitches, they are too close to the unplated holes for the hot-swap switch holders.

## [0.2.0] - 2026-11-04

Initial release of board with LEDs added. Suffers from numerous fatal flaws and should not be manufactured. Entry is maintained here for historical purposes.

## [0.0.1] - 2026-10-31

Initial release with initial version of the board - suffers from fatal flaws and should not be manufactured. Entry is only maintained here for historical purposes.

[Unreleased]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.5.1...main
[0.5.1]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.0.1...v0.2.0
[0.0.1]: https://github.com/AevumDecessus/Ergo-Nano/commits/v0.0.1
