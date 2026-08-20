import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["G1"],
  pin2: ["OUTL_POS"],
  pin3: ["PVDD1"],
  pin4: ["PGND1"],
  pin5: ["OUTL_NEG"],
  pin6: ["NC1"],
  pin7: ["SDL"],
  pin8: ["SDR"],
  pin9: ["AVDD"],
  pin10: ["NC2"],
  pin11: ["OUTR_NEG"],
  pin12: ["PGND2"],
  pin13: ["PVDD2"],
  pin14: ["OUTR_POS"],
  pin15: ["G0"],
  pin16: ["INR_POS"],
  pin17: ["INR_NEG"],
  pin18: ["AGND"],
  pin19: ["INL_NEG"],
  pin20: ["INL_POS"],
  pin21: ["EP"]
} as const

export const TPA2012D2RTJR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2.6}
      schHeight={2.2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "PVDD1",
            "AVDD",
            "PVDD2",
            "SDL",
            "SDR",
            "INL_POS",
            "INL_NEG",
            "INR_POS",
            "INR_NEG",
            "G0",
            "G1",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "NC1",
            "OUTL_POS",
            "PGND1",
            "OUTL_NEG",
            "AGND",
            "OUTR_POS",
            "PGND2",
            "OUTR_NEG",
            "NC2",
            "EP",
          ],
        },
      }}
      pinAttributes={{
        PVDD1: { requiresPower: true },
        PVDD2: { requiresPower: true },
        AVDD: { requiresPower: true },
        PGND1: { requiresGround: true },
        PGND2: { requiresGround: true },
        AGND: { requiresGround: true },
        EP: { requiresGround: true },
        SDL: { mustBeConnected: true },
        SDR: { mustBeConnected: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7717"
  ]
}}
      manufacturerPartNumber="TPA2012D2RTJR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.90754mm" pcbY="0.999998mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.90754mm" pcbY="0.499872mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.90754mm" pcbY="0mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.90754mm" pcbY="-0.500126mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.90754mm" pcbY="-0.999998mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.999998mm" pcbY="-1.90754mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.499872mm" pcbY="-1.90754mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="-1.90754mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0.500126mm" pcbY="-1.90754mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.999998mm" pcbY="-1.90754mm" width="0.2800096mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.90754mm" pcbY="-0.999998mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.90754mm" pcbY="-0.500126mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.90754mm" pcbY="0mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.90754mm" pcbY="0.499872mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.90754mm" pcbY="0.999998mm" width="0.6649974mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="0.999998mm" pcbY="1.90754mm" width="0.279908mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.500126mm" pcbY="1.90754mm" width="0.279908mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0mm" pcbY="1.90754mm" width="0.279908mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-0.499872mm" pcbY="1.90754mm" width="0.279908mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-0.999998mm" pcbY="1.90754mm" width="0.279908mm" height="0.6649974mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" width="2.6999946mm" height="2.6999946mm" shape="rect" />
<silkscreenpath route={[{"x":1.3305027999998629,"y":2.0761959999999817},{"x":2.0761959999999817,"y":2.0761959999999817},{"x":2.0761959999999817,"y":1.3305027999999766}]} />
<silkscreenpath route={[{"x":1.3305027999998629,"y":-2.076195999999868},{"x":2.0761959999999817,"y":-2.076195999999868},{"x":2.0761959999999817,"y":-1.3305027999999766}]} />
<silkscreenpath route={[{"x":-1.3305027999999766,"y":2.0761959999999817},{"x":-2.0761960000000954,"y":2.0761959999999817},{"x":-2.0761960000000954,"y":1.3305027999999766}]} />
<silkscreenpath route={[{"x":-1.3305027999999766,"y":-2.076195999999868},{"x":-2.0761960000000954,"y":-2.076195999999868},{"x":-2.0761960000000954,"y":-1.3305027999999766}]} />
<silkscreenpath route={[{"x":-2.338070000000016,"y":1.9049999999999727},{"x":-2.3406231778361644,"y":1.8856066889504746},{"x":-2.348108716494494,"y":1.867535000000089},{"x":-2.360016488885776,"y":1.852016488885738},{"x":-2.375535000000127,"y":1.8401087164944556},{"x":-2.3936066889505128,"y":1.8326231778361262},{"x":-2.413000000000011,"y":1.8300699999999779},{"x":-2.432393311049509,"y":1.8326231778361262},{"x":-2.450465000000122,"y":1.8401087164944556},{"x":-2.4659835111143593,"y":1.852016488885738},{"x":-2.477891283505528,"y":1.867535000000089},{"x":-2.4853768221638575,"y":1.8856066889504746},{"x":-2.4879300000001194,"y":1.9049999999999727},{"x":-2.4853768221638575,"y":1.9243933110494709},{"x":-2.477891283505528,"y":1.9424650000000838},{"x":-2.4659835111143593,"y":1.9579835111143211},{"x":-2.450465000000122,"y":1.9698912835056035},{"x":-2.432393311049509,"y":1.977376822163933},{"x":-2.413000000000011,"y":1.9799300000000812},{"x":-2.3936066889505128,"y":1.977376822163933},{"x":-2.375535000000127,"y":1.9698912835056035},{"x":-2.360016488885776,"y":1.9579835111143211},{"x":-2.348108716494494,"y":1.9424650000000838},{"x":-2.3406231778361644,"y":1.9243933110494709},{"x":-2.338070000000016,"y":1.9049999999999727}]} />
<silkscreentext text="{NAME}" pcbX="-0.127mm" pcbY="3.2352mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.7391999999999825,"y":2.485200000000077},{"x":2.4851999999998498,"y":2.485200000000077},{"x":2.4851999999998498,"y":-2.4851999999999634},{"x":-2.7391999999999825,"y":-2.4851999999999634},{"x":-2.7391999999999825,"y":2.485200000000077}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7717.obj?uuid=44ed5406dd034a458721bd52114b4c83",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7717.step?uuid=44ed5406dd034a458721bd52114b4c83",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0.000012699999842880061, z: 0.01 },
      }}
      {...props}
    />
  )
}
