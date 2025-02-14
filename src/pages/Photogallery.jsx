import React from 'react'
import banner4 from '../assets/images/home/photo.jpg'
import Gallery from '../components/Gallery/Gallery'
import {IoCallSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import { Carousel } from 'flowbite-react';




const Photogallery = () => {
  return (
   <div>
     <div className='flex flex-col md:flex-row bg-img  mb-[60rem] mx-auto px-[10%] gap-0 bg-[#f0f0f0] w-full h-[60%] md:h-[30rem]'>

              {/* Mobile */}
    <div className="md:hidden h-[20rem] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className='flex flex-col gap-7'>
        <h1 className='text-2xl] mt-[-10px] md:mt-[rem] font-bold  md:text-[1rem] mb-2'>(PH<span className='italic'>O</span>T<span className='italic'>O</span>S)</h1>
           <h1 className=' text-[23px] md:text-[27px] mt-[25px] md:mt-[5px] text-gray-800  font-bold capitalize tracking-widest'>A PICTURE IS W<span className='italic'>O</span>RTH <br/> A TH<span className='italic'>O</span>USAND W<span className='italic'>O</span>RDS</h1>
        </div>
        <img src={banner4} alt="..." />
        {/* <h3 className='text-center text-[14px]'>Let's make <br/>impression</h3> */}
      </Carousel>
    </div>

     <div className='hero-div hidden md:flex items-center gap-[10rem]'>
           <div>
           <h1 className='text-2xl ] mt-[-10px] md:mt-[rem] font-bold  md:text-[1rem] mb-2'>(PH<span className='italic'>O</span>T<span className='italic'>O</span>S)</h1>
           <h1 className=' text-[23px] md:text-[27px] mt-[25px] md:mt-[5px] text-gray-800  font-bold capitalize tracking-widest'>A PICTURE IS W<span className='italic'>O</span>RTH <br/> A TH<span className='italic'>O</span>USAND W<span className='italic'>O</span>RDS</h1>
            </div>
            <div>
              <img src={banner4} alt="jj" className='w-full max-h-[20rem] rounded-md' />
            </div>
          </div>

        <div className='hero-photo p-5 items-center   mt-0 md:mt-[8rem] '>
            <div className='' data-aos="zoom-in" data-aos-duration="3000">
             </div>
             </div>
          </div>

          <Gallery data-aos="zoom-in" data-aos-duration="3000"  />

          <div className='contact-us grid grid-cols-1 md:grid-cols-2 mt-[7rem] lg:mb-[5rem] lg:mt-[5rem] px-[1rem] md:px-[5rem] gap-[3rem]'>
       <div className='' data-aos="zoom-in" data-aos-duration="2000">
          <p className='text-[#00193D] text-2xl font-bold py-[1rem]'>Get In Touch</p>
          <div className='text-gray-500'>
          <span className='flex items-center gap-1 font-bold py-2' ><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold'><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold pt-[1rem]'><MdEmail />Email@gmail.com</span>
          </div>
          <h1 className='md:text-5xl text-4xl font-bold mt-4 mb-4 text-[#00193D]'>Book Us For Your Event</h1>
          <span className='text-gray-500'><p className='max-w-[30rem]'>Ad graeci theophrastus, libris timeam sapientem. Pellentes faucibus sollicitudin
            ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis.
             Interdum et malesuada varius mauris eu commodo.</p>
          </span>
       </div>
 <div data-aos="zoom-in" data-aos-duration="3000">
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

export default Photogallery
