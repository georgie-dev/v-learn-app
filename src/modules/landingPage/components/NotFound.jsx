import React from 'react'
import { Link } from 'react-router-dom'
import {BsBoxArrowRight} from 'react-icons/bs'

const NotFound = () => {
  return (
    <div className='w-80 lg:w-2/3 mx-auto self-center text-center'>
    <img src="https://cdn.iconscout.com/icon/free/png-256/404-page-not-found-456876.png" alt="404" width='50%' />
    <p className='font-Machina text-2xl lg:text-4xl font-bold p-5'>Oops, Page not found</p>
   
    <Link
    to='/'
        className='py-2 text-xl lg:text-4xl px-6 border rounded-lg bg-main-dark-bg my-0 text-white font-bold font-Machina cursor-pointer items-center hover:bg-slate-700 flex gap-2 disabled:cursor-not-allowed disabled:bg-gray-400'
      >
        Go back Home <BsBoxArrowRight/>
      </Link>
    </div>
  )
}

export default NotFound