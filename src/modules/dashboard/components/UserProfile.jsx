import React from 'react'
import George from '../img/George.jpg'
import { MdOutlineCancel, MdExitToApp} from 'react-icons/md'
import {FaRegUserCircle} from 'react-icons/fa'
import {AiOutlineSetting, AiOutlineWarning} from 'react-icons/ai'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { logout } from '../../auth/user'



const Icon=({ color, bgColor, icon})=>{
  return (
    <button type="button"
    style={{color, background: bgColor}}
    className=' relative rounded-xl p-3  hover:bg-light-gray w-12 h-12 text-2xl'>
        {icon}
  
    </button>
  )
}

const UserProfile = () => {
  const select = useSelector(state=> state.user.userDetails)
  const {handleClose}= useStateContext()
  const dispatch = useDispatch()

  const Logout = () =>{
      dispatch(logout())
      handleClose()
    }

  const [showModal, setshowModal] = useState(false)

  return (
    <div className='absolute top-full rounded-2xl right-2 z-10 w-80 h-auto text-slate-600 dark:text-gray-300 bg-slate-200 dark:bg-gray-600'>
      <div className=' p-3'>

        <div className='flex justify-between items-center mb-5 p-3'>
          <p className='text-lg font-extrabold'>User Profile</p>

          <span><MdOutlineCancel onClick={handleClose} className='text-lg hover:text-black'/></span>
        </div>
        
        <div className=' flex gap-3 items-center rounded-lg hover:bg-slate-100 p-3 dark:hover:bg-slate-500'>

            <img src={George} alt='User Profile' className=' rounded-full w-20 h-20' />

          <div className='flex flex-col'>
            <p className='font-extrabold font-display'>{`${select.Username} ${select.LastName}`}</p>
            <p className=' font-semibold'>{select.Department}</p>
            <p className='font-extralight font-1 text-xs'>{select.EmailAddress}</p>

          </div>

        </div>

        <div className='mt-5'>
          <div className='flex items-center gap-4 border-t mt-2 p-2 border-slate-300 dark:border-slate-500 rounded-lg hover:bg-slate-100 cursor-pointer dark:hover:bg-slate-500'>

            <Icon
            color="white"
            bgColor= "skyblue"
            icon={<FaRegUserCircle/>}
            />

            <div>
              <p className='font-semibold'>My Profile</p>
            </div>

          </div>
          <div className='flex items-center gap-4 border-t mt-2 p-2 border-slate-300 dark:border-slate-500 rounded-lg hover:bg-slate-100 cursor-pointer dark:hover:bg-slate-500'>

            <Icon
            color="white"
            bgColor= "skyblue"
            icon={<AiOutlineSetting/>}
            />

            <div>
              <p className='font-semibold'>Account Settings</p>
            </div>

          </div>
          <button 
          data-modal-target="popup-modal" 
          data-modal-toggle="popup-modal" 
          type="button"
          onClick= {()=>{setshowModal(true)}}
          className=' bg-red-600  hover:bg-red-900 w-full mt-3 rounded-lg p-1 text-white font-Machina text-xl  font-bold flex justify-center items-center'
          >
            <MdExitToApp/>&nbsp;Logout
          </button>
        </div>
      </div>
      {showModal ?
       <div className="fixed inset-0 z-10 overflow-y-auto">
       <div
           className="fixed inset-0 w-full h-full bg-black opacity-40"
       ></div>
       <div className="flex items-center min-h-screen px-4 py-8">
           <div className="relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
               <div className="mt-3 flex self-center justify-center">
                   <AiOutlineWarning className='text-4xl text-red-500 dark:text-red-600'/>
                   <div className="mt-2 text-center sm:ml-4 sm:text-left">
                       <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                          Are you Sure you want to Logout ?
                       </h4>
                       <div className="items-center gap-2 mt-3 sm:flex">
                           <button
                               className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600  rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                               onClick={() => Logout()}
                           >
                               Logout
                           </button>
                           <button
                               className="w-full mt-2 p-2.5 flex-1 text-gray-800 dark:text-black dark:bg-slate-300 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                               onClick={() => setshowModal(false)}
                           >
                               Cancel
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   :
   null}
    </div>
  )
}

export default UserProfile