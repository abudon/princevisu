import React, { useEffect, useState } from 'react'
import {IoCallSharp} from 'react-icons/io5'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import {HiStar} from 'react-icons/hi'
import {BsFillChatSquareQuoteFill, BsChatSquareQuote} from 'react-icons/bs'
import {BsArrowUpRight} from 'react-icons/bs'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { articles } from '../BlogData'
import BlogCard from '../components/BlogCard'
import banner4 from '../assets/images/home/bann.jpg'
import banner5 from '../assets/images/home/px.jpg'
import ban1 from '../assets/images/home/wed (1).jpg'
import ban2 from '../assets/images/home/log.png'
import ban3 from '../assets/images/home/gal.png'
import pix6 from '../assets/images/home/gal (1).png'
import wed4 from '../assets/images/home/gal (2).png'
import pix from '../assets/images/home/wed (1).jpg'
import pix3 from '../assets/images/home/wed (2).jpg'
import euk1 from '../assets/images/home/wed (3).jpg'
import pix7 from '../assets/images/home/gall (1).png'
import pix8 from '../assets/images/home/gall (2).png'
import pix9 from '../assets/images/home/gall (3).png'
import pix10 from '../assets/images/home/wed (4).jpg'
import pix11 from '../assets/images/home/wed (2).jpg'
import wed1 from '../assets/images/home/wed (1).jpg'
import banner1 from '../assets/images/home/Eukeria & Isaac 2 1.jpg'

const Blog = () => {

  const [word, setWord] = useState('');

  useEffect(()=>{
   
  }, [])

  const [articles, setArticles] = useState([
    {
      id: 0,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: 'affordable gifts your guests will love',
      msg: 'thoughtful and wallet friendly gift ideas',
      date: '03/06/2023'
     },
     {
      id: 1,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '17 best wedding stationery designers',
      msg: 'Talented creatives from all around the world',
      date: '03/06/2023'
     },
     {
      id: 2,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '40 best wedding photographers',
      msg: 'These talented professionals capture love stories',
      date: '03/06/2023'
     },
     {
      id: 3,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '15 best bridal designs in europe',
      msg: 'Unique vision and modern approach',
      date: '03/06/2023'
     },
     {
      id: 4,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: 'affordable gifts your guests will love',
      msg: 'thoughtful and wallet friendly gift ideas',
      date: '03/06/2023'
     },
     {
      id: 5,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '17 best wedding stationery designers',
      msg: 'Talented creatives from all around the world',
      date: '03/06/2023'
     },
     {
      id: 6,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '40 best wedding photographers',
      msg: 'These talented professionals capture love stories',
      date: '03/06/2023'
     },
     {
      id: 7,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '15 best bridal designers in europe',
      msg: 'Unique vision & modern approach',
      date: '03/06/2023'
     },
     {
      id: 8,
      img:'../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: 'affordable gifts your guests will love',
      msg: 'thoughtful and wallet friendly gift ideas',
      date: '03/06/2023'
     },
     {
      id: 9,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '17 best wedding stationery designers',
      msg: 'thoughtful and wallet friendly gift ideas',
      date: '03/06/2023'
     },
     {
      id: 10,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: 'affordable gifts your guests will love',
      msg: 'thoughtful and wallet friendly gift ideas',
      date: '03/06/2023'
     },
     {
      id: 11,
      img: '../assets/images/home/wed (1).jpg',
      paragraph: 'PLANNING',
      title: '15 best bridal designers in europe',
      msg: 'thoughtful and wallet friendly gift ideas',
      date: '03/06/2023'
     },
  ])
  
  return (

    
    <div className=' bg-cover bg-centers  bg-no-repeat '>
      <div className='bg-img h-[32rem]  container mt-[0] mb-[0]'>
        <div data-aos="zoom-in" data-aos-duration="2000" className='blog-hero grid grid-cols-1 md:grid-cols-2 gap-7 lg:px-[5rem] md:px-[3rem] px-[2rem]'>
        <div  className='mt-[2rem] md:mt-[3rem] lg:mt-[7rem] md:ml-[0rem] lg:ml-[10rem] w-full md:w-[18rem] items-center'>
          <h2 className='text-1xl font-bold items-center'>(BLOG)</h2>
          <h1 className='lg:text-3xl text-[2rem] md:text-2xl font-bold'>USEFUL ARTICLES TO HELP YOU</h1>
          <button className='flex items-center mt-[5px] md:mt-8 ml-[3rem] md:ml-0 p-2 px-6 md:px-6 py-[10px] md:py-3 gap-1 btn bg-[#00193D] text-[12px] md:text-[10px] hover:bg-gray-700 text-gray-100 rounded-full hover:text-white'>SUBSCRIBE</button>
        </div>
        <div className='sm:mt-[2rem] md:mt-[3rem] lg:mt-[6rem]'>
          <img src={banner4} alt="" className='w-full  md:w-[15rem] lg:w-[18rem] h-[20rem] md:h-[20rem] lg:h-[25] object-cover '/>
        </div>
       </div>
      </div>
      {/* <div className='items-center text-center  mt-[5rem]'>
         <h1 className='text-[25px] font-bold'>ARTICLES</h1>
         <ul className='flex text-center ml-[30%] gap-[2rem] mb-10 mt-[3rem]'>
          <select name="" id="">Yam</select>
          <option value="">goat</option>
          <option value="">goat</option>
          <option value="">goat</option>
          <option value="">goat</option>
         </ul>
       </div> */}

       <div className='items-center hidden  md:block text-center justify-center mt-[5rem]'>
         <h1 className='text-[25px] font-bold'>ARTICLES</h1>
         <ul className='blog-heading flex text-center md:ml-[7rem] md:gap-[15px] lg:gap-[2rem] mb-10 mt-[3rem]'>
          <li>ALL</li>
          <li>REAL WEDDING</li>
          <li className='font-bold'>PLANNING</li>
          <li>HONEYMOON</li>
          <li>INSPIRATION</li>
         </ul>
       </div>
       {/* <img src={wed1} alt="" className='hover:scale-110 transition duration-500 cursor-pointer object-cover' /> */}
       <div  className='my-blogs grid grid-cols-2  px-[1rem] md:px-[5rem] lg:px-[7rem] lg:grid-cols-4 items-center md:grid-cols-3'>
        {/* {articles.map((article) => (
            <div className='blog-post overflow-hidden shadow-md' key={article.id}>
              <img src={article.img} alt='' />
            <div className='px-[5px]'>
            <p className='text-[12px] mt-[4px] text-gray-400'>{article.paragraph}</p>
            <h2 className='font-bold mt-3'>{article.title}</h2>
            <p className='text-[10px] mt-3'>{article.msg}</p>
            <span className='text-[12px] text-gray-400 mt-3'>{article.date}</span>
            </div>
          </div>
        ))    */}

        <div className='blog-post overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={ban3} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
        <div className='blog-post overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={ban2} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
        <div className='blog-post overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={ban3} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
         <div className='blog-post mt-[3rem] mb-[3rem] overflow-hidden shadow-sm' data-aos="zoom-in">
          <img src={pix6} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
        <div className='blog-post mt-[3rem] mb-[3rem] overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={pix7} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
        <div className='blog-post mt-[3rem] mb-[3rem] overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={pix8} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
        <div className='blog-post mt-[3rem] mb-[3rem] overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={pix9} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>
        <div className='blog-post mt-[3rem] mb-[3rem] overflow-hidden shadow-sm' data-aos="zoom-in" >
          <img src={pix8} alt="" />
          <div className='px-[5px]'>
          <p className='text-[12px] mt-[4px] text-gray-400'>PLANNING</p>
          <h2 className='font-bold mt-3'>Affrodable gifts your guests will love</h2>
          <p className='text-[10px] mt-3'>Thoughtful & wallet friendly gift ideas</p>
          <span className='text-[12px] text-gray-400 mt-3'>03/06/2023</span>
          </div>
        </div>

        <ul className=' hidden lg:flex text-gray-400 text-center ml-[22rem] gap-5 text-[10px] mb-8'>
          <li><AiOutlineArrowLeft/></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>6</li>
          <li className='text'><AiOutlineArrowRight/></li>
        </ul>
       </div>

       <div className=''>
        <img src={banner5} alt="mem-photo"  className='h-[23rem] md:h-[28rem] lg:h-[20rem] w-full object-cover absolute bg-fixed' />
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

export default Blog