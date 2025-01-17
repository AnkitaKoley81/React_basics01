import React,{useContext} from 'react'
import { UserContext } from '../App'
import { Themecontext } from '../App'


const ChildC = () => {
const user = useContext(UserContext)
const {theme,setTheme} = useContext(Themecontext)

function toggeltheme(){
if(theme === 'light'){
  console.log('dark')
  setTheme('Dark')
}
else{
  console.log('light')
  setTheme('light')
}

}
  return (
    <div>
    <button onClick={toggeltheme}>
      Change Theme
    </button>
    data:{user.name}
    </div>
  )
}

export default ChildC
