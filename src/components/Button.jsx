// exports a styled <button />
// supports a 'color' prop to set the background color
// supports a 'scream' prop to make the text UPPERCASE
// supports a 'textColor' props to adjust the text color
import styled from 'styled-components'

const Button = styled.button`
  color:  ${props => props.textColor ? props.textColor : 'inherit'};
  background-color: ${props => props.color ? props.color : 'inherit'};
  text-transform: ${props => props.scream ? 'uppercase' : 'inherit'};
  width: ${pr => pr.width ? pr.width + 'px': 'inherit'};
  height: 35px;
  border-radius: 8px;
  margin: 4px;

  &:hover {
    background-color: green;
  }
`

export default Button
