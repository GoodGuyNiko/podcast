import '../styles/Episodes.css'

import React from 'react'

function EpisodesData(props) {
  return (
    <div className='eCard'>
      <div className='eImage'>
        <img src={props.image} alt='' />
      </div>
      <div>
      <h4>{props.heading}</h4>
      </div>
      <p>{props.text}</p>
      <div className='btnCard'><button>{props.button}</button></div>
    </div>
  )
}

export default EpisodesData
