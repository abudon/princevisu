import React from 'react'
import {IoCallSharp} from 'react-icons/io5'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import PrisingGallery from '../components/PrisingGallery'
import { ArrowUpward } from '@mui/icons-material'
import banner5 from '../assets/images/home/pix (8).jpg'
import dot from '../assets/images/home/dot.svg'
import banner3 from '../assets/images/home/pix (9).jpg'
// import banner from '../assets/images/home/pic (1).jpg'
import { IoMdCheckmark } from "react-icons/io"
import {BsArrowDown} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'

const Prising = () => {

const user = JSON.parse(localStorage.getItem('client'))
const navigate = useNavigate()
    const cheeckUsers = ()=>{
        if (user) {
            navigate('/dashboard/bookings/addbooking')
        }else{
            navigate('/login')
        }
    }

  return (
    <div className=''>
        <div className='text-center  prising-banner font-bold  min-h-[20rem] object-cover'>
           <h1 className='pt-[5rem] text-[5rem] text-white' data-aos="zoom-in" data-aos-duration="2000">PRISING</h1>
           <h3 className='text-[22px] text-white' data-aos="zoom-in" data-aos-duration="2000">CHOOSE YOUR IDEAL SERVICE PACKAGES</h3>
        </div>

        <div data-aos="zoom-in" data-aos-duration="2000">
            <h1 className='text-center text-gray-600 text-[1.5rem] py-[4rem]'>SERVICE PACKAGES</h1>
        </div>

        <div className='prize  mb-[5rem] max-w-[50rem]' >
            <PrisingGallery  />
            <div className='flex justify-between pt-[7px]' >
            <h3>Traditional & White Wedding / Video & Photo</h3>
            <span className='text-[12px]'>HIDE DETAILS <ArrowUpward className='text-[1px] text-gray-600' /></span>
         </div>

            <div className='packages mt-[5rem] mb-[5rem] grid grid-cols-1  md:grid-cols-3 gap-[7rem] justify-center' >
                <div className='w-[full] md:w-[18rem] h-[41rem] border text-center px-[1rem]'>
                 <div className='mt-[2rem]'>
                  <h6 className='font-bold'>SILVER PACKAGE</h6>
                  <p className='text-[12px]'>Expertly captured memories</p>
                  <h1 className='text-[2.6rem] font-bold py-[6px]'>$4,500</h1>
                  <p className='flex items-center text-[14px] gap-2'><img src={dot} alt="" />White Wedding / 5 Hrs</p>
                  <p className='flex items-center text-[14px] gap-2'><img src={dot} alt="" />Traditional / 5 Hrs</p>
                  <button id='mybtn' onClick={()=>cheeckUsers()} className='btn mt-[12px] bg-transparent text-[9px] md:text-[10px] text-[#00193D] font-bold  py-2 px-9 md:px-14 border border-[#00193D]  rounded-full'>BOOK NOW</button>
                  <p className='flex items-center gap-2 text-[14px] mt-7 py-2'><IoMdCheckmark />IG Highlight</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />1 Videographer</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />1 Photographer</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />1 USB / Full HD Video</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 USB / Full HD Video</p>
                  {/* <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />10 Retouches Per Request</p> */}
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />USB Drive Or Digital Copies</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />Traditional Videos & Pictures</p>
                  </div>
                </div>

                <div className='w-[full] md:w-[18rem] h-[48rem] border text-center px-[1rem] bg-[#F5F5F3]'>
                 <div className='mt-[2rem]'>
                  <h6 className='font-bold'>DIAMOND PACKAGE</h6>
                  <p className='text-[12px]'>Go Viral Unforgetable Wedding</p>
                  <h1 className='text-[2.6rem] font-bold py-[6px]'>$10,000</h1>
                  <p className='flex items-center text-[14px] gap-2'><img src={dot} alt="" />White Wedding / All Day</p>
                  <p className='flex items-center text-[14px] gap-2'><img src={dot} alt="" />Traditional / Full Ceremony</p>
                  <button id='mybtn' onClick={()=>cheeckUsers()}  className='btn mt-[12px] bg-[#00193D] text-[9px] md:text-[10px] text-[white] font-bold  py-2 px-9 md:px-14 border border-[#00193D]  rounded-full'>BOOK NOW</button>
                  {/* <p className='flex items-center gap-2 text-[14px] mt-7 py-2'><IoMdCheckmark />IG Video & Photo Highlight</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />TikTok & IG Reels</p> */}
                  {/* <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />Youtube Video (Priority Delivery)</p> */}
                  {/* <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />Instagram Story Highlight</p> */}
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 Photographers</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 Videographers</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />Unlimited Photos</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 USB / Full HD Video</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />USB Or Digital Copies Of Photos</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />45 Page Premium Photobook</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />35 Retouches</p>
                  {/* <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 Frame & Large Frame Print</p> */}
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />Traditional Videos & Pictures</p>
                  </div>
                </div>

                <div className='w-[full] md:w-[18rem] h-[43rem] border text-center px-[1rem] text-[#00193D]'>
                 <div className='mt-[2rem]'>
                  <h6 className='font-bold'>GOLD PACKAGE</h6>
                  <p className='text-[12px]'>All-Inclusive Wedding</p>
                  <h1 className='text-[2.6rem] font-bold py-[6px] text-[#00193D]'>$7,000</h1>
                  <p className='flex items-center text-[14px] gap-2'><img src={dot} alt="" />White Wedding / 10 Hrs</p>
                  <p className='flex items-center text-[14px] gap-2'><img src={dot} alt="" />Traditional / 8 Hrs</p>
                  <button id='mybtn' onClick={()=>()=>cheeckUsers()}  className='btn mt-[12px] bg-transparent text-[9px] md:text-[10px] text-[#00193D] font-bold  py-2 px-9 md:px-14 border border-[#00193D]  rounded-full'>BOOK NOW</button>
                  <p className='flex items-center gap-2 text-[14px] mt-7 py-2'><IoMdCheckmark />IG Highlight</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 Videographers & 1 PhotoG (Trad)</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />1 Videographers & 2 PhotoG (White)</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />1000 Plus Photos</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />15 Retouched Photos</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />2 USB / Full HD Video</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />USB Or Digital Copies Of Photos</p>
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />35-Pages Premium Photobook</p>
                  {/* <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />One 11×15 Large Print</p> */}
                  <p className='flex items-center gap-2 text-[14px] py-1'><IoMdCheckmark />Traditional Videos & Pictures</p>
                  </div>
                </div>
            </div>

        </div>

<div className=''>
        <div className='pic-gall  md:px-[7rem] lg:px-[20rem]' >
            <img src={banner3} className='w-[35rem] h-[15rem] object-cover pic-gall ' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold text-center'>Traditional & White Wedding / Photo</h2>
            {/* <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p> */}
            </div>
            {/* <div className='w-[35rem] h-[1px] mb-[2rem] hidden md:block bg-gray-300 mr-[4rem]'></div> */}
          </div>
          <div className='pic-gall'>
            <img src={banner5} className='w-[35rem] h-[15rem] object-cover pic-gall ' alt="" />
            <div className='flex justify-between py-[1rem]'>
            <h2 className='text-[14px] font-bold'>White Wedding / Video & Photo</h2>
            {/* <p className='text-[10px] mr-[4rem] flex items-center gap-2 font-bold'>SHOW DETAILS <BsArrowDown /></p> */}
            </div>
            {/* <div className='w-[35rem] h-[1px] mb-[2rem] hidden md:block bg-gray-300 mr-[4rem]'></div> */}
          </div>

          <div className='mx-auto mb-[5rem] max-w-[50rem]'>
            <PrisingGallery />
            <div className='flex justify-between pt-[7px]'>
            <h3>Traditional & White Wedding / Video & Photo</h3>
            <span className='text-[12px]'>HIDE DETAILS <ArrowUpward className='text-[1px] text-gray-600' /></span>
         </div>
        </div>
        </div>



        <div  className='contact-us grid grid-cols-1 md:grid-cols-2 mt-[7rem] lg:mb-[5rem] lg:mt-[5rem] px-[1rem] md:px-[5rem] gap-[3rem]'>
       <div className='max-w-[40rem] contact-left' data-aos="zoom-in" data-aos-duration="2000">
          <p className='text-[#00193D] text-2xl font-bold py-[1rem]'>Get In Touch</p>
          <div className='text-gray-500'>
          <span className='flex items-center gap-1 font-bold py-2' ><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold'><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold pt-[1rem]'><MdEmail />Email@gmail.com</span>
          </div>
          <h1 className='md:text-5xl text-4xl font-bold mt-4 mb-4 text-[#00193D]'>Book Us For Your Event</h1>
          <span className=' text-gray-500'>Ad graeci theophrastus, libris timeam sapientem. Pellentes faucibus sollicitudin
            ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis.
             Interdum et malesuada varius mauris eu commodo.
          </span>
       </div>
 <div data-aos="zoom-in" data-aos-duration="3000" className='contact-right'>
 <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
       <span className='flex items-center gap-1 text-gray-500'><RiContactsLine className='text-[1rem] text-gray-500' /> Full Name </span>
      </label>
      <input class="appearance-none block w-full -bg-gray-50 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  placeholder="Enter name" />
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       <span className='flex items-center gap-1 text-gray-500'><AiOutlineMail className='text-[1rem] text-gray-500' /> Email</span>
      </label>
      <input class="appearance-none block w-full bg-gray-50  border-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="email@gmail.com" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        <span className='flex items-center gap-1 text-gray-500'><RiLockPasswordLine className='text-[1.2rem] text-gray-500' /> Password</span>
      </label>
      <input class="appearance-none block w-full text-gray-900 bg-gray-50  border-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p class="text-gray-600 text-xs italic">Make sure password is very strong</p>
    </div>
  </div>

  <div class="max-w-2xl mx-auto">

    <label for="message" class="block mb-2 text-sm font-medium text-gray-500"><span className='flex items-center gap-1 font-bold'><AiOutlineMessage className='text-gray-500 text-[1.2rem]' />Message</span></label>
     <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter message..."></textarea>

    <div className='mt-[1rem] md:mt-[2rem] lg:mt-[1rem] mb-[2rem] md:mb-[1rem]'>
      <button className='text-[#fff] py-3 px-8 rounded shadow-2xl bg-[#00193d] text-[12px] font-bold'>Send Message</button>
    </div>
   </div>


</form>
       </div>
    </div>

    </div>
  )
}

export default Prising
