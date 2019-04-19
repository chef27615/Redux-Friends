import React from 'react'

const Friend = props => {

  console.log(props)
  return (
    <li>{props.friend.name}</li>
  )
}

export default Friend;
