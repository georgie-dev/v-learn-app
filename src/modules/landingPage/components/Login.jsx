import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import { Link } from 'react-router-dom';


const Login = () => {


  const [password, setpassword] = useState(false);

  const showPassword = () =>{
    setpassword(!password)
  }


  const [input, setInput] = useState({})

  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInput({...value, [name]:value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
  }


  return (
   <div className=' lg:bg-white bg-slate-100 lg:w-1/2 w-80 h-auto mx-auto rounded-xl lg:flex block lg:mt-10 mt-4'>
      <div className=' w-80 lg:w-1/2 lg:self-center mx-auto px-10'>
     <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-using-secure-login-5840421-4873747.png" alt="" />
     <p className='text-center text-md font-bold font-Machina mt-4'>Login for full experience</p>
    </div>

      <div className='p-8 w-full lg:w-1/2 bg-slate-100 rounded-r-xl rounded-l-xl'>
      <header className='font-Machina text-4xl font-bold p-5 text-center'>Login</header>
      <form onSubmit={handleSubmit}>

       <div className='flex flex-col mt-6'>
          <input
          type='text'
          name='matricNo'
          value={input.matricNo ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
          placeholder='Matric No'
          />
       </div>

       
         <div className='flex flex-col mt-6 relative'>
          <input
          type={
            password ? 'text': 'password'
          }
          name='password'
          value={input.password ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 w-100 placeholder:font-Machina'
          placeholder='Password'
          />
          {
            password ?
            <AiOutlineEyeInvisible 
          className='text-2xl absolute right-2 top-3 opacity-50 cursor-pointer'
           onClick={ showPassword}
          /> :
          <AiOutlineEye
          className='text-2xl absolute right-2 top-3 opacity-50 cursor-pointer'
           onClick={ showPassword}
          />
          }
       </div>

       <div className='mt-10'>
          <input
          type='Submit'
          value="Login"
          className='py-2 px-6 border rounded-lg bg-main-dark-bg my-0 w-full text-white font-bold font-Machina'
          />
       </div>

       <div className='lg:mt-20 mt-10 text-center'>
          <Link to='register' className=' font-Machina text-dark'>Don't have an account? Sign Up</Link>
       </div>

      </form>
      </div>

   </div>
  )
}

export default Login