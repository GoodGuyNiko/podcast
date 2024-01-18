import '../styles/Episodes.css'

import React from 'react'

function EpisodesData(props) {
  return (
    <div className='eCard'>
      <div className='eImage'>
        <img src={props.image} alt='' />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default EpisodesData
