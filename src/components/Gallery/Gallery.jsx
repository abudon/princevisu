import React, { useEffect, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import axios from "axios";
import {useNavigate} from 'react-router-dom'







const Gallery = () => {

  const user = JSON.parse(localStorage.getItem('client'))
  const navigate = useNavigate()
    const [category, setCategory] = useState('wedding');
    const [filteredImages, setFilteredImages] = useState([]);
    const [photoGallery, setPhotoGallery] = useState([]);
    const categoryStats = ['wedding', 'gallery', 'all'   ]
    const server_url = process.env.REACT_APP_SERVER_API_URL
    const initialDisplay = 10
    const [finalDispaly, setFinalDispaly] = useState(initialDisplay);
    const [switchLogic, setSwitchLogic] = useState(true);


    useEffect(()=>{

        const fetchGallery = async () => {
       try {
           const response = await axios.get(`${server_url}/gallery`);
           console.log(response)
           const fetchedGalleryItems = response.data.gallery;
           setFinalDispaly(fetchedGalleryItems.length)
           const arrangedGalleryItems = fetchedGalleryItems.filter(item => {
               const  fileExtension = item.image_name.split('.').pop().toLowerCase()
               return ['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension)

           }).map(item => ({
               id: item.id,
               img: `${server_url}/gallery/${item.id}`,
               category: categoryStats[Math.floor(Math.random() * categoryStats.length)]
           }))
           setPhotoGallery(arrangedGalleryItems)

       }catch (e) {
           console.error('Error fetching gallery items:', e);
       }
        }
        fetchGallery()
    }, [])

    useEffect(() => {
        // Filter images based on category
        category === 'all' ? setFilteredImages(photoGallery) : setFilteredImages(photoGallery.filter(image => image.category === category));
    }, [category, photoGallery]);

  return (
    <div className='items-center text-center mt-[-60rem]'>
      <h1 data-aos="zoom-in" data-aos-duration="1000" className='py-[3rem] text-[1.5rem] font-bold'>PH<span className='italic'>O</span>T<span className='italic'>O</span> GALLERY</h1>

      <div className='md:block'>
        <div className='tagss flex gap-[2rem]  text-gray-500 text-[15px]' >
            <CategoryBtn name='wedding' handleSetCategory={setCategory} tagActive={category == 'wedding' ? true : false}/>
            <CategoryBtn name='gallery' handleSetCategory={setCategory} tagActive={category == 'gallery' ? true : false}/>
            <CategoryBtn name='all' handleSetCategory={setCategory}  tagActive={category == 'all' ? true : false}/>
        </div>
        <div className='images grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid  md:px-[10rem] gap-2 mt-[3rem] container'>
            {(filteredImages.slice(0, (switchLogic?initialDisplay:finalDispaly))).map(image =>
                <div key={image.id} className='img-card'>
                <img src={image.img} alt="hello test" className='w-[15rem]' />
                </div>)}
        </div>

        <div className='photo-btnn mt-[2rem] mb-[2rem]'>
            <button className='bg-[#00193D]  items-center p-2 px-10 py-[10px]
            block mx-auto text-[12px] md:text-[10px] hover:bg-gray-700
            text-gray-100 rounded-full gap-[5px] hover:text-white'
            onClick={()=>setSwitchLogic(prevState => !prevState)}>
                {switchLogic ? "SHOW MORE": "SHOW LESS"}
                {/* <BsArrowDown className='text-[12px]' data-aos="zoom-in" data-aos-duration="2000" /> */}
            </button>
        </div>
      </div>

      <div className=' bg-memory md:bg-cover w-full about-area h-[20rem] md:h-[31rem] lg:h-[25rem] '>
       <div className='bg-gray-900/20 w-full h-[12.3rem] about-area md:h-[31rem] lg:h-[25rem] relative'>
           <div className=' pt-[4rem]  items-center text-center'  data-aos="fade-up" data-aos-duration="2000">
              <h1 className=' text-white text-md md:text-3xl lg:text-2xl mx-auto items-center  font-md  p-[1rem] md:p-[3rem] lg:p-[]'>
              {/* (CREATE AWES<span className='italic'>O</span>ME SH<span className='italic'>O</span>TS) */}
              <div className='flex items-center gap-[1rem]'>
            <h1 className='text-white py-[2rem] font-bold mx-auto items-center text-center text-[28px]  md:text-6xl'>WANT T<span className='italic'>O</span> SHARE  <br />Y<span className='italic'>O</span>UR MEM<span className='italic'>O</span>RIES?</h1>
            <div   onClick={()=>{
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

    </div>
  )
}

// Proven work experience as a React programmer or similar role



const CategoryBtn = ({name, handleSetCategory, tagActive}) => {
    return <button className={`category ${tagActive ? 'active rounded-md font-bold text-white bg-[#00193D] p-2' : null}`} onClick={()=>handleSetCategory(name)}>
    {name.toUpperCase()}</button>
}

export default Gallery
