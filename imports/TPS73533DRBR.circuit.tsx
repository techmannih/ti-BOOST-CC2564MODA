import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const tps735PinLabels = {
  pin1: ["OUT"],
  pin2: ["NC2"],
  pin3: ["NR"],
  pin4: ["GND"],
  pin5: ["EN"],
  pin6: ["NC6"],
  pin7: ["NC7"],
  pin8: ["IN"],
  pin9: ["EP", "THERMAL_PAD"],
} as const;

/** TPS73533 3.3 V LDO, imported from JLCPCB part C388480. */
export const TPS73533DRBR = (props: ChipProps<typeof tps735PinLabels>) => {
  const { connections, ...chipProps } = props;

  return (
    <chip
      pinLabels={tps735PinLabels}
      manufacturerPartNumber="TPS73533DRBR"
      supplierPartNumbers={{ jlcpcb: ["C388480"] }}
      schWidth={1.77}
      schHeight={1}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["OUT", "NC2", "NR", "EN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["EP", "IN", "NC7", "NC6"],
        },
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.97536mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.32512mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.32512mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.97536mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.97536mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.32512mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.32512mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.97536mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            points={[
              { x: "-0.890016mm", y: "-0.759968mm" },
              { x: "-0.8899906mm", y: "-0.4700016mm" },
              { x: "-1.7100042mm", y: "-0.4700016mm" },
              { x: "-1.7100042mm", y: "-0.1800098mm" },
              { x: "-0.8800084mm", y: "-0.1800098mm" },
              { x: "-0.8800084mm", y: "0.1800098mm" },
              { x: "-1.7100042mm", y: "0.1800098mm" },
              { x: "-1.7100042mm", y: "0.4700016mm" },
              { x: "-0.8800084mm", y: "0.4700016mm" },
              { x: "-0.8800084mm", y: "0.7599934mm" },
              { x: "0.8899906mm", y: "0.7599934mm" },
              { x: "0.8899906mm", y: "0.4700016mm" },
              { x: "1.7100042mm", y: "0.4700016mm" },
              { x: "1.7100042mm", y: "0.1800098mm" },
              { x: "0.8899906mm", y: "0.1800098mm" },
              { x: "0.8899906mm", y: "-0.1800098mm" },
              { x: "1.7100042mm", y: "-0.1800098mm" },
              { x: "1.7100042mm", y: "-0.4700016mm" },
              { x: "0.8899906mm", y: "-0.4700016mm" },
              { x: "0.8899906mm", y: "-0.7599934mm" },
            ]}
            shape="polygon"
          />
          <silkscreenrect pcbX={0} pcbY={0} width="3.048mm" height="3.048mm" />
          <courtyardoutline
            outline={[
              { x: -1.964754, y: 2.071434 },
              { x: 1.964246, y: 2.071434 },
              { x: 1.964246, y: -2.238566 },
              { x: -1.964754, y: -2.238566 },
              { x: -1.964754, y: 2.071434 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C388480.obj?uuid=0947a2bb1caa4518a197a4b1bb292975",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C388480.step?uuid=0947a2bb1caa4518a197a4b1bb292975",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      connections={{
        GND: "net.GND",
        EP: "net.GND",
        ...connections,
      }}
      {...chipProps}
    />
  );
};
