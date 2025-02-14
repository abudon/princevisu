import React, {useState, useEffect} from 'react'
import {IoCallSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import banner4 from '../assets/images/home/photo.jpg'
import { MdPlayArrow } from "react-icons/md";
import wed4 from '../assets/images/home/px.jpg'
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import video from '../assets/images/home/vid (1).mp4'

const Videogallery = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  // VARIABLE INITIALIZATION AND DECLEARATION
  const [file, setFile] = useState(null)
  const [category, setCategory] = useState('wedding');
  const [filteredImages, setFilteredImages] = useState([]);
  const [media, setMedia] = useState([]);
  const categoryStats = ['wedding','gallery','all']
    const server_url = process.env.REACT_APP_SERVER_API_URL



// HOOKS AND FUNCTIONS

    useEffect(()=>{

        const fetchMedia = async () => {
            try {
                const response = await axios.get(`${server_url}/gallery`);
                const fetchedGalleryItems = response.data.galleryItems;
                const arrangedGalleryItems = fetchedGalleryItems.filter(item => {
                    const  fileExtension = item.image_name.split('.').pop().toLowerCase()
                    return ['mp4', 'mkv','mov','avi'].includes(fileExtension)

                }).map(item => ({
                    id: item.id,
                    type: 'video',
                    url: `${server_url}/gallery/${item.id}`,
                    category: categoryStats[Math.floor(Math.random() * categoryStats.length)],
                    title: item.image_name
                }))
                setMedia(arrangedGalleryItems)

            }catch (e) {
                console.error('Error fetching gallery items:', e);
            }
        }
        fetchMedia()
    }, [])




  useEffect(()=>{
    category === 'all' ? setFilteredImages(media) : setFilteredImages(media.filter(file => file.category === category))
   }, [category, media])




  return (
       <div>
      <div className='grid grid-cols-1 md:grid-cols-2 bg-img md:flex-row min-h-100vh text-center mx-auto px-[10%] gap-0 bg-[#f0f0f0] w-full h-[60%] md:h-[30rem]'>
        <div className='hero-vid p-5 items-center pl-[2px] md:pl-[0] lg:pl-[7rem]  mt-0 md:mt-[8rem] ' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='w-[20rem]'>
               <h1 className='text-1xl md:text-2xl mr-[1rem] md:[5rem] mt-[5px] md:mt-[rem] font-bold  md:text-[1rem] mb-2'>(VIDEO)</h1>
               <h1 className=' text-[23px] md:text-[27px] mt-[16px] md:mt-[5px] text-gray-800  font-bold capitalize'>WE WILL MAKE YOUR STORY SHINE ON FILM</h1>

             <div className=''>
                 <button onClick={()=>{
                  if(user){
                     navigate('/dashboard/bookings/addbooking')
                  }else{
                    navigate('/login')
                  }
                 }}

                 className='flex items-center mt-[5px] md:mt-8 ml-[3rem] md:ml-0 p-2 px-6 md:px-6 py-[10px] md:py-3 gap-1 btn bg-[#00193D] text-[12px] md:text-[10px] hover:bg-gray-700 text-gray-100 rounded-full hover:text-white'>START YOUR STORY WITH US <BsArrowUpRight /></button>
                 </div>
             </div>
             </div>
             <div className='mt-[-3rem] md:mt-[6rem] w-[20rem]' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src={banner4} className='hero-img w-full md:w-[22rem]   rounded-lg h-[15rem] md:h-[20rem] ml-0 md:ml-[20%]' alt="vid-pic" />
             </div>
          </div>


            <div className='relative min-h-100vh bg-[#fff]'>
              <div className='vid-gallery mt-[3rem]  md:block'  data-aos="zoom-in" data-aos-duration="2000">
                <h1 className='text-[#00193D] text-center font-extrabold text-4xl'>VIDEO GALLERY</h1>
              <div className='tagsss flex mt-[5rem]  gap-[2rem] text-gray-500 ' >
                <CategoryBtn name='wedding' handleSetCategory={setCategory}  tagActive={category === 'wedding' ? true : false}/>
                <CategoryBtn name='gallery' handleSetCategory={setCategory} tagActive={category === 'gallery' ? true : false}/>
                <CategoryBtn name='all' handleSetCategory={setCategory} tagActive={category === 'all' ? true : false}/>
               </div>
                </div>



      <div className='mt-[10rem]'>
        <div className='my-container'>
            <div className='media-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>


                {
                    filteredImages.map((file, index) => (
                        <div className='media' key={index} onClick={() => setFile(file)}>
                            {
                                file.type === 'image'
                                    ? <img src={file.url} alt='' />
                                    : <video>
                                    <source src={file.url}/>
                                    </video>
                            }
                            <div className='absolute vid-icon text-white mt-[-5rem] md:mt-[-10rem] lg:mt-[-5rem] md:ml-[19rem] lg:ml-[9rem] ml-[9rem]'>
                                <MdPlayArrow className='p-[3px] text-[1.6rem] rounded-full border border-white' />
                            </div>
                            <div className='vid-title absolute text-center'>{file.title}</div>
                        </div>
                    ))
                }
              </div>



              <div className='popup-media' style={{display: file ? 'block' : 'none'}}>
          <span onClick={() => setFile(null)}>&times;</span>

          {
            file?.type === 'video' ?
              <video src={file?.url} muted autoPlay controls controlsList='nodownload' />
            : <img src={file?.url} />
          }
       </div>
     </div>
  </div>

  <div className=' bg-memory md:bg-cover w-full about-area h-[20rem] md:h-[31rem] lg:h-[25rem] '>
       <div className='bg-gray-900/20 w-full h-[12.3rem] about-area md:h-[31rem] lg:h-[25rem] relative'>
           <div className=' pt-[4rem]  items-center text-center'  data-aos="fade-up" data-aos-duration="2000">
              <h1 className=' text-white text-md md:text-3xl lg:text-2xl mx-auto items-center  font-md  p-[1rem] md:p-[3rem] lg:p-[]'>
              {/* (CREATE AWES<span className='italic'>O</span>ME SH<span className='italic'>O</span>TS) */}
              <div className='flex items-center gap-[1rem]'>
            <h1 className='text-white py-[2rem] font-bold mx-auto items-center text-center text-[28px]  md:text-6xl'>WANT T<span className='italic'>O</span> SHARE  <br />Y<span className='italic'>O</span>UR MEM<span className='italic'>O</span>RIES?</h1>
            <div onClick={()=>{
              if(user){
                navigate('/dashboard/bookings/addbooking')
              }else{
                navigate('/login')
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
     </div>
  )
}

const CategoryBtn = ({name, handleSetCategory, tagActive}) => {
  return <button className={`category ${tagActive ? 'active rounded-md font-bold text-white bg-[#00193D] p-2' : null}`} onClick={()=>handleSetCategory(name)}>
  {name.toUpperCase()}</button>
}


export default Videogallery
