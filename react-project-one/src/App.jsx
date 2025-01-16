import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

import nature from './assets/nature.jpeg';
import parrot from './assets/parrot.jpg';
import sea2 from './assets/sea2.jpeg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-white bg-gray-500 text-center'>Ankita koley</h1>
      <UserCard name="Anoushka koley" desc="desc1" image={nature} style={{"border-radius":"10px"}}/>
      <UserCard name="suchismita mahato" desc="desc2" image={parrot} style={{"border-radius":"10px"}}/>
      <UserCard name="Ankita koley" desc="desc3" image={sea2}/>
    </>
  )
}

export default App
