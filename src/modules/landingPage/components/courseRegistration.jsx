import React from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { set, ref, onValue } from 'firebase/database'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const CourseRegistration = () => {
  const {db} = useStateContext()
  const select= useSelector(state=> state.user.userDetails)

  const [semester, setsemester] = useState("FirstSemester");

  const handleSemesterSelect = (e) => {
    const semester = e.target.value;
    setsemester(semester);
  }
  const dbSemester= semester.split(' ').join('')
  const level= select.Level.split(' ')
  const department= select.Department.split(' ').join('');

  const coursesAPI = ref( db, `courses/${select.Faculty}/${department}/${level[0]}/${dbSemester}`)

  onValue(coursesAPI, (snapshot)=>{
    const courses= snapshot.val()
    console.log(courses)
  })

// const testdb = ()=>{
//   set(ref( db, 'courses/FS/SoftwareEngineering/100/SecondSemester'), {
//     'Title': ['Programming Logic & Design', 'Introduction to Software Applications and Cyber security', 'Use of English II', 'Nigerian Peoples and Culture', 'History & Philosophy of Science', 'Elementary Mathematics 3 (Calculus)', 'General Physics II', '	General Physics Laboratory II', '		Statistics & Probability'],
//     'Code': ['CSC 102', 'CYB 102', 'GST 102', 'GST 104', 'GST 108', 'MTH 102', 'PHY 102', 'PHY 108', 'STA 102'],
//     'Unit': [2, 2, 2, 2, 2, 3, 3, 1, 2],
//     'Status':['C', 'C','C','C','C','C','C','C','C' ],
//     'Lecturers': []
//   })


// }

  return (
    <div className=' bg-slate-100 lg:w-2/3 w-96 h-2/3 border-white mx-auto self-center rounded-xl px-4'>
      <header className='font-Machina disabled:cursor-not-allowed disabled:bg-gray-300 lg:text-3xl text-2xl font-bold p-5'>Register your Courses</header>
      <div className='flex flex-col lg:flex-row gap-5 mt-4 mx-10'>
      <div>
       <select
          className='p-2 w-72 lg:w-auto  rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option>{select.Faculty}</option>
        </select>
       </div>
       <div>
       <select
          className='p-2  w-72 lg:w-auto rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option>{select.Department}</option>
        </select>
       </div>
       <div>
       <select
          className='p-2  w-72 lg:w-auto rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
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
          className='p-2 w-72 lg:w-auto rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed'
        >
          <option value='First Semester'>First Semester</option>
          <option value='Second Semester'>Second Semester</option>
        </select>
       </div>
      </div>

      {/* <button
      type='button'
      onClick={testdb()}
      className='py-2 px-6 border rounded-lg bg-main-dark-bg my-0 text-white font-bold font-Machina cursor-pointer items-center hover:bg-slate-700 flex gap-2 disabled:cursor-not-allowed disabled:bg-gray-400'
      >
        DB

      </button> */}
    </div>
  )
}

export default CourseRegistration