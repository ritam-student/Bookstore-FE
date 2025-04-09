import React from 'react'
import { Link } from 'react-router-dom' 

import { FaGoogle } from "react-icons/fa";


const Login = () => {
  return (
    <div className=' min-h-screen  flex  items-center justify-center'>
        <div className=' mt-4 mb-10 flex items-center justify-center'>
            <div className='items-center px-4 pt-4 pb-6 sm:w-[350px] shadow-lg rounded border-gray-300 border  bg-white'>
                
                <p className='text-xl font-semibold mb-4'>Please Login</p>

                <form>
                <label htmlFor='email' className='font-medium text-sm'>Email</label>
                <input type='email' placeholder='Email Address' className='px-1 py-1 border border-gray-300 shadow-lg mt-2 mb-3 w-full focus:outline-none'></input>
                <label htmlFor='password' className='font-medium text-sm'>Password</label>
                <input type='password' placeholder='Password' className='px-1 py-1 border border-gray-300 shadow-lg mt-2 mb-3 w-full focus:outline-none'></input>
                <button className='bg-blue-500 text-white px-3 py-1 rounded-sm  border border-slate-700 hover:bg-black my-4'>Login</button>
                </form>
                <p className='text-sm'>Haven't an account? Please <Link to={"/register"} className='text-blue-500 hover:text-blue-950 hover:underline'>Register</Link></p>
                <div className='bg-slate-900 hover:bg-slate-700 text-white flex items-center justify-center space-x-2 py-2 rounded-sm mt-4 cursor-pointer'>
                <FaGoogle /> 
                    <p>Sign in with Google</p>
                </div>
                <p className='text-gray-500 flex justify-center items center mt-2 text-xs'>All rights reserved</p>
            </div>
        </div>
    </div>
    )
}

export default Login