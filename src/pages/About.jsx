import React from 'react'
import {TfiVideoClapper} from 'react-icons/tfi'
import {GiVideoCamera} from 'react-icons/gi'
import {BiVideoRecording} from 'react-icons/bi'
import {FaCameraRetro} from 'react-icons/fa'
import {IoCallSharp} from 'react-icons/io5'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'
import banner1 from '../assets/images/home/bannner (1).jpg'
import banner2 from '../assets/images/home/team-2.jpg'
import banner3 from '../assets/images/home/team-4.jpg'
// import banner4 from '../assets/images/home/pix (1).jpg'
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineMenu, 
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  } from 'react-icons/ai'



const About = () => {
  return (
  <div className=''>
     <div className='bg-cover max-h-[15rem] md:max-h-[25rem] bg-about bg-[]'>
      <div className=' relative mx-auto max-h-[15rem] md:max-h-[25rem] bg-gray-900/30 lg:w-full h-[100vh] md:h-[100vh]'>
        <h1 className='text-white lg:w-full text-center pt-[2rem] md:pt-[8rem] text-xl md:text-[4rem] leading-2 md:leading-3 border-x-8'>ABOUT <span className='font-bold text-white italic'>US</span></h1>
        <h2 className='text-white text-center font-semibold pt-[12px] md:pt-[2rem]'>Prince Visuals</h2>
      </div>
    </div> 

   
      
    <div className=' bg-white h-[236rem] md:h-[168rem] lg:h-[155rem] w-[full] '>
       <div className='grid grid-cols-1 justify-center about-blocks gap-[5rem] md:gap-6 lg:gap-3 md:grid-cols-3 md:px-[3rem] lg:px-[7rem] mt-[5rem] md:ml-0 lg:ml-8'>
          <div className='block-div shadow-md w-[full] md:w-[full] lg:w-[20rem] rounded-md h-[11rem] md:h-[13rem] lg:h-[12rem] p-4 text-center'>
            <BsCameraReelsFill className='block-icon text-[#00193D] text-3xl md:text-4xl ml-[10.7rem] lg:ml-[8rem] md:ml-[5rem] animate-bounce' />
            <h3 className='py-2 text-[#000] text-md md:text-xl font-bold '>VIDEOGRAPHY</h3>
            <p className='text-gray-600 text-md  md:text-md'>Est sale definitiones id. Ut quo quem harum munere, eu labore hskfl voluptatum mei.</p>
          </div>
          <div className='block-div shadow-md lg:w-[20rem] rounded-md h-[11rem] md:h-[13rem] lg:h-[12rem] p-4 text-center '>
            <TfiVideoClapper className='block-icon text-[#00193D] text-3xl md:text-4xl ml-[11rem] lg:ml-[8rem] md:ml-[5rem] animate-bounce' />
            <h3 className='py-2 text-[#000] text-md md:text-xl font-bold'>EDITING</h3>
            <p className='text-gray-600 text-md  md:text-md'>Est sale definitiones id. Ut quo quem harum munere, eu labore hskfl voluptatum mei.</p>
          </div>
          <div className='block-div shadow-md lg:w-[20rem] rounded-md h-[11rem] md:h-[13rem] lg:h-[12rem] p-4 text-center'>
            <FaCameraRetro className='block-icon text-[#00193D] text-3xl md:text-4xl ml-[11rem] lg:ml-[8rem] md:ml-[5rem] animate-bounce' />
            <h3 className='py-2 text-[#000] text-md md:text-xl font-bold'>PHOTOGRAPHY</h3>
            <p className='text-gray-600 text-md  md:text-md'>Est sale definitiones id. Ut quo quem harum munere, eu labore hskfl voluptatum mei.</p>
          </div>
       </div>

    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[3rem] lg:gap-4 about-hero  mt-[6rem] md:px-[5rem] lg:px-[10rem]'>
      <div className='w-[full] mt-[0.5rem] md:mt-[0] lg:mt-[4rem] h-[30rem] mx-auto'>
         <h3 className='underline decoration-offset-4 decoration-sky-600 tracking-widest'>ABOUT US</h3>
         <h1 className=' text-2xl md:text-4xl py-4 max-w-full md:py-6 font-bold tracking-widest '>MEET THE CREW</h1>
         <p className='tracking-widest max-w-[full] text-gray-500'>
         Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. 
         Suscipit lobortis prodesset ut eam. Sale dicta dolore pri et, an aliquam albucius
          volutpat est. Ad graeci theophrastus, libris timeam sapientem. Pellentes faucibus 
          sollicitudin ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus
           pretium facilisis. Interdum et malesuada varius mauris eu commodo.
         </p>
      </div>
      <div className='mt-[-7rem] md:mt-[3rem]'>
        <img src={banner1} alt="" className='h-[20rem] md:h-[24rem] min-w-[100%] md:w-[35rem] object-cover '   /> 
        {/* rounded-t-2xl */}
        <div className='text-center text-white bg-[#00193D]  py-3'>
          <h1 className='font-bold'>Kwaku A. Darko</h1>
          <p className='text-1xl'>CEO</p>
        </div>
      </div>
    </div>

    <div className='about-staff-pic grid staff grid-cols-1 mt-[3rem] md:mt-[5rem] lg:mt-[3px] lg:grid-cols-4 lg:gap-[3rem]  md:px-[15rem]  lg:ml-[0]'>
      <div className='min-w-[100%] md:w-[15rem]'>
       <img src={banner2} alt="" className='w-[100%] md:w-[15rem] object-cover rounded-md  h-[15rem] md:h-[16rem] lg:h-[18rem]'/>
       <div className='pt-3'>
       <h2 className='text-1xl md:text-2xl font-bold text-[#00193D]'>Kareem Idris</h2>
       <p className='text-[12px] py-[6px]'>Photographer</p>
       <div className='flex gap-2'>
         <AiOutlineFacebook className='cursor-pointer h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]'  />
         <AiOutlineTwitter className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064]  p-[4px]' />
         <AiOutlineInstagram className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineLinkedin className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
       </div>
       </div>
      </div>

      <div className='md:pt-[0] min-w-[100%] md:w-[15rem]'>
       <img src={banner3} alt="" className='w-[100%] md:w-[15rem] object-cover rounded-md  h-[15rem] md:h-[16rem] lg:h-[18rem]'/>
       <div className='pt-3'>
       <h2 className='text-1xl md:text-2xl font-bold text-[#00193D]'>Kareem Idris</h2>
       <p className='text-[12px] py-[6px]'>Editor</p>
       <div className='flex gap-2'>
         <AiOutlineFacebook className='cursor-pointer h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]'  />
         <AiOutlineTwitter className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineInstagram className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineLinkedin className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
       </div>
       </div>
      </div>

      <div className=' pt-[3rem] lg:pt-[0] min-w-[100%] md:w-[15rem] staff-pic'>
       <img src={banner2} alt="" className='w-[100%] md:w-[15rem] object-cover rounded-md  h-[15rem] md:h-[16rem] lg:h-[18rem]'/>
       <div className='pt-3'>
       <h2 className='text-1xl md:text-2xl font-bold text-[#00193D]'>Kareem Idris</h2>
       <p className='text-[12px] py-[6px]'>Videographer</p>
       <div className='flex gap-2'>
         <AiOutlineFacebook className='cursor-pointer h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]'  />
         <AiOutlineTwitter className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineInstagram className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineLinkedin className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
       </div>
       </div>
      </div>

      <div className=' pt-[3rem] lg:pt-[0] min-w-[100%] md:w-[15rem] staff-pic'>
       <img src={banner3} alt="" className='w-[100%] md:w-[15rem] object-cover rounded-md  h-[15rem] md:h-[16rem] lg:h-[18rem] '/>
       <div className='pt-3'>
       <h2 className='text-1xl md:text-2xl font-bold text-[#00193D]'>Kareem Idris</h2>
       <p className='text-[12px] py-[6px]'>Director</p>
       <div className='flex gap-2'>
         <AiOutlineFacebook className='cursor-pointer h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]'  />
         <AiOutlineTwitter className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineInstagram className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
         <AiOutlineLinkedin className='cursor-pointer  h-5 w-5 text-white rounded-xl bg-[#00193d] hover:bg-[#264064] p-[4px]' />
       </div>
       </div>
      </div>
    </div>


    <div className='mt-[5rem] bg-banner-about md:bg-cover w-full about-area h-[12.3rem] md:h-[23rem] lg:h-[35rem] '>
       <div className='bg-gray-900/30 w-full h-[12.3rem] about-area md:h-[23rem] lg:h-[35rem] relative'>
           <div className='p-[2rem]'>
              <h1 className=' text-h1 text-white text-md md:text-3xl lg:text-5xl text-center font-extrabold border-2 p-[1rem] md:p-[5rem] lg:p-[9.5rem]'>''
                    The main goal and purpose of Prince Visuals is to provide our customers 
                    with high-quality everlasting impression. ''
              </h1>
           </div>
       </div>
    </div>


     {/* Contact Us */}
    <div className='contact-us grid grid-cols-1 md:grid-cols-2 mt-[7rem] px-[1rem] md:px-[5rem] gap-[3rem]'>
       <div className=''>
          <p className='text-[#00193D] text-2xl font-bold py-[1rem]'>Get In Touch</p>
          <div className='text-gray-500'>
          <span className='flex items-center gap-1 font-bold py-2' ><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold'><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold pt-[1rem]'><MdEmail />Email@gmail.com</span> 
          </div>
          <h1 className='md:text-5xl text-4xl font-bold mt-4 mb-4 text-[#00193D]'>Book Us For Your Event</h1>
          <span className='text-gray-500 '><p className='max-w-[30rem]'>Ad graeci theophrastus, libris timeam sapientem. Pellentes faucibus sollicitudin 
            ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis.
             Interdum et malesuada varius mauris eu commodo.</p>
          </span>
       </div>
 <div>
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

    <div className='mt-[1rem] md:mt-[2rem] lg:mt-[1rem]'>
      <button className='text-[#fff] py-3 px-8 rounded shadow-2xl bg-[#00193d] text-[12px] font-bold'>Send Message</button>
    </div>
   </div>

  
</form>
       </div>
    </div>

    </div>
    </div>
  )
}

export default About