import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-center items-center font-bold font-rokkitt text-slate-600 dark:text-gray-100 text-center'>
      <span><AiOutlineCopyrightCircle/></span> 
      <p>2022 All rights reserved by <span style={{fontFamily: "V"}}>V-</span>Learn.app</p>
    </div>
  )
}

export default Footer