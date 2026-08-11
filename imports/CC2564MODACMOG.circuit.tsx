import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["HCI_CTS"],
  pin2: ["HCI_TX"],
  pin3: ["HCI_RX"],
  pin4: ["HCI_RTS"],
  pin5: ["GND1"],
  pin6: ["NC1"],
  pin7: ["GND2"],
  pin8: ["SLOW_CLK_IN"],
  pin9: ["GND3"],
  pin10: ["NC2"],
  pin11: ["NC3"],
  pin12: ["VDD_IN"],
  pin13: ["GND4"],
  pin14: ["BT_ANTNC"],
  pin15: ["GND5"],
  pin16: ["nSHUTD"],
  pin17: ["GND6"],
  pin18: ["VDD_IO"],
  pin19: ["AUD_IN"],
  pin20: ["AUD_OUT"],
  pin21: ["AUD_CLK"],
  pin22: ["AUD_FSYNC"],
  pin23: ["NC4"],
  pin24: ["TX_DBG"],
  pin25: ["GNDPAD1"],
  pin26: ["GNDPAD2"],
  pin27: ["GNDPAD3"],
  pin28: ["GNDPAD4"],
  pin29: ["GNDPAD5"],
  pin30: ["GNDPAD6"],
  pin31: ["GNDPAD7"],
  pin32: ["GNDPAD8"],
  pin33: ["GNDPAD9"],
  pin34: ["GNDPAD10"],
  pin35: ["GNDPAD11"],
} as const;

/**
 * CC2564MODA Bluetooth module with its MOG-35 land pattern.
 *
 * EasyEDA part C1526234 does not link a 3D model, so the package body is
 * represented with a self-contained JSCAD model using the verified
 * 14 mm x 7 mm x 1.54 mm CAD envelope.
 */
export const CC2564MODACMOG = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1526234"],
      }}
      manufacturerPartNumber="CC2564MODACMOG"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-6.574917mm"
            pcbY="2.250059mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-6.574917mm"
            pcbY="1.350137mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-6.574917mm"
            pcbY="0.450215mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-6.574917mm"
            pcbY="-0.449961mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-6.574917mm"
            pcbY="-1.349883mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-6.574917mm"
            pcbY="-2.249805mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-5.775071mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-4.874895mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.974973mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.075051mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.174875mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.274953mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.474853mm"
            pcbY="-2.249805mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.474853mm"
            pcbY="-1.349883mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.474853mm"
            pcbY="-0.449961mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.474853mm"
            pcbY="0.450215mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.474853mm"
            pcbY="1.350137mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.474853mm"
            pcbY="2.250059mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.274953mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.174875mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-3.075051mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-3.974973mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-4.874895mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-5.775071mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-5.125085mm"
            pcbY="0.000127mm"
            width="0.999998mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-3.524885mm"
            pcbY="-1.599819mm"
            width="0.999998mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-3.524885mm"
            pcbY="0.000127mm"
            width="0.999998mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-3.524885mm"
            pcbY="1.600073mm"
            width="0.999998mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-1.924939mm"
            pcbY="0.000127mm"
            width="0.999998mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-6.574917mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-6.574917mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-0.474853mm"
            pcbY="-3.049905mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-0.474853mm"
            pcbY="3.050159mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="4.399915mm"
            pcbY="-3.134995mm"
            width="4.850003mm"
            height="0.4299966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="4.399915mm"
            pcbY="3.134995mm"
            width="4.850003mm"
            height="0.4299966mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 6.574993199999881, y: 1.5001240000001417 },
              { x: 6.574993199999881, y: -1.4498827999998412 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.574997199999871, y: 1.5001240000001417 },
              { x: 4.574997199999871, y: -1.3998701999998957 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.975068599999759, y: -3.447364200000038 },
              { x: 6.975068599999759, y: -3.499891400000024 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.975068599999759, y: 2.822625799999969 },
              { x: 6.975068599999759, y: -2.822371799999928 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.975068599999759, y: 3.5001199999999244 },
              { x: 6.975068599999759, y: 3.447592800000052 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.922592199999826, y: -3.499891400000024 },
              { x: 6.975068599999759, y: -3.499891400000024 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.024979600000279, y: -3.499891400000024 },
              { x: 1.8773901999998088, y: -3.499891400000024 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.922592199999826, y: 3.5001199999999244 },
              { x: 6.975068599999759, y: 3.5001199999999244 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.024979600000279, y: 3.5001199999999244 },
              { x: 1.8773901999998088, y: 3.5001199999999244 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.024979600000279, y: 3.5001199999999244 },
              { x: -7.024979600000279, y: -3.499891400000024 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.354443000000288, y: 2.2500589999999647 },
              { x: -7.356849045554327, y: 2.2317832695871402 },
              { x: -7.363903214188326, y: 2.2147529999999733 },
              { x: -7.375124775967151, y: 2.2001287759669594 },
              { x: -7.389749000000165, y: 2.1889072141880206 },
              { x: -7.406779269587446, y: 2.181853045554135 },
              { x: -7.42505500000027, y: 2.1794470000000956 },
              { x: -7.443330730413095, y: 2.181853045554135 },
              { x: -7.4603610000003755, y: 2.1889072141880206 },
              { x: -7.474985224033503, y: 2.2001287759669594 },
              { x: -7.4862067858122145, y: 2.2147529999999733 },
              { x: -7.493260954446214, y: 2.2317832695871402 },
              { x: -7.495667000000253, y: 2.2500589999999647 },
              { x: -7.493260954446214, y: 2.268334730412789 },
              { x: -7.4862067858122145, y: 2.28536500000007 },
              { x: -7.474985224033503, y: 2.299989224033311 },
              { x: -7.4603610000003755, y: 2.3112107858120226 },
              { x: -7.443330730413095, y: 2.318264954446022 },
              { x: -7.42505500000027, y: 2.3206709999999475 },
              { x: -7.406779269587446, y: 2.318264954446022 },
              { x: -7.389749000000165, y: 2.3112107858120226 },
              { x: -7.375124775967151, y: 2.299989224033311 },
              { x: -7.363903214188326, y: 2.28536500000007 },
              { x: -7.356849045554327, y: 2.268334730412789 },
              { x: -7.354443000000288, y: 2.2500589999999647 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.254381mm"
            pcbY="4.524123mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -7.743381000000227, y: 3.7741230000000314 },
              { x: 7.234618999999839, y: 3.7741230000000314 },
              { x: 7.234618999999839, y: -3.7616769999998496 },
              { x: -7.743381000000227, y: -3.7616769999998496 },
              { x: -7.743381000000227, y: 3.7741230000000314 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        jscad: {
          type: "colorize",
          color: [0.3, 0.3, 0.3],
          shape: {
            type: "cuboid",
            size: [14, 7, 1.54],
          },
        },
        zOffsetFromSurface: "0.77mm",
      }}
      {...props}
    />
  );
};
