import React from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { set, ref } from 'firebase/database'

const CourseRegistration = () => {
  const {db} = useStateContext()


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
      <div className='flex mt-4 mx-10'>
      <div className=' w-80'>
       <select
          name="level"
          // value={dropdown.level || ""}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option value="100 Level" >FAMSS</option>
        </select>
       </div>
       <div className=' w-80'>
       <select
          name="level"
          // value={dropdown.level || ""}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option value="100 Level" >Economics</option>
        </select>
       </div>
       <div className=' w-80'>
       <select
          name="level"
          // value={dropdown.level || ""}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled
        >
          <option value="100 Level" >100 Level</option>
        </select>
       </div>
       <div className='w-80'>
        
       <select
          name="level"
          // value={dropdown.level || ""}
          className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina disabled:cursor-not-allowed'
        >
          <option value="100 Level" >First Semester</option>
          <option value="100 Level" >Second Semester</option>
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