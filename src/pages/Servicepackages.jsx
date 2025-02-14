import React from 'react'
import banner4 from '../assets/images/home/new (4).jpg'
import banner1 from '../assets/images/home/pix (5).jpg'
import banner2 from '../assets/images/home/pix (10).jpg'
import banner3 from '../assets/images/home/pix (9).jpg'
import banner7 from '../assets/images/home/pix (2).jpg'
import banner5 from '../assets/images/home/pix (8).jpg'
import banner6 from '../assets/images/home/pix (1).jpg'
import {BsArrowDown} from 'react-icons/bs'

const Servicepackages = () => {
  return (
    <div>
      <div className='bg-img h-[32rem] container mt-[0] mb-[0]'>
        <div className='flex  items-center gap-7 px-[10rem]'>
        <div className='sm:mt-[4rem] md:mt-[7rem] ml-[10rem] w-full md:w-[18rem] items-center'>
          <h2 className='text-1xl font-bold items-center'>(PRISING)</h2>
          <h1 className='text-2xl font-bold'>CHOOSE THE IDEAL SERVICE PACKAGES</h1>
          <button className='flex items-center mt-[5px] md:mt-8 ml-[3rem] md:ml-0 p-2 px-6 md:px-6 py-[10px] md:py-3 gap-1 btn bg-[#00193D] text-[12px] md:text-[10px] hover:bg-gray-700 text-gray-100 rounded-full hover:text-white'>BOOK NOW</button>
        </div>
        <div className='sm:mt-[2rem] md:mt-[6rem]'>
          <img src={banner4} alt="" className='w-full  md:w-[18rem] h-[22rem] bg-cover '/>
        </div>
       </div>

       
      </div>
      <div className=''>
          <h1 className='text-2xl text-center font-bold py-[3rem] underline-offset-2'>SERVICE PACKAGES</h1>

          <div className='px-[20rem]'>
            <img src={banner1} className='w-[35rem] h-[15rem] object-cover' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>Traditional & White Wedding / Video & Photo</h2>
            <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p>
            </div>
            <div className='w-[35rem] h-[1px] mb-[2rem] bg-gray-300 mr-[4rem]'></div>
          </div>
          <div className='px-[20rem]'>
            <img src={banner2} className='w-[35rem] h-[15rem] object-cover' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>Traditional & White Wedding / Video </h2>
            <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p>
            </div>
            <div className='w-[35rem] h-[1px] mb-[2rem] bg-gray-300 mr-[4rem]'></div>
          </div>
          <div className='px-[20rem]'>
            <img src={banner3} className='w-[35rem] h-[15rem] object-cover' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>Traditional & White Wedding / Photo</h2>
            <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p>
            </div>
            <div className='w-[35rem] h-[1px] mb-[2rem] bg-gray-300 mr-[4rem]'></div>
          </div>
          <div className='px-[20rem]'>
            <img src={banner5} className='w-[35rem] h-[15rem] object-cover' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>White Wedding / Video & Photo</h2>
            <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p>
            </div>
            <div className='w-[35rem] h-[1px] mb-[2rem] bg-gray-300 mr-[4rem]'></div>
          </div>
          <div className='px-[20rem]'>
            <img src={banner6} className='w-[35rem] h-[15rem] object-cover' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>Traditional Wedding / Video & Photo</h2>
            <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p>
            </div>
            <div className='w-[35rem] h-[1px] mb-[2rem] bg-gray-300 mr-[4rem]'></div>
          </div>
          <div className='px-[20rem]'>
            <img src={banner7} className='w-[35rem] h-[15rem] object-cover' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>White Wedding / Video</h2>
            <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p>
            </div>
            <div className='w-[35rem] h-[1px] mb-[2rem] bg-gray-300 mr-[4rem]'></div>
          </div>

      </div>
    </div>
  )
}

export default Servicepackages