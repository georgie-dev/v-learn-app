import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

const Register = () => {


  const [input, setInput] = useState({})

  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInput(values=>({...values, [name]:value}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    checkInputs();
  }

  const [password, setpassword] = useState(false);

  const showPassword = () =>{
    setpassword(!password)
  }

  const optionsLevel = [
   '100 Level', '200 Level', '300 Level', '400 Level'
 ];

 const optionsFaculty = [
  'FAMSS',  'FOL',  'FOS',
 ];

 const optionsFacultyScience = [
   'Applied Physics & Renewable Energy',  'Computer Science', 'Conservation & environmental Biology',  'CyberSecurity', 'Forensic Science', 'Software Engineering.'
  ];

  const optionsFacultyFAMSS = [
   'Economics',  'International Relations',  'English',
  ];

  const optionsFacultyFL = [
   'Law',
  ];

  const [dropdownValue, setdropdownValue] = useState({})

  const handleSelect=(event)=>{
   const name = event.label;
   const value = event.value;
   setdropdownValue(values=>({...values, [name]:value}))
   console.log(dropdownValue)
  }

const email = document.getElementById('email');
const CheckPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const image = document.getElementById('image')

const checkInputs= ()=> {
	const emailValue = email.value.trim();
	const passwordValue = CheckPassword.value.trim();
	const confirmPasswordValue = confirmPassword.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const imageValue = image.value

  try {
    firstNameValue === '' ? 
  setErrorFor(firstName, 'First Name cannot be blank') :
  setSuccessFor(firstName)
  } catch (error) {
    
  }

  lastNameValue === '' ?
		setErrorFor(lastName, 'Last Name cannot be blank'):
		setSuccessFor(lastName)

  passwordValue === '' ?
    setErrorFor(CheckPassword, 'Password cannot be blank') :
    passwordValue.length <= 7 ?
    setErrorFor(CheckPassword, 'Too Short') :
    setSuccessFor(CheckPassword)

  emailValue === '' ?
		setErrorFor(email, 'Email cannot be blank') :
    !isEmail(emailValue) ?
		setErrorFor(email, 'Enter a valid email') :
		setSuccessFor(email)
	
	confirmPasswordValue === '' ?
		setErrorFor(confirmPassword, 'Confirm Password') :
	  passwordValue !== confirmPasswordValue ?
		setErrorFor(confirmPassword, 'Passwords does not match') :
		setSuccessFor(confirmPassword)

    imageValue === '' ? 
    setErrorFor(image, 'Please Select an Image') :
    setSuccessFor(firstName)
  
}

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
  formControl.classList.add = 'form-element error';
  small.className= 'block text-red-500'
	small.innerText = message;
}

const setSuccessFor = (input) => {
	const formControl = input.parentElement;
	formControl.classList.add = 'form-element success';
  const small = formControl.querySelector('small');
  small.innerText = '';
}
const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


  return (
   <div className=' bg-slate-100 lg:w-2/3 w-96 h-auto border-white mx-auto rounded-xl'>
      <header className='font-Machina lg:text-4xl text-2xl font-bold p-5'>Create an Account</header>
   <div className=' flex-col lg:flex-row lg:flex pb-5 lg:mx-auto mx-4'>

      <div className='mt-6 lg:px-8 px-3 w-100 lg:w-1/2 mx-auto'>
      <form onSubmit={handleSubmit} id='form'>

         <div className='lg:flex flex-col lg:flex-row lg:gap-10 gap-3 lg:m-0 mx-auto'>
         <div className='flex flex-col lg:w-1/2 w-80 '>
          <input
          type='text'
          name='firstname'
          id='firstName'
          value={input.firstname ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
          placeholder='First Name'
          />
          <small className='hidden'>Error message</small>
       </div>

       <div className='flex flex-col mt-6 lg:m-0 lg:w-1/2 w-80'>
          <input
          type='text'
          name='lastname'
          id='lastName'
          value={input.lastname ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
          placeholder='Last Name'
          />
          <small className='hidden'>Error message</small>
       </div>
         </div>

       <div className='flex flex-col  mt-6 lg:w-full w-80'>
          <input
          type='email'
          name='email'
          id='email'
          value={input.email ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina placeholder:float-right'
          placeholder='@email.com'
          />
          <small className='hidden'>Error message</small>
       </div>

       <div className='flex lg:flex-row flex-col gap-10 mt-6'>
         <div className='flex flex-col lg:w-1/2 w-80 '>
      <Dropdown 
       options={optionsFaculty}  
       name='faculty' 
       value={dropdownValue.faculty || ""} 
       onChange={handleSelect}
       className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 placeholder:font-Machina faculty'
       placeholder="Select your Faculty" />
       </div>

       <div className='flex flex-col lg:w-1/2 w-80'>
       <Dropdown 
       options={optionsLevel}  
       name='level' 
       value={dropdownValue.level || ""} 
       onChange={handleSelect}
       className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 placeholder:font-Machina level'
       placeholder="Select your level" />
       </div>
         </div>

         <div className='flex flex-col mt-6 lg:w-full w-80 '>
      <Dropdown 
      className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 placeholder:font-Machina department' 
       options={
        dropdownValue.FAMSS ? 
        optionsFacultyFAMSS : 
        dropdownValue.FOS ?
         optionsFacultyScience : 
         dropdownValue.FOL ? 
         optionsFacultyFL : []
       }  
       name='department' 
       value={dropdownValue.department || ""} 
       onChange={handleSelect}
       placeholder="Select your Department" />
       </div>


      <div>
       <div className='flex flex-col lg:flex-row mt-6 lg:gap-10 gap-3'>
         <div className='flex flex-col lg:w-1/2 w-80 relative '>
          <input
          type={
            password ? 'text': 'password'
          }
          name='password'
          id='password'
          value={input.password ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 w-100 placeholder:font-Machina'
          placeholder='Password'
          />
          <small className='hidden'>Error message</small>
          <div className='lg:hidden'>
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
       </div>

       <div className='flex flex-col lg:w-1/2 w-80 relative'>
          <input
          type={
            password ? 'text': 'password'
          }
          name='confirmPassword'
          id='confirmPassword'
          value={input.confirmPassword ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
          placeholder=' Confirm Password'
          />
          <small className='hidden'>Error message</small>
          <div className='lg:hidden'>
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
       </div>
       <div className='hidden lg:flex'>
       {
        password ?
        <AiOutlineEyeInvisible
       className=' self-center text-2xl '
       onClick={showPassword}/> :
       <AiOutlineEye
       className=' self-center text-2xl'
       onClick={showPassword}/>
       }
       </div>
         </div>
         <span className='block text-xs mt-1 font-Machina lg:w-full px-3 w-80'>Use 8 or more characters with a mix of letters, numbers & symbols</span>
         </div>

         <div className='flex flex-col mt-6 lg:w-full w-80'>
          <input
          type='file'
          name='email'
          id='image'
          value={input.image ||""}
          accept='image/*'
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 bg-white placeholder:font-Machina'
          />
          <small className='hidden'>Error message</small>
       </div>

       <div className='flex justify-between my-5 lg:w-full w-80'>
         <div>
          <Link to='/sign' className=' font-Machina px-6 text-dark'>Sign in instead?</Link>
       </div>

       <div>
          <input
          type='Submit'
          value="Next"
          className='py-2 px-6 border rounded-lg bg-main-dark-bg my-0 text-white font-bold font-Machina'
          />
       </div>
         </div>

      </form>
      </div>

    {/* <div className='absolute opacity-40'>
      <div className=' w-24 h-24 bg-gray-200 rounded-full absolute top-4 left-56'>
    </div>
    <div className=' w-24 h-24 bg-gray-200 absolute top-24 transform rotate-45 left-36'>
    </div>
    <div className=' w-24 h-24 bg-gray-200 absolute top-60 transform rotate-12 left-60'>
    </div>
    <div className=' w-40 h-24 bg-gray-200 absolute top-60 left-2 rotate-45'>
    </div>
    <div class=" w-28 overflow-hidden inline-block absolute top-0 left-10">
    <div class=" h-40 w-28 bg-gray-200 rotate-45 transform origin-top-left"></div>
    </div>
      </div> */}
    <div className=' h-full lg:w-1/2 w-80 mx-auto hidden lg:block self-center px-10'>
     <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png" alt="" />
     <p className='text-center lg:text-2xl text-xl font-bold font-Machina my-2'>Welcome to <span className='font-V'>V-</span>learn</p>
    </div>
   </div>
   </div>
  )
}

export default Register