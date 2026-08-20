import "tscircuit";
import { DB128V_5_08_4P_GN_S } from "./imports/DB128V_5_08_4P_GN_S";
import { CC2564MODACMOG } from "./imports/CC2564MODACMOG.circuit";
import { KAN0616_0751B_CL15 } from "./imports/KAN0616_0751B_CL15.circuit";
import { PJ_327C_4A } from "./imports/PJ_327C_4A";
import { SlowClockOscillator } from "./imports/SlowClockOscillator.circuit";
import { TLV71718PDQNR } from "./imports/TLV71718PDQNR.circuit";
import { TLV320AIC3254IRHBR } from "./imports/TLV320AIC3254IRHBR";
import { TPS73533DRBR } from "./imports/TPS73533DRBR.circuit";
import { TPA2012D2RTJR } from "./imports/TPA2012D2RTJR";
import { TXS0102DCUR } from "./imports/TXS0102DCUR.circuit";
import { TXS0104EPWR } from "./imports/TXS0104EPWR.circuit";
import { TXS0108EPWR } from "./imports/TXS0108EPWR.circuit";
import { USBMicroBPower } from "./imports/USBMicroBPower.circuit";

const j1J3PinLabels = {
  pin1: "3V3",
  pin2: "NC",
  pin3: "UART_TX_1",
  pin4: "UART_RX_1",
  pin5: "NC",
  pin6: "UART_TX_2",
  pin7: "UART_RX_2",
  pin8: "NC",
  pin9: "AUD_SCL",
  pin10: "AUD_SDA",
  pin11: "5V",
  pin12: "GND",
  pin13: "NC",
  pin14: "NC",
  pin15: "NC",
  pin16: "NC",
  pin17: "AUD_FSYNC",
  pin18: "AUD_CLK",
  pin19: "AUD_DOUTIN",
  pin20: "AUD_DINOUT",
} as const;

const j2J4PinLabels = {
  pin1: "NC",
  pin2: "NC",
  pin3: "NC",
  pin4: "NC",
  pin5: "NC",
  pin6: "BT_nSHUTD_1",
  pin7: "NC",
  pin8: "NC",
  pin9: "BT_nSHUTD_2",
  pin10: "GND",
  pin11: "NC",
  pin12: "NC",
  pin13: "UART_RTS_2",
  pin14: "BUCT2",
  pin15: "NC",
  pin16: "UART_RTS_1",
  pin17: "UART_CTS_1",
  pin18: "NC",
  pin19: "NC",
  pin20: "NC",
} as const;

const j1J3PcbPinLabels = {
  pin1: "3V3",
  pin2: "",
  pin3: "BUTX1",
  pin4: "BURX1",
  pin5: "",
  pin6: "BUTX2",
  pin7: "BURX2",
  pin8: "",
  pin9: "ASCL",
  pin10: "ASDA",
  pin11: "5V",
  pin12: "GND",
  pin13: "",
  pin14: "",
  pin15: "",
  pin16: "",
  pin17: "BAFS",
  pin18: "BACK",
  pin19: "BADO",
  pin20: "BADI",
} as const;

const j2J4PcbPinLabels = {
  pin1: "",
  pin2: "",
  pin3: "",
  pin4: "",
  pin5: "",
  pin6: "BnSD2",
  pin7: "",
  pin8: "",
  pin9: "BnSD1",
  pin10: "GND",
  pin11: "",
  pin12: "",
  pin13: "BURT2",
  pin14: "BUCT2",
  pin15: "",
  pin16: "BURT1",
  pin17: "BUCT1",
  pin18: "",
  pin19: "",
  pin20: "",
} as const;

/**
 * BOOST-CC2564MODA / WCS007-E1 reconstruction with integrated audio output.
 *
 * The base-board coordinates were measured from the supplied front-board
 * photograph. Connectivity follows TI SWRU444 and visible board routing; the
 * custom codec/amplifier extension follows the manufacturers' reference
 * circuits. Complete fabrication cautions are documented in README.md.
 */
