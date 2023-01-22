/* eslint-disable eqeqeq */
import React from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { ref, onValue, update } from 'firebase/database'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import ScaleLoader from 'react-spinners/ScaleLoader'
import { useNavigate } from 'react-router-dom'

import {BsBoxArrowRight} from 'react-icons/bs'

const CourseRegistration = () => {
  const {db, Toast} = useStateContext()
  const select= useSelector(state=> state.user.userDetails)

  const [semester, setsemester] = useState("FirstSemester");
  const [coursesReg, setcoursesReg] = useState([])

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [loading, setloading] = useState(false)

  const navigate = useNavigate()

  const handleSemesterSelect = (e) => {
    const semester = e.target.value;
    setsemester(semester);
    setIsCheckAll(false)
    setIsCheck([]);
  }
  const dbSemester= semester.split(' ').join('')
  const level= select.Level.split(' ')
  const department= select.Department.split(' ').join('');




  useEffect(() => {
    const coursesAPI = ref( db, `courses/${select.Faculty}/${department}/${level[0]}/${dbSemester}`)
    onValue(coursesAPI, (snapshot)=>{
      const courses= snapshot.val()
      setcoursesReg(courses)  
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semester])


  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(coursesReg.map(value => value))
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const onChange = e => {
    const { id, checked } = e.target;
    // eslint-disable-next-line array-callback-return
    coursesReg.filter((item ) => {
      if(item.id == id){
        setIsCheck([...isCheck, item])
      }
    });
    if (!checked) {
      setIsCheck(isCheck.filter(item => item.id != id));
    }
  };

  const totalCreditUnit = isCheck.map((e) => e.courseUnit).reduce((a, b) => a + b, 0);
  const user= select.MatricNumber
  const userID= user.split('/').join("-")


  const dashboard = async()=>{
    if(totalCreditUnit === 0){
      await Toast.fire({
        icon: 'error',
        title: 'You must Register a minimum of one Course'
      })
    }else if(totalCreditUnit >24){
      await Toast.fire({
        icon: 'error',
        title: 'You cannot register above 24 Credit Units'
      })
    }else{
      setloading(true)
     await Toast.fire({
        icon: 'success',
        title: 'Success'
      })
      update(ref(db, 'users/' + userID ),  {
        courses: isCheck
      })
      navigate('/dashboard')
    }
  }

  return (
    <div className=' bg-slate-100 lg:w-auto w-96 h-auto border-white mx-auto self-center rounded-xl px-4'>
      <header className='font-Machina lg:text-3xl text-2xl font-bold p-5'>Register your Courses</header>
      <div className='flex flex-col lg:flex-row gap-5 mt-4 mx-10'>
      <div>
       <select
          className='p-2 w-72 lg:w-auto  rounded-lg border bg-white border-slate-300 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option>{select.Faculty}</option>
        </select>
       </div>
       <div>
       <select
          className='p-2  w-72 lg:w-auto rounded-lg border bg-white border-slate-300 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option>{select.Department}</option>
        </select>
       </div>
       <div>
       <select
          className='p-2  w-72 lg:w-auto rounded-lg border bg-white border-slate-300 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option>{select.Level}</option>
        </select>
       </div>
       <div className='w-80'>
        
       <select
          name="semester"
          value={semester || ''}
          onChange={handleSemesterSelect}
          className='p-2 w-72 lg:w-auto rounded-lg border bg-white border-slate-300 font-Machina disabled:cursor-not-allowed'
        >
          <option value='First Semester'>First Semester</option>
          <option value='Second Semester'>Second Semester</option>
        </select>
       </div>
      </div>

      <div>
        <div className='flex my-4 mx-auto border-2 rounded-md p-3'>
          <table className='mx-auto'>
            <thead>
              <tr>
              <th className='lg:px-10' scope="col">
                    <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    onChange={handleSelectAll}
                    checked={isCheckAll}
                    />
                  </th>
                  <th className='lg:px-10' scope="col">S/N</th>
                  <th className='lg:px-10' scope="col">Course Code</th>
                  <th className='lg:px-10' scope="col">Course Title</th>
                  <th className='lg:px-10' scope="col">Status</th>
                  <th className='lg:px-10' scope="col">Credit Unit</th>
              </tr>
            </thead>
            <tbody>
              {coursesReg.map((data)=>(
                <tr key={data.id}>
                      <th className='lg:px-10' scope="row">
                      <input
                        key={data.id}
                        type="checkbox"
                        id={data.id}
                        onChange={onChange}
                        checked={isCheck.includes(data)}
                      />
                    </th>
                  <td className='lg:px-10 px-3 py-2'>{data.id}</td>
                  <td className='lg:px-10 px-3 py-2'>{data.courseCode}</td>
                  <td className='lg:px-10 px-3 py-2'>{data.courseTitle}</td>
                  <td className='lg:px-10 px-3 py-2'>{data.courseStatus}</td>
                  <td className='lg:px-10 px-3 py-2'>{data.courseUnit}</td>
                </tr>
              ))
                
              }
            </tbody>
          </table>
        </div>
        <div className='flex justify-between my-2'>
        <p
        className='py-2 px-6 text-xs lg:text-sm border rounded-lg bg-gray-500 my-0 text-slate-800 font-bold font-Machina cursor-pointer items-center hover:bg-slate-700 flex gap-2'
        >Total Credit Unit: {totalCreditUnit}</p>

        <button
        type='button'
        onClick={dashboard}
        className='py-2 text-xs lg:text-sm px-6 border rounded-lg bg-main-dark-bg my-0 text-white font-bold font-Machina cursor-pointer items-center hover:bg-slate-700 flex gap-2 disabled:cursor-not-allowed disabled:bg-gray-400'
      >
        Proceed to Dashboard {!loading? <BsBoxArrowRight/>:
               <ScaleLoader
               color='#B7E8EB'
               loading={loading}
               height={20}
               aria-label="Loading Spinner"
               data-testid="loader"
             />
       }


      </button>
        </div>
      </div>
    </div>
  )
}

export default CourseRegistration
