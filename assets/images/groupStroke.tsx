import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={76}
      height={2}
      viewBox="0 0 76 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 1h15.8M20.067 1h15.799"
        stroke="#A2AA7B"
        strokeOpacity={0.35}
        strokeWidth={2}
      />
      <Path d="M40.134 1h15.799" stroke="#A2AA7B" strokeWidth={2} />
      <Path
        d="M60.201 1h15.8"
        stroke="#A2AA7B"
        strokeOpacity={0.35}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default SvgComponent
