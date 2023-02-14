import React from 'react'
import Error from '../assets/img/404.gif'

const NotFound = () => {

  const goBack = () => {
    window.history.back()
  }

  return (
    <>
    <div className='w-full lg:w-2/3 h-2/3 mx-auto flex justify-center items-center'>
      <img src={Error} alt="404" />
    </div>
    <div className=' text-center mx-auto'>
      <p className=' font-display text-lg font-bold'>Page not found. Please check the URL and try again.</p>
      <button
        onClick={goBack}
        className='py-2 px-6 border rounded-2xl mt-4 bg-main-dark-bg w-fit text-white font-bold font-Machina cursor-pointer hover:bg-slate-700 items-center'
      >
        Let's take you back
      </button>
    </div>
    </>
  )
}

export default NotFound