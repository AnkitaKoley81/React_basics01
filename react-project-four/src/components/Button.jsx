// we want to pass a function
import React from 'react'

const Button = (props) => {
    
  return (
    <div>
        {props.children}
       <button onClick={props.handleClick}>
        {props.text}
    </button>  
    </div>
   
  )
}

export default Button
