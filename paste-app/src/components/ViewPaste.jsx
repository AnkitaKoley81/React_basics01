import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams, useSearchParams} from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'   

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes);
  const paste = allPastes.filter((p)=>p._id === id)[0];
  console.log("Final Paste : ",paste)

  return (
    <div>
     <div className='flex flex-row gap-7 place-content-between'>
     <input
     className='p-1 pl-4 rounded-2xl mt-2 w-[67%] '
     type='text'
     placeholder='Enter title here'
     value={paste.title}
     disabled
     onChange={(e)=>setTitle(e.target.value)}
     />
     {/* <button 
     onClick={createPaste}
     className='p-2 rounded-2xl mt-2 '>
      {
 pasteId ? "Update my paste" : "Create my paste"
      }    
     </button> */}
    </div>
    <div>
      <textarea
      className='rounded-2xl mt-4 min-w-[500px]  p-4'
      value = {paste.content}
      placeholder='enter content here'
      disabled
      onChange={(e)=>setValue(e.target.value)}
      rows={20}/>
     </div>
     
   </div>
  )
}

export default ViewPaste
