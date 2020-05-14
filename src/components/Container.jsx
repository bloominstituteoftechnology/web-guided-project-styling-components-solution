// exports a styled div
// should bring in the .container styles inside styles.less
// should allow an optional 'flex' prop to set display: flex
// prove you can use nesting of styles, like in less
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;

  a {
    color: green;
    transition: all 1s ease-in-out;

    &:hover {
      color: red;
      transition: all 1s ease-in-out;
    }
  }
`

export default Container
