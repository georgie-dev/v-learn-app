import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login} from '../../auth/user';
import { onValue, ref } from 'firebase/database';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader'


const Login = () => {

  const {db, Toast} = useStateContext()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [password, setpassword] = useState(false);
  const [loading, setloading] = useState(false)

  const showPassword = () =>{
    setpassword(!password)
  }


  const [input, setInput] = useState({})

  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInput(values=>({...values, [name]:value}))
  }

  const formReset = ()=>{
    setInput({});
    setpassword(false)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    formReset();
    Login();
  }

  const Login = () => {
    const userID = input.matricNo.split('/').join('-')
    console.log(input)
    setloading(true)

    onValue(ref(db, 'users/' + userID), async(snapshot) => {
      console.log(snapshot.val())
      if(snapshot.exists()){
      const  userData = await snapshot.val()
      console.log(userData)

      if(userData.Password === input.password){
        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        dispatch(login(snapshot.val()))
        navigate('/dashboard')
      }else{
        Toast.fire({
          icon: 'error',
          title: 'Incorrect Details'
      })
      setloading(false)
      }
    }else{
       Toast.fire({
        icon: 'error',
        title: 'Account does not exist'
    })
    setloading(false)
  }
})
  }


  return (
   <div className=' lg:bg-white bg-slate-100 lg:w-1/2 w-80 h-2/3 self-center mx-auto rounded-xl lg:flex block lg:mt-10 mt-4'>
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
          <button
          type='Submit'
          className='py-2 px-6 border rounded-lg items-center gap-3 bg-main-dark-bg my-0 w-full text-white font-bold font-Machina cursor-pointer hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-gray-400'
          >
            { loading ? '' : 'Login'}
            <ScaleLoader
        color='#B7E8EB'
        loading={loading}
        height={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
            </button>
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