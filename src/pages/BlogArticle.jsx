import React from 'react' 
import {IoCallSharp} from 'react-icons/io5'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import {HiStar} from 'react-icons/hi'
import banner4 from '../assets/images/home/new (1).jpg'
import BlogCard from '../components/BlogCard'
import ban1 from '../assets/images/home/bann.jpg'
import ban2 from '../assets/images/home/bann (2).jpg'
import banner1 from '../assets/images/home/bannner (2).jpg'
import banner2 from '../assets/images/home/bannner (1).jpg'
import wed4 from '../assets/images/home/px.jpg'
import dot from '../assets/images/home/dot.svg'
import icon3 from '../assets/images/home/twitter.png'
import icon4 from '../assets/images/home/linkedin.png'
import {BsArrowUpRight} from 'react-icons/bs'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineMenu, 
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiFillLinkedin,
    AiOutlineFacebook,
    AiOutlineLinkedin,
    } from 'react-icons/ai'


const BlogArticle = () => {
  return (
    <div  className=' mt-[0] mb-[0]'>
    <div className='container bg-img h-[35rem] md:h-[32rem]'>
    <div data-aos=" zoom-in" data-aos-duration="2000" className='grid grid-cols-1 md:grid-cols-2 text-center  items-center lg:gap-7 px-2 md:px-[10rem] bg-cover'>
    <div className='article-hero-text mt-[1.3rem] md:mt-[7rem] ml-0 md:ml-[-3rem]  lg:ml-[10rem] w-full md:w-[18rem] items-center'>
      <h2 data-aos="flip-right" data-aos-duration="2000" className='text-[12px] md:text-1xl font-bold items-center'>(BLOG)</h2>
      <h1 data-aos="flip-right" data-aos-duration="2000" className='text-2xl md:text-3xl font-bold text-gray-600'>USEFUL ARTICLES TO HELP YOU</h1>
      <button className='flex items-center mt-[20px] md:mt-8 ml-[3rem] md:ml-0 p-2 px-6 md:px-6 py-[10px] md:py-3 gap-1 btn bg-[#00193D] text-[8px] md:text-[10px] hover:bg-gray-700 text-gray-100 rounded-full hover:text-white'>SUBSCRIBE</button>
    </div>
    <div className='sm:mt-[2rem] md:mt-[6rem]'>
      <img src={banner4} alt="" className='w-full  md:w-[18rem] object-cover h-[20rem] md:h-[22rem] bg-cover '/>
    </div>
   </div>
   </div>
   
   <div className=' mt-[1rem]'>
   <p className='flex items-center gap-3 text-[11px] cursor-pointer font-bold hover:text-blue-600 ml-3 md:ml-[18rem]'><AiOutlineArrowLeft />BACK</p>
   </div>

   <div className='mb-[3rem] text-center mt-[3rem]' data-aos="zoom-in" data-aos-duration="2000">
    <h6 className='mb-[5px] text-[15px] text-gray-600'>(PLANNING)</h6>
    <h1 className='mb-[15px] font-bold text-[25px] text-gray-600'>AFFORDABLE GIFTS YOUR GUESTS WILL LOVE</h1>
    <h4 className='text-[19px] font-bold text-gray-600'>Thoughtful & wallet-friendly gifts</h4>
   </div>

   <div className='flex justify-center gap-3 md:gap-5 blog-img' >
    <img src={ban1} alt="" className=' object-cover w-[12rem]  md:w-[19rem]  md:h-[full]' data-aos="fade-right" data-aos-duration="2000" />
    <img src={ban2} alt="" className=' object-cover w-[12rem]  md:w-[19rem]  md:h-[full]' data-aos="fade-left" data-aos-duration="2000"/>
   </div>

   <div className=' px-[2rem] md:px-[2rem]  lg:px-[15rem] mt-[2rem]' data-aos="fade-up"
     data-aos-duration="3000">
     <p className='article-text text-[12px] text-gray-800'>
       A gift is a sweet way to say 'thank you', show you care, and it also serves as a 
       beautiful reminder of those memorable and precious moments. Can't decide on the perfect
       lasting keepsake for your wedding guests? That's why we are here. Below, we've put 
       together a list of thoughtful, wallet-friendly gifts that will definitely bring smiles
       to everyone's faces.
     </p>
     <h1 className='py-[1.5rem] text-center font-bold'>PERSONALIZED CANDLES</h1>
     <p className='article-text text-[12px] text-gray-800'>
     Candles are very popular as wedding gifts for guests, and it's not hard to see why. 
     They're just the right size, aesthetically pleasing, not too pricey, and last for ages. 
     Plus, candles can be easily customized to match your wedding theme. Here's a cool idea 
     to make the gift even more special: choose a scent that tells a story about you two as
      a couple. Maybe it's the fragrance that reminds you of that chic restaurant where you 
      had your first date, a season when you first met, or any other precious moment in your
       relationship. It's like giving your guests a little piece of your love story!
     </p>

     <p  className='article-text text-[12px] text-gray-900 py-[2rem]'>
        <i>“Candles are very popular as wedding gifts for guests, and it's not hard to see why.
         They're just the right size, aesthetically pleasing, not too pricey, and last for ages. 
         Plus, candles can be easily customized to match your wedding theme. Here's a cool idea
          to make the gift even more special: choose a scent that tells a story about you two as
           a couple.”</i>
        </p>

        <p  className='article-text text-[12px] text-gray-800'>
        Candles are very popular as wedding gifts for guests, and it's not hard to see why. 
        They're just the right size, aesthetically pleasing, not too pricey, and last for ages. 
        Plus, candles can be easily customized to match your wedding theme. Here's a cool idea
         to make the gift even more special: choose a scent that tells a story about you two as
          a couple. Maybe it's the fragrance that reminds you of that chic restaurant where you
           had your first date, a season when you first met, or any other precious moment in your 
           relationship. It's like giving your guests a little piece of your love story!
        </p>

        <h1 className='py-[1.5rem] text-center font-bold'>Pampering Gift Set</h1>

        <p className='article-text text-[12px] text-gray-800 mb-[2rem]'>Another fun idea is to surprise your guests with mini pampering or relaxing sets. For 
            packaging, use a simple yet elegant box with a custom engraving or tag. Fill the 
            boxes with all the good stuff: bath salts for awesome bath time, herbal tea bags to
             help your guests unwind, mini bottles of essential oils for the spa vibe, and a sleep
            mask for the best night's sleep.</p>
            
   </div>

         <div className='flex justify-center gap-3 md:gap-5 blog-img'>
              <img src={banner1} alt="" className='w-[12rem]  md:w-[19rem]' data-aos="fade-right" data-aos-duration="2000"/>
              <img src={banner2} alt="" className='w-[12rem]  md:w-[19rem]' data-aos="fade-left" data-aos-duration="2000"/>
         </div>

         <div className=''  data-aos="zoom-in" data-aos-duration="3000">
            <h1 className='capitalize py-[2rem] text-center text-xl font-bold'>Cute miniature succulent</h1>

            <p  className='article-text text-[12px] text-gray-900 px-[2rem] md:px-[2rem] lg:px-[15rem]'>
              Another fun idea is to surprise your guests with mini pampering or relaxing sets.
             For packaging, use a simple yet elegant box with a custom engraving or tag. Fill 
             the boxes with all the good stuff: bath salts for awesome bath time, herbal tea bags
              to help your guests unwind, mini bottles of essential oils for the spa vibe, and a 
              sleep mask for the best night's sleep.
            </p>

            <ul className='article-text text-[12px] text-gray-900 py-[2rem] px-[2rem] md:px-[2rem] lg:px-[15rem]'>
                <li className='py-[5px] flex gap-2'><img className='w-[10px]' src={dot} alt="" /> Lorem ipsum dolor sit amet consectetur. Vitae elementum at pharetra ac.</li>
                <li className='py-[5px] flex gap-2'><img className='w-[10px]' src={dot} alt="" />Lorem ipsum dolor sit amet consectetur. </li>
                <li className='py-[5px] flex gap-2'><img className='w-[10px]' src={dot} alt="" />Lorem ipsum dolor sit amet consectetur. Vitae elementum at pharetra ac.
                     Morbi augue quisque mattis pellentesque justo vitae.</li>
            </ul>

            <h1 data-aos="fade-up" data-aos-duration="3000" className='capitalize text-center font-bold'>Tea or coffee blend</h1>

            <p data-aos="fade-up" data-aos-duration="3000" className='article-text text-[12px] text-gray-900 py-[2rem]  px-[2rem] md:px-[2rem] lg:px-[15rem]'>Who doesn't enjoy a nice cup of tea or 
            coffee? They're the perfect companions for cold nights and 
                lazy mornings. And what a fantastic idea to create a special blend just for your guests! Every sip 
                will be a tasty reminder of the amazing time they had celebrating your big day. Give your blend a 
                meaningful name and pack it in a cute, personalized bag or pretty tin that goes with your wedding 
                vibe. It’s a super heartwarming way to thank your guests for being a part of your journey.</p>
         </div>

         <ol data-aos="fade-up" data-aos-duration="3000" className='article-text text-[12px] text-gray-900 py-[2rem]  px-[2rem] md:px-[2rem] lg:px-[15rem] mb-3'>
            <li className='py-[6px]'><span>1. </span>    ipsum dolor sit amet consectetur. Vitae elementum at pharetra</li>
            <li className='py-[6px]'><span>2. </span> Lorem ipsum dolor sit amet consectetur.</li>
            <li className='py-[6px]'><span>3. </span> Lorem ipsum dolor sit amet consectetur. Vitae elementum at pharetra ac. Morbi augue quisque mattis pellentesque justo vitae.</li>
         </ol>
         

         <div data-aos="fade-up" data-aos-duration="3000" className='border-line w-[23rem] md:w-[27rem] h-[1px] mb-[2rem] px-[2rem] md:px-[2rem]  bg-gray-400 ml-[2rem] md:ml-[25rem]'></div>
     <div className='flex gap-[1rem] ml-[2rem] md:ml-[25rem] article-icons'>
        <p className='text-gray-400 text-[12px]'>Share</p>
         <AiOutlineFacebook className='cursor-pointer w-3 text-gray-400' />
         <AiOutlineTwitter className='cursor-pointer w-3 text-gray-400' />
         <AiOutlineInstagram className='cursor-pointer w-3 text-gray-400' />
         <AiOutlineLinkedin className='cursor-pointer w-3 text-gray-400' />
      </div>

      

      <div className='mt-[5rem]'>
        <img src={wed4} alt="mem-photo"  className='h-[23rem] md:h-[28rem] lg:h-[20rem] w-full object-cover absolute bg-fixed' />
        <div className='relative mx-auto bg-gray-900/40 h-[23rem] md:h-[28rem] lg:h-[20rem]'>
            <div className='blog-memory-text px-[6rem] md:px-[10rem] py-[-2rem] md:py-[5rem]'>
            <h1 className='text-white text-[19px] sm:text-[20px] md:text-2xl lg:text-2xl  mb-[1rem]'>(CREATE AWES<span className='italic'>O</span>ME SH<span className='italic'>O</span>TS)</h1>
            <div className='flex-col md:flex mx-auto'>
            <h1 className='text-white text-[28px] md:text-6xl'>WANT T<span className='italic'>O</span> SHARE  <br />Y<span className='italic'>O</span>UR MEM<span className='italic'>O</span>RIES?</h1>
            <div className='blog-memory-btn border mr-[14rem] md:mr-[-2rem] lg:mr-[11rem] xl:mr[11rem] w-[5rem] md:w-[6rem] h-[5rem] md:h-[6rem] mt-[1rem] md:mt-[-6rem]  mx-auto cursor-pointer border-white bg-transparent text-[11px] md:text-[13px] hover:bg-[#00193D] hover:border-[#91959c] rounded-full text-center items-center text-white'><BsArrowUpRight  className='mx-auto mt-[12px]'/>SHARE WITH FAMILY</div>
            </div>
          </div>
        </div>
    </div>

    <div className='blog-contact-details contact-us grid grid-cols-1 md:grid-cols-2 mt-[7rem] lg:mb-[5rem] lg:mt-[5rem] px-[1rem] md:px-[5rem] gap-[3rem]'>
       <div className='' data-aos="zoom-in" data-aos-duration="2000">
          <p className='text-[#00193D] text-2xl font-bold py-[1rem]'>Get In Touch</p>
          <div className='text-gray-500'>
          <span className='flex items-center gap-1 font-bold py-2' ><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold'><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold pt-[1rem]'><MdEmail />Email@gmail.com</span> 
          </div>
          <h1 className='md:text-5xl text-4xl font-bold mt-4 mb-4 text-[#00193D]'>Book Us For Your Event</h1>
          <span className='text-gray-500'>Ad graeci theophrastus, libris timeam sapientem. Pellentes faucibus sollicitudin 
            ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis.
             Interdum et malesuada varius mauris eu commodo.
          </span>
       </div>
 <div data-aos="zoom-in" data-aos-duration="2000">
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

export default BlogArticle