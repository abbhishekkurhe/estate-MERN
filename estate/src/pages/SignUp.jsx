import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='p-10'>
    <div className='mb-4 max-w-lg mx-auto bg-slate-200'>
      <h1 className='text-3xl text-center font-extrabold text-slate-800'>Sign In</h1>
      <form  className='flex flex-col gap-3 p-3'>

      <input type='text' placeholder='username' className='border p-4 rounded-lg' id='username'/>

      <input type='email' placeholder='email' className='border p-4 rounded-lg' id='email'/>

      <input type='password' placeholder='password' className='border p-4 rounded-lg' id='password'/>
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled-80'>Sign In</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>
          Do not have an account?
        </p>
        <Link to={"/SignIn"}>
        <span className='text-blue-700'>Sign Up</span></Link>
      </div>
    </div>
    </div>
  )
}
