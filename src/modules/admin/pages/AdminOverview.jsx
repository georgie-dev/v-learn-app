import React from 'react'
import { useSelector } from 'react-redux'

const AdminOverview = () => {

    const {title, firstname}= useSelector(state=> state.user.userDetails)

  return (
    <div className='mt-12 '>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='flex w-full lg:w-80 p-8 pt-9 m-3 dark:text-gray-200 bg-white text-gray-200 dark:bg-secondary-dark-bg rounded-xl
        h-44 bg-hero-pattern bg-no-repeat bg-left-top lg:bg-left-top'>
          <div className='flex flex-col'>
            <span className=' text-md text-zinc-600 dark:text-gray-100 font-semibold'>Welcome</span> {''}
            <span className=' text-3xl mt-4 lg:text-2xl text-zinc-600 dark:text-gray-100 font-bold font-display'>{`${title} ${firstname}`}</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AdminOverview