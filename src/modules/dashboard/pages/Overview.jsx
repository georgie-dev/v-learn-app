import React from 'react'
import {MdOutlineAssignment , MdOutlineClass} from 'react-icons/md'
import {VscFileSubmodule} from 'react-icons/vsc'
import {SiGoogleclassroom} from 'react-icons/si'
import Button from '../components/Button'
import { Attendance } from '../components'

const Overview = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='flex w-full lg:w-80 p-8 pt-9 m-3 dark:text-gray-200 bg-white text-gray-200 dark:bg-secondary-dark-bg rounded-xl
        h-44 bg-hero-pattern bg-no-repeat bg-left-top lg:bg-left-top'>
          <div className='flex flex-col'>
            <span className=' text-md text-zinc-600 dark:text-gray-100'>Welcome</span> {''}
            <span className=' text-4xl mt-4 lg:text-2xl text-zinc-600 dark:text-gray-100 font-bold'>George</span>
            <span className=' text-md text-zinc-600 dark:text-gray-100'>ADUN/FS/19/324</span>
          </div>
        </div>
        <div className=' flex flex-wrap justify-center gap-1 items-center font-rokkitt'>
            <div className='drop-shadow-2xl bg-white dark:bg-secondary-dark-bg text-gray-200 w-40 md:w-56 lg:w-50 mt-4 h-40 rounded-2xl p-4 pt-9 relative '>
              <div className='bg-class opacity-25 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full'></div>
            <div className=' text-black dark:text-gray-200 relative'>
              <div className='flex'>
              <Button color="black" bgColor="#03C9D7" icon={<SiGoogleclassroom/>}/>
              <p className='text-6xl lg:text-6xl font-bold items-center mx-auto '>2</p>
              </div>
              <p className=' text-md mt-4 font-semibold '>Today's Class(s)</p>
            </div>
            </div>
            <div className='bg-white drop-shadow-2xl dark:bg-secondary-dark-bg text-gray-200 w-40 md:w-56 lg:w-50 mt-4 h-40 rounded-2xl p-4 pt-9 relative '>
            <div className='bg-assignment opacity-25 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full'></div>
            <div className=' text-black dark:text-gray-200 relative'>
              <div className='flex'>
              <Button color="black" bgColor="#03C9D7" icon={<MdOutlineAssignment/>}/>
              <p className='text-6xl font-bold items-center mx-auto '>2</p>
              </div>
              <p className=' text-md mt-4 font-semibold '>Pending Assignments</p>
            </div>
            </div>
            <div className=' drop-shadow-2xl bg-white dark:bg-secondary-dark-bg text-gray-200 w-40 md:w-56 lg:w-50 mt-4 h-40 rounded-2xl p-4 pt-9 relative '>
            <div className='bg-cm opacity-25 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full'></div>
            <div className=' text-black dark:text-gray-200 relative'>
              <div className='flex'>
              <Button color="black" bgColor="#03C9D7" icon={<VscFileSubmodule/>}/>
              <p className='text-2xl font-bold items-center mx-auto uppercase '>Sen 304</p>
              </div>
              <p className=' text-md mt-4 font-semibold '>New Course Material</p>
            </div>
            </div>
            <div className=' drop-shadow-2xl bg-white dark:bg-secondary-dark-bg text-gray-200 w-40 md:w-56 lg:w-50 mt-4 h-40 rounded-2xl p-4 pt-9 relative '>
            <div className='bg-class opacity-25 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full'></div>
            <div className=' text-black dark:text-gray-200 relative'>
              <div className='flex'>
              <Button color="black" bgColor="#03C9D7" icon={<MdOutlineClass/>}/>
              <p className='text-2xl font-bold items-center mx-auto uppercase '>GST 201</p>
              </div>
              <p className=' text-md mt-4 font-semibold '>Upcoming Test</p>
            </div>
            </div>
          </div>
      </div>
      <div className='mt-12'>
        <div className='w-full px-3 lg:w-720 flex justify-center'>
        <Attendance/>
        </div>
      </div>
    </div>
  )
}

export default Overview