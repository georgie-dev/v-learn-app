import React from 'react'
import { useSelector } from 'react-redux'
import { adminBoxes } from '../../../data/data'
import { Link } from 'react-router-dom'
import { Button } from '../../../components'

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
        <div className=' flex flex-wrap justify-center gap-1 items-center font-rokkitt'>
        {adminBoxes.map((items)=>(
          <Link key={items.id} to={items.route}>
            <div key={items.id} className='drop-shadow-2xl bg-white dark:bg-secondary-dark-bg text-gray-200 w-40 md:w-56 lg:w-50 mt-4 h-40 rounded-2xl p-4 pt-9 relative '>
              <div key={items.bg} className={`${items.bg} opacity-25 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full`}></div>
             <div key={items.id} className=' text-black dark:text-gray-200 relative flex flex-col gap-3'>
             <div key={items.id} className='flex items-center'>
             <Button key={items.icon} color="black" bgColor="#03C9D7" icon={items.icon}/>
             <p key={items.id} className='text-5xl font-bold mx-auto font-display '>{items.value}</p>
             </div>
             <small key={items.title} className=' text-xs lg:text-sm mt-4 font-semibold font-display '>{items.title}</small>
           </div>
            </div>
            </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default AdminOverview