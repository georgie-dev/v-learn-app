import React from 'react'

const Classes = () => {
  return (
    <div className='p-5 h-auto border sm:flex md:flex gap-4 mt-12'>
      <div className='uppercase border w-3/4 h-64 justify-center flex items-center bg-main-bg'>Video calling api section</div>
      <div className=' flex flex-col gap-4'>
        <textarea placeholder='Write down lecture Notes' className='h-full'></textarea>
        <button className='rounded-full bg-sky-600 text-white px-5 w-20'>Save</button>
      </div>
    </div>
  )
}

export default Classes