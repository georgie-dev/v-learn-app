import React from 'react';
import {RxCaretLeft} from 'react-icons/rx'


const Course = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <div className='mb-6 p-4'>
      <RxCaretLeft 
      className='text-4xl text-gray-400 font-Machina cursor-pointer hover:text-gray-800' 
      onClick={()=>{window.history.back()}}
      />
      <h3 className='text-lg font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-400'>Go Back</h3>
    </div>
<div className=' w-full mt-12 p-2 h-auto flex flex-wrap gap-3 items-center justify-center'>

   </div>
    </div>
  )
}

export default Course