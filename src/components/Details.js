import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'

const kf = keyframes`
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const Button = styled.button`
  border: 1px solid grey;
  font-size: ${pr => pr.big ? '2em' : '1em'};
  height: ${pr => pr.big ? '3em' : '2em'};
  width: ${pr => pr.big ? '6em' : '4em'};
  color: white;
  background-color: darkcyan;
  transition: all 0.15s ease-in-out;

  &:hover {
    transition: all 0.15s ease-in-out;
    background-color: cyan;
    color: black;
  }
`

const StyledDetails = styled.div`
  background-color: ${pr => pr.color ? pr.color : 'initial'};
  overflow: hidden;
  animation: ${kf} 0.5s ease-in-out forwards;
  transform: scale(0);
  opacity: 0;

  p {
    color: red;

    &:nth-of-type(2) {
      color: green;
    }
  }
`

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [])

  return (
    <StyledDetails red={details && details.hobbies.includes('fishing')} className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <Button big onClick={close}>Close</Button>
    </StyledDetails>
  )
}
