import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import { Link } from 'react-router-dom';
import {set, ref} from 'firebase/database'
import { useStateContext } from '../../dashboard/contexts/ContextProvider';

const Register = () => {
  
  const {db} = useStateContext()
  const [input, setInput] = useState({})
  const [passwordShow, setpasswordShow] = useState(false);
  const [isValid, setisValid] = useState(false)

  const [departments, setDepartments] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [dropdown, setDropdown] = useState({});
  
  const email = document.getElementById('email');
  const matricNo = document.getElementById('matricNo');
  const CheckPassword = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const image = document.getElementById('image');
  const faculty = document.getElementById('faculty')
  const level = document.getElementById('level')
  const department = document.getElementById('department')
  
  const showPassword = () =>{
    setpasswordShow(!passwordShow)
  }
  
  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input)

    name === 'firstname' && value.trim() === '' ? 
    setErrorFor(firstName, 'First Name cannot be blank') :
    setSuccessFor(firstName)

    name === 'lastname' && value.trim() === '' ?
		setErrorFor(lastName, 'Last Name cannot be blank'):
		setSuccessFor(lastName)

    name === 'faculty' && value === '' ?
		setErrorFor(faculty, 'Please Select a Value'):
		setSuccessFor(faculty)

    name === 'level' && value === ''?
		setErrorFor(level, 'Please Select a Value'):
		setSuccessFor(level)

    name === 'department' && value === '' ?
		setErrorFor(department, 'Please Select a Value'):
		setSuccessFor(department)

    name === 'password' && value.trim() === '' ?
    setErrorFor(CheckPassword, 'Password cannot be blank') :
    name === 'password' && value.length <= 7 ?
    setErrorFor(CheckPassword, 'Too Short') :
    setSuccessFor(CheckPassword)

    name === 'email' && value.trim() === '' ?
		setErrorFor(email, 'Email cannot be blank') :
    name === 'email' && !isEmail(value) ?
		setErrorFor(email, 'Enter a valid email') :
		setSuccessFor(email)

    name === 'matricNo' && matricNo.value.trim().split('/') === '' ? 
    setErrorFor(matricNo, 'Matric Number cannot be blank') :
    name === 'matricNo' && matricNo.value.trim().split('/').includes('ADUN') === false ?
    setErrorFor(matricNo, 'This is not a valid Matric Number') :
    name === 'matricNo' && selectedFaculty === 'FOS'  && matricNo.value.trim().split('/').includes('FS') === false ?
    setErrorFor(matricNo, 'This is Matric Number does not belong to the Faculty of Science') :
    name === 'matricNo' && selectedFaculty === 'FOL' && matricNo.value.trim().split('/').includes('FL') === false ?
    setErrorFor(matricNo, 'This is Matric Number does not belong to the Faculty of Law') :
    name === 'matricNo' && selectedFaculty === 'FAMSS' && matricNo.value.trim().split('/').includes('FAMSS') === false ?
    setErrorFor(matricNo, 'This is Matric Number does not belong to the Faculty Management and Social Sciences') :
    name === 'matricNo' && matricNo.value.trim().split('/').length < 4 ?
    setErrorFor(matricNo, 'Incomplete Matric Number') :
    setSuccessFor(matricNo)
	
    name === 'confirmPassword' && value.trim() === '' ?
		setErrorFor(confirmPassword, 'Confirm Password') :
    name === 'confirmPassword' && CheckPassword.value.trim() !== confirmPassword.value.trim() ?
		setErrorFor(confirmPassword, 'Passwords does not match') :
		setSuccessFor(confirmPassword)

    name === 'image' && value.trim() === '' ? 
    setErrorFor(image, 'Please Select an Image') :
    setSuccessFor(image)
  }
  

  const facultyDepartments={
    FAMSS:['Economics',  'International Relations',  'English'],
    FOL: ['Law'],
    FOS: ['Applied Physics & Renewable Energy',  'Computer Science', 'Conservation & environmental Biology',  'CyberSecurity', 'Forensic Science', 'Software Engineering.'],
 }

 const departmentList = Object.keys(facultyDepartments).map(key => ({
  name: key
}));

  const handleFacultySelect = (e) => {
    const facultySel = e.target.value;
    const departmentSel = facultySel !== "" ? facultyDepartments[facultySel] : "";
    setSelectedFaculty(facultySel);
    setDepartments(departmentSel);
    setDropdown("");
  }

  function handleSelect(e) {
    const name = e.target.name;
    const value = e.target.value;
    setDropdown(values=>({...values, [name]:value}));
    console.log(dropdown)
  }



