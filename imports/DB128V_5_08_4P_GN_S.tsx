import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SPK_L_POS"],
  pin2: ["SPK_L_NEG"],
  pin3: ["SPK_R_POS"],
  pin4: ["SPK_R_NEG"]
} as const

export const DB128V_5_08_4P_GN_S = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.8}
      schHeight={1}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SPK_L_POS", "SPK_L_NEG", "SPK_R_POS", "SPK_R_NEG"],
        },
      }}
      pinAttributes={{
        SPK_L_POS: { includeInBoardPinout: true },
        SPK_L_NEG: { includeInBoardPinout: true },
        SPK_R_POS: { includeInBoardPinout: true },
        SPK_R_NEG: { includeInBoardPinout: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2915641"
  ]
}}
      manufacturerPartNumber="DB128V-5.08-4P-GN-S"
      footprint={<footprint insertionDirection="from_above">
        <platedhole  portHints={["pin1"]} pcbX="-7.62mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.5000224mm" shape="circle" />
<silkscreenpath route={[{"x":-10.759973399999922,"y":2.699994600000082},{"x":-10.159999999999968,"y":2.9796740000000455}]} />
<silkscreenpath route={[{"x":-10.759973399999922,"y":3.699992599999973},{"x":-10.159999999999968,"y":3.4204910000000837}]} />
<silkscreenpath route={[{"x":-10.759973399999922,"y":-3.499992999999904},{"x":-10.159999999999968,"y":-3.779596199999901}]} />
<silkscreenpath route={[{"x":-10.759973399999922,"y":-4.499991000000023},{"x":-10.159999999999968,"y":-4.2192956000000095}]} />
<silkscreenpath route={[{"x":-10.759973399999922,"y":-3.499992999999904},{"x":-10.759973399999922,"y":-4.499991000000023}]} />
<silkscreenpath route={[{"x":-10.759973399999922,"y":3.699992599999973},{"x":-10.759973399999922,"y":2.699994600000082}]} />
<silkscreenpath route={[{"x":10.159999999999968,"y":4.999990000000025},{"x":10.159999999999968,"y":-5.200014999999894}]} />
<silkscreenpath route={[{"x":-10.159999999999968,"y":4.999990000000025},{"x":10.159999999999968,"y":4.999990000000025}]} />
<silkscreenpath route={[{"x":-10.159999999999968,"y":4.999990000000025},{"x":-10.159999999999968,"y":-5.200014999999894}]} />
<silkscreenpath route={[{"x":-10.159999999999968,"y":-5.199989599999981},{"x":10.159999999999968,"y":-5.199989599999981}]} />
<silkscreentext text="{NAME}" pcbX="-0.3048mm" pcbY="6.0038mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-11.019599999999969,"y":5.253800000000069},{"x":10.409999999999968,"y":5.253800000000069},{"x":10.409999999999968,"y":-5.482400000000098},{"x":-11.019599999999969,"y":-5.482400000000098},{"x":-11.019599999999969,"y":5.253800000000069}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2915641.obj?uuid=a828c3641ac04b2a9349afc0e9ed6ad7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2915641.step?uuid=a828c3641ac04b2a9349afc0e9ed6ad7",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}
