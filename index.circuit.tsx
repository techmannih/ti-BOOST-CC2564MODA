import "tscircuit";
import { CC2564MODACMOG } from "./imports/CC2564MODACMOG.circuit";
import { SKRPACE010 } from "./imports/SKRPACE010.circuit";
import { SlowClockOscillator } from "./imports/SlowClockOscillator.circuit";
import { TLV71718PDQNR } from "./imports/TLV71718PDQNR.circuit";
import { TPS73533DRBR } from "./imports/TPS73533DRBR.circuit";
import { TXS0102DCUR } from "./imports/TXS0102DCUR.circuit";
import { TXS0104EPWR } from "./imports/TXS0104EPWR.circuit";
import { TXS0108EPWR } from "./imports/TXS0108EPWR.circuit";
import { USBMicroBPower } from "./imports/USBMicroBPower.circuit";

/**
 * BOOST-CC2564MODA / WCS007-E1 placement-faithful reconstruction.
 *
 * PCB coordinates were measured proportionally from the supplied front-board
 * photograph. Connectivity follows TI SWRU444 plus the visible board routing.
 * Values explicitly called out as provisional in README.md must be checked
 * against production CAD/BOM before fabrication.
 */
export const BOOST_CC2564MODA = () => (
  <board name="BOOST_CC2564MODA" width="58.5mm" height="56mm" layers={4}>
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
      name="shutdown_debug"
      displayName="Shutdown, Status and Debug"
      sheetIndex={6}
    />
    <schematicsheet
      name="module_clock"
      displayName="CC2564MODA and Slow Clock"
      sheetIndex={7}
    />

    {/* Three visible mounting holes. J16 occupies the upper-left corner. */}
    <hole name="H1" diameter="2.6mm" pcbX={27} pcbY={14.8} />
    <hole name="H2" diameter="2.6mm" pcbX={-27} pcbY={-18.3} />
    <hole name="H3" diameter="2.6mm" pcbX={27} pcbY={-18.3} />

    <silkscreentext
      text="BOOST-CC2564MODA"
      fontSize="1.25mm"
      pcbX={-16.2}
      pcbY={-24.3}
    />
    <silkscreentext
      text="WCS007-E1"
      fontSize="1.15mm"
      pcbX={-20.1}
      pcbY={-26}
    />
    <silkscreentext
      text="CC2564MODA ANTENNA — KEEP CLEAR"
      fontSize="0.65mm"
      pcbX={7.2}
      pcbY={-26.2}
    />
    <keepout shape="rect" pcbX={7.3} pcbY={-25.5} width="5.5mm" height="5mm" />

    {/* Rear-side BoosterPack sockets; front-view reference ordering is J1/J3 and J4/J2. */}
    <pinheader
      name="J1"
      schSheetName="boosterpack_connectors"
      pinCount={10}
      pitch="2.54mm"
      gender="female"
      layer="bottom"
      pcbX={-24}
      pcbY={1.8}
      pcbRotation={90}
      schX={-7}
      schY={3}
      schFacingDirection="right"
      connections={{
        pin1: "net.LP_3V3",
        pin3: "net.UART_TX_1",
        pin4: "net.UART_RX_1",
        pin6: "net.UART_TX_2",
        pin7: "net.UART_RX_2",
      }}
    />
    <pinheader
      name="J3"
      schSheetName="boosterpack_connectors"
      pinCount={10}
      pitch="2.54mm"
      gender="female"
      layer="bottom"
      pcbX={-20}
      pcbY={-1.8}
      pcbRotation={90}
      schX={-7}
      schY={-3}
      schFacingDirection="right"
      connections={{
        pin1: "net.LP_5V",
        pin2: "net.GND",
        pin7: "net.AUD_FSYNC_HEADER",
        pin8: "net.AUD_CLK_HEADER",
        pin9: "net.AUD_DOUTIN_HEADER",
        pin10: "net.AUD_DINOUT_HEADER",
      }}
    />
    <pinheader
      name="J4"
      schSheetName="boosterpack_connectors"
      pinCount={10}
      pitch="2.54mm"
      gender="female"
      layer="bottom"
      pcbX={19.8}
      pcbY={1.8}
      pcbRotation={90}
      schX={7}
      schY={-3}
      schFacingDirection="left"
      connections={{
        pin4: "net.UART_CTS_1",
        pin5: "net.UART_RTS_1",
        pin7: "net.CTS2_OR_TXDBG",
        pin8: "net.UART_RTS_2",
      }}
    />
    <pinheader
      name="J2"
      schSheetName="boosterpack_connectors"
      pinCount={10}
      pitch="2.54mm"
      gender="female"
      layer="bottom"
      pcbX={23.8}
      pcbY={-1.8}
      pcbRotation={90}
      schX={7}
      schY={3}
      schFacingDirection="left"
      schPinStyle={{ pin1: { marginBottom: 0.75 } }}
      connections={{
        pin1: "net.GND",
        pin2: "net.BT_nSHUTD_2",
        pin5: "net.BT_nSHUTD_1",
      }}
    />

    {/* USB input and selectable 3.3 V supply. */}
    <USBMicroBPower
      name="J16"
      schSheetName="power_input"
      pcbX={-22.2}
      pcbY={24.5}
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
      pcbX={-26.7}
      pcbY={19.9}
      schX={-10}
      schY={8.5}
      connections={{ pin1: "net.USB_D_N", pin2: "net.USB_D_N_FILTERED" }}
    />
    <inductor
      name="L1"
      schSheetName="power_input"
      inductance="0H"
      footprint="res0603"
      pcbX={-19.1}
      pcbY={19.9}
      schX={-4}
      schY={8.5}
      connections={{ pin1: "net.USB_D_P", pin2: "net.USB_D_P_FILTERED" }}
    />
    <diode
      name="D3"
      schSheetName="power_input"
      schottky
      footprint="sod123"
      pcbX={-15.2}
      pcbY={19.4}
      pcbRotation={90}
      schX={-7}
      schY={2.5}
      connections={{ pin2: "net.USB_5V", pin1: "net.LDO_INPUT" }}
    />
    <diode
      name="D4"
      schSheetName="power_input"
      schottky
      footprint="sod123"
      pcbX={-16.6}
      pcbY={12.2}
      pcbRotation={90}
      schX={-7}
      schY={0.5}
      connections={{ pin2: "net.LP_5V", pin1: "net.LDO_INPUT" }}
    />
    <TPS73533DRBR
      name="U6"
      schSheetName="power_input"
      pcbX={-21}
      pcbY={16.5}
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
      pcbX={-25.6}
      pcbY={16.7}
      schX={-5}
      schY={-0.5}
      schOrientation="vertical"
      connections={{ pin1: "net.LDO_INPUT", pin2: "net.GND" }}
    />
    <capacitor
      name="C12"
      schSheetName="power_input"
      capacitance="10uF"
      footprint="cap0603"
      pcbX={-22.9}
      pcbY={19.2}
      pcbRotation={0}
      schX={-2.5}
      schY={-2}
      schOrientation="vertical"
      connections={{ pin1: "net.LDO_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C11"
      schSheetName="power_input"
      capacitance="10nF"
      footprint="cap0402"
      pcbX={-17.7}
      pcbY={16.2}
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
      pitch="2.54mm"
      gender="male"
      pcbX={-10}
      pcbY={8}
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
      pcbX={-8}
      pcbY={18.4}
      pcbRotation={90}
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
      pcbX={-11.5}
      pcbY={17.6}
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
      pcbX={-5.1}
      pcbY={17.2}
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
      pitch="2.54mm"
      gender="unpopulated"
      pcbX={-10.4}
      pcbY={25.5}
      pcbRotation={90}
      schX={-13}
      schY={2}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.LIN_3V3" }}
    />
    <resistor
      name="R9"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-10.4}
      pcbY={12}
      pcbRotation={90}
      schX={-13}
      schY={0}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.LIN_3V3" }}
    />
    <pinheader
      name="J15"
      schSheetName="rail_distribution"
      pinCount={2}
      pitch="2.54mm"
      gender="unpopulated"
      pcbX={-4.2}
      pcbY={23.3}
      pcbRotation={90}
      schX={-8}
      schY={2}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.VT_3V3" }}
    />
    <resistor
      name="R15"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-4.2}
      pcbY={13}
      pcbRotation={90}
      schX={-8}
      schY={0}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.VT_3V3" }}
    />
    <pinheader
      name="J11"
      schSheetName="rail_distribution"
      pinCount={2}
      pitch="2.54mm"
      gender="unpopulated"
      pcbX={2}
      pcbY={23.3}
      pcbRotation={90}
      schX={-3}
      schY={2}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.CC_3V3" }}
    />
    <resistor
      name="R11"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={2}
      pcbY={18}
      pcbRotation={90}
      schX={-3}
      schY={0}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.CC_3V3" }}
    />
    <pinheader
      name="J14"
      schSheetName="rail_distribution"
      pinCount={2}
      pitch="2.54mm"
      gender="unpopulated"
      pcbX={8.2}
      pcbY={23.3}
      pcbRotation={90}
      schX={3}
      schY={2}
      connections={{ pin1: "net.V1_8", pin2: "net.VT_1V8" }}
    />
    <resistor
      name="R14"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={8.2}
      pcbY={18}
      pcbRotation={90}
      schX={3}
      schY={0}
      connections={{ pin1: "net.V1_8", pin2: "net.VT_1V8" }}
    />
    <pinheader
      name="J13"
      schSheetName="rail_distribution"
      pinCount={2}
      pitch="2.54mm"
      gender="unpopulated"
      pcbX={14.4}
      pcbY={23.3}
      pcbRotation={90}
      schX={8}
      schY={2}
      connections={{ pin1: "net.V1_8", pin2: "net.CK_1V8" }}
    />
    <resistor
      name="R13"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={14.4}
      pcbY={18}
      pcbRotation={90}
      schX={8}
      schY={0}
      connections={{ pin1: "net.V1_8", pin2: "net.CK_1V8" }}
    />
    <pinheader
      name="J12"
      schSheetName="rail_distribution"
      pinCount={2}
      pitch="2.54mm"
      gender="unpopulated"
      pcbX={20.6}
      pcbY={25.5}
      pcbRotation={90}
      schX={13}
      schY={2}
      connections={{ pin1: "net.V1_8", pin2: "net.CC_1V8" }}
    />
    <resistor
      name="R12"
      schSheetName="rail_distribution"
      resistance="0ohm"
      footprint="res0402"
      pcbX={19.5}
      pcbY={18}
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
      pcbX={-15}
      pcbY={25}
      schX={1}
      schY={-3.5}
      connections={{ pin1: "net.BOARD_3V3", pin2: "net.PWR_LED_A" }}
    />
    <led
      name="D1"
      schSheetName="power_input"
      color="red"
      footprint="led0603"
      pcbX={-11.2}
      pcbY={20.5}
      pcbRotation={90}
      schX={3.5}
      schY={-3.5}
      schRotation={180}
      connections={{ pin2: "net.PWR_LED_A", pin1: "net.GND" }}
    />
    <SKRPACE010
      name="SW1"
      schSheetName="shutdown_debug"
      pcbX={23.8}
      pcbY={19.1}
      pcbRotation={180}
      schX={9}
      schY={7}
      connections={{ A1: "net.BOARD_3V3", B1: "net.NSHUTD_SWITCH" }}
    />
    <resistor
      name="R5"
      schSheetName="shutdown_debug"
      resistance="10kohm"
      footprint="res0402"
      pcbX={21.6}
      pcbY={21.5}
      schX={6}
      schY={3.5}
      schRotation={180}
      connections={{ pin1: "net.NSHUTD_SWITCH", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      schSheetName="shutdown_debug"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={24.9}
      pcbY={25}
      schX={12}
      schY={8.5}
      schOrientation="vertical"
      connections={{ pin1: "net.NSHUTD_SWITCH", pin2: "net.GND" }}
    />
    <resistor
      name="R6"
      schSheetName="shutdown_debug"
      resistance="0ohm"
      footprint="res0402"
      pcbX={18.2}
      pcbY={15.8}
      schX={9}
      schY={4.5}
      connections={{ pin1: "net.NSHUTD_SWITCH", pin2: "net.NSHUTD_3V3" }}
    />
    <resistor
      name="R26"
      schSheetName="shutdown_debug"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-1.2}
      pcbY={13.2}
      schX={-2}
      schY={3.5}
      connections={{ pin1: "net.NSHUTD_3V3", pin2: "net.STATUS_ENABLE" }}
    />
    <resistor
      name="R25"
      schSheetName="shutdown_debug"
      resistance="1kohm"
      footprint="res0603"
      pcbX={-3.6}
      pcbY={15.2}
      schX={1.5}
      schY={3.5}
      connections={{ pin1: "net.STATUS_ENABLE", pin2: "net.STATUS_LED_A" }}
    />
    <led
      name="D2"
      schSheetName="shutdown_debug"
      color="green"
      footprint="led0603"
      pcbX={1.1}
      pcbY={15.2}
      schX={3}
      schY={3.5}
      schRotation={180}
      connections={{ pin2: "net.STATUS_LED_A", pin1: "net.GND" }}
    />

    {/* U3: HCI UART translator and its selectable BoosterPack routes. */}
    <TXS0108EPWR
      name="U3"
      schSheetName="hci_uart"
      pcbX={-2.3}
      pcbY={5.3}
      pcbRotation={90}
      schX={-4}
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
      pcbX={-4.4}
      pcbY={9}
      schX={-7}
      schY={2.5}
      connections={{ pin1: "net.VT_1V8", pin2: "net.U3_OE" }}
    />
    <capacitor
      name="C8"
      schSheetName="hci_uart"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={-7.8}
      pcbY={5.3}
      schX={-7}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      schSheetName="hci_uart"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={2.1}
      pcbY={2.7}
      schX={-3}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_1V8", pin2: "net.GND" }}
    />
    <resistor
      name="R16"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-14.7}
      pcbY={5.1}
      schX={-11}
      schY={3}
      connections={{ pin1: "net.UART_TX_3V3", pin2: "net.UART_TX_1" }}
    />
    <resistor
      name="R20"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-12.8}
      pcbY={5.1}
      schX={-11}
      schY={2}
      connections={{ pin1: "net.UART_TX_3V3", pin2: "net.UART_TX_2" }}
    />
    <resistor
      name="R17"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-14.7}
      pcbY={1.2}
      schX={-11}
      schY={0}
      connections={{ pin1: "net.UART_RX_3V3", pin2: "net.UART_RX_1" }}
    />
    <resistor
      name="R21"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-12.8}
      pcbY={1.2}
      schX={-11}
      schY={-1}
      connections={{ pin1: "net.UART_RX_3V3", pin2: "net.UART_RX_2" }}
    />
    <resistor
      name="R18"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={10.2}
      pcbY={5.5}
      schX={3}
      schY={3}
      connections={{ pin1: "net.UART_CTS_3V3", pin2: "net.UART_CTS_1" }}
    />
    <resistor
      name="R22"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={12.1}
      pcbY={5.5}
      schX={3}
      schY={2}
      connections={{ pin1: "net.UART_CTS_3V3", pin2: "net.UART_CTS_2" }}
    />
    <resistor
      name="R19"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={10.2}
      pcbY={1.3}
      schX={3}
      schY={0}
      connections={{ pin1: "net.UART_RTS_3V3", pin2: "net.UART_RTS_1" }}
    />
    <resistor
      name="R23"
      schSheetName="hci_uart"
      resistance="0ohm"
      footprint="res0402"
      pcbX={12.1}
      pcbY={1.3}
      schX={3}
      schY={-1}
      connections={{ pin1: "net.UART_RTS_3V3", pin2: "net.UART_RTS_2" }}
    />

    {/* U2: PCM/audio translator and J6/J7 data-direction selectors. */}
    <TXS0104EPWR
      name="U2"
      schSheetName="pcm_audio"
      pcbX={-4.4}
      pcbY={-4.1}
      pcbRotation={90}
      schX={5}
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
      pcbX={-8.7}
      pcbY={0.5}
      schX={1.5}
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
      schX={4}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_1V8", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      schSheetName="pcm_audio"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={-5.5}
      pcbY={-8.5}
      schX={7}
      schY={-3.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_3V3", pin2: "net.GND" }}
    />
    <resistor
      name="R8"
      schSheetName="pcm_audio"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-14.1}
      pcbY={-3.5}
      schX={10}
      schY={3}
      connections={{ pin1: "net.AUD_FSYNC_3V3", pin2: "net.AUD_FSYNC_HEADER" }}
    />
    <resistor
      name="R7"
      schSheetName="pcm_audio"
      resistance="0ohm"
      footprint="res0402"
      pcbX={-14.1}
      pcbY={-5.1}
      schX={10}
      schY={2}
      connections={{ pin1: "net.AUD_CLK_3V3", pin2: "net.AUD_CLK_HEADER" }}
    />
    <pinheader
      name="J7"
      schSheetName="pcm_audio"
      pinCount={3}
      pitch="2.54mm"
      gender="male"
      pcbX={-12.5}
      pcbY={-9.7}
      schX={12}
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
      pitch="2.54mm"
      gender="male"
      pcbX={-12.5}
      pcbY={-13.7}
      schX={12}
      schY={-2}
      connections={{
        pin1: "net.PCM_DIN_3V3",
        pin2: "net.AUD_DINOUT_HEADER",
        pin3: "net.PCM_DOUT_3V3",
      }}
    />

    {/* U4: nSHUTD / TX_DBG translator and selectors. */}
    <TXS0102DCUR
      name="U4"
      schSheetName="shutdown_debug"
      pcbX={5.6}
      pcbY={-5.1}
      pcbRotation={90}
      schX={6.5}
      schY={-2}
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
      pcbX={-6.9}
      pcbY={12.5}
      schX={3}
      schY={0.5}
      connections={{ pin1: "net.VT_1V8", pin2: "net.U4_OE" }}
    />
    <capacitor
      name="C7"
      schSheetName="shutdown_debug"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={4.6}
      pcbY={-2}
      schX={4}
      schY={-5.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      schSheetName="shutdown_debug"
      capacitance="100nF"
      footprint="cap0402"
      pcbX={4.6}
      pcbY={-7.2}
      schX={7}
      schY={-5.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VT_1V8", pin2: "net.GND" }}
    />
    <pinheader
      name="J8"
      schSheetName="shutdown_debug"
      pinCount={3}
      pitch="2.54mm"
      gender="male"
      pcbX={8.8}
      pcbY={9}
      schX={-1}
      schY={4}
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
      pitch="2.54mm"
      gender="male"
      pcbX={12.2}
      pcbY={-5.2}
      pcbRotation={90}
      schX={10}
      schY={1}
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
      pcbX={-4.5}
      pcbY={-17.1}
      pcbRotation={90}
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
      pcbX={-7.2}
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
      pcbX={-1.4}
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
      pcbX={-2.7}
      pcbY={-14.3}
      schX={-2}
      schY={-1}
      schOrientation="vertical"
      connections={{ pin1: "net.CK_1V8", pin2: "net.GND" }}
    />
    <CC2564MODACMOG
      name="U1"
      schSheetName="module_clock"
      pcbX={7.3}
      pcbY={-20.1}
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
      pcbX={-0.4}
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
      pcbX={14}
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
      pcbX={-17.2}
      pcbY={-18.2}
      schX={-10}
      schY={-1}
      connections={{ pin1: "net.GND" }}
    />
  </board>
);

export default BOOST_CC2564MODA;
