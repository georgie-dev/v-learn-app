import React from 'react'
import {MdOutlineAssignment , MdOutlineClass} from 'react-icons/md'
import {VscFileSubmodule} from 'react-icons/vsc'
import {SiGoogleclassroom} from 'react-icons/si'
import Button from '../components/Button'
import { Attendance } from '../components'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Overview = () => {

  const select = useSelector(state=> state.user.userDetails)


  const boxes = [
    {
      icon: <SiGoogleclassroom/>,
      value: 2,
      title: 'Today Class(es)',
      bg: 'bg-class',
      id: 1,
      route: 'classes'

    },
    {
      icon: <MdOutlineAssignment/>,
      value: 4,
      title: 'Pending Assignment(s)',
      bg: 'bg-assignment',
      id: 2,
      route: 'assignments'

    },
    {
      icon: <VscFileSubmodule/>,
      value: 2,
      title: 'New course Material(s)',
      bg: 'bg-cm',
      id: 3,
      route: 'courseMaterials'

    },
    {
      icon: <MdOutlineClass/>,
      value: 1,
      title: 'Upcoming Test(s)',
      bg:'bg-test',
      id: 4,
      route: 'tests'

    }
  ]
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='flex w-full lg:w-80 p-8 pt-9 m-3 dark:text-gray-200 bg-white text-gray-200 dark:bg-secondary-dark-bg rounded-xl
        h-44 bg-hero-pattern bg-no-repeat bg-left-top lg:bg-left-top'>
          <div className='flex flex-col'>
            <span className=' text-md text-zinc-600 dark:text-gray-100'>Welcome</span> {''}
            <span className=' text-4xl mt-4 lg:text-2xl text-zinc-600 dark:text-gray-100 font-bold'>{select.Username}</span>
            <span className=' text-md text-zinc-600 dark:text-gray-100'>{select.MatricNumber}</span>
          </div>
        </div>
        <div className=' flex flex-wrap justify-center gap-1 items-center font-rokkitt'>
        {boxes.map((items)=>(
          <Link key={items.id} to={items.route}>
            <div key={items.id} className='drop-shadow-2xl bg-white dark:bg-secondary-dark-bg text-gray-200 w-40 md:w-56 lg:w-50 mt-4 h-40 rounded-2xl p-4 pt-9 relative '>
              <div key={items.bg} className={`${items.bg} opacity-25 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full`}></div>
             <div key={items.id} className=' text-black dark:text-gray-200 relative flex flex-col gap-3'>
             <div key={items.id} className='flex items-center'>
             <Button key={items.icon} color="black" bgColor="#03C9D7" icon={items.icon}/>
             <p key={items.id} className='text-5xl font-bold mx-auto '>{items.value}</p>
             </div>
             <small key={items.title} className=' text-sm mt-4 font-semibold '>{items.title}</small>
           </div>
            </div>
            </Link>
            ))}
          </div>
      </div>
      <div className='mt-12'>
        <div className='w-full px-3 flex justify-center'>
        <Attendance/>
        </div>
      </div>
    </div>
  )
}

export default Overview