import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgRegister(props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={469}
      height={300}
      overflow='hidden'
      {...props}
    >
      <Path
        fill={props.color}
        d='M-67.497 239.57C-67.497 108.363 69.727 2 239 2c169.273 0 306.497 106.363 306.497 237.57 0 131.205-137.224 237.568-306.497 237.568-169.273 0-306.497-106.363-306.497-237.568z'
      />
    </Svg>
  )
}

export default SvgRegister