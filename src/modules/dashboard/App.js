import React from 'react'
import { Outlet } from 'react-router-dom'

import {Sidebar, Navbar, Footer} from './components'
// import {Assignments, Classes, CourseMaterials, Overview, Tests, Attendance, Timetable} from './pages'


import { useStateContext } from '../../contexts/ContextProvider'

// import './App.css';


const App = () => {
    const {activeMenu}= useStateContext()
  return (
    <div >
        <div className="flex relative dark:bg-main-dark-bg">
            {activeMenu ? 
        (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50">
            <Sidebar/>
        </div>) :
        (<div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar/>
        </div>)   
        }
        <div  className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className='relative  md:static  dark:bg-main-dark-bg navbar w-full'>
                <Navbar/>
            </div>
            <div >
              <Outlet/>
            </div>
            <div className='p-12 dark:bg-main-dark-bg'>
          <Footer/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default App