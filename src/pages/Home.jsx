import banner1 from '../assets/images/home/px.jpg'
import CountUp from 'react-countup'
import banner4 from '../assets/images/home/bann.jpg'
import banner2 from '../assets/images/home/bann (2).jpg'
import banner3 from '../assets/images/home/flawa (1).jpg'
import pic2 from '../assets/images/home/gal (1).png'
import pic3 from '../assets/images/home/gal (2).png'
import pic4 from '../assets/images/home/gall (3).png'
import pic5 from '../assets/images/home/gal (1).png'
import pic6 from '../assets/images/home/gal (2).png'
import pic7 from '../assets/images/home/gall (3).png'
import Banner from '../assets/images/home/pix (4).jpg'
 import {Swiper, SwiperSlide} from 'swiper/react'
 import {Pagination } from 'swiper/modules'
 import 'swiper/css'
 import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
 import 'swiper/css/pagination'
 import {FaCameraRetro} from 'react-icons/fa'
import {IoCallSharp} from 'react-icons/io5'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import {HiStar} from 'react-icons/hi'
import {BsFillChatSquareQuoteFill, BsChatSquareQuote} from 'react-icons/bs'
 import {FcOldTimeCamera} from 'react-icons/fc'
import {FcCamera} from 'react-icons/fc'
import {FcMultipleCameras} from 'react-icons/fc'
import {FaArrowRight} from 'react-icons/fa6'
import Faqitems from '../components/FAQ/Faqitems'
import Homelistimg from '../components/Homeimglist'
import { faqs } from '../assets/data/faqsdata'
import wed1 from '../assets/images/home/piic (1).jpg'
import wed2 from '../assets/images/home/piic (4).jpg'
import wed3 from '../assets/images/home/piic (2).jpg'
import wed4 from '../assets/images/home/piic (3).jpg'
//  import {BsCameraReelsFill} from 'react-icons/bs'
// import CarouselTxt from '../components/Carousel/CarouselTxt'
// import VideoSection from '../components/VideoSection/VideoSection'
// import Memories from '../components/Memories/Memories'
// import PhotoSection from '../components/PhotoSection/PhotoSection'
// import AwesomeShots from '../components/AwesomeShots/AwesomeShots'
// import FAQ from '../components/FAQ/FAQ'
// import Instagram from '../components/Instagram/Instagram'
// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {BsArrowUpRight} from 'react-icons/bs'
// 'use client';
import { Carousel } from 'flowbite-react';
import { BiArrowToRight, BiRightArrow } from 'react-icons/bi'
import {Link, useNavigate} from 'react-router-dom'
import { isClickableInput } from '@testing-library/user-event/dist/utils'



const Home = () => {

    const user =JSON.parse( localStorage.getItem('client') )
    const navigate = useNavigate()





  useEffect(() => {
    AOS.init();

    }, [])

  return (
    <div className=' min-h-screen'>
      <div className='max-h-[550px] lg:h-[590px] bg-img w-full md:w-full'>
        <h1  data-aos="zoom-in" data-aos-duration="2000" className=' myheading px-[1rem] font-extrabold md:px-[100px]  lg:px-[10rem] p-[2rem] text-center relative text-3xl md:text-5xl lg:text-6xl pt-[2rem] text-gray-700  mt-0  md:leading-10'>BEAUTIFUL <span className='text-gray-700 '>M<span className='italic'>O</span>MENT<br /></span>IS EVERYTHING</h1>


          {/* Mobile */}
    {/* <div className="md:hidden h-[20rem] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel> */}
        {/* <div className='flex flex-col gap-7'>
        <img src={banner4} alt="..." className='h-[30rem]' /> */}
        {/* <h3 className='text-[14px] text-center'>Moments</h3> */}
        {/* </div> */}
        {/* <img src={banner3} alt="..." className='h-[30rem]' /> */}
        {/* <h3 className='text-center text-[14px]'>Let's make <br/>impression</h3> */}
        {/* <img src={banner2} alt="..." className='h-[30rem]' /> */}
        {/* <p className='text-center text-[14px]'>Love & bliss</p> */}
      {/* </Carousel>
    </div> */}


        {/* <div className='hidden md:flex home-banner  items-center md:items-start gap-[1rem] px-5 md:gap-[2rem] lg:gap-[6rem] md:ml-[3rem]  lg:ml-[17rem] md:mt-[2rem] lg:mt-[1rem]'>
           <div className='text-center md:w-[150px]'   data-aos="zoom-in"
     data-aos-duration="2000">
               <img src={banner4} alt="bg-pic" className='h-[150px] md:h-[200px] object-cover rounded-xl  w-[150px] md:w-[150px]' loading='lazy' />
               <h3 className=' md:text-[14px]'>Moments</h3>
           </div>
            <div className='md:w-[200px]'  data-aos="zoom-in"
     data-aos-duration="1000" >
              <img src={banner3} alt="bg-pic" className='h-[180px] rounded-xl  md:h-[230px] w-[200px] md:w-[200px]' />
            <h3 className='text-center text-[14px]'>Let's make <br/>impression</h3>
            </div>
            <div className='w-[150px]'  data-aos="zoom-in"
     data-aos-duration="2000" >
               <img src={banner2} alt="bg-pic" className='h-[150px] rounded-xl   md:h-[200px] w-[200px] md:w-[150px]'/>
               <p className='text-center text-[14px]'>Love & bliss</p>
            </div>
            </div> */}

            <div className='banners flex items-center gap-[1rem] md:gap-[5rem]'>
               <div className="img w-[95%] md:w-[18%]">
                <img src={banner4} alt="" className=' rounded-xl h-[150px] md:h-[200px] w-[200px] md:w-[150px]' />
               </div>
               <div className="img w-[95%] md:w-[23%]">
                <img src={banner3} alt=""  className=' rounded-xl h-[180px] md:h-[230px] '/>
               </div>
               <div className="img w-[95%] md:w-[18%]">
                <img src={banner2} alt="" className=' rounded-xl h-[150px] md:h-[200px] w-[200px] md:w-[150px]' />
               </div>
            </div>

            <div className='btnn'>
              <button id='mybtn'
                      onClick={()=>{
                          if (user){
                              navigate('/dashboard/bookings/addbooking')
                          } else {
                              navigate("/login")
                          }
                      }}
                      className='btn  bg-[#00193D] text-[9px] md:text-[10px] hover:bg-gray-700 text-gray-100  hover:text-white py-3 px-9 md:px-11 border border-gray-500 hover:border-transparent rounded-full'>BOOK NOW</button>
            </div>
            </div>


            {/* Carousel page */}
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full w-[100%] items-center justify-center text-[20px] bg-[#00193D] text-white">
       <p className='max-w-[28rem] italic'>Capturing every special moment,
from traditional videography to stunning cinematic creations. We’ll create timeless          keepsakes
that you can enjoy          and cherish for a lifetime. </p>
        </div>
        <div className="flex w-[100%] h-full items-center justify-center text-[20px] bg-[#00193D] text-white">
      <p className='max-w-[28rem] italic'> Capturing every special moment,
from traditional videography to stunning cinematic creations. We’ll create timeless          keepsakes
that you can enjoy          and cherish for a lifetime. </p>
        </div>
        <div className="flex w-[100%] h-full items-center justify-center text-[20px] bg-[#00193D] text-white">
       <p className='max-w-[28rem] italic'> Capturing every special moment,
from traditional videography to stunning cinematic creations. We’ll create timeless          keepsakes
that you can enjoy          and cherish for a lifetime.</p>
        </div>
      </Carousel>
    </div>

                            {/* video section */}
     <div className=' home-cont grid grid-cols-1 md:grid-cols-2 items-center  lg:text-center gap-[5rem]  md:px-[2rem] lg:px-[15%] bg-[#f1f1f1]   w-full h-[60%] md:h-[30rem]'>
        <div className='p-5 items-center  mt-0 md:mt-[4rem] lg:mt-[6rem] '>
            <div className='w-[30rem]' data-aos="fade-right" data-aos-duration="2000">
               <span className='text-1xl mr-[10rem] md:mr-[1rem]  md:[5rem] mt-[-10px] md:mt-[rem] font-bold  md:text-[1rem] mb-2'>(VIDE<span className='italic'>O</span>)</span>
               <h1 className=' text-[19px] md:text-[27px] ml-[] md:ml-0 mt-[25px] md:mt-[5px] text-gray-800  font-bold capitalize'>WE WILL MAKE Y<span className='italic'>O</span>UR <br /> ST<span className='italic'>O</span>RY SHINE <span className='italic'>O</span>N FILM</h1>
                <div className='md:tracking-wider lg:tracking-widest px-[2rem]  md:max-w-[25rem] lg:max-w-full py-2 vid-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia neque deleniti repellat quasi sunt doloribus deserunt id cum iure natus ipsam
                   itaque vel iste, totam praesentium non corporis illo.
                </div>
             <div className='ml-[8rem]'>
                 <button onClick={()=>{
                  if(user){
                    navigate('/dashboard/bookings/addbooking')
                  }else{
                    navigate('/login')
                  }
                 }}
                 
                 className='flex items-center mt-[16px] md:mt-3 ml-[-5rem] md:ml-[-5rem] lg:ml-[0] p-2 px-6 md:px-6  transition-all duration-300 hover:-translate-y-1 py-[10px] md:py-3 gap-1 btn bg-[#00193D] text-[12px] md:text-[10px] text-gray-100 rounded-full hover:text-white'>START YOUR STORY WITH US <BsArrowUpRight /></button>
                 </div>
             </div>


             </div>
             <div className='mt-[10px] hidden md:block  md:mt-[5.5rem] lg:mt-[6rem] ' data-aos="fade-left" data-aos-duration="2000">
                <img src={banner4} className='w-full md:w-[15rem] lg:w-[21rem] h-[15rem] md:h-[14rem] lg:h-[20rem] object-cover rounded-sm md:rounded-full ml-0 md:ml-[20%]' alt="vid-pic" />
             </div>
        </div>

        {/* <div className='flex items-center mx-auto px-[30rem]'>
          <div className='w-[50%]'>
            <h3>VIDEO</h3>
            <h1>WE WILL MAKE YOUR STORY SHINE ON FILM</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quos mollitia neque deleniti repellat quasi sunt doloribus
               deserunt id cum iure natus ipsam itaque vel iste, totam 
               praesentium non corporis illo</span>
               <button>start your story</button>
          </div>
          <div className='max-w-[50%]'>
            <img src={banner4} alt=""  className='w-full md:w-[15rem] lg:w-[21rem] h-[15rem] md:h-[14rem]'/>
          </div>
        </div> */}

                 {/* Memory section */}
                 <div className=' bg-memory md:bg-cover w-full about-area h-[20rem] md:h-[31rem] lg:h-[25rem] '>
       <div className='bg-gray-900/20 w-full h-[12.3rem] about-area md:h-[31rem] lg:h-[25rem] relative'>
           <div className=' pt-[4rem]  items-center text-center'  data-aos="fade-up" data-aos-duration="2000">
              <h1 className=' text-white text-md md:text-3xl lg:text-2xl mx-auto items-center  font-md  p-[1rem] md:p-[3rem] lg:p-[]'>
              {/* (CREATE AWES<span className='italic'>O</span>ME SH<span className='italic'>O</span>TS) */}
              <div className='flex items-center gap-[1rem]'>
            <h1 className='text-white py-[2rem] font-bold mx-auto items-center text-center text-[28px]  md:text-6xl'>WANT T<span className='italic'>O</span> SHARE  <br />Y<span className='italic'>O</span>UR MEM<span className='italic'>O</span>RIES?</h1>
            <div
                onClick={()=>{
                    if (user){
                        navigate('/dashboard/bookings/addbooking')
                    } else {
                        navigate("/login")
                    }
                }}
                className=' border mt-[0] w-[5rem] md:w-[8rem] lg:w-[6rem] h-[4.7rem] mx-auto md:h-[7rem] lg:h-[6rem] md:mt-[1rem]  cursor-pointer border-white bg-transparent text-[11px] md:text-[11px] hover:bg-[#00193D] hover:border-[#84aff9] rounded-full text-center items-center text-white'>
              <BsArrowUpRight  className='mx-auto font-bold mt-[15px] md:mt-[24px]'/> BOOK NOW
            </div>
            </div>
              </h1>
           </div>
       </div>
    </div>


         {/* Photo gallery section */}

          <div className='items-center mt-[4rem] text-center text-gray-700' data-aos="fade-up" data-aos-duration="2000">
            <h1 className='text-[1rem] md:text-[18px] font-bold'>(PH<span className='italic'>O</span>T<span className='italic'>O</span>S)</h1>
             <h1 className='text-[20px] md:text-[1.6rem] font-semibold underline-offset-4'>A PICTURE IS W<span className='italic'>O</span>RTH A TH<span className='italic'>O</span>USAND W<span className='italic'>O</span>RDS</h1>

              <div className=' w-[full]  lg-[15rem] md:px-[5rem] lg:px-[14rem] mt-[10rem] mb-[6rem]'>
              {/* <Homelistimg /> */}

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1'> 
                {/* <Homelistimg /> */}
                <img src={wed1} alt="" className='w-[30rem] h-[10rem] rounded-md object-cover'/>
                <img src={wed2} alt="" className='w-[30rem] h-[10rem] rounded-md object-cover' />
                <img src={wed3} alt="" className='w-[30rem] h-[10rem] rounded-md object-cover' />
                <img src={wed4} alt=""  className='w-[30rem] h-[10rem] rounded-md object-cover'/>
                {/* <img src={wed1} alt="" className='w-[30rem] h-[10rem] rounded-md object-cover'/>
                <img src={wed2} alt="" className='w-[30rem] h-[10rem] rounded-md object-cover' />
                <img src={wed3} alt="" className='w-[30rem] h-[10rem] rounded-md object-cover' />
                <img src={wed4} alt=""  className='w-[30rem] h-[10rem] rounded-md object-cover'/> */}
                </div>
              <div className='btn-phottto  mt-[3rem]'>
              <button onClick={()=>{
                navigate('/photogallery')
              }}
              
              className='btn  bg-[#00193D] text-[9px] md:text-[10px] hover:bg-gray-700 text-gray-100  hover:text-white py-3 px-9 md:px-11 border border-gray-500 hover:border-transparent rounded-full'>SEE OUR GALLERY</button>
              </div>
            </div>
        </div>






      {/* records section */}
      <div className=''>
        <img src={Banner} alt="mem-photo"  className='h-[23rem] md:h-[23rem] lg:h-[23rem] w-full object-cover absolute bg-fixed' />
        <div className='relative mx-auto bg-gray-900/70 h-[23rem] md:h-[23rem] lg:h-[23rem]'>
            <div className='px-[6rem] md:px-[10rem] py-[-2rem] md:py-[5rem]'>

            <div className='' data-aos="flip-up" data-aos-duration="2000">
            <div className='record-item grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  items-center lg:gap-[10rem] pt-[46px]'>
                <div className=''>
                  <h2 className='text-[26px] leading-[56px] text-white lg:text-[3.5rem] lg:leading-[54px] font-[700]'><CountUp end={17} />+</h2>
                  {/* <span className='w-[100px] h-2 bg-[#0067ff] rounded-full block mt-[-24px]'></span> */}
                  <p className='pt-[35px] text-white text-[15px]'>Experience</p>
                </div>

                <div className=''>
                  <h2 className='text-[26px] leading-[56px] lg:text-[3.5rem] text-white lg:leading-[54px] font-[700]'><CountUp end={85} />+</h2>
                  {/* <span className='w-[100px] h-2 bg-[#feb60d] rounded-full block mt-[-24px]'></span> */}
                  <p className='pt-[35px] text-white text-[15px]'>Studio Location</p>
                </div>

                <div className=''>
                  <h2 className='text-[26px] leading-[56px] lg:text-[3.5rem] text-white lg:leading-[54px] font-[700]'><CountUp end={100} />%</h2>
                  {/* <span className='w-[100px] h-2 bg-[#9771ff] rounded-full block mt-[-24px]'></span> */}
                  <p className='pt-[35px] text-white text-[15px]'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>



    {/* FAQ SECTION */}
    <div className=' grid grid-cols-1 md:grid-cols-2 px-[2rem] md:px-[3rem] lg:px-[9rem] mt-[4rem] md:mt-[4rem] mb-[3rem]'>
       <div className='faq-h1 mt-[5rem md:mt-[6rem] w-[24rem]' data-aos="zoom-in" data-aos-duration="2000">
            <h1 className='text-2xl md:text-[20px] font-bold'>(F.A.Q)</h1>
            <h1 className='text-2xl md:text-3xl'>DO YOU HAVE <br/>QUESTIONS? WE'VE <br/>GOT ANSWERS.</h1>
           <div className=''>
            <button   onClick={()=>{
                    if (user){
                        navigate('/dashboard/bookings/addbooking')
                    } else {
                        navigate("/login")
                    }
                }}
            
            className=' flex items-center mt-8 p-2 md:p-3 px-5 md:px-6 py-2 md:py-3 gap-1 btn bg-[#00193D] text-[10px] md:text-[12px] hover:bg-gray-700 text-gray-100 rounded-full hover:text-white'>CREATE YOUR BEST MEMORIES WITH US <BsArrowUpRight /></button>
           </div>
        </div>
        <div className='faq-content mt-[3rem] md:mt-4' data-aos="zoom-in" data-aos-duration="2000">
           {faqs.map((item, index) =><Faqitems item={item} key={index} />)}
        </div>
    </div>




     <div className='h-[22rem] ig-section bg-img '>
     <h1 className='pt-[2rem] pb-[2rem] text-[20px] text-center md:text-[25px]'>Check us out on Instagram</h1>
        <div data-aos="fade-up" data-aos-duration="2000" className='ig-pics grid grid-cols-3 lg:grid-cols-6 gap-3 md:grid-cols-3 px-[1rem]  md:px-[4rem] justify-center mx-auto'>
            <img src={pic2} alt="" className='w-[12rem] h-[10rem] object-cover' />
            <img src={pic3} alt="" className='w-[12rem] h-[10rem] object-cover' />
            <img src={pic4} alt="" className='w-[12rem] h-[10rem] object-cover' />
            <img src={pic5} alt="" className='w-[12rem] h-[10rem] object-cover' />
            <img src={pic6} alt="" className='w-[12rem] h-[10rem] object-cover' />
            <img src={pic7} alt="" className='w-[12rem] h-[10rem] object-cover' />
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

export default Home
