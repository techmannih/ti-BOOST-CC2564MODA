import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const powerButtonPinLabels = {
  pin1: ["A1"],
  pin2: ["A2"],
  pin3: ["B1"],
  pin4: ["B2"],
} as const;

/** ALPS SKRPACE010 switch imported from JLCPCB part C139797. */
export const SKRPACE010 = (props: ChipProps<typeof powerButtonPinLabels>) => (
  <pushbutton
    pinLabels={powerButtonPinLabels}
    manufacturerPartNumber="SKRPACE010"
    supplierPartNumbers={{ jlcpcb: ["C139797"] }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-2.100072mm"
          pcbY="1.074928mm"
          width="1.0500106mm"
          height="0.6999986mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="2.100072mm"
          pcbY="1.074928mm"
          width="1.0500106mm"
          height="0.6999986mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-2.100072mm"
          pcbY="-1.074928mm"
          width="1.0500106mm"
          height="0.6999986mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="2.100072mm"
          pcbY="-1.074928mm"
          width="1.0500106mm"
          height="0.6999986mm"
          shape="rect"
        />
        <silkscreenrect pcbX={0} pcbY={0} width="4.4mm" height="3.1mm" />
        <courtyardoutline
          outline={[
            { x: -2.8662, y: 1.8756 },
            { x: 2.8916, y: 1.8756 },
            { x: 2.8916, y: -1.8502 },
            { x: -2.8662, y: -1.8502 },
            { x: -2.8662, y: 1.8756 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C139797.obj?uuid=00d848a7e8384bbd9286566957e8bb9c",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C139797.step?uuid=00d848a7e8384bbd9286566957e8bb9c",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0.0000127, y: 0.000127, z: -0.01 },
    }}
    internallyConnectedPins={[
      ["pin1", "pin2"],
      ["pin3", "pin4"],
    ]}
    {...props}
  />
);
