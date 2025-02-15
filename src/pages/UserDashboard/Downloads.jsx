import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { downloadData } from "../../components/UserDashboard/Download/downloadData";
import DownloadSwipeItem from "../../components/UserDashboard/Download/DownloadSwipeItem";
import "swiper/css";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import {Pagination,} from "@mui/material";
import axios from "axios";

function Downloads() {

    const [selectedImage, setSelectedImage] = useState(null);
    const user_id = JSON.parse(localStorage.getItem("client")).id
    const [images, setImages] = useState([]);
    const [enable, setEnable] = useState(true);
    const [user, setUser] = useState({});
    const server_url = process.env.REACT_APP_SERVER_API_URL


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server_url}/download/${user_id}`);
                const data = response.data;
                setImages(data);
                setSelectedImage(data[1].url);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        const fetchUser = async (userId) => {
            try {
                const response = await axios.post(`${server_url}/getuser`, { user_id: userId });
                if (response.status === 200) {
                    // Return the user data from the response
                    setUser(response.data);
                } else {
                    // If the request was not successful, log an error and return null
                    console.error("Failed to fetch user:", response.statusText);
                    return null;
                }
            } catch (e) {
                console.error("Error fetching user:", e.message);
            }
        };

        fetchData();
        fetchUser(user_id);
    }, [user_id, server_url]);

    // Use the function to download an image when the button is clicked

    useEffect(() => {
        if (user && user.paymentStatus === "paid") {
            // Enable the download button
            setEnable(true);
        } else {
            // Disable the download button and show an alert
            setEnable(false);

        }

    }, [user]);




    const downloadImage = async (userId, imageId) => {
        try {
            const response = await axios.get(`${server_url}/api/images/download/${userId}/${imageId}`, {
                responseType: 'blob', // Set the response type to blob
            });

            // Create a blob URL from the response data
            const url = window.URL.createObjectURL(response.data);

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;

            // Extract filename from content disposition header and set it as the download attribute
            const contentDisposition = response.headers['content-disposition'];
            if (contentDisposition) {
                const filename = contentDisposition.split(';')[1].split('filename=')[1].trim();
                link.setAttribute('download', filename);
            } else {
                // If filename cannot be extracted, generate a unique filename
                link.setAttribute('download', `image_${imageId}`);
            }

            // Append the link to the document body and trigger the click event to initiate the download
            document.body.appendChild(link);
            link.click();

            // Clean up by removing the link and revoking the blob URL
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };



    const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handlePaginationChange = (_, value) => {
    setSelectedImage(images[value - 1].url);

  };




  return (
    <section className='px-4 sm:px-6 md:px-10 lg:px-20 py-10'>
      {/* Heading */}
      <h2 className='uppercase text-xl sm:text-2xl lg:text-4xl font-medium md:text-center mb-6'>
        ready f<span className='italic font-normal font-playfair'>o</span>r d
        <span className='italic font-normal font-playfair'>o</span>wnl
        <span className='italic font-normal font-playfair'>o</span>ad
      </h2>

      {/* Paragraph */}
      <p className='mb-8 md:mb-16 md:text-center'>
        Photos will be available for download until 05.05.23.
      </p>

      {/* Image List */}
      <div className=' md:flex '>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className='max-w-3xl mx-auto'
          spaceBetween={5}
          slidesPerView={3}
          centeredSlides={true}
          scrollbar={{draggable: true}}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <DownloadSwipeItem onImageSelect={handleImageSelect} img={item.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Image Section */}
      {
          selectedImage && (
        <div className='max-w-3xl mx-auto md:mt-8'>
          <img
            className='w-full object-cover'
            src={selectedImage}
            alt='preview'
          />
            <div className='mt-[30px] md:mt-[20px] lg:mt-[1rem] items-center ml-[-3px] md:ml-1 text-center'>
                {
                    //
                    // (user.paymentStatus === "paid")? setEnable(false): null
                }
                <button
                    onClick={()=>{

                        if (selectedImage && enable) { // Check the enable state
                            const break_url = selectedImage.split('/');
                            const user_id = break_url[break_url.length - 2];
                            const image_id = break_url[break_url.length - 1];
                            downloadImage(user_id, image_id);
                        }else {
                            alert("Make payment before you can download.");
                        }
                }}
                    id='mybtn'
                    className='btn  bg-[#00193D] text-[9px] md:text-[10px] hover:bg-gray-700 text-gray-100  hover:text-white py-3 px-9 md:px-11 border border-gray-500 hover:border-transparent rounded-full'>
                    DOWNLOAD
                </button>
            </div>
        </div>
      )}

      {/* Mobile Image List Navigation */}
      <div className='flex items-center justify-center mt-8 md:hidden'>
        <Pagination
          count={images.length}
          onChange={handlePaginationChange}
        />
      </div>
    </section>
  );
}

export default Downloads;
