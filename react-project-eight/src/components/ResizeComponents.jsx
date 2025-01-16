import React,{useState,useEffect} from 'react'

const ResizeComponents = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () =>setWindowWidth(window.innerWidth);
        console.log("Event Listener added")
        window.addEventListener('resize',handleResize);

        return () =>{
            console.log("Event Listener removed")
            window.removeEventListener('resize',handleResize)
        }
    },[]);
    //it will run only on first render

  return (
    <div>
      <h1>Window width:{windowWidth}</h1>
    </div>
  )
}

export default ResizeComponents
