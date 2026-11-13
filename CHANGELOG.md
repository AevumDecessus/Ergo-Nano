# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added series `1N4148` gate protection diode (`D40`, `led_mosfet_gate_diode`) between `J2` (`J_MFET_GATE`) and `LED_MFET_GATE` to isolate `P4` (3.3 V) from `RAW` (up to 4.2 V) when LEDs are off, preventing ESD-diode clamping and idle leakage.

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

[Unreleased]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.4.0...main
[0.4.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/AevumDecessus/Ergo-Nano/compare/v0.0.1...v0.2.0
[0.0.1]: https://github.com/AevumDecessus/Ergo-Nano/commits/v0.0.1
