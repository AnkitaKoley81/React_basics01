import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync kardungi
const [name,setName] = useState('');

  return (
    <div>
    { <Card title="Card1" name={name} setName={setName}/> /*HAR EK CARD KO NAME AND SETNAME USE KRNE KA ACCESS DE DIYA */}
    <Card title="Card2" name={name} setName={setName}/>
    {/* <p>I am inside Parent component and Value of name is : {name}</p> */}
    </div>
  )
}

export default App
//app component hai parent component and Card component is child component