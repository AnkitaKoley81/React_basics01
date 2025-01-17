import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  // // let val = 1;
  // let val = useRef(0);// val ak object bann gya hai.USEREF VALUE KO PERSISTS KRTE HAI ACROSS RERENDERS
  // let btnRef = useRef();

  // function handleClick(){
  //   val.current = val.current+1
  //   console.log("Value of val : ",val.current)
  //   setCount(count+1)
  // }

  // function changecolor(){
  //     btnRef.current.style.backgroundColor = "red"
  // }
  // //IT RUNS ON EVERY RENDER
  // useEffect(()=>{
  //   console.log("mai firse render ho gya hu")
  // })
  //----------------------------------------------------------
 
  const [time,setTime] = useState(0);
  let timerRef = useRef(null)

  function startTimer(){
  timerRef.current = setInterval(()=>{ //setInterval ak value return krta hai.ley say x
   setTime(time => time+1) // yha pe galti hua tha
 },1000)
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer(){
   stopTimer();
   setTime(0)
  }

  return (
    <>
     {/* <button
     ref = {btnRef}
     onClick={handleClick}>Increment</button>
     <br/>
     <br/>
     <button onClick={changecolor}>
      Change color of 1st button
     </button>
     <br/>
     <br/>
     Count:{count} */}




     <h1>StopWatch : {time} seconds</h1>
     <button onClick={startTimer}> 
      Start
     </button>
     <br/> <br/>
     <button onClick={stopTimer}> 
      Stop
     </button>
     <br/> <br/>
     <button onClick={resetTimer}> 
      Reset
     </button>
     <br/> <br/>

    </>
  )
}

export default App
