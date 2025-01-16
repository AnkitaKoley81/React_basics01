import React from 'react'
import './Counter.css'
import { useState } from 'react'
const Counter = () => {
const [count,setCount] = useState(13);
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked {count} times </p>
      <button id='button' onClick={() =>{setCount(count+1)}}>Click me</button> // bss maine state variable ko update kia ui pe apne ap update ho jayega
    </div>
  )
}

export default Counter
