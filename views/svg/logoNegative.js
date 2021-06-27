import * as React from "react"
import Svg, { Defs, G, Rect, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 173" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_2-2" data-name="Layer 2">
          <Rect width={173} height={173} rx={86.5} fill="#FFF" />
          <Path
            fill="#3a86fc"
            d="M75.74 88.29C62.71 72 60.08 69.11 60 63.49c-.13-10.09 8.13-17.36 10-19 12.67-11.16 34.56-12.34 38.62-5.77C112.8 45.5 94.21 54.4 91.1 77.11c-2.35 17.24 5.9 30.27 2.9 31.56-1.72.72-4.54-3.24-18.26-20.38zM106.72 116c-3.57-.17-5.11-14.85-4.83-24.64-.54-7.1 6.33-36.77 16-39.33 8.21-2.91 21.39 2.35 23.42 9.47 2.34 8.17-11.82 12.41-23.58 32.26-7.73 13.06-8.16 22.37-11.01 22.24zM87.67 115.23c-8.8 3.37-12.22 18.32-8.68 24.13 5 8.2 26.29 2.38 27.91-6.66 1.29-7.21-9.07-21.37-19.23-17.47zM82.37 110.51c-.41 5.09-17.6 11.43-31.83 5.22-10.41-4.55-21.49-16.81-18.72-27.3 1.53-5.8 7.35-11.28 12.73-10.84 6 .47 7 7.81 15.73 16.86C72 106.64 82.7 106.44 82.37 110.51z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