export const BOOST_CC2564MODA = () => (
  <board
    name="BOOST_CC2564MODA"
    width="81.21mm"
    height="55.88mm"
    boardAnchorPosition={{ x: 11.395, y: 0 }}
    outline={[
      { x: -28.41, y: 27.94 },
      { x: 51.2, y: 27.94 },
      { x: 52, y: 27.14 },
      { x: 52, y: -27.14 },
      { x: 51.2, y: -27.94 },
      { x: -28.41, y: -27.94 },
      { x: -29.21, y: -27.14 },
      { x: -29.21, y: 27.14 },
    ]}
    thickness="1.6mm"
    solderMaskColor="green"
    silkscreenColor="white"
    layers={4}
  >
    <schematicsheet
      name="boosterpack_connectors"
      displayName="BoosterPack Connectors"
      sheetIndex={1}
    />
    <schematicsheet
      name="power_input"
      displayName="Power Input and Regulation"
      sheetIndex={2}
    />
    <schematicsheet
      name="rail_distribution"
      displayName="Voltage Rail Distribution"
      sheetIndex={3}
    />
    <schematicsheet
      name="hci_uart"
      displayName="HCI UART Interface"
      sheetIndex={4}
    />
    <schematicsheet
      name="pcm_audio"
      displayName="PCM Audio Interface"
      sheetIndex={5}
    />
    <schematicsheet
      name="audio_output"
      displayName="Codec, Headphone and Speaker Output"
      sheetIndex={6}
    />
    <schematicsheet
      name="shutdown_debug"
      displayName="Shutdown, Status and Debug"
      sheetIndex={7}
    />
    <schematicsheet
      name="module_clock"
      displayName="CC2564MODA and Slow Clock"
      sheetIndex={8}
    />

    <schematicsection name="audio_codec" displayName="Audio Codec" />
    <schematicsection name="headphone_output" displayName="Headphone Output" />
    <schematicsection name="speaker_output" displayName="Speaker Amplifier" />

    {/* The reference board uses plated mounting holes with a copper annulus. */}
    <platedhole
      name="H1"
      shape="circle"
      holeDiameter="2.6mm"
      outerDiameter="4mm"
      pcbX={49}
      pcbY={24.94}
    />
    <platedhole
      name="H2"
      shape="circle"
      holeDiameter="2.6mm"
      outerDiameter="4mm"
      pcbX={-26.21}
      pcbY={-24.94}
    />
    <platedhole
      name="H3"
      shape="circle"
      holeDiameter="2.6mm"
      outerDiameter="4mm"
      pcbX={49}
      pcbY={-24.94}
    />

    <silkscreentext
      text="BOOST-CC2564MODA"
      fontSize="2.35mm"
      pcbX={-11}
      pcbY={-24.5}
    />


    {/* Reference designators are positioned independently so rotated parts stay readable. */}
    {/* The reference rail jumpers have a 2.54 mm vertical pitch, a round
        upper pad, a square lower pin-1 pad, and a rectangular silk outline. */}
    {/* CC2564MODA antenna clearance: 5.8 x 4.8 mm under the antenna
        section, with copper/features excluded on every PCB layer. */}
    <keepout
      shape="rect"
      pcbX={5.75}
      pcbY={-25}
      width="5.8mm"
      height="4.8mm"
      layers={["top", "inner1", "inner2", "bottom"]}
    />

    {/*
     * Each side is one physical 2x10 BoosterPack socket. The logical labels
     * retain TI's J1/J3 and J2/J4 designators plus the global 1-40 numbering.
     */}
    <pinheader
      name="J1_J3"
      displayName="J1/J3"
      schSheetName="boosterpack_connectors"
      pinCount={20}
      pinLabels={j1J3PinLabels}
      pcbPinLabels={j1J3PcbPinLabels}
      doubleRow
      footprint="pinrow20_p2.54mm_rows2_cols10_female_silkscreenlabel(J1/J3)"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      layer="bottom"
      pcbX={-21.75}
      pcbY={-1.27}
      pcbRotation={90}
      schX={-7}
      schY={0}
      schWidth={1.15}
      schFacingDirection="right"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ],
        },
      }}
      schPinStyle={{ pin10: { marginBottom: 0.8 } }}
      connections={{
        pin1: "net.LP_3V3",
        pin3: "net.UART_TX_1",
        pin4: "net.UART_RX_1",
        pin6: "net.UART_TX_2",
        pin7: "net.UART_RX_2",
        pin9: "net.AUDIO_I2C_SCL",
        pin10: "net.AUDIO_I2C_SDA",
        pin11: "net.LP_5V",
        pin12: "net.GND",
        pin17: "net.AUD_FSYNC_HEADER",
        pin18: "net.AUD_CLK_HEADER",
        pin19: "net.AUD_DOUTIN_HEADER",
        pin20: "net.AUD_DINOUT_HEADER",
      }}
    />
    <pinheader
      name="J2_J4"
      displayName="J2/J4"
      schSheetName="boosterpack_connectors"
      pinCount={20}
      pinLabels={j2J4PinLabels}
      pcbPinLabels={j2J4PcbPinLabels}
      doubleRow
      footprint="pinrow20_p2.54mm_rows2_cols10_female_nosquareplating_silkscreenlabel(J2/J4)"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      layer="bottom"
      pcbX={21.95}
      pcbY={-1.27}
      pcbRotation={-90}
      schX={7}
      schY={0}
      schWidth={1.245}
      schFacingDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ],
        },
      }}
      schPinStyle={{ pin10: { marginBottom: 0.8 } }}
      connections={{
        pin6: "net.BT_nSHUTD_1",
        pin9: "net.BT_nSHUTD_2",
        pin10: "net.GND",
        pin13: "net.UART_RTS_2",
        pin14: "net.CTS2_OR_TXDBG",
        pin16: "net.UART_RTS_1",
        pin17: "net.UART_CTS_1",
      }}
    />

    {/* USB input and selectable 3.3 V supply. */}
    <USBMicroBPower
      name="J16"
      schSheetName="power_input"
      pcbX={-22.15}
      pcbY={24.15}
      pcbRotation={180}
      allowOffBoard
      schX={-12}
      schY={4}
      schHeight={1}
      connections={{
        VBUS: "net.USB_5V",
        D_N: "net.USB_D_N",
        D_P: "net.USB_D_P",
        GND: "net.GND",
        SH1: "net.GND",
        SH2: "net.GND",
        SH3: "net.GND",
        SH4: "net.GND",
      }}
      noConnect={["ID"]}
    />
    <inductor
      name="L2"
      schSheetName="power_input"
      inductance="0H"
      footprint="res0603"
      pcbX={-25.55}
      pcbY={20}
      schX={-10}
      schY={8.5}
      connections={{ pin1: "net.USB_D_N", pin2: "net.USB_D_N_FILTERED" }}
    />
    <inductor
      name="L1"
      schSheetName="power_input"
      inductance="0H"
      footprint="res0603"
      pcbX={-20.55}
      pcbY={20}
      schX={-4}
      schY={8.5}
      connections={{ pin1: "net.USB_D_P", pin2: "net.USB_D_P_FILTERED" }}
    />
    <diode
      name="D3"
      schSheetName="power_input"
      schottky
      footprint="sod123"
      pcbX={-15.25}
      pcbY={19.8}
      pcbRotation={270}
      schX={-7}
      schY={2.5}
      connections={{ pin1: "net.USB_5V", pin2: "net.LDO_INPUT" }}
    />
    <diode
      name="D4"
      schSheetName="power_input"
      schottky
      footprint="sod123"
      pcbX={-15.15}
      pcbY={12.55}
      pcbRotation={90}
      schX={-7}
      schY={0.5}
      connections={{ pin1: "net.LP_5V", pin2: "net.LDO_INPUT" }}
    />
    <TPS73533DRBR
      name="U6"
      schSheetName="power_input"
      pcbX={-20.35}
      pcbY={17.2}
      pcbRotation={90}
      schX={-2.5}
      schY={1.5}
      connections={{
        IN: "net.LDO_INPUT",
        OUT: "net.LDO_3V3",
        NR: "net.LDO_NR",
        GND: "net.GND",
        EP: "net.GND",
      }}
      noConnect={["NC2", "NC6", "NC7"]}
    />
    <trace
      name="U6_IN_TO_EN"
      from=".U6 > .IN"
      to=".U6 > .EN"
      pcbPathRelativeTo=".U6 > .IN"
      pcbPath={[
        { x: -0.97536, y: 2.1 },
        { x: 0.97536, y: 2.1 },
      ]}
    />
    <capacitor
      name="C13"
      schSheetName="power_input"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={-25.7}
      pcbY={17}
      pcbRotation={90}
      schX={-5.7}
      schY={-0.5}
      schOrientation="vertical"
      connections={{ pin1: "net.LDO_INPUT", pin2: "net.GND" }}
    />
    <capacitor
      name="C12"
      schSheetName="power_input"
      capacitance="10uF"
      footprint="cap0603"
      pcbX={-23.25}
      pcbY={14.6}
      pcbRotation={90}
      schX={-1.8}
      schY={-2}
      schOrientation="vertical"
      connections={{ pin1: "net.LDO_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C11"
      schSheetName="power_input"
      capacitance="10nF"
      footprint="cap0402"
      pcbX={-17.45}
      pcbY={18.2}
      pcbRotation={90}
      schX={0}
      schY={-2}
      schOrientation="vertical"
      connections={{ pin1: "net.LDO_NR", pin2: "net.GND" }}
    />
    <pinheader
      name="J10"
      schSheetName="power_input"
      pinCount={3}
      pinLabels={{
        pin1: "LP_3V3",
        pin2: "BOARD_3V3",
        pin3: "LDO_3V3",
      }}
      pcbPinLabels={{
        pin1: "LP_3V3",
        pin2: "BP_3V3",
        pin3: "LDO_3V3",
      }}
      footprint="pinrow3_p2.54mm_female_pinlabelorthogonal_pinlabelverticallyinverted_pinlabeltextalignright"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      pcbX={-9.1}
      pcbY={14}
      pcbRotation={180}
      schX={3.5}
      schY={2}
      connections={{
        pin1: "net.LP_3V3",
        pin2: "net.BOARD_3V3",
        pin3: "net.LDO_3V3",
      }}
    />
    <TLV71718PDQNR
      name="U5"
      schSheetName="power_input"
      pcbX={-7.45}
      pcbY={17.15}
      pcbRotation={180}
      schX={8}
      schY={1.5}
      connections={{
        IN: "net.LIN_3V3",
        EN: "net.LIN_3V3",
        OUT: "net.V1_8",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />
    <capacitor
      name="C14"
      schSheetName="power_input"
      capacitance="1uF"
      footprint="cap0402"
      pcbX={-10.25}
      pcbY={16.65}
      schX={5.5}
      schY={-0.5}
      schOrientation="vertical"
      connections={{ pin1: "net.LIN_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C15"
      schSheetName="power_input"
      capacitance="1uF"
      footprint="cap0402"
      pcbX={-4.65}
      pcbY={16.75}
      pcbRotation={90}
      schX={10}
      schY={-0.5}
      schOrientation="vertical"
      connections={{ pin1: "net.V1_8", pin2: "net.GND" }}
    />

    {/* Six top-edge rail breakouts. Each resistor is the default 0-ohm link. */}
    <pinheader
      name="J9"
      schSheetName="rail_distribution"
      pinCount={2}
      pinLabels={{ pin1: "BOARD_3V3", pin2: "LIN_3V3" }}
      pcbPinLabels={{ pin1: "", pin2: "LIN3V3" }}
      footprint="pinrow2_rows2_cols1_p2.54mm_pin1location(rightside,bottom)"
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels
      pcbX={-7.25}
      pcbY={22.7}
      pcbRotation={0}
      schX={-13}
      schY={2}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.LIN_3V3" }}
    />
    <resistor
      name="R9"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-9.65}
      pcbY={22.7}
      pcbRotation={90}
      schX={-13}
      schY={0}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.LIN_3V3" }}
    />
    <pinheader
      name="J15"
      schSheetName="rail_distribution"
      pinCount={2}
      pinLabels={{ pin1: "BOARD_3V3", pin2: "VT_3V3" }}
      pcbPinLabels={{ pin1: "", pin2: "VT3V3" }}
      footprint="pinrow2_rows2_cols1_p2.54mm_pin1location(rightside,bottom)"
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels
      pcbX={-2.25}
      pcbY={22.7}
      pcbRotation={0}
      schX={-8}
      schY={2}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.VT_3V3" }}
    />
    <resistor
      name="R15"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-4.65}
      pcbY={22.7}
      pcbRotation={90}
      schX={-8}
      schY={0}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.VT_3V3" }}
    />
    <pinheader
      name="J11"
      schSheetName="rail_distribution"
      pinCount={2}
      pinLabels={{ pin1: "BOARD_3V3", pin2: "CC_3V3" }}
      pcbPinLabels={{ pin1: "", pin2: "CC3V3" }}
      footprint="pinrow2_rows2_cols1_p2.54mm_pin1location(rightside,bottom)"
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels
      pcbX={2.75}
      pcbY={22.7}
      pcbRotation={0}
      schX={-3}
      schY={2}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.CC_3V3" }}
    />
    <resistor
      name="R11"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={0.35}
      pcbY={22.7}
      pcbRotation={90}
      schX={-3}
      schY={0}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.CC_3V3" }}
    />
    <pinheader
      name="J14"
      schSheetName="rail_distribution"
      pinCount={2}
      pinLabels={{ pin1: "V1_8", pin2: "VT_1V8" }}
      pcbPinLabels={{ pin1: "", pin2: "VT1V8" }}
      footprint="pinrow2_rows2_cols1_p2.54mm_pin1location(rightside,bottom)"
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels
      pcbX={8.35}
      pcbY={22.7}
      pcbRotation={0}
      schX={3}
      schY={2}
      connections={{ pin1: "net.V1_8", pin2: "net.VT_1V8" }}
    />
    <resistor
      name="R14"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={5.95}
      pcbY={22.7}
      pcbRotation={90}
      schX={3}
      schY={0}
      connections={{ pin1: "net.V1_8", pin2: "net.VT_1V8" }}
    />
    <pinheader
      name="J13"
      schSheetName="rail_distribution"
      pinCount={2}
      pinLabels={{ pin1: "V1_8", pin2: "CK_1V8" }}
      pcbPinLabels={{ pin1: "", pin2: "CK1V8" }}
      footprint="pinrow2_rows2_cols1_p2.54mm_pin1location(rightside,bottom)"
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels
      pcbX={13.35}
      pcbY={22.7}
      pcbRotation={0}
      schX={8}
      schY={2}
      connections={{ pin1: "net.V1_8", pin2: "net.CK_1V8" }}
    />
    <resistor
      name="R13"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={10.95}
      pcbY={22.7}
      pcbRotation={90}
      schX={8}
      schY={0}
      connections={{ pin1: "net.V1_8", pin2: "net.CK_1V8" }}
    />
    <pinheader
      name="J12"
      schSheetName="rail_distribution"
      pinCount={2}
      pinLabels={{ pin1: "V1_8", pin2: "CC_1V8" }}
      pcbPinLabels={{ pin1: "", pin2: "CC1V8" }}
      footprint="pinrow2_rows2_cols1_p2.54mm_pin1location(rightside,bottom)"
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels
      pcbX={18.35}
      pcbY={22.7}
      pcbRotation={0}
      schX={13}
      schY={2}
      connections={{ pin1: "net.V1_8", pin2: "net.CC_1V8" }}
    />
    <resistor
      name="R12"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={15.95}
      pcbY={22.7}
      pcbRotation={90}
      schX={13}
      schY={0}
      connections={{ pin1: "net.V1_8", pin2: "net.CC_1V8" }}
    />

    {/* Power and status indicators plus reset/enable pushbutton. */}
    <resistor
      name="R24"
      schSheetName="power_input"
      resistance="1kohm"
      footprint="res0603"
      pcbX={-12}
      pcbY={25.1}
      schX={0.85}
      schY={-3.5}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.PWR_LED_A" }}
    />
    <led
      name="D1"
      schSheetName="power_input"
      color="red"
      footprint="led0603"
      pcbX={-12}
      pcbY={21.75}
      pcbRotation={270}
      schX={3.5}
      schY={-3.5}
      connections={{ pin1: "net.PWR_LED_A", pin2: "net.GND" }}
    />
    <KAN0616_0751B_CL15
      name="SW1"
      schSheetName="shutdown_debug"
      pcbX={24.75}
      pcbY={20}
      pcbRotation={90}
      schX={4}
      schY={5.5}
      connections={{ A1: "net.BOARD_3V3", B1: "net.NSHUTD_SWITCH" }}
    />
    <resistor
      name="R5"
      schSheetName="shutdown_debug"
      resistance="10kohm"
      footprint="res0402"
      pcbX={22.95}
      pcbY={25.75}
      schX={1}
      schY={2}
      schRotation={180}
      connections={{ pin1: "net.NSHUTD_SWITCH", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      schSheetName="shutdown_debug"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={26.35}
      pcbY={25.65}
      schX={7}
      schY={7}
      schOrientation="vertical"
      connections={{ pin1: "net.NSHUTD_SWITCH", pin2: "net.GND" }}
    />
    <resistor
      name="R6"
      schSheetName="shutdown_debug"
      resistance="0ohm"
      footprint="res0402"
      pcbX={18.2}
      pcbY={15.9}
      schX={4}
      schY={3}
      connections={{ pin1: "net.NSHUTD_SWITCH", pin2: "net.NSHUTD_3V3" }}
    />
    <resistor
      name="R26"
      schSheetName="shutdown_debug"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-1.65}
      pcbY={11.85}
      schX={-7.4}
      schY={1.2}
      connections={{ pin1: "net.NSHUTD_3V3", pin2: "net.STATUS_ENABLE" }}
    />
    <resistor
      name="R25"
      schSheetName="shutdown_debug"
      resistance="1kohm"
      footprint="res0603"
      pcbX={-3.2}
      pcbY={13.65}
      schX={-2.865}
      schY={2}
      connections={{ pin1: "net.STATUS_ENABLE", pin2: "net.STATUS_LED_A" }}
    />
    <led
      name="D2"
      schSheetName="shutdown_debug"
      color="green"
      footprint="led0603"
      pcbX={0.65}
      pcbY={13.65}
      schX={-2}
      schY={2}
      connections={{ pin1: "net.STATUS_LED_A", pin2: "net.GND" }}
    />

    {/* U3: HCI UART translator and its selectable BoosterPack routes. */}
    <TXS0108EPWR
      name="U3"
      schSheetName="hci_uart"
      pcbX={-2.35}
      pcbY={5.35}
      pcbRotation={0}
      schX={0}
      schY={0}
      connections={{
        VCCA: "net.VT_1V8",
        VCCB: "net.VT_3V3",
        GND: "net.GND",
        OE: "net.U3_OE",
        A1: "net.HCI_TX_1V8",
        A2: "net.HCI_RX_1V8",
        A3: "net.HCI_CTS_1V8",
        A4: "net.HCI_RTS_1V8",
        B1: "net.UART_TX_3V3",
        B2: "net.UART_RX_3V3",
        B3: "net.UART_CTS_3V3",
        B4: "net.UART_RTS_3V3",
      }}
      noConnect={["A5", "A6", "A7", "A8", "B5", "B6", "B7", "B8"]}
    />
    <resistor
      name="R4"
      schSheetName="hci_uart"
      resistance="10kohm"
      footprint="res0402"
      pcbX={-4.45}
      pcbY={9.05}
      schX={-3}
      schY={2.5}
      connections={{ pin1: "net.VT_1V8", pin2: "net.U3_OE" }}
    />
    <capacitor
      name="C8"
      schSheetName="hci_uart"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={-7.8}
      pcbY={4.15}
      schX={-3}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      schSheetName="hci_uart"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={-0.55}
      pcbY={1.05}
      schX={1}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_1V8", pin2: "net.GND" }}
    />
    <resistor
      name="R16"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-13.55}
      pcbY={5.05}
      schX={-7}
      schY={3}
      connections={{ pin1: "net.UART_TX_3V3", pin2: "net.UART_TX_1" }}
    />
    <resistor
      name="R20"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-13.55}
      pcbY={3.45}
      schX={-7}
      schY={2}
      connections={{ pin1: "net.UART_TX_3V3", pin2: "net.UART_TX_2" }}
    />
    <resistor
      name="R17"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-13.55}
      pcbY={1.15}
      schX={-7}
      schY={0}
      connections={{ pin1: "net.UART_RX_3V3", pin2: "net.UART_RX_1" }}
    />
    <resistor
      name="R21"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-13.55}
      pcbY={-0.45}
      schX={-7}
      schY={-1}
      connections={{ pin1: "net.UART_RX_3V3", pin2: "net.UART_RX_2" }}
    />
    <resistor
      name="R18"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={11.3}
      pcbY={3.85}
      schX={7}
      schY={3}
      connections={{ pin1: "net.UART_CTS_3V3", pin2: "net.UART_CTS_1" }}
    />
    <resistor
      name="R22"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={11.3}
      pcbY={5.45}
      schX={7}
      schY={2}
      connections={{ pin1: "net.UART_CTS_3V3", pin2: "net.UART_CTS_2" }}
    />
    <resistor
      name="R19"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={11.3}
      pcbY={1.25}
      schX={7}
      schY={0}
      connections={{ pin1: "net.UART_RTS_3V3", pin2: "net.UART_RTS_1" }}
    />
    <resistor
      name="R23"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={11.3}
      pcbY={-0.35}
      schX={7}
      schY={-1}
      connections={{ pin1: "net.UART_RTS_3V3", pin2: "net.UART_RTS_2" }}
    />

    {/* U2: PCM/audio translator and J6/J7 data-direction selectors. */}
    <TXS0104EPWR
      name="U2"
      schSheetName="pcm_audio"
      pcbX={-4.25}
      pcbY={-4.15}
      pcbRotation={0}
      schX={-2.5}
      schY={0}
      connections={{
        VCCA: "net.VT_1V8",
        VCCB: "net.VT_3V3",
        GND: "net.GND",
        OE: "net.U2_OE",
        A1: "net.AUD_FSYNC_1V8",
        A2: "net.AUD_CLK_1V8",
        A3: "net.AUD_IN_1V8",
        A4: "net.AUD_OUT_1V8",
        B1: "net.AUD_FSYNC_3V3",
        B2: "net.AUD_CLK_3V3",
        B3: "net.PCM_DIN_3V3",
        B4: "net.PCM_DOUT_3V3",
      }}
      noConnect={["NC6", "NC9"]}
    />
    <resistor
      name="R3"
      schSheetName="pcm_audio"
      resistance="10kohm"
      footprint="res0402"
      pcbX={-8.45}
      pcbY={0.55}
      pcbRotation={90}
      schX={-6}
      schY={2.5}
      connections={{ pin1: "net.VT_1V8", pin2: "net.U2_OE" }}
    />
    <capacitor
      name="C6"
      schSheetName="pcm_audio"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={0.2}
      pcbY={-7.4}
      pcbRotation={90}
      schX={-3.5}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_1V8", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      schSheetName="pcm_audio"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={-6.1}
      pcbY={-7.9}
      pcbRotation={90}
      schX={-0.5}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_3V3", pin2: "net.GND" }}
    />
    <resistor
      name="R8"
      schSheetName="pcm_audio"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-13.55}
      pcbY={-3.5}
      schX={2.5}
      schY={3}
      connections={{ pin1: "net.AUD_FSYNC_3V3", pin2: "net.AUD_FSYNC_HEADER" }}
    />
    <resistor
      name="R7"
      schSheetName="pcm_audio"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-13.55}
      pcbY={-5.1}
      schX={2.5}
      schY={2}
      connections={{ pin1: "net.AUD_CLK_3V3", pin2: "net.AUD_CLK_HEADER" }}
    />
    <pinheader
      name="J7"
      schSheetName="pcm_audio"
      pinCount={3}
      pinLabels={{
        pin1: "PCM_DOUT_3V3",
        pin2: "AUD_DOUTIN",
        pin3: "PCM_DIN_3V3",
      }}
      pcbPinLabels={{ pin1: "BMDO", pin2: "CPDO", pin3: "BADI" }}
      footprint="pinrow3_p2.54mm_female_pinlabelorthogonal_pinlabelverticallyinverted_pinlabeltextalignright"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      pcbX={-11}
      pcbY={-8.2}
      pcbRotation={0}
      schX={4.5}
      schY={0}
      connections={{
        pin1: "net.PCM_DOUT_3V3",
        pin2: "net.AUD_DOUTIN_HEADER",
        pin3: "net.PCM_DIN_3V3",
      }}
    />
    <pinheader
      name="J6"
      schSheetName="pcm_audio"
      pinCount={3}
      pinLabels={{
        pin1: "PCM_DIN_3V3",
        pin2: "AUD_DINOUT",
        pin3: "PCM_DOUT_3V3",
      }}
      pcbPinLabels={{ pin1: "BADO", pin2: "CPDI", pin3: "BMDI" }}
      footprint="pinrow3_p2.54mm_female_pinlabelorthogonal_pinlabeltextalignright"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      pcbX={-11}
      pcbRotation={180}
      pcbY={-14}
      schX={4.5}
      schY={-2}
      connections={{
        pin1: "net.PCM_DIN_3V3",
        pin2: "net.AUD_DINOUT_HEADER",
        pin3: "net.PCM_DOUT_3V3",
      }}
    />

    {/* Integrated audio output: U7 converts the module PCM/I2S stream to
        analog audio. J17 is a stereo headphone/line output, while U8 drives
        two 4-ohm or 8-ohm passive speakers through J18. */}
    <TLV320AIC3254IRHBR
      name="U7"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      pcbX={35}
      pcbY={4.5}
      schX={-5.5}
      schY={0}
      connections={{
        MCLK: "net.AUD_CLK_3V3",
        BCLK: "net.AUD_CLK_3V3",
        WCLK: "net.AUD_FSYNC_3V3",
        DIN: "net.PCM_DOUT_3V3",
        DOUT: "net.PCM_DIN_3V3",
        IOVDD: "net.BOARD_3V3",
        IOVSS: "net.GND",
        SCL: "net.AUDIO_I2C_SCL",
        SDA: "net.AUDIO_I2C_SDA",
        SPI_SELECT: "net.GND",
        AVSS: "net.GND",
        REF: "net.CODEC_REF_FILTER",
        LOL: "net.CODEC_LOL",
        LOR: "net.CODEC_LOR",
        AVDD: "net.CODEC_AVDD_FILTER",
        HPL: "net.CODEC_HPL",
        LDOIN: "net.BOARD_3V3",
        HPR: "net.CODEC_HPR",
        DVSS: "net.GND",
        DVDD: "net.CODEC_DVDD_FILTER",
        LDO_SELECT: "net.BOARD_3V3",
        RESET: "net.CODEC_RESET",
        EP: "net.GND",
      }}
      noConnect={[
        "SCLK",
        "MISO",
        "IN1_L",
        "IN1_R",
        "IN2_L",
        "IN2_R",
        "MICBIAS",
        "IN3_L",
        "IN3_R",
        "GPIO",
      ]}
    />
    <capacitor
      name="C16"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={28}
      pcbY={2.5}
      schX={-11.5}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C17"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={27.5}
      pcbY={5}
      schX={-9.8}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C18"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={29}
      pcbY={9.5}
      schX={-8.1}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C19"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={32}
      pcbY={9.5}
      schX={-6.4}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C20"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="10uF"
      footprint="cap0805"
      pcbX={27}
      pcbY={7.5}
      schX={-4.7}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.CODEC_DVDD_FILTER", pin2: "net.GND" }}
    />
    <capacitor
      name="C21"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="10uF"
      footprint="cap0805"
      pcbX={40.5}
      pcbY={8.3}
      schX={-3}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.CODEC_AVDD_FILTER", pin2: "net.GND" }}
    />
    <capacitor
      name="C22"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="10uF"
      footprint="cap0805"
      pcbX={39.7}
      pcbY={4.5}
      schX={-1.3}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.CODEC_REF_FILTER", pin2: "net.GND" }}
    />
    <resistor
      name="R27"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      resistance="10kohm"
      footprint="res0402"
      pcbX={34.3}
      pcbY={11}
      schX={-11.5}
      schY={-5}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.CODEC_RESET" }}
    />
    <capacitor
      name="C23"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={36.5}
      pcbY={0.2}
      schX={-8.5}
      schY={-5}
      schOrientation="vertical"
      connections={{ pin1: "net.CODEC_RESET", pin2: "net.GND" }}
    />
    <resistor
      name="R28"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      resistance="3.3kohm"
      footprint="res0402"
      pcbX={27.5}
      pcbY={0.5}
      schX={-5.5}
      schY={-5}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.AUDIO_I2C_SCL" }}
    />
    <resistor
      name="R29"
      schSheetName="audio_output"
      schSectionName="audio_codec"
      resistance="3.3kohm"
      footprint="res0402"
      pcbX={27.5}
      pcbY={-1}
      schX={-1}
      schY={-5}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.AUDIO_I2C_SDA" }}
    />

    <capacitor
      name="C24"
      schSheetName="audio_output"
      schSectionName="headphone_output"
      capacitance="47uF"
      footprint="cap1206"
      pcbX={38}
      pcbY={10.5}
      schX={-0.58}
      schY={1.5}
      schOrientation="vertical"
      connections={{ pin1: "net.CODEC_HPL", pin2: "net.HEADPHONE_LEFT" }}
    />
    <capacitor
      name="C25"
      schSheetName="audio_output"
      schSectionName="headphone_output"
      capacitance="47uF"
      footprint="cap1206"
      pcbX={43}
      pcbY={10.5}
      schX={-0.87}
      schY={-1.5}
      schOrientation="vertical"
      connections={{ pin1: "net.CODEC_HPR", pin2: "net.HEADPHONE_RIGHT" }}
    />
    <PJ_327C_4A
      name="J17"
      schSheetName="audio_output"
      schSectionName="headphone_output"
      pcbX={45}
      pcbY={17}
      pcbRotation={270}
      allowOffBoard
      schX={1.66}
      schY={0}
      connections={{
        SLEEVE: "net.GND",
        TIP: "net.HEADPHONE_LEFT",
        RING: "net.HEADPHONE_RIGHT",
      }}
      noConnect={["TIP_SWITCH"]}
    />

    <resistor
      name="R30"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      resistance="1kohm"
      footprint="res0402"
      pcbX={34}
      pcbY={-0.2}
      schX={3.5}
      schY={4}
      connections={{ pin1: "net.CODEC_LOL", pin2: "net.AMP_LEFT_FILTERED" }}
    />
    <resistor
      name="R31"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      resistance="1kohm"
      footprint="res0402"
      pcbX={38.5}
      pcbY={-0.2}
      schX={3.5}
      schY={-4}
      connections={{ pin1: "net.CODEC_LOR", pin2: "net.AMP_RIGHT_FILTERED" }}
    />
    <capacitor
      name="C26"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={34}
      pcbY={-1.5}
      schX={5.5}
      schY={4}
      schOrientation="vertical"
      connections={{ pin1: "net.AMP_LEFT_FILTERED", pin2: "net.AMP_LEFT_POS" }}
    />
    <capacitor
      name="C27"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={38}
      pcbY={-1.5}
      schX={5.5}
      schY={-4}
      schOrientation="vertical"
      connections={{ pin1: "net.AMP_RIGHT_FILTERED", pin2: "net.AMP_RIGHT_POS" }}
    />
    <capacitor
      name="C28"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={34}
      pcbY={-9}
      schX={7.5}
      schY={4}
      schOrientation="vertical"
      connections={{ pin1: "net.AMP_LEFT_NEG", pin2: "net.GND" }}
    />
    <capacitor
      name="C29"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={38}
      pcbY={-9}
      schX={7.5}
      schY={-4}
      schOrientation="vertical"
      connections={{ pin1: "net.AMP_RIGHT_NEG", pin2: "net.GND" }}
    />
    <resistor
      name="R32"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      resistance="0ohm"
      footprint="res1206"
      pcbX={33}
      pcbY={-11.5}
      schX={7}
      schY={5.8}
      connections={{ pin1: "net.LDO_INPUT", pin2: "net.AMP_5V" }}
    />
    <capacitor
      name="C30"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={36.3}
      pcbY={-11}
      schX={9}
      schY={5.8}
      schOrientation="vertical"
      connections={{ pin1: "net.AMP_5V", pin2: "net.GND" }}
    />
    <capacitor
      name="C31"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      capacitance="10uF"
      footprint="cap0805"
      pcbX={39}
      pcbY={-11.5}
      schX={11}
      schY={5.8}
      schOrientation="vertical"
      connections={{ pin1: "net.AMP_5V", pin2: "net.GND" }}
    />
    <TPA2012D2RTJR
      name="U8"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      pcbX={36}
      pcbY={-5}
      schX={8.24}
      schY={0}
      connections={{
        G1: "net.GND",
        PVDD1: "net.AMP_5V",
        PGND1: "net.GND",
        SDL: "net.BOARD_3V3",
        SDR: "net.BOARD_3V3",
        AVDD: "net.AMP_5V",
        PVDD2: "net.AMP_5V",
        PGND2: "net.GND",
        G0: "net.GND",
        INR_POS: "net.AMP_RIGHT_POS",
        INR_NEG: "net.AMP_RIGHT_NEG",
        AGND: "net.GND",
        INL_NEG: "net.AMP_LEFT_NEG",
        INL_POS: "net.AMP_LEFT_POS",
        EP: "net.GND",
      }}
      noConnect={["NC1", "NC2"]}
    />
    <DB128V_5_08_4P_GN_S
      name="J18"
      schSheetName="audio_output"
      schSectionName="speaker_output"
      pcbX={46}
      pcbY={-10}
      pcbRotation={90}
      schX={13.2}
      schY={0}
    />
    <trace
      from=".U8 > .OUTL_POS"
      to=".J18 > .SPK_L_POS"
      thickness="0.6mm"
    />
    <trace
      from=".U8 > .OUTL_NEG"
      to=".J18 > .SPK_L_NEG"
      thickness="0.6mm"
    />
    <trace
      from=".U8 > .OUTR_POS"
      to=".J18 > .SPK_R_POS"
      thickness="0.6mm"
    />
    <trace
      from=".U8 > .OUTR_NEG"
      to=".J18 > .SPK_R_NEG"
      thickness="0.6mm"
    />
    <silkscreentext
      text="AUDIO"
      fontSize="1.6mm"
      pcbX={43}
      pcbY={25.5}
    />
    <silkscreentext
      text="HEADPHONE"
      fontSize="1mm"
      pcbX={44}
      pcbY={11.8}
    />
    <silkscreentext
      text="L+ L- R+ R-"
      fontSize="0.9mm"
      pcbX={50.5}
      pcbY={-10}
      pcbRotation={90}
    />

    {/* U4: nSHUTD / TX_DBG translator and selectors. */}
    <TXS0102DCUR
      name="U4"
      schSheetName="shutdown_debug"
      pcbX={8.2}
      pcbY={-5.5}
      pcbRotation={0}
      schX={1.5}
      schY={-3.5}
      schHeight={1.2}
      schPinStyle={{
        B2: { marginTop: 0.2 },
        B1: { marginTop: 0.2 },
      }}
      connections={{
        GND: "net.GND",
        VCCA: "net.VT_1V8",
        VCCB: "net.VT_3V3",
        OE: "net.U4_OE",
        A1: "net.NSHUTD_1V8",
        A2: "net.TX_DBG_1V8",
        B1: "net.NSHUTD_3V3",
        B2: "net.TX_DBG_3V3",
      }}
    />
    <resistor
      name="R10"
      schSheetName="shutdown_debug"
      resistance="10kohm"
      footprint="res0402"
      pcbX={-10.55}
      pcbY={2.75}
      pcbRotation={90}
      schX={-2}
      schY={-1}
      connections={{ pin1: "net.VT_1V8", pin2: "net.U4_OE" }}
    />
    <capacitor
      name="C7"
      schSheetName="shutdown_debug"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={3.75}
      pcbY={-3.05}
      schX={-1}
      schY={-7}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      schSheetName="shutdown_debug"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={4.65}
      pcbY={-7.35}
      schX={2}
      schY={-7}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_1V8", pin2: "net.GND" }}
    />
    <pinheader
      name="J8"
      schSheetName="shutdown_debug"
      pinCount={3}
      pinLabels={{
        pin1: "TX_DBG",
        pin2: "CTS2_OR_TXDBG",
        pin3: "UART_CTS_2",
      }}
      pcbPinLabels={{ pin1: "TX_DBG", pin2: "BURTS", pin3: "U_CTS2" }}
      footprint="pinrow3_p2.54mm_female"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      pcbX={8.65}
      pcbY={8.6}
      schX={-6.26}
      schY={2.5}
      connections={{
        pin1: "net.TX_DBG_3V3",
        pin2: "net.CTS2_OR_TXDBG",
        pin3: "net.UART_CTS_2",
      }}
    />
    <pinheader
      name="J5"
      schSheetName="shutdown_debug"
      pinCount={3}
      pinLabels={{
        pin1: "BT_nSHUTD_1",
        pin2: "NSHUTD_3V3",
        pin3: "BT_nSHUTD_2",
      }}
      pcbPinLabels={{ pin1: "nS1", pin2: "nSHUTD", pin3: "nS2" }}
      footprint="pinrow3_p2.54mm_female"
      pitch="2.54mm"
      gender="female"
      showSilkscreenPinLabels
      pcbX={12.5}
      pcbY={-5.5}
      pcbRotation={270}
      schX={5}
      schY={-0.5}
      connections={{
        pin1: "net.BT_nSHUTD_1",
        pin2: "net.NSHUTD_3V3",
        pin3: "net.BT_nSHUTD_2",
      }}
    />

    {/* U1 Bluetooth module and its 32.768 kHz slow-clock source. */}
    <SlowClockOscillator
      name="Y1"
      schSheetName="module_clock"
      pcbX={-3.5}
      pcbY={-16.8}
      pcbRotation={0}
      schX={-2}
      schY={2}
      connections={{
        OE: "net.OSC_OE",
        GND: "net.GND",
        OUT: "net.OSC_OUT",
        VCC: "net.CK_1V8",
      }}
    />
    <resistor
      name="R2"
      schSheetName="module_clock"
      resistance="10kohm"
      footprint="res0402"
      pcbX={-6.35}
      pcbY={-17.8}
      pcbRotation={90}
      schX={-5}
      schY={0.5}
      connections={{ pin1: "net.CK_1V8", pin2: "net.OSC_OE" }}
    />
    <resistor
      name="R1"
      schSheetName="module_clock"
      resistance="0ohm"
      footprint="res0402"
      pcbX={0}
      pcbY={-17.3}
      schX={1}
      schY={2}
      connections={{ pin1: "net.OSC_OUT", pin2: "net.SLOW_CLK_1V8" }}
    />
    <capacitor
      name="C3"
      schSheetName="module_clock"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={-1.85}
      pcbY={-14.3}
      schX={-2}
      schY={-1}
      schOrientation="vertical"
      connections={{ pin1: "net.CK_1V8", pin2: "net.GND" }}
    />
    <CC2564MODACMOG
      name="U1"
      schSheetName="module_clock"
      pcbX={5.75}
      pcbY={-20.6}
      pcbRotation={-90}
      schX={8}
      schY={1}
      schHeight={3.6}
      connections={{
        HCI_CTS: "net.HCI_CTS_1V8",
        HCI_TX: "net.HCI_TX_1V8",
        HCI_RX: "net.HCI_RX_1V8",
        HCI_RTS: "net.HCI_RTS_1V8",
        GND1: "net.GND",
        GND2: "net.GND",
        SLOW_CLK_IN: "net.SLOW_CLK_1V8",
        GND3: "net.GND",
        VDD_IN: "net.CC_3V3",
        GND4: "net.GND",
        GND5: "net.GND",
        nSHUTD: "net.NSHUTD_1V8",
        GND6: "net.GND",
        VDD_IO: "net.CC_1V8",
        AUD_IN: "net.AUD_IN_1V8",
        AUD_OUT: "net.AUD_OUT_1V8",
        AUD_CLK: "net.AUD_CLK_1V8",
        AUD_FSYNC: "net.AUD_FSYNC_1V8",
        TX_DBG: "net.TX_DBG_1V8",
        GNDPAD1: "net.GND",
        GNDPAD2: "net.GND",
        GNDPAD3: "net.GND",
        GNDPAD4: "net.GND",
        GNDPAD5: "net.GND",
        GNDPAD6: "net.GND",
        GNDPAD7: "net.GND",
        GNDPAD8: "net.GND",
        GNDPAD9: "net.GND",
        GNDPAD10: "net.GND",
        GNDPAD11: "net.GND",
      }}
      noConnect={["NC1", "NC2", "NC3", "NC4", "BT_ANTNC"]}
    />
    <capacitor
      name="C1"
      schSheetName="module_clock"
      capacitance="10uF"
      footprint="cap0603"
      pcbX={-1.55}
      pcbY={-20.1}
      schX={4}
      schY={-3}
      schOrientation="vertical"
      connections={{ pin1: "net.CC_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      schSheetName="module_clock"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={12.55}
      pcbY={-21.2}
      schX={8}
      schY={-3}
      schOrientation="vertical"
      connections={{ pin1: "net.CC_1V8", pin2: "net.GND" }}
    />
    <testpoint
      name="TP1"
      schSheetName="module_clock"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.8mm"
      pcbX={-17}
      pcbY={-18.15}
      schX={-10}
      schY={-1}
      connections={{ pin1: "net.GND" }}
    />

  </board>
);

export default BOOST_CC2564MODA;
