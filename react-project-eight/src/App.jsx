import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import LoggerComponents from './components/LoggerComponents'
import TimerComponents from './components/TimerComponents'
import DataFetcher from './components/DataFetcher'
import ResizeComponents from './components/ResizeComponents'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
//  const[count,setCount] = useState(0)
//  const[total,setTotal] = useState(1)

//  function handleClick(){
//   setCount(count+1)
  
// }
// function handleClickTotal(){
//   setTotal(total+1);
// }

//first -> side-effect funcion
//second -> clean-up Logic
// third-> dependencies list
//-----------------------------------
// variation:1 
// runs on every render
// useEffect(()=>{
//  alert("I will run on each render")
//  },)// har ek render pe yeh work krega..yeh code 2 baar chalega ui pe because of strictmode convension


//VARIATIONS-2
// useEffect(()=>{
//  alert("I will run only 1st render")
// },[])



//VARIATIONS-3
// useEffect(()=>{
//  alert("I will run every time when count is updated")
// },[count])// count update hone ke baad chalta hai but render hone se pehle chalta hai



//VARIATIONS4
//MULTIPLE DEPENDENCIES
// useEffect(()=>{
//   alert("I will run every time when count/total is updated")
// },[count,total])



//VARIATION-5
//ISS BAR LETS ADD A CLEAN UP FUNCTION-----
// useEffect(()=>{
//   alert("count is updated")
//   return () =>{
//    alert("count is unmounted from UI")
//   }
// },[count])

  return (
    <>
     {/* <button onClick={handleClick}>Update Count</button>
     <br/>
     Count is:{count}
     <br/>
     <button onClick={handleClickTotal}>Update Total</button>
     <br/>
     total is:{total} */}

     {/* /*-----------------------------------------------------------------------------------------------------*/ }


     {/* <LoggerComponents/> */}

     {/* <TimerComponents/> */}

    {/* <DataFetcher/> */}

    {/* <ResizeComponents/> */}

    {/* <MultiEffectComponent/> */}

    </>
  )
}

export default App