const checkInputs= ()=> {

  firstName.value.trim() === '' ? 
  setErrorFor(firstName, 'First Name cannot be blank') :
  setSuccessFor(firstName)


    lastName.value.trim() === '' ?
		setErrorFor(lastName, 'Last Name cannot be blank'):
		setSuccessFor(lastName)

    faculty.value === '' ?
		setErrorFor(faculty, 'Please Select a Value'):
		setSuccessFor(faculty)

    level.value === '' ?
		setErrorFor(level, 'Please Select a Value'):
		setSuccessFor(level)

    department.value === '' ?
		setErrorFor(department, 'Please Select a Value'):
		setSuccessFor(department)

    CheckPassword.value.trim() === '' ?
    setErrorFor(CheckPassword, 'Password cannot be blank') :
    CheckPassword.value.length <= 7 ?
    setErrorFor(CheckPassword, 'Too Short') :
    setSuccessFor(CheckPassword)

    email.value.trim() === '' ?
		setErrorFor(email, 'Email cannot be blank') :
    !isEmail(email.value.trim()) ?
		setErrorFor(email, 'Enter a valid email') :
		setSuccessFor(email)
	
    confirmPassword.value.trim() === '' ?
		setErrorFor(confirmPassword, 'Confirm Password') :
    CheckPassword.value.trim() !== confirmPassword.value.trim() ?
		setErrorFor(confirmPassword, 'Passwords does not match') :
		setSuccessFor(confirmPassword)

    image.value.trim() === '' ? 
    setErrorFor(image, 'Please Select an Image') :
    setSuccessFor(image)

    matricNo.value.trim() === '' ? 
    setErrorFor(matricNo, 'Matric Number cannot be blank') :
    matricNo.value.trim().split('/').includes('ADUN') === false ?
    setErrorFor(matricNo, 'This is not a valid Matric Number') :
    selectedFaculty === 'FOS'  && matricNo.value.trim().split('/').includes('FS') === false ?
    setErrorFor(matricNo, 'This is Matric Number does not belong to the Faculty of Science') :
    selectedFaculty === 'FOL' && matricNo.value.trim().split('/').includes('FL') === false ?
    setErrorFor(matricNo, 'This is Matric Number does not belong to the Faculty of Law') :
    selectedFaculty === 'FAMSS' && matricNo.value.trim().split('/').includes('FAMSS') === false ?
    setErrorFor(matricNo, 'This is Matric Number does not belong to the Faculty Management and Social Sciences') :
    matricNo.value.trim().split('/').length < 4 ?
    setErrorFor(matricNo, 'Incomplete Matric Number') :
    setSuccessFor(matricNo)
  
}

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
  formControl.classList.add = 'form-element error';
  small.className= 'block text-red-500'
	small.innerText = message;
  setisValid(false)
}

const setSuccessFor = (input) => {
	const formControl = input.parentElement;
	formControl.classList.add = 'form-element success';
  const small = formControl.querySelector('small');
  small.innerText = '';
  setisValid(true)
}
const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



const handleSubmit = (event) =>{
  event.preventDefault();
  checkInputs();
  console.log(isValid)
}

const writeUserData = (userId, name, email, imageUrl) =>{
  set(ref( db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

  return (
   <div className=' bg-slate-100 lg:w-2/3 w-96 h-auto border-white mx-auto self-center rounded-xl'>
      <header className='font-Machina lg:text-3xl text-2xl font-bold p-5'>Create an Account</header>
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
         <div className='flex flex-col lg:w-1/2 w-80  '>
           <select
          name="faculty"
          onChange={e => handleFacultySelect(e)}
          value={selectedFaculty}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
          id='faculty'
          >
          <option value="" disabled>Select your Faculty</option>
          {departmentList.map((faculty, key) => (
            <option key={key} value={faculty.name}>
              {faculty.name}
            </option>
          ))}
        </select>
         <small className='hidden'>Error message</small>
       </div>

       <div className='flex flex-col lg:w-1/2 w-80'>
       <select
          name="level"
          onChange={e => handleSelect(e)}
          value={dropdown.level || ""}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
          id='level'
        >
          <option value="" disabled>Select your Level</option>
          <option value="100 Level" >100 Level</option>
          <option value="200 Level" >200 Level</option>
          <option value="300 Level" >300 Level</option>
          <option value="400 Level" >400 Level</option>
        </select>
        <small className='hidden'>Error message</small>
       </div>
         </div>

         <div className='flex flex-col mt-6 lg:w-full w-80 '>
         <select
          name="department"
          onChange={e => handleSelect(e)}
          value={dropdown.department || ""}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
          id='department'
        >
          <option value="" disabled>Select your Department</option>
          {departments.map((department, key) => (
            <option key={key} value={department}>
              {department}
            </option>
          ))}
        </select>
        <small className='hidden'>Error message</small>
       </div>

       <div className='flex flex-col  mt-6 lg:w-full w-80'>
          <input
          type='text'
          name='matricNo'
          id='matricNo'
          value={input.matricNo ||""}
          onChange={handleChange}
          className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina placeholder:normal-case'
          placeholder='Matric Number e.g ADUN/FS/19/324'
          />
          <small className='hidden'>Error message</small>
       </div>


      <div>
       <div className='flex flex-col lg:flex-row mt-6 lg:gap-10 gap-3'>
         <div className='flex flex-col lg:w-1/2 w-80 relative '>
          <input
          type={
            passwordShow ? 'text': 'password'
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
            passwordShow ?
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
            passwordShow ? 'text': 'password'
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
            passwordShow ?
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
        passwordShow ?
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
          name='image'
          id='image'
          value={input.image ||""}
          accept='image/*'
          onChange={handleChange}
          className='block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-slate-500
          hover:file:bg-main-dark-bg
          font-Machina'
          />
          <small className='hidden'>Error message</small>
       </div>

       <div className='flex justify-between mt-4 lg:w-full w-80'>
         <div>
          <Link to='/sign' className=' font-Machina text-dark self-center'>Sign in instead?</Link>
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
    <div className=' h-full lg:w-1/2 w-80 mx-auto hidden lg:block self-center px-10'>
     <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png" alt="" />
     <p className='text-center lg:text-2xl text-xl font-bold font-Machina my-2'>Welcome to <span className='font-V'>V-</span>learn</p>
    </div>
   </div>
   </div>
  )
}

export default Register