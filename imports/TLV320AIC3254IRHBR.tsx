import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["MCLK"],
  pin2: ["BCLK"],
  pin3: ["WCLK"],
  pin4: ["DIN", "MFP1"],
  pin5: ["DOUT", "MFP2"],
  pin6: ["IOVDD"],
  pin7: ["IOVSS"],
  pin8: ["SCLK", "MFP3"],
  pin9: ["SCL", "SS"],
  pin10: ["SDA", "MOSI"],
  pin11: ["MISO", "MFP4"],
  pin12: ["SPI_SELECT"],
  pin13: ["IN1_L"],
  pin14: ["IN1_R"],
  pin15: ["IN2_L"],
  pin16: ["IN2_R"],
  pin17: ["AVSS"],
  pin18: ["REF"],
  pin19: ["MICBIAS"],
  pin20: ["IN3_L"],
  pin21: ["IN3_R"],
  pin22: ["LOL"],
  pin23: ["LOR"],
  pin24: ["AVDD"],
  pin25: ["HPL"],
  pin26: ["LDOIN"],
  pin27: ["HPR"],
  pin28: ["DVSS"],
  pin29: ["DVDD"],
  pin30: ["LDO_SELECT"],
  pin31: ["RESET"],
  pin32: ["GPIO", "MFP5"],
  pin33: ["EP"]
} as const

export const TLV320AIC3254IRHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={3.1}
      schHeight={3.4}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "MCLK",
            "BCLK",
            "WCLK",
            "DIN",
            "DOUT",
            "SCL",
            "SDA",
            "RESET",
            "SPI_SELECT",
            "SCLK",
            "MISO",
            "GPIO",
            "IOVSS",
            "AVSS",
            "DVSS",
            "EP",
            "MICBIAS",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "HPL",
            "HPR",
            "LOL",
            "LOR",
            "REF",
            "AVDD",
            "DVDD",
            "IOVDD",
            "LDOIN",
            "LDO_SELECT",
            "IN1_L",
            "IN1_R",
            "IN2_L",
            "IN2_R",
            "IN3_L",
            "IN3_R",
          ],
        },
      }}
      pinAttributes={{
        IOVDD: { requiresPower: true },
        LDOIN: { requiresPower: true },
        IOVSS: { requiresGround: true },
        AVSS: { requiresGround: true },
        DVSS: { requiresGround: true },
        EP: { requiresGround: true },
        SCL: { capabilities: ["i2c_scl"], needsExternalPullup: true },
        SDA: { capabilities: ["i2c_sda"], needsExternalPullup: true },
        SPI_SELECT: { mustBeConnected: true },
        RESET: { mustBeConnected: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C9925"
  ]
}}
      manufacturerPartNumber="TLV320AIC3254IRHBR"
      footprint={<footprint>
        <smtpad portHints={["pin33"]} pcbX="-0mm" pcbY="-0.000254mm" width="3.3999932mm" height="3.3999932mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.749806mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-1.2499594mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-0.7498334mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-0.249936mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="0.25019mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.750062mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="1.250188mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="1.75006mm" pcbY="-2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="2.400046mm" pcbY="-1.7500346mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="2.400046mm" pcbY="-1.2502134mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="2.400046mm" pcbY="-0.7500366mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.400046mm" pcbY="-0.25019mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="2.400046mm" pcbY="0.2499106mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="2.400046mm" pcbY="0.749808mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="2.400046mm" pcbY="1.2499848mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="2.400046mm" pcbY="1.7498314mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="1.75006mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="1.250188mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="0.750062mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="0.25019mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="-0.249936mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="-0.7498334mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="-1.2499594mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="-1.749806mm" pcbY="2.4000714mm" width="0.2800096mm" height="0.7999984mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="-2.400046mm" pcbY="1.7498314mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="-2.400046mm" pcbY="1.2499848mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="-2.400046mm" pcbY="0.749808mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="-2.400046mm" pcbY="0.2499106mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="-2.400046mm" pcbY="-0.25019mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="-2.400046mm" pcbY="-0.7500366mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="-2.400046mm" pcbY="-1.2502134mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="-2.400046mm" pcbY="-1.7500346mm" width="0.7999984mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<silkscreenpath route={[{"x":2.5000203999999258,"y":2.099995799999988},{"x":2.5000203999999258,"y":2.499969599999872}]} />
<silkscreenpath route={[{"x":2.099995799999988,"y":2.499969599999872},{"x":2.5000203999999258,"y":2.499969599999872}]} />
<silkscreenpath route={[{"x":2.5000203999999258,"y":-2.099945000000048},{"x":2.5000203999999258,"y":-2.4999950000000126}]} />
<silkscreenpath route={[{"x":2.099995799999988,"y":-2.4999950000000126},{"x":2.5000203999999258,"y":-2.4999950000000126}]} />
<silkscreenpath route={[{"x":-2.0999958000001016,"y":-2.4999950000000126},{"x":-2.4999696000000995,"y":-2.4999950000000126}]} />
<silkscreenpath route={[{"x":-2.4999696000000995,"y":-2.099945000000048},{"x":-2.4999696000000995,"y":-2.4999950000000126}]} />
<silkscreenpath route={[{"x":-2.0999958000001016,"y":2.499969599999872},{"x":-2.4999696000000995,"y":2.499969599999872}]} />
<silkscreenpath route={[{"x":-2.4999696000000995,"y":2.099995799999988},{"x":-2.4999696000000995,"y":2.499969599999872}]} />
<silkscreenpath route={[{"x":-1.6508475999999064,"y":-3.301923800000054},{"x":-1.6551836749014228,"y":-3.3348595587654017},{"x":-1.6678964032669228,"y":-3.365550800000051},{"x":-1.688119433666884,"y":-3.3919059663331836},{"x":-1.7144746000000168,"y":-3.4121289967332586},{"x":-1.745165841234666,"y":-3.4248417250985312},{"x":-1.7781016000000136,"y":-3.4291778000000477},{"x":-1.8110373587655886,"y":-3.4248417250985312},{"x":-1.841728600000124,"y":-3.4121289967332586},{"x":-1.868083766333143,"y":-3.3919059663331836},{"x":-1.888306796733218,"y":-3.365550800000051},{"x":-1.9010195250986044,"y":-3.3348595587654017},{"x":-1.9053556000001208,"y":-3.301923800000054},{"x":-1.9010195250986044,"y":-3.268988041234593},{"x":-1.888306796733218,"y":-3.2382968000000574},{"x":-1.868083766333143,"y":-3.211941633666811},{"x":-1.841728600000124,"y":-3.1917186032668496},{"x":-1.8110373587655886,"y":-3.1790058749014634},{"x":-1.7781016000000136,"y":-3.174669799999947},{"x":-1.745165841234666,"y":-3.1790058749014634},{"x":-1.7144746000000168,"y":-3.1917186032668496},{"x":-1.688119433666884,"y":-3.211941633666811},{"x":-1.6678964032669228,"y":-3.2382968000000574},{"x":-1.6551836749014228,"y":-3.268988041234593},{"x":-1.6508475999999064,"y":-3.301923800000054}]} />
<silkscreentext text="{NAME}" pcbX="-0.0073406mm" pcbY="3.656967mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.911640600000055,"y":2.906966999999895},{"x":2.8969593999999006,"y":2.906966999999895},{"x":2.8969593999999006,"y":-3.6890330000001086},{"x":-2.911640600000055,"y":-3.6890330000001086},{"x":-2.911640600000055,"y":2.906966999999895}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C9925.obj?uuid=06dba473d10b4dd5b9163c6f32461fab",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C9925.step?uuid=06dba473d10b4dd5b9163c6f32461fab",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.010033000000021275, y: -0.02004060000001573, z: 0.01 },
      }}
      {...props}
    />
  )
}
