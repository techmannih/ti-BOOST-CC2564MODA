import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S", "SLEEVE"],
  pin2: ["L", "TIP", "LEFT"],
  pin3: ["R", "RING", "RIGHT"],
  pin4: ["SW", "TIP_SWITCH"]
} as const

export const PJ_327C_4A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={{
        pin1: { requiresGround: true, includeInBoardPinout: true },
        pin2: { mustBeConnected: true, includeInBoardPinout: true },
        pin3: { mustBeConnected: true, includeInBoardPinout: true },
        pin4: { includeInBoardPinout: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C145813"
  ]
}}
      manufacturerPartNumber="PJ-327C-4A"
      footprint={<footprint>
        <hole pcbX="-0.0499745mm" pcbY="3.825113mm" diameter="1.5000224mm" />
<hole pcbX="-0.0499745mm" pcbY="-2.175129mm" diameter="1.5000224mm" />
<smtpad portHints={["pin3"]} pcbX="3.3498155mm" pcbY="1.524889mm" width="2.499995mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.4500185mm" pcbY="-2.624963mm" width="2.800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="3.3500695mm" pcbY="-4.274947mm" width="2.999994mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-3.4500185mm" pcbY="4.274947mm" width="2.800096mm" height="1.7999964mm" shape="rect" />
<silkscreenpath route={[{"x":-3.2499427000000196,"y":-3.7560249999999087},{"x":-3.2499427000000196,"y":-5.6749441999999135}]} />
<silkscreenpath route={[{"x":-3.2499427000000196,"y":-1.3439901999998938},{"x":-3.2499427000000196,"y":-1.493900999999937}]} />
<silkscreenpath route={[{"x":-2.5900506999998925,"y":8.905036800000062},{"x":-2.5900506999998925,"y":8.357031800000073}]} />
<silkscreenpath route={[{"x":2.489949300000035,"y":8.905036800000062},{"x":2.489949300000035,"y":8.212607400000024}]} />
<silkscreenpath route={[{"x":-2.5900506999998925,"y":8.905036800000062},{"x":2.489949300000035,"y":8.905036800000062}]} />
<silkscreenpath route={[{"x":-3.2499427000000196,"y":6.325031800000033},{"x":3.1498412999999346,"y":6.325031800000033}]} />
<silkscreenpath route={[{"x":2.489949300000035,"y":8.357031800000073},{"x":2.489949300000035,"y":6.325031800000033}]} />
<silkscreenpath route={[{"x":-3.2499427000000196,"y":-5.6749441999999135},{"x":3.1498412999999346,"y":-5.6749441999999135}]} />
<silkscreenpath route={[{"x":-2.5900506999998925,"y":8.357031800000073},{"x":-2.5900506999998925,"y":6.325031800000033}]} />
<silkscreenpath route={[{"x":3.1498412999999346,"y":6.325031800000033},{"x":3.1498412999999346,"y":2.6560018000000127}]} />
<silkscreenpath route={[{"x":3.1498412999999346,"y":0.393623800000114},{"x":3.1498412999999346,"y":-3.143834200000015}]} />
<silkscreenpath route={[{"x":3.1498412999999346,"y":-5.405958199999986},{"x":3.1498412999999346,"y":-5.6749441999999135}]} />
<silkscreenpath route={[{"x":-3.2499427000000196,"y":-1.3439901999998938},{"x":-3.2499427000000196,"y":3.1939738000000943}]} />
<silkscreenpath route={[{"x":-3.2499427000000196,"y":5.456097800000066},{"x":-3.2499427000000196,"y":6.325031800000033}]} />
<silkscreentext text="{NAME}" pcbX="-0.0065405mm" pcbY="9.902827mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.107940499999927,"y":9.152827000000002},{"x":5.094859499999984,"y":9.152827000000002},{"x":5.094859499999984,"y":-5.926773000000026},{"x":-5.107940499999927,"y":-5.926773000000026},{"x":-5.107940499999927,"y":9.152827000000002}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C145813.obj?uuid=8810aafa463640828cdf3521e8c9868b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C145813.step?uuid=8810aafa463640828cdf3521e8c9868b",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 4.4670524000001475, y: 0.23092410000026575, z: 0.00999899999999998 },
      }}
      {...props}
    />
  )
}
