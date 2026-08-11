import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const txs0108PinLabels = {
  pin1: ["OE"],
  pin2: ["VCCA"],
  pin3: ["A1"],
  pin4: ["A2"],
  pin5: ["A3"],
  pin6: ["A4"],
  pin7: ["A5"],
  pin8: ["A6"],
  pin9: ["A7"],
  pin10: ["A8"],
  pin11: ["GND"],
  pin12: ["B8"],
  pin13: ["B7"],
  pin14: ["B6"],
  pin15: ["B5"],
  pin16: ["B4"],
  pin17: ["B3"],
  pin18: ["B2"],
  pin19: ["B1"],
  pin20: ["VCCB"],
} as const;

/** Eight-bit auto-direction level translator used for HCI and control signals. */
export const TXS0108EPWR = (props: ChipProps<typeof txs0108PinLabels>) => (
  <chip
    pinLabels={txs0108PinLabels}
    manufacturerPartNumber="TXS0108EPWR"
    supplierPartNumbers={{ jlcpcb: ["C17206"] }}
    footprint="tssop20"
    schWidth={1.58}
    schHeight={2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "OE",
          "VCCA",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "A8",
          "GND",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VCCB", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
      },
    }}
    {...props}
  />
);
