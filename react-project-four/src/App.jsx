import { useState } from 'react'

import './App.css'
import Card from './components/card'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
  <Button handleClick={handleClick} text="click me" >
  <h1>{count}</h1>  
  </Button>
    {/* <Card name='Ankita koley'> //jb apko higher order component create krna hota hai or jb apko ak wrappers create krne hote hai tb mai ak props.childrenn wali property ko   add kr deti hu.
      <h1>Best web dev course</h1>
      <p>Trying to be consistent in this</p>
      <p>will complete this course soon</p>
      </Card>
      <Card children="mai ek children hu">
        Hello jee, kaise ho saare... // yeh line upar children ki line ko override kr rhe hai
      </Card> */}
    </>
  )
}

export default App
