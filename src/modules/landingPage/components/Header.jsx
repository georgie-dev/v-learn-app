import logo from '../assets/img/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'

import { Link, Outlet } from 'react-router-dom';

function Header(){

    const navMenu = () =>{
      const  mobileNav = document.getElementById('mobileNav')
    //   const nav =document.getElementById('nav')
    //   const list =document.getElementById('list')
      mobileNav.classList.toggle('hidden')
    //   nav.classList.toggle('flex')
    //   list.classList.toggle('flex-col')
    }
    return(
        <>
        
        <div className='block lg:flex justify-between  py-5 shadow-md items-center bg-white' id='nav'>
        <img src={logo} alt="logo" className='w-52 pl-4 lg:pl-10' />
           <div className='hidden lg:block lg:relative absolute w-full lg:w-auto text-center h-auto lg:h-auto pb-10 lg:p-0 rounded-b-xl lg:rounded-non z-30 pt-5 lg:pt-0 ' id='mobileNav'>
           <ul className='flex-col flex lg:flex-row gap-10 pr-10 py-5 lg:py-0 bg-white'>
                <li className='font-bold text-lg hover:text-gray-600'>
                   <Link to='/'>Home</Link>
                </li>
                <li className='font-bold text-lg hover:text-gray-600'><a href='#about'>About</a></li>
                <li className='font-bold text-lg hover:text-gray-600'><a href='#pricing'>Pricing</a></li>
                <li className='font-bold text-lg hover:text-gray-600'><a href='#contact'>Contact Us</a></li>
                <li><Link to='/sign' className=' bg-main-dark-bg px-7 py-4 text-lg text-white font-bold rounded-full hover:bg-gray-600'>Log In</Link></li>
            </ul>
           </div>
            <AiOutlineMenu 
            className='  lg:hidden block absolute top-8 right-4 text-3xl text-slate-500 hover:text-black'
            onClick={navMenu}/>
            </div>
        <Outlet/>
    </>
    )
}

export default Header;