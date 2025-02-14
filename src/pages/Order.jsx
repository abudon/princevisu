import React from 'react'
import wed1 from '../assets/images/home/new (1).jpg'
import wed2 from '../assets/images/home/new (2).jpg'
import {GrTask} from 'react-icons/gr'
// 'use client';
// import { Avatar, Dropdown } from 'flowbite-react';

const Order = () => {

  const images = [
  {
    id: '1',
    img: wed1,
    category: 'anniversary'
},
{
    id: '2',
    img: wed2 ,
    category: 'wedding'
},
{
    id: '3',
    img: wed1 ,
    category: 'christening'
},
{
    id: '4',
    img: wed2 ,
    category: 'birthdays'
},
{
    id: '5',
    img: wed1 ,
    category: 'christening'
},
{
    id: '6',
    img: wed2 ,
    category: 'birthdays'
},
  ]



  return (
    <div className=''>
    <div className='container bg-img  order-page '>
        <div className=' text-gray-600'>
         <ul className='flex flex-col md:flex-row text-center mx-[20rem] pt-[2rem]  items-center gap-3  md:gap-12 text-[9px] md:text-[13px]'>
          <li className='cursor-pointer hover:text-gray-800'>MY PROFILE</li>
          <li className='cursor-pointer hover:text-gray-800'>DOWNLOADS</li>
          <li className='cursor-pointer hover:text-gray-800'>MESSAGES</li>
          <li className='cursor-pointer hover:text-gray-800 font-bold'>ORDERS</li>
          <li className='cursor-pointer hover:text-gray-800'>PAYMENTS</li>
          </ul>
        </div>
    <div className='text-center mt-[3rem]'>  
        <h1 className='text-[22px] font-bold'>YOUR ORDER</h1>
        <p className='text-[15px] mt-3 font-bold'>According to your package plan, you can choose 300 photos.</p>
        </div>

        <div className='mx-[20rem] flex justify-between mt-[2rem] '>
            <button className='text-[10px] btn bg-transparent text-gray-700 font-semibold w-[9rem]  py-2 px-4 border border-gray-500 hover:border-gray-500 rounded-full'><span className='text-gray-500 flex gap-2 ml-[12px]'><GrTask />SELECT ALL</span></button>
            <button className='text-[10px] btn bg-[#979696] hover:bg-[#00193D] text-[#ffffff] font-semibold w-[12rem] hover:text-white py-2 px-4 border-none hover:border-transparent rounded-full'>REQUEST DOWNLOAD</button>
        </div>

        <div className='p-4 px-[21rem] grid grid-cols-3 '>
          {images.map(image=>{
            <div key={image.id}>
              <img src={image.img} alt="" />
            </div>
          })}
        </div>
    </div>
    </div>
  )
}

export default Order