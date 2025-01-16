import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* {props.name} */}
      <input type='text' onChange={(e)=>props.setName(e.target.value)} /> //EVENT HANDELLING.
      <p>Name state variable ki value inside {props.title} : {props.name}</p>
    </div>
    )
  
}

export default Card
