import React from 'react'
import {PiEyeClosedLight} from 'react-icons/pi'
import { Link } from 'react-router-dom'
import pencil from '../assets/images/home/PencilLine.png'

const Profile = () => {
  return (
    <div className='container items-center'>
         <div className='mt-[1rem] text-gray-600'>
         <ul className='flex flex-col md:flex-row text-center mx-[20rem]  items-center gap-3  md:gap-12 text-[9px] md:text-[13px]'>
          <li className='cursor-pointer hover:text-gray-800 font-bold'>MY PROFILE</li>
          <li className='cursor-pointer hover:text-gray-800'>DOWNLOADS</li>
          <li className='cursor-pointer hover:text-gray-800'>MESSAGES</li>
          <li className='cursor-pointer hover:text-gray-800 '>ORDERS</li>
          <li className='cursor-pointer hover:text-gray-800'>PAYMENTS</li>
          </ul>
          <h1 className='text-center leading-[6rem] text-2xl font-bold'>MY PR<span className='italic'>O</span>FILE</h1>
        </div>

      
           <div className='w-[27rem] h-[18rem] bg-[#F5F5F3] ml-[25rem] p-6 flex'>
             <div className='rounded-full border bg-white w-[4rem] h-[4rem]'>
               <h1 className='text-center py-[20px] text-xl font-bold'>AF</h1>
               <span className='text-[8px] flex items-center gap-2'><img className='w-[10px]' src={pencil} alt="" /><Link to={'/'} className='text-blue-500 underline'>Edit photo</Link></span>
             </div>

             <div className='flex gap-[11rem]'>
              <div>
             <h1 className='text-[12px] pl-4'>Personal info</h1>
             </div>
             <div className=''>
             <span className='text-[8px] flex items-center  gap-2'><img className='w-[10px]' src={pencil} alt="" /><Link to={'/'} className='text-blue-500 underline'>Edit</Link></span>
           </div>
            </div>  

            <div className='w-[23rem] mr-[10rem] mt-[10rem]'> 
               <input type="text" />
               <input type="text" />
             </div>
         </div>


         
    </div>
  )
}

export default Profile