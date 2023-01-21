import React from 'react'
import { NavLink, Link} from "react-router-dom";
//import style from '../css/sidebar.module.css'



 import {VscFileSubmodule} from 'react-icons/vsc'
 import {MdOutlineAssignment , MdOutlineClass, MdOutlineCancel, MdDashboard} from 'react-icons/md'
 import {SiGoogleclassroom} from 'react-icons/si'
 import {BsPersonCheck} from 'react-icons/bs'
 import {AiOutlineSchedule} from 'react-icons/ai'

 import { useStateContext } from '../../../contexts/ContextProvider';

const Sidebar = () => {

  const {activeMenu, setactiveMenu, screenSize} = useStateContext()
  
  const handleCloseSidebar=()=>{
    if(activeMenu && screenSize <900){
      setactiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-sky-500 text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
      <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {activeMenu && <>
            <div className=" flex justify-between align-middle m-4 items-center mb-8 ">
              <Link onClick={handleCloseSidebar} to='/dashboard' className='items-center ml-3 mt-4 text-2xl font-bold tracking-tight dark:text-white text-slate-900'>
                <span style={{fontFamily: "V"}} >V-</span>Learn
               </Link>
               <MdOutlineCancel className='mt-3 dark:text-white hover:text-slate-500 dark:hover:text-black'
               onClick={()=>{ setactiveMenu((previousMenu)=> !previousMenu)}}
               />
              </div>
            
                  <div>
                    <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 mb-5 uppercase">Dashboard</p>
             
                    <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='/dashboard/'>
                    <MdDashboard/> Overview
                  </NavLink> 
              
                  </div>
                  <div>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 mb-5 uppercase">Pages</p>
            
                    <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='assignments'>
                      <MdOutlineAssignment/> Assignments
                     </NavLink>

                    <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='classes'>
                    <SiGoogleclassroom/> Classes
                   </NavLink>

                    <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='courseMaterials'>
                    <VscFileSubmodule/>Course Materials
                    </NavLink>

                    <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='tests'>
                    <MdOutlineClass/> Tests
                    </NavLink>
              
                  </div>
                  <div>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 mb-5 uppercase">Tools</p>
                    <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='attendance'>
                    <BsPersonCheck/> Attendance
                     </NavLink>
                     
                     <NavLink onClick={handleCloseSidebar} className={({ isActive }) => (isActive ? activeLink : normalLink)} to='timetable'>
                    <AiOutlineSchedule/> Timetable
                    </NavLink>
                  </div>
          </>}
          </div>
    )
  };

export default Sidebar