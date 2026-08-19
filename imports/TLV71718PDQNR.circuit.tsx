import "tscircuit";
import type { ChipProps } from "@tscircuit/props";

const tlv717PinLabels = {
  pin1: ["OUT"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["IN"],
  pin5: ["EP", "THERMAL_PAD"],
} as const;

/** TLV717P-family 1.8 V LDO, imported from JLCPCB part C2864233. */
export const TLV71718PDQNR = (props: ChipProps<typeof tlv717PinLabels>) => {
  const { connections, ...chipProps } = props;

  return (
    <chip
      pinLabels={tlv717PinLabels}
      manufacturerPartNumber="TLV71718PDQNR"
      supplierPartNumbers={{ jlcpcb: ["C2864233"] }}
      schWidth={1.675}
      schHeight={0.6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["IN", "GND", "EN"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OUT", "EP"],
        },
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            points={[
              { x: "0.6099683mm", y: "-0.4349242mm" },
              { x: "0.6099683mm", y: "-0.2149094mm" },
              { x: "0.4299585mm", y: "-0.2149094mm" },
              { x: "0.2499741mm", y: "-0.3549142mm" },
              { x: "0.2499741mm", y: "-0.4349242mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin2"]}
            points={[
              { x: "-0.6099937mm", y: "-0.4349242mm" },
              { x: "-0.6099937mm", y: "-0.2149094mm" },
              { x: "-0.4299839mm", y: "-0.2149094mm" },
              { x: "-0.2499995mm", y: "-0.3549142mm" },
              { x: "-0.2499995mm", y: "-0.4349242mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-0.6099937mm", y: "0.4349242mm" },
              { x: "-0.6099937mm", y: "0.2149094mm" },
              { x: "-0.4299839mm", y: "0.2149094mm" },
              { x: "-0.2499995mm", y: "0.3549142mm" },
              { x: "-0.2499995mm", y: "0.4349242mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin4"]}
            points={[
              { x: "0.6099937mm", y: "0.4349242mm" },
              { x: "0.6099937mm", y: "0.2149094mm" },
              { x: "0.4299839mm", y: "0.2149094mm" },
              { x: "0.2499995mm", y: "0.3549142mm" },
              { x: "0.2499995mm", y: "0.4349242mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.0000381mm"
            pcbY="0.0001524mm"
            width="0.48006mm"
            height="0.48006mm"
            shape="rect"
          />
          <silkscreenrect pcbX={0} pcbY={0} width="1.1mm" height="1.1mm" />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1035939mm"
            pcbY="1.5647944mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.0647939, y: 0.8147944 },
              { x: 0.8576061, y: 0.8147944 },
              { x: 0.8576061, y: -0.8028056 },
              { x: -1.0647939, y: -0.8028056 },
              { x: -1.0647939, y: 0.8147944 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864233.obj?uuid=dafcd713f2d64589944d0111d1d05404",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864233.step?uuid=dafcd713f2d64589944d0111d1d05404",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.0000254, z: 0 },
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
