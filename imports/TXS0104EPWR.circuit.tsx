import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const txs0104PinLabels = {
  pin1: ["VCCA"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["NC6"],
  pin7: ["GND"],
  pin8: ["OE"],
  pin9: ["NC9"],
  pin10: ["B4"],
  pin11: ["B3"],
  pin12: ["B2"],
  pin13: ["B1"],
  pin14: ["VCCB"],
} as const;

/** Four-bit auto-direction level translator used for the PCM/audio bus. */
export const TXS0104EPWR = (props: ChipProps<typeof txs0104PinLabels>) => (
  <chip
    pinLabels={txs0104PinLabels}
    manufacturerPartNumber="TXS0104EPWR"
    supplierPartNumbers={{ jlcpcb: ["C44955"] }}
    footprint="tssop14"
    schWidth={1.58}
    schHeight={1.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["OE", "VCCA", "A1", "A2", "A3", "A4", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VCCB", "B1", "B2", "B3", "B4", "NC6", "NC9"],
      },
    }}
    {...props}
  />
);
