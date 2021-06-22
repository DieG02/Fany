import * as React from 'react'
import { MAIN } from '../Home/homeStyles'
import Svg, { Ellipse } from 'react-native-svg'

function SvgHome(props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={275}
      height={props.height}
      fill='none'
      viewBox='0 0 214 120'
      {...props}
    >
      <Ellipse cx={55} cy={15} fill={MAIN} rx={159} ry={105} />
    </Svg>
  )
}

export default SvgHome
