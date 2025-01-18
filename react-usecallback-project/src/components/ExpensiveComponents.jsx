import React, { useCallback, useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const ExpensiveComponents = () => {
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");
    const previousFunction = useRef(null)
// function run hobe but recreate hobe na tar jonno use callback ko hum use krte hai
    const expensiveCalculation=useCallback(() =>{
        console.log("Running expensive calculations")
        let result=0;
        for(let i=0;i< 1000000;i++){
        result+=i;
        }
        return result;
    },[count])//jokhone amar count update hobe tokhonee function recreate hobe

    useEffect(() =>{
        if(previousFunction.current){
        if(previousFunction.current === expensiveCalculation){
            console.log("Function not re-created")
        }
        else{
            console.log("Function got created")
        }
        }
        else{
            previousFunction.current = expensiveCalculation
        }

    },[expensiveCalculation])
    
  return (
    <div>
      <input
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='Type something'
      />
      <p>Expensive Calculation Result:{expensiveCalculation()}</p>
      <button onClick={()=>setCount(count+1)}>Increment count</button>
    </div>
  )
}

export default ExpensiveComponents
