import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { reset } from '../../../store/user';
import { LOGIN } from '../../../store/user';



const Login = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, userDetails } = useSelector(state => state.user)




  const [password, setpassword] = useState(false);
  const [input, setInput] = useState({});



  const formReset = () => {
    setInput({});
    setpassword(false)
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    formReset();
    // const data = JSON.stringify(input)
    // console.log(data)
    dispatch(LOGIN(input))
  }

  const showPassword = () => {
    setpassword(!password)
  }

  useEffect(() => {
    if(isAuthenticated && !userDetails.is_staff){
      navigate('/dashboard/')
    } else if(isAuthenticated && userDetails.is_staff){
      navigate('/admin/')
    }
    dispatch(reset())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, userDetails])
  

  return (
    <div className=' lg:bg-sky-50 bg-slate-100 lg:w-1/2 w-80 h-2/3 mx-auto rounded-xl lg:flex block mt-10 lg:mt-36 overflow-x-hidden '>
      <div className=' w-80 lg:w-1/2 lg:self-center mx-auto px-10'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/school-building-6464827-5349409.png" alt="" />
        <p className='text-center text-md font-bold font-Machina mt-4'>Login for full experience</p>
      </div>

      <div className='p-8 w-full lg:w-1/2 bg-slate-100 rounded-r-xl rounded-l-xl'>
        <header className='font-Machina text-4xl font-bold p-5 text-center'>Login</header>
        {/* <small className=' float-right text-gray-500 hover:text-gray-800 rounded-xl'>
          <Link to='admin'> Login as Lecturer</Link>
        </small> */}
        <form onSubmit={handleSubmit}>

          <div className='flex flex-col mt-6'>
            <input
              type='text'
              name='username'
              value={input.username || ""}
              onChange={handleChange}
              className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
              placeholder='Student/Lecturer ID'
              required
            />
          </div>


          <div className='flex flex-col mt-6 relative'>
            <input
              type={
                password ? 'text' : 'password'
              }
              name='password'
              value={input.password || ""}
              onChange={handleChange}
              className='p-2 border rounded-lg border-slate-300 my-0 w-100 placeholder:font-Machina'
              placeholder='Password'
              required
            />
            {
              password ?
                <AiOutlineEyeInvisible
                  className='text-2xl absolute right-2 top-3 opacity-50 cursor-pointer'
                  onClick={showPassword}
                /> :
                <AiOutlineEye
                  className='text-2xl absolute right-2 top-3 opacity-50 cursor-pointer'
                  onClick={showPassword}
                />
            }
          </div>

          <div className='mt-10'>
            <button
              type='Submit'
              className='py-2 px-6 border rounded-lg gap-3 flex justify-center bg-main-dark-bg my-0 w-full text-white font-bold font-Machina cursor-pointer hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
              disabled={isLoading}
            >
             Login
              <ScaleLoader
                color='#B7E8EB'
                loading={isLoading}
                height={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </button>
          </div>

          <div className='lg:mt-20 mt-10 text-center'>
            <Link to='register' className=' font-Machina text-dark'>Don't have an account? <span className=' text-blue-700'>Sign Up</span></Link>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Login