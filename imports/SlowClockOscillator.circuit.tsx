import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const oscillatorPinLabels = {
  pin1: ["OE", "TRI_STATE"],
  pin2: ["GND"],
  pin3: ["OUT", "Output"],
  pin4: ["VCC", "VDD"],
} as const;

/**
 * 3.2 mm x 2.5 mm four-pad 32.768 kHz oscillator.
 * C454609 has a working JLCPCB/EasyEDA import. The photographed board's
 * original Y1 manufacturer is not readable.
 */
export const SlowClockOscillator = (
  props: ChipProps<typeof oscillatorPinLabels>,
) => (
  <chip
    pinLabels={oscillatorPinLabels}
    manufacturerPartNumber="TFOM32768K4RHKCNT2T"
    supplierPartNumbers={{ jlcpcb: ["C454609"] }}
    schWidth={1.77}
    schHeight={0.6}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["OE", "GND"] },
      rightSide: { direction: "top-to-bottom", pins: ["VCC", "OUT"] },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-1.100074mm"
          pcbY="-0.8001mm"
          width="1.3999972mm"
          height="1.1999976mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="1.100074mm"
          pcbY="-0.8001mm"
          width="1.3999972mm"
          height="1.1999976mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="1.100074mm"
          pcbY="0.8001mm"
          width="1.3999972mm"
          height="1.1999976mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-1.100074mm"
          pcbY="0.8001mm"
          width="1.3999972mm"
          height="1.1999976mm"
          shape="rect"
        />
        <silkscreenrect pcbX={0} pcbY={0} width="3.4mm" height="2.7mm" />
        <courtyardoutline
          outline={[
            { x: -2.0534, y: 1.647 },
            { x: 2.0534, y: 1.647 },
            { x: 2.0534, y: -2.155 },
            { x: -2.0534, y: -2.155 },
            { x: -2.0534, y: 1.647 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C454609.obj?uuid=b31b0ed50b044076a42e8dca096c894c",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C454609.step?uuid=b31b0ed50b044076a42e8dca096c894c",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0, y: 0, z: -0.01 },
    }}
    {...props}
  />
);
