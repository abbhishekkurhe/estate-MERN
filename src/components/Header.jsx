import React from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
export default function Header() {
  return (
    <header className='bg-blue-700 shadow-md'>
      <div className='flex justify-between items-center  max-5xl mx-auto p-3'>
      <h1 className='font-extrabold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-blue-400 text-3xl'>Luxe</span>
        <span className='text-slate-300 text-3xl'>state</span>
      </h1>
      <div class="flex space-x-16 pl-5">
      <button className='text-slate-100 px-6 py-3 border-4 border-blue-950 rounded-md'>
      <Link to ="/">Home</Link>
      </button>
      <button className='text-slate-100 px-6 py-3 border-4 border-blue-950 rounded-md'>
      <Link to ="/profile">profile</Link>
      </button>
      <button className='text-slate-100 px-6 py-3 border-4 border-blue-950 rounded-md'>
      <Link to ="/about">contact</Link>
      </button>
      <button className='text-slate-100 px-6 py-3 border-4 border-blue-950 rounded-md'>
      <Link to ="/signin">register</Link>

      </button>
      </div>
      <form  className="relative w-full max-w-md mx-auto" >
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />

      <input 
        type="text" 
        placeholder="  Search for properties..." 
        class="w-full p-3 pl-10 text-slate-100 bg-slate-500 border-spacing-4 rounded-md"
    />
     
      </form>
      </div>
    </header>
  )
}
