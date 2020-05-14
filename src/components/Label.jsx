// exports a styled label
// supports a 'fire' prop to set label:before as a fire (🔥) emoji
// supports a 'water' prop to set label:before as a water (🌊) emoji
// supports a 'earth' prop to set label:before as an earth (🌎) emoji
// on hover it should turn red... slowly
import styled from 'styled-components'

const Label = styled.label`
  transition: all .5s ease-in-out;
  &:before {
    content: "${pr => {
      if (pr.fire) return '🔥'
      if (pr.water) return '🌊'
      if (pr.earth) return '🌎'
      return ''
    }}";
  }
  &:hover {
    color: red;
    transition: all .5s ease-in-out;
  }
`

export default Label
