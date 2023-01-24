import React from 'react'
import { Header, AttendanceChart } from '../components'

const Attendance = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
    <Header category='Tools' title="Attendance" />
    <div className='flex justify-center w-auto'>
    <AttendanceChart/>
    </div>
    </div>
  )
}

export default Attendance