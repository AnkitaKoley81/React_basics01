import React from 'react'

const ChildComponent = React.memo(
    (props) => {
        console.log("Child component go re-rendered again")
      return (
        <div>
         <button onClick={props.handleClick}>
             {props.buttonName}
        </button> 
        </div>
      )
    }
    
)

export default ChildComponent
