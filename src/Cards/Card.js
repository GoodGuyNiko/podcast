import React from 'react'



function Card(props) {
  return (
    <div className='card'>
        <div cardBody>
            <img src={props.img} />
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardDescription'>{props.description}</p>
        </div>
        <button className='cardBtn'>Mehr</button>
    </div>
  )
}

export default Card;
