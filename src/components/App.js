import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants'
import Details from './Details'
import styled from 'styled-components'

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.secondaryColor};
  border: ${props => props.border ? '1px solid ' + props.theme.black : 'initial'};
  margin: 6px;
  padding: 6px;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  button {
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.white};
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotateZ(180deg) scale(1.2);
      transition: all 0.5s ease-in-out;
    }
  }
`

export default function App() {
  const [friends, setFriends] = useState([])
  const [currentFriendId, setCurrentFriendId] = useState('1')

  const openDetails = id => {
    setCurrentFriendId(id)
  }

  const closeDetails = () => {
    setCurrentFriendId(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/friends?api_key=${API_KEY}`)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const Friend = ({ info, border }) => (
    <StyledFriend border={border}>
      {info.name}
      <button onClick={() => openDetails(info.id)}>
        See details
      </button>
    </StyledFriend>
  )

  return (
    <div className='container'>
      <h1>My friends:</h1>
      {
        friends.map((fr, idx) => {
          return <Friend border={idx % 2 === 0} key={fr.id} info={fr} />
        })
      }
      {
        currentFriendId && <Details key={currentFriendId} color='lightcyan' friendId={currentFriendId} close={closeDetails} />
      }
    </div>
  )
}
