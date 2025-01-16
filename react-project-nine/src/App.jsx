import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChildA from './components/ChildA'
import { createContext } from 'react'

//STEP 1 : CREATE CONTEXT
  // STEP 2: WRAP ALL THE CHILD INSIDE PROVIDER
  //STEP 3:PASS VALUE
  //step 4:consumer ke andar jaake isko consume krlo
  const UserContext = createContext();
function App() {
   const [user,setUser] = useState({name:"Ankita"})

  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
    
    </>
  )
}

export default App
export {UserContext}
