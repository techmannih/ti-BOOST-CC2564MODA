# BOOST-CC2564MODA Bluetooth audio board

This tscircuit project extends the Texas Instruments BOOST-CC2564MODA / WCS007-E1
reconstruction into a complete Bluetooth audio PCB. In addition to the original
`CC2564MODACMOG` module, BoosterPack headers, power rails, HCI UART, PCM level
translation, shutdown/debug routing, and 32.768 kHz clock, the same board now
contains a stereo codec, 3.5 mm headphone output, and stereo speaker amplifier.

The left 58.42 x 55.88 mm region is a placement-faithful reconstruction rather
than imported TI production CAD. Its component positions, rotations, header
genders, labels, and mechanical features were matched against the reference
board. The right-side audio section is a custom extension based on the codec and
amplifier manufacturers' reference circuits.

## Functional blocks

| Block | Main parts | Purpose |
| ----- | ---------- | ------- |
| Bluetooth module | U1 `CC2564MODACMOG` | Bluetooth controller with integrated antenna |
| HCI UART translation | U3 `TXS0108EPWR` | Translates HCI TX, RX, CTS, and RTS between 1.8 V and 3.3 V |
| PCM/audio translation | U2 `TXS0104EPWR` | Translates frame sync, clock, audio input, and audio output |
| Stereo codec | U7 `TLV320AIC3254IRHBR` | Converts the module's digital PCM/I2S stream to analog left/right audio |
| Headphone output | J17 `PJ-327C-4A` | AC-coupled 3.5 mm stereo headphone/line output |
| Speaker amplifier | U8 `TPA2012D2RTJR` | 5 V stereo filter-free Class-D output for passive speakers |
| Speaker connector | J18 `DB128V-5.08-4P` | Separate bridge-tied `L+`, `L-`, `R+`, and `R-` outputs |
| Shutdown/debug translation | U4 `TXS0102DCUR` | Translates `nSHUTD` and `TX_DBG` between the module and 3.3 V headers |
| 3.3 V regulator | U6 `TPS73533DRBR` | Generates `LDO_3V3` from diode-ORed USB or BoosterPack 5 V |
| 1.8 V regulator | U5 `TLV71718PDQNR` | Generates the common `V1_8` rail from `LIN_3V3` |
| Slow clock | Y1 + R1/R2/C3 | Provides the module's 32.768 kHz slow-clock input |
| User control/status | SW1, D1, D2 | Shutdown pushbutton plus power and status indication |

## BoosterPack header pinout

`J1/J3` is one physical 2x10 female header. Its schematic and PCB ports retain
TI's global BoosterPack numbering: J1 is pins 1-10 and J3 is pins 21-30. The
PCB silkscreen retains the reference board's signal abbreviations.

| Pin | PCB label | Connected signal |
| --: | --------- | ---------------- |
| 1 | `3V3` | `LP_3V3` |
| 2 | `NC` | Not connected |
| 3 | `BUTX1` | UART TX route 1 |
| 4 | `BURX1` | UART RX route 1 |
| 5 | `NC` | Not connected |
| 6 | `BUTX2` | UART TX route 2 |
| 7 | `BURX2` | UART RX route 2 |
| 8 | `NC` | Not connected |
| 9 | `ASCL` | Audio-codec I2C clock (`AUDIO_I2C_SCL`) |
| 10 | `ASDA` | Audio-codec I2C data (`AUDIO_I2C_SDA`) |
| 21 | `5V` | `LP_5V` |
| 22 | `GND` | Common ground |
| 23 | `NC` | Not connected |
| 24 | `NC` | Not connected |
| 25 | `NC` | Not connected |
| 26 | `NC` | Not connected |
| 27 | `BAFS` | PCM/audio frame sync |
| 28 | `BACK` | PCM/audio clock |
| 29 | `BADO` | BoosterPack audio data-out/in route |
| 30 | `BADI` | BoosterPack audio data-in/out route |

`J2/J4` is the second physical 2x10 female header. J2 is pins 11-20 and J4 is
pins 31-40. Empty PCB labels are intentional and represent reference-board pins
that are not connected in this design.

| Pin | PCB label | Connected signal |
| --: | --------- | ---------------- |
| 11-12 | `NC` | Not connected |
| 13 | `BURT2` | UART RTS route 2 |
| 14 | `BUCT2` | CTS2 / TX debug selectable route |
| 15 | `NC` | Not connected |
| 16 | `BURT1` | UART RTS route 1 |
| 17 | `BUCT1` | UART CTS route 1 |
| 18-20 | `NC` | Not connected |
| 31-35 | `NC` | Not connected |
| 36 | `BnSD2` | Bluetooth shutdown route 1 |
| 37-38 | `NC` | Not connected |
| 39 | `BnSD1` | Bluetooth shutdown route 2 |
| 40 | `GND` | Common ground |

## Power architecture and rail configuration

J16 is a Micro-USB connector used primarily as a 5 V power input. USB VBUS and
BoosterPack `LP_5V` are diode-ORed through D3 and D4 into U6. J10 then selects
whether `BOARD_3V3` is supplied by the BoosterPack 3.3 V input or by U6's local
3.3 V output. The USB D+ and D- nets currently terminate after the L1/L2 0-ohm
links and are not part of the Bluetooth data path.

U5 creates `V1_8`, and the top-edge link pairs distribute the board rails to
the level translators, slow clock, and Bluetooth module:

| Header / link | Rail function |
| ------------- | ------------- |
| J10 | Selects `LP_3V3` or `LDO_3V3` as `BOARD_3V3` |
| J9 / R9 | `BOARD_3V3` to `LIN_3V3`, feeding the 1.8 V regulator |
| J15 / R15 | `BOARD_3V3` to translator-side `VT_3V3` |
| J11 / R11 | `BOARD_3V3` to module input `CC_3V3` |
| J14 / R14 | `V1_8` to translator-side `VT_1V8` |
| J13 / R13 | `V1_8` to slow-clock rail `CK_1V8` |
| J12 / R12 | `V1_8` to module I/O rail `CC_1V8` |

The J9/J12-J15 footprints are intentionally unpopulated two-pad link positions;
their adjacent resistors provide the default 0-ohm connection. U8's `AMP_5V`
rail comes from the diode-ORed USB/BoosterPack 5 V input through R32. Use a 5 V
supply with enough current for the selected speakers; the 3.3 V input alone does
not power the speaker amplifier.

## Integrated audio outputs

U7 receives the level-shifted PCM/I2S clock, frame-sync, playback, and capture
signals already present on U2. I2C control is available on J1 pins 9 and 10 so
the host can reset and configure the codec. The playback path feeds both output
types on the PCB:

- J17 is a normal 3.5 mm stereo TRS output: tip = left, ring = right, sleeve =
  ground. It is intended for headphones, powered speakers, or line input.
- J18 drives two passive 4-ohm or 8-ohm speakers. Connect the left speaker only
  between `L+` and `L-`, and the right speaker only between `R+` and `R-`.
- U8 uses bridge-tied Class-D outputs. Never connect `L-` or `R-` to ground and
  do not combine the two channels.

The hardware audio path is integrated, but CC2564MODA is a Bluetooth controller,
not a standalone player. A BoosterPack host/MCU must still run the Bluetooth
audio stack and initialize U7 over I2C with PCM/I2S settings matching the module.

## Audio routing, shutdown, and debug headers

| Header | Pin labels | Function |
| ------ | ---------- | -------- |
| J7 | `BMDO`, `CPDO`, `BADI` | PCM data-output selection/routing |
| J6 | `BADO`, `CPDI`, `BMDI` | PCM data-input selection/routing |
| J8 | `TX_DBG`, `BURTS`, `U_CTS2` | Debug output and CTS2 selection |
| J5 | `nS1`, `nSHUTD`, `nS2` | Shutdown source selection |

J6 and J7 use the reference board's approximately 3.6 mm row spacing. Their
standard 2.54 mm header courtyards overlap, although the physical copper pads
do not.

## PCB and mechanical details

- Board size: 81.21 x 55.88 mm with four copper layers. The original board area
  is extended 22.79 mm to the right for the integrated audio section.
- The two side BoosterPack connectors are bottom-mounted female headers.
- Three mounting positions use 2.6 mm plated holes with 4.0 mm copper annuli.
- U1 has a 5.8 x 4.8 mm antenna keepout applied on top, inner1, inner2, and
  bottom layers.
- U1's custom 3D model is intentionally disabled; its footprint, pads,
  courtyard, silkscreen, and antenna keepout remain present.
- TP1 is a 1.8 mm ground test pad.

## Verification and manufacturing status

The current source type-checks; electrical netlist, schematic placement, and PCB
placement checks pass; the generated board contains 235 PCB traces with zero
routing errors; and the PCB bitmap geometry check reports no shorts. The
key PCM clock net was also resolved by the trace-length analyzer.

The generator still reports 44 legacy child-component overlap notices from the
dense original reconstruction, while the dedicated final PCB placement check
reports zero errors and warnings. That does not waive fabrication review.
Before ordering, confirm every connector's mating side and pin-1 orientation,
verify the four-layer stackup and antenna keepout, and obtain assembly-house DFM
review. A first assembled unit should be current-limited and tested with dummy
loads before connecting headphones or speakers.

The repository should therefore be treated as a validated reconstruction and
debugging design, not as an unconditional production-release package.

## Build and checks

```sh
bun install
bun run typecheck
bunx tsci check netlist
bunx tsci check schematic-placement
bunx tsci check placement
bunx tsci check routing-difficulty
bunx tsci build index.circuit.tsx --pcb-png --schematic-png --autorouter-timeout 8m
bunx tsci check trace-length net.AUD_CLK_3V3 dist/index/circuit.json
bunx tsci check shorts --mode pcb dist/index/circuit.json
bun run snapshot:update
```

Use `bun run dev` for the interactive tscircuit PCB, schematic, and 3D viewer.
