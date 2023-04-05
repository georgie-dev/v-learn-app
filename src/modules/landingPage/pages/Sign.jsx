import React from 'react'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
import style from '../assets/css/Sign.module.css'

const Sign = () => {


  return (
<div className=' w-full h-auto lg:h-screen block  lg:flex overflow-hidden'>
        <div className=' lg:px-6 px-4 py-4'>
          <BsArrowLeftCircleFill
          onClick={()=>{window.history.back()}}
          className="lg:text-5xl text-2xl text-black hover:text-slate-500"
          />
            </div>
         
            <Outlet/>
          <div className={style.ocean}>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
          </div>
    </div>
  )
}

export default Sign