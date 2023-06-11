import React from 'react'
import Header from '../../../components/Header'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Assignments = () => {
  const { courses } = useSelector(state => state.user.userDetails)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
    <Header category='pages' title="Assignments " />
    <div className=' w-full mt-12 p-2 h-auto flex flex-wrap gap-3 items-center justify-evenly'>
      {courses.map((items) => (
        <div key={items.id} className=' text-gray-200 w-80 md:w-56 lg:w-80 mt-4 h-48 rounded-2xl p-4 pt-9 drop-shadow-2xl bg-white shadow-sm dark:bg-main-dark-bg relative'>
          <div key={items.id} className=' bg-assignment opacity-20 bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full'></div>
          <div className='flex flex-col gap-3 text-black dark:text-gray-200 px-4 items-center justify-center '>
            <p key={items.courseCode} className='text-2xl font-Machina font-extrabold relative'>{items.courseCode}</p>
            <p key={items.courseTitle} className='font-Machina text bold relative'>{items.courseTitle}</p>
          </div>
          <Link to={items.courseCode} className='float-right bg-secondary-dark-bg font-Machina px-4 p-2 absolute bottom-2 right-2 rounded-full hover:bg-main-dark-bg'> View</Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Assignments