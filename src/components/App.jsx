import React, { useState } from 'react'
// reactstrap
import { Alert } from 'reactstrap';
// our stylesheet
import '../styles.less'
// our styled components
import Button from './Button'
import Container from './Container'
import Label from './Label'

// no sense in re-creating this at every render of App
const initialFormValues = {
  username: '',
  email: '',
}

export default function App(props) {
  ////////// STATE //////////
  ////////// STATE //////////
  ////////// STATE //////////
  const [count, setCount] = useState(0)
  const [formValues, setFormValues] = useState(initialFormValues)

  ////////// CALLBACKS THAT CHANGE STATE //////////
  ////////// CALLBACKS THAT CHANGE STATE //////////
  ////////// CALLBACKS THAT CHANGE STATE //////////
  const onCountIncrease = () => setCount(count + 1)

  const onInputChange = evt => {
    const inputName = evt.target.name
    const inputValue = evt.target.value
    // set values to what they were, overriding one of them
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const onResetEverything = () => {
    setFormValues(initialFormValues)
    setCount(0)
  }

  const makeStyle = count => {
    return {
      fontSize: `${(count + 1) * 2}px`
    }
  }

  ////////// JSX //////////
  ////////// JSX //////////
  ////////// JSX //////////
  return (
    <Container>
      <p>The count is: <span style={makeStyle(count)}>{count}</span></p>
      <p>Your username is: <span style={{ fontSize: `1.3em` }}>{formValues.username}</span></p>
      <p>Your email is: <span style={{ fontSize: `1.3em` }}>{formValues.email}</span></p>

      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>

      <Container>
        <Button id='incButton' textColor='white' width={120} scream color='blue' onClick={onCountIncrease}>increase</Button>
        <Button color='gold' onClick={onResetEverything}>reset everything</Button>
      </Container>

      <Container>
        <Label>User:&nbsp;
          <input name='username' value={formValues.username} onChange={onInputChange} />
        </Label><br />
        <Label fire>Email:&nbsp;
          <input name='email' value={formValues.email} onChange={onInputChange} />
        </Label>
      </Container>

      <Container>
        <span style={{ color: 'crimson' }}>❤</span>&nbsp;
        <a href="#">subscribe</a>
      </Container>
    </Container>
  )
}
