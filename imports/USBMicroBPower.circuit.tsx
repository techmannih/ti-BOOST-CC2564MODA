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
      <footprint>
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
        <silkscreenpath
          route={[
            { x: -3.9463980000000447, y: -4.987131200000135 },
            { x: -3.3962847999999894, y: -4.987664600000016 },
            { x: -2.9888180000000375, y: -4.187031200000092 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 3.2692085999999563, y: -4.187666200000081 },
            { x: 3.2692085999999563, y: -4.760410800000045 },
            { x: 3.456355799999983, y: -4.987664600000016 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 3.9537132000000383, y: -4.987664600000016 },
            { x: 3.456355799999983, y: -4.987664600000016 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 3.6999925999998595, y: -4.187666200000081 },
            { x: 3.6999925999998595, y: -4.733944000000065 },
            { x: 3.9537132000000383, y: -4.987664600000016 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -3.699992599999973, y: -4.187666200000081 },
            { x: -3.699992599999973, y: -4.741386200000079 },
            { x: -3.9462710000000243, y: -4.987664600000016 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -3.699992599999973, y: -0.38767380000001594 },
            { x: -3.699992599999973, y: 0.8749855999999454 },
            { x: -3.2639762000001156, y: 0.8749855999999454 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 3.265931999999907, y: 0.8619807999999693 },
            { x: 3.7002719999998135, y: 0.8619807999999693 },
            { x: 3.7002719999998135, y: 0.8111807999998746 },
            { x: 3.7002719999998135, y: -0.6213792000002059 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -3.699992599999973, y: -0.6228777999999693 },
            { x: -3.699992599999973, y: -0.38767380000001594 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 3.6999925999998595, y: -3.266763800000035 },
            { x: 3.6999925999998595, y: -4.187666200000081 },
            { x: -3.699992599999973, y: -4.187666200000081 },
            { x: -3.699992599999973, y: -3.267271800000117 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="0.000762mm"
          pcbY="3.0258088mm"
          anchorAlignment="center"
          fontSize="1mm"
        />
        <courtyardoutline
          outline={[
            { x: -4.478338000000008, y: 2.275808799999936 },
            { x: 4.4798620000000255, y: 2.275808799999936 },
            { x: 4.4798620000000255, y: -5.234591200000068 },
            { x: -4.478338000000008, y: -5.234591200000068 },
            { x: -4.478338000000008, y: 2.275808799999936 },
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
      modelOriginPosition: {
        x: 0.000012700000070253736,
        y: 0.799999999999999999,
        z: -0.050001799999999985,
      },
    }}
    {...props}
  />
);
