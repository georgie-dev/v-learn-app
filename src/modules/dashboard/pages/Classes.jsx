import React from 'react'
import Header from '../components/Header'

const Classes = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
    <Header category='App' title="Classes" />
    <div className='p-5 h-auto sm:flex md:flex gap-4 mt-12'>
      <div className='uppercase border text-slate-400 border-slate-400 rounded-xl w-3/4 h-64 justify-center flex items-center bg-main-bg'>
        Video calling api section
      </div>
      <div className=' w-1/4 flex flex-col gap-4'>
        <textarea placeholder='Write down lecture Notes here..' className='h-full p-2 font-rokkitt rounded-lg dark:bg-slate-400 bg-main-bg dark:placeholder:text-white placeholder:text-slate-400'></textarea>
        <button className='rounded-full bg-sky-600 text-white p-2 w-20'>Save</button>
      </div>
    </div>
    </div>

  )
}

export default Classes