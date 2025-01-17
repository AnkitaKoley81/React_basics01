import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChildA from './components/ChildA'
import { createContext } from 'react'

//----------------------------------------------------------------------
//STEP 1 : CREATE CONTEXT
  // STEP 2: WRAP ALL THE CHILD INSIDE PROVIDER
  //STEP 3:PASS VALUE
  //step 4:consumer ke andar jaake isko consume krlo
   const UserContext = createContext();
//------------------------------------------------------------------------

const Themecontext = createContext();

function App() {
 
  //-----------------------------------------------------
   const [user,setUser] = useState({name:"Ankita"})
   //-----------------------------------------------------

   const [theme,setTheme] = useState('light');


  return (
    <UserContext.Provider value={user}>
 <Themecontext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
      <ChildA/>
      </div>
    </Themecontext.Provider>

    </UserContext.Provider>
   





//-------------------------------------------------------------
    // <>
    // <UserContext.Provider value={user}>
    // <ChildA/>
    // </UserContext.Provider>
    
    // </>
    //-----------------------------------------------------------
  )
}

export default App
 export {UserContext}

export {Themecontext}
