// DESCRIPTION--Is project mei input ,button,para te event lagia take handle kore6i

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
 function handleClick(){
  alert("I am Clicked")
 }
 function handleMouseOver(){
    alert("para k upar mouse leke aaye ho")
 }

 function handleInputChange(e){
    // console.log("Input mei value change hua hai");
    console.log("value till now:" , e.target.value);
 }

 function handleSubmit(e){
  e.preventDefault();
  //I am writing my custom behaviour
  alert("Form submit krdu kya");
 }
  return (
    <>

    {/* <button onClick={alert("button clicked hua hai")}> */}   {/* IMPORTENT QUESTION*/}
      {/* THIS IS IMMEDIATE INVOCATION.THIS IS NOT THE RIGHT PROCESS */}
      <button onClick={()=>alert("button clicked hua hai")}> {/* tHIS IS CORRECT PROCESS .IS WAY MEI FUNCTION K REFERENCE PASS KRO RATHE THAN IMMEDIATE INVOCATION*/}
     Click me..
    </button>

{/* <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleInputChange}/>
      <button type='submit'>Submit</button>
    </form> */}


    {/* <form>
      <input type='text' onChange={handleInputChange}/>
    </form> */}


    {/* <p onMouseOver={ handleMouseOver} style={{border:"1px solid black"}}>
      I am a para
    </p>


    {/* <button onClick={handleClick}>Click me!!</button> */}
    {/* <button onClick={()=>{alert("I got selected")}}>Click me!!</button> */}
      
    </>
  )
}

export default App
