/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'

import {AiOutlineMenu} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import { MdKeyboardArrowDown, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import {Chat, Notification, UserProfile} from './'

import George from '../img/George.jpg'
import { useState } from 'react'


const NavButton=({title, customFunc, color, dotColor, icon})=>{
  return (
    <button type="button"
    style={{color}}
    className=' relative rounded-full p-3 text-xl hover:bg-light-gray'
    onClick={customFunc}>
  
      <span style={{background: dotColor}}
      className="absolute rounded-full inline-flex h-2 w-2 right-2 top-2"/>
  
        {icon}
  
    </button>
  )
}

const Navbar = () => {

  const {activeMenu, setactiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize}= useStateContext()
  const theme = document.body.classList
  const [dark, setdark] = useState(theme.value)

  useEffect(() => {
    
    const handleScreen=()=>{
      setscreenSize( window.innerWidth )
    }

    window.addEventListener("resize", handleScreen)

    handleScreen()
  
    return () => {
      window.removeEventListener("resize", handleScreen)
    }
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setactiveMenu(false)
    }else{
      setactiveMenu(true)
    }
  
  }, [screenSize])

  const darkMode = (e) =>{
    setdark(theme.toggle('dark'));
  }
  

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
       
       <div className='flex'>
       <NavButton 
       title="Menu"
       customFunc={()=>{setactiveMenu(((previousMenu)=> !previousMenu ))}}
       icon={ <AiOutlineMenu/> }
       color="blue">

       </NavButton>

       <NavButton 
       title="Search"
       customFunc={()=>{}}
       icon={ <FiSearch/> }
       color="blue">

       </NavButton>
       </div>

      <div className='flex'>
      {
        dark?
        <NavButton 
       title="lightmode"
       customFunc={darkMode}
       icon= {<MdOutlineLightMode/>}
       color="blue">

       </NavButton> :
       <NavButton 
       title="Darkmode"
       customFunc={darkMode}
       icon= {<MdOutlineDarkMode/>}
       color="blue">

       </NavButton>
      }

      <NavButton 
       title="Chat"
       customFunc={()=>{handleClick("chat")}}
       icon={ <BsChatLeft/> }
       color="blue"
       dotColor="#03C9D7">

       </NavButton>

       <NavButton 
       title="Notification"
       customFunc={()=>{handleClick("notification")}}
       icon={ <RiNotification3Line/> }
       color="blue"
       dotColor="red">

       </NavButton>

       <div className='flex items-center gap-2 rounded-full hover:bg-light-gray p-1 cursor-pointer '
       onClick={()=>{handleClick("userProfile")}}
       >

        <img src={George} alt='Profile' className='rounded-full w-8 h-8'/>

        <p>
        <span className='text-14 text-light-gray dark:text-slate-400'>Hi,</span> {''}
        <span className='text-14 text-light-gray font-bold dark:text-slate-400' style={{fontFamily: "Machina"}}>George</span>
        </p>
        <MdKeyboardArrowDown className='text-14 text-light-gray dark:text-slate-400' />
       </div>

       {isClicked.chat && <Chat/>}
       {isClicked.notification && <Notification/>}
       {isClicked.userProfile && <UserProfile/>}
      </div>
      
    </div>
  )
}

export default Navbar