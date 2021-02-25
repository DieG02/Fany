import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function SvgLogin(props) {
  return (
    <Svg
     width={571} height={255} 
      // width={500}
      // height={300}
      overflow="hidden"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M237 390H808V645H237z" />
        </ClipPath>
        <ClipPath id="b">
          <Path d="M238 391H807V644H238z" />
        </ClipPath>
        <ClipPath id="c">
          <Path d="M237 391H807V644H237z" />
        </ClipPath>
        <ClipPath id="d">
          <Path d="M-252 391H807V644H-252z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)" transform="translate(-237 -390)">
        <G clipPath="url(#b)">
          <G clipPath="url(#c)">
            <G clipPath="url(#d)">
              <Path
                d="M-251.27 492.2l25.207 12.65c25.208 12.65 75.476 37.95 126.184 46.41 50.195 8.143 100.683.237 150.657-25.3 50.709-25.064 101.417-67.757 151.391-84.36 50.489-16.603 100.683-8.697 151.392 21.11 50.268 29.49 100.682 80.09 151.391 109.58 50.047 29.807 100.683 37.713 150.657 16.92C706.244 568.1 756.29 517.5 782.01 492.2L807 466.9V644H-251.27z"
                fill="#1DCCE3"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SvgLogin
