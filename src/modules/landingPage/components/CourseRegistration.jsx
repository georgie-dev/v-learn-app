/* eslint-disable eqeqeq */
import React from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import ScaleLoader from 'react-spinners/ScaleLoader'
// import { useNavigate } from 'react-router-dom'

import { BsBoxArrowRight } from 'react-icons/bs'
import {REGISTER_COURSE} from '../../auth/user'
import axiosInstance from '../../auth/axios'
import Swal from "sweetalert2";

const CourseRegistration = () => {

  const [semester, setSemester] = useState("First Semester");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [coursesReg, setCoursesReg] = useState([])
  const [totalUnit, setTotalUnit] = useState(0)


  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const { faculty, level, department} = useSelector(state => state.user.userDetails)
  const {isLoading} =useSelector(state=> state.user)


  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  


  const handleSemesterSelect = (e) => {
    const semester = e.target.value;
    setSemester(semester);
    setIsCheckAll(false)
    setIsCheck([]);
  }



  useEffect(() => {
    const fetchCourses =async()=>{
      try{
        const courses= await axiosInstance.get(`/api/courses/?level=${level}&department=${department}&semester=${semester}`)
        setCoursesReg(courses.data.results)
      }
      catch(error){
        Toast.fire({
          icon: 'error',
          title: error
        });
      }
    }
    
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semester])


  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(coursesReg.map(value => value.id))
    const totalUnit =coursesReg.map(value=>value.courseUnit)
    setTotalUnit(totalUnit.reduce((a,b)=>a + b, 0))
    if (isCheckAll) {
      setIsCheck([]);
      setTotalUnit(0);
    }
  };

  const onChange = e => {
    const { id, checked, value } = e.target;
    // eslint-disable-next-line array-callback-return
    coursesReg.filter((item) => {
      if (item.id == id) {
        setIsCheck([...isCheck, item.id])
        setTotalUnit(totalUnit + item.courseUnit )
      }
    });
    if (!checked) {
      setIsCheck(isCheck.filter(item => item != id));
      setTotalUnit(totalUnit - value)
    }

  };

  useEffect(() => {
    if(isCheck.length === coursesReg.length && isCheck.length !== 0){
      setIsCheckAll(true)
    }else{
      setIsCheckAll(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck])
  


  const courseRegister = async () => {
    if (totalUnit === 0) {
      await Toast.fire({
        icon: 'error',
        title: 'You must Register a minimum of one Course'
      })
    } else if (totalUnit > 24) {
      await Toast.fire({
        icon: 'error',
        title: 'You cannot register above 24 Credit Units'
      })
    } else {
        dispatch(REGISTER_COURSE(isCheck))
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
            <option>{faculty}</option>
          </select>
        </div>
        <div>
          <select
            className='p-2  w-72 lg:w-auto rounded-lg border bg-white border-slate-300 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
            disabled
          >
            <option>{department}</option>
          </select>
        </div>
        <div>
          <select
            className='p-2  w-72 lg:w-auto rounded-lg border bg-white border-slate-300 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
            disabled
          >
            <option>{level}</option>
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
                <th className='lg:px-5 text-center' scope="col">Course Code</th>
                <th className='lg:px-5 text-center' scope="col">Course Title</th>
                <th className='lg:px-5 text-center' scope="col">Status</th>
                <th className='lg:px-5 text-center' scope="col">Credit Unit</th>
              </tr>
            </thead>
            <tbody>
              {coursesReg.map((data) => (
                <tr key={data.id}>
                  <th className='lg:px-10' scope="row">
                    <input
                      key={data.id}
                      type="checkbox"
                      id={data.id}
                      value={data.courseUnit}
                      onChange={onChange}
                      checked={isCheck.includes(data.id)}
                    />
                  </th>
                  <td className='lg:px-10 px-1 text-center py-2'>{data.courseCode}</td>
                  <td className='lg:px-10 px-1 text-center py-2'>{data.courseTitle}</td>
                  <td className='lg:px-10 px-1 text-center py-2'>{data.courseStatus}</td>
                  <td className='lg:px-10 px-1 text-center py-2'>{data.courseUnit}</td>
                </tr>
              ))

              }
            </tbody>
          </table>
        </div>
        <div className='flex justify-between my-2'>
          <p
            className='py-2 px-6 text-xs lg:text-sm border rounded-lg bg-gray-500 my-0 text-slate-800 font-bold font-Machina cursor-pointer items-center hover:bg-slate-700 flex gap-2'
          >
            Total Credit Unit: {totalUnit}
          </p>

          <button
            type='button'
            onClick={courseRegister}
            className='py-2 text-xs lg:text-sm px-6 border rounded-lg bg-main-dark-bg my-0 text-white font-bold font-Machina cursor-pointer items-center hover:bg-slate-700 flex gap-2 disabled:cursor-not-allowed disabled:bg-gray-400'
          >
            Proceed to Dashboard {!isLoading? <BsBoxArrowRight /> :
              <ScaleLoader
                color='#B7E8EB'
                loading={isLoading}
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
