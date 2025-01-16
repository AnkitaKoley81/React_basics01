import React,{useState,useEffect} from 'react';



const TimerComponents = () => {
    const [seconds,setSeconds] = useState(0)

    useEffect(()=>{
        const intervalid = setInterval(() =>{
            console.log("setInterval executed")
            setSeconds((prevSeconds=>prevSeconds+1));
        },1000)

        return () =>{
            console.log("time to stop")
            clearInterval(intervalid) 
        }
          
    },[])
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponents
