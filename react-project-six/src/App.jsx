import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logout from './components/Logout';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn,setLoggedIn] = useState(false);

  // if(isLoggedIn){
  //   return (
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }


  // return(
  //   <div>
  //     {isLoggedIn ? <Logout/> : <LoginBtn/>}
  //   </div>
  // )

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  } 
  return(
    <div>
      <h1>Welcom everyone to codehelp web dev course</h1>
      <div>
      {isLoggedIn && <Logout/>}
    </div>
    </div>
  )


}

export default App
