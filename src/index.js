import React from 'react'
import Toggle from 'react-toggle'
import SunCalc from 'suncalc'

const Moon = () => {
  const phase = SunCalc.getMoonIllumination().phase
  if (phase < 0.05) {
    return '🌑'
  } else if (phase >= 0.05 && phase < 0.235) {
    return '🌒'
  } else if (phase >= 0.235 && phase < 0.275) {
    return '🌓'
  } else if (phase >= 0.275 && phase < 0.475) {
    return '🌔'
  } else if (phase >= 0.475 && phase < 0.535) {
    return '🌕'
  } else if (phase >= 0.535 && phase < 0.735) {
    return '🌖'
  } else if (phase >= 0.735 && phase < 0.775) {
    return '🌗'
  } else if (phase >= 0.775) {
    return '🌘'
  } else {
    return 'a'
  }
}

const Sun = () => {
  return '☀️'
}

const LunarToggle = props => (
  <Toggle
    {...props}
    icons={{
      checked: <Moon />,
      unchecked: <Sun />,
    }}
  />
)
export default LunarToggle
