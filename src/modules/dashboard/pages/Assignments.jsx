import React from 'react'
import Header from '../components/Header'
import {AiOutlineCloudDownload, AiOutlineCloudUpload} from 'react-icons/ai'

const Assignments = () => {
  const select= [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
    <Header category='App' title="Assignments " />
    <div>
      <div>
        <input
        type='search'
        placeholder='Search by keyword'
        className='border px-3 py-1 w-80 rounded-md placeholder:font-rokkitt text-gray-50 dark:text-slate-600'
        />
        <div className='mt-12 w-full '>
        <table className='mx-auto w-full rounded-md border'>
            <thead>
              <tr className='text-black text-sm lg:text-lg  dark:text-gray-300 border p-2 rounded-md'>
                  <th className='lg:px-16 font-bold font-Machina lg:text-md' scope="col">Course Code</th>
                  <th className='lg:px-16 font-bold font-Machina lg:text-md' scope="col">Lecturer</th>
                  <th className='lg:px-16 font-bold font-Machina lg:text-md' scope="col">Due Date</th>
              </tr>
            </thead>
            <tbody className='mt-10'>
              {select.map((data)=>(
                <tr key={data} className=' border-b p-4 rounded-lg text-slate-900 odd:bg-gray-200 mt-12  odd:dark:bg-slate-500 dark:text-gray-200'>
                  <td className='lg:px-16 p-3 text-xs lg:text-md font-bold font-display '>SEN 102</td>
                  <td className='lg:px-16 p-3 text-xs lg:text-md font-bold font-display '>Bernard Ephraim</td>
                  <td className='lg:px-16 p-3 text-xs lg:text-md font-bold font-display '> 12/02/2023</td>
                  <td className='lg:px-16 p-3 text-xs lg:text-md font-bold font-display  flex gap-2'>
                    <button
                    type='button'
                    className= ' bg-sky-700 px-4 py-1 gap-1 rounded-full flex text-white font-bold items-center hover:bg-sky-900'
                    >
                      <AiOutlineCloudDownload/><span className='hidden lg:flex'>Download</span>
                    </button>
                    <button
                    type='button'
                    className= ' bg-red-700 px-4 py-1 gap-1 rounded-full flex text-white font-bold items-center hover:bg-red-900'
                    >
                      <AiOutlineCloudUpload/><span className='hidden lg:flex'>Submit</span>
                    </button>
                  </td>
                </tr>
              ))
                
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Assignments