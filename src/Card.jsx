import React from 'react'
import './Card.css'

const Card = (props) => {
    console.log(props)
  return (
    <div className='Car_card'>
        <img src={props.IMAGE}></img>
        <h1>{props.TITLE}</h1>
    </div>
  )
}

export default Card