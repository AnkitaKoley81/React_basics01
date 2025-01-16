

import React ,{useState,useEffect} from 'react'

// VARIATION 1 WALA SYNTAX
const LoggerComponents = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log('component rendered or count changed:',count)
    })
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increament</button>
    </div>
  );
}

export default LoggerComponents
