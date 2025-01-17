import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },//isSubmitting--> kya apki form submit hne wali state pe hain??
  } = useForm()

  async function onSubmit(data){
    //API CALL KO SIMULATE KRNA HAI
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("Submitting the form",data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input 
        className={errors.firstName?'input-error':""}
        {...register('firstName',
          {
            required:true,
          minLength:{value:3,message:'Min Len atleast 3'},
          maxLength:{value:6,message:'Max length at most 6'}
          })}/>           {/* is input ko form ke sath explicitely attach korte hobe*/}
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
          
      </div>
      <br/>
      <div>
        <label>Middle Name: </label>
        <input 
         className={errors.middleName?'input-error':""}
        {...register('middleName')}/>
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input 
                 className={errors.lastName?'input-error':""}
        {...register('lastName',{

          pattern:{
            value: /^[A-Za-z]+$/i,
            message:"Last name is not as per the rules"
          }
        })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting} value={isSubmitting ? "Submitting" : "submit"}/>
      
    </form>
    </>
  )
}

export default App
