import React from 'react'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const SubmittedAssignments = () => {
    const select= [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <div className='float-right my-2'>
        <input
      type='search'
      placeholder='Search by keyword'
      className='border px-3 py-1 w-80 rounded-md placeholder:font-rokkitt text-gray-50 dark:text-slate-600'
      />
        </div>
      <div className='mt-6 w-full '>
      <table className='mx-auto w-full rounded-md border'>
          <thead>
            <tr className='text-black text-sm lg:text-lg  dark:text-gray-300 border rounded-md'>
                <th className='lg:px-16 text-center p-3 font-bold font-Machina lg:text-md' scope="col">Course Code</th>
                <th className='lg:px-16 text-center p-3 font-bold font-Machina lg:text-md' scope="col">Student ID</th>
                <th className='lg:px-16 text-center p-3 font-bold font-Machina lg:text-md' scope="col">Title</th>
            </tr>
          </thead>
          <tbody className='mt-10'>
            {select.map((data)=>(
              <tr key={data} className=' border-b p-4 rounded-lg text-slate-900 odd:bg-gray-200 mt-12  odd:dark:bg-slate-500 dark:text-gray-200'>
                <td className='lg:px-16 text-center p-3 text-xs lg:text-sm font-bold font-display '>SEN 102</td>
                <td className='lg:px-16 text-center p-3 text-xs lg:text-sm font-bold font-display '>ADUN/FS/19/324</td>
                <td className='lg:px-16 text-center p-3 text-xs lg:text-sm font-bold font-display '> Assignment 5</td>
                <td className='lg:px-16 justify-center items-center p-3 text-xs lg:text-sm font-bold font-display  flex gap-2'>
                  <button
                  type='button'
                  className= ' bg-sky-700 px-4 py-1 gap-1 rounded-full flex text-white font-bold items-center hover:bg-sky-900'
                  >
                    <AiOutlineCloudDownload className='text-lg'/><span className='hidden lg:flex'>Download</span>
                  </button>
                </td>
              </tr>
            ))
              
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubmittedAssignments