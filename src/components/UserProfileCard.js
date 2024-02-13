import '../styles/UserProfile.css'
import React from 'react'

function UserProfileCard(props) {
  return (
    <div className='uCard'>
      <div className='uImage'>
        <img src={props.image} alt='' />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button>{props.button}</button>
    </div>
  )
}

export default UserProfileCard
