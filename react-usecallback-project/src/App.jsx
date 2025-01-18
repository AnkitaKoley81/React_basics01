// import { useCallback, useState } from 'react'

import './App.css'
import ChildComponent from './components/ChildComponent'
import ExpensiveComponents from './components/expensiveComponents'

function App() {


  // function handleClick(){
  //   setCount(count+1)
  // }

  // const handleClick = useCallback(()=>{
  //   setCount(count+1)
  // },[count])
  // return (
  //   <>
  //   <div>
  //     Count : {count}
  //   </div>
  //   <br/>
  //   <div>
  //   <button onClick={handleClick}>Increment</button>
  //   </div>
  //   <br/>
  //   <div>
  //     <ChildComponent buttonName="Click me2"
  //     handleClick = {handleClick}/>
  //   </div>
  //   </>
  //)

   return (
    <>
     
     <ExpensiveComponents/>
    </>
   )
}

export default App
// Reacr.memo->wrap->component->component re-render tabhi hoga jb props change hoga nhi toh re-rendr nhi hoga

// if you are sending a function ,then react.memo won,t be able to save u from re-rendering