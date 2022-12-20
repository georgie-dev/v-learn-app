import React from 'react'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import { Outlet } from 'react-router-dom'

const Sign = () => {

  const goBack = () => {
    window.history.back()
  }
  return (
    <div className=' bg-main-dark-bg w-screen h-screen'>
        <div className=' lg:px-10 px-4 py-4'>
          <BsArrowLeftCircleFill
          onClick={goBack}
          className="lg:text-5xl text-2xl text-white hover:text-slate-500"
          />
            </div>
            <Outlet/>
    </div>
  )
}

export default Sign