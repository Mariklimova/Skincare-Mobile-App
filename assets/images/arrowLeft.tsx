import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.43 18.82c.19 0 .38-.07.53-.22l6.07-6.07c.29-.29.29-.77 0-1.06L14.96 5.4a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06L19.44 12l-5.54 5.54c-.29.29-.29.77 0 1.06.14.15.34.22.53.22z"
        fill="#fff"
      />
      <Path
        d="M3.5 12.75h16.83c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H3.5c-.41 0-.75.34-.75.75s.34.75.75.75z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
