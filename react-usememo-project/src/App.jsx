import { useState,useMemo } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput] = useState(0)

  function expensiveTask(num){
    console.log("Inside Expensive Task : ");
    for(let i=0;i<100;i++){}
    return num*2;
  }

  // let doubleValue = expensiveTask(input)

  const doubleValue = useMemo(() => expensiveTask(Number(input)), [input]);


  return (
    <>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <br/> <br/>
      Count : {count}
      <br/> <br/>
      <input
      type ='number'
      placeholder='Enter number '
      value={input}
      onChange={(e)=> setInput(e.target.value)

      }
      />
      <br/> <br/>
      Double : {doubleValue}
    </>
  )
}

export default App

