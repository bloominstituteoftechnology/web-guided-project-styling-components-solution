// exports a styled label
// supports a 'fire' prop to set label:before as a fire (🔥) emoji
// on hover it should turn red... slowly
import styled from 'styled-components'

const Label = styled.label`
  transition: all .5s ease-in-out;
  &:before {
    content: "${pr => pr.fire ? '🔥' : 'initial'}";
  }
  &:hover {
    color: red;
    transition: all .5s ease-in-out;
  }
`

export default Label
