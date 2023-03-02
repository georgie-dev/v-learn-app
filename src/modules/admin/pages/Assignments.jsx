import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Header } from '../../../components'

const Assignments = () => {

  const activeLink = 'flex w-1/2 justify-center bg-white dark:bg-secondary-dark-bg dark:text-white pt-3 pb-2.5 rounded-lg text-black font-Machina font-semi-bold text-md';
  const normalLink = 'flex w-1/2 justify-center dark:bg-slate-700 dark:text-gray-300 bg-gray-200 pt-3 pb-2.5  rounded-lg text-slate-500 font-Machina font-semi-bold text-md';

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
    <Header category='Pages' title="Assignment" />

    <div className=' bg-white dark:bg-secondary-dark-bg h-auto w-full rounded-xl'>
      <div className='flex justify-center border dark:border-slate-400 rounded-lg'>
      <NavLink
      to='/admin/assignments/' 
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Submitted Assignments
      </NavLink>
      <NavLink
      to='uploaded-assignments'
       className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Uploaded Assignments
      </NavLink>
      </div>
      <Outlet/>
    </div>
    </div>
  )
}

export default Assignments