import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const usbMicroBPinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_N"],
  pin3: ["D_P"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["SH1"],
  pin7: ["SH2"],
  pin8: ["SH3"],
  pin9: ["SH4"],
} as const;

/** Micro-USB-B power connector imported from JLCPCB part C7507410. */
export const USBMicroBPower = (props: ChipProps<typeof usbMicroBPinLabels>) => (
  <connector
    pinLabels={usbMicroBPinLabels}
    manufacturerPartNumber="USB-MICRO-XNJ-JB"
    supplierPartNumbers={{ jlcpcb: ["C7507410"] }}
    footprint={
      <footprint insertionDirection="from_front">
        <platedhole
          portHints={["pin8"]}
          pcbX="3.625088mm"
          pcbY="-1.9749452mm"
          holeWidth="0.700024mm"
          holeHeight="1.3000228mm"
          outerWidth="1.1999976mm"
          outerHeight="1.7999964mm"
          shape="pill"
        />
        <platedhole
          portHints={["pin9"]}
          pcbX="-3.625088mm"
          pcbY="-1.9749452mm"
          holeWidth="0.700024mm"
          holeHeight="1.3000228mm"
          outerWidth="1.1999976mm"
          outerHeight="1.7999964mm"
          shape="pill"
        />
        <platedhole
          portHints={["pin6"]}
          pcbX="-2.424938mm"
          pcbY="0.7050088mm"
          outerDiameter="1.2500102mm"
          holeDiameter="0.700024mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin7"]}
          pcbX="2.424938mm"
          pcbY="0.7050088mm"
          outerDiameter="1.2500102mm"
          holeDiameter="0.700024mm"
          shape="circle"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="1.289558mm"
          pcbY="1.2249468mm"
          width="0.3999992mm"
          height="1.5999968mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.639572mm"
          pcbY="1.2249468mm"
          width="0.3999992mm"
          height="1.5999968mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.010414mm"
          pcbY="1.2249468mm"
          width="0.3999992mm"
          height="1.5999968mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-0.6604mm"
          pcbY="1.2249468mm"
          width="0.3999992mm"
          height="1.5999968mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin1"]}
          pcbX="-1.310386mm"
          pcbY="1.2249468mm"
          width="0.3999992mm"
          height="1.5999968mm"
          shape="rect"
        />
        <courtyardoutline
          outline={[
            { x: -4.478338, y: 2.2758088 },
            { x: 4.479862, y: 2.2758088 },
            { x: 4.479862, y: -5.2345912 },
            { x: -4.478338, y: -5.2345912 },
            { x: -4.478338, y: 2.2758088 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C7507410.obj?uuid=e418b386351d4badb989ca6c483e9bb5",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C7507410.step?uuid=e418b386351d4badb989ca6c483e9bb5",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0.0000127, y: 0.8, z: -0.0500018 },
    }}
    {...props}
  />
);
