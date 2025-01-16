import React,{useEffect,useState} from 'react'

const MultiEffectComponent = () => {
    const [count,setCount] = useState(0)
    const [seconds,setSeconds] = useState(0)

    useEffect(()=>{
        console.log('Count changed: ',count);
    },[count])

    useEffect(()=>{
        const intervalid = setInterval(()=>{
            console.log("setInterval started")
        setSeconds(preSeconds=>preSeconds+1);
        },1000)
        return () =>{
            console.log("Time to stop")
            clearInterval(intervalid);
        }
    },[]);
    //it will run only on first render
  return (
    <div>
     <h1>Count: {count}</h1> 
     <button onClick={()=>setCount(count+1)}>Increment Count</button>
     <h2>Seconds:{seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
