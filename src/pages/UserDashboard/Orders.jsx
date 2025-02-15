import { ImageList, ImageListItem } from "@mui/material";
import {useEffect, useState} from "react";
// import { ordersData } from "../../components/UserDashboard/Orders/ordersData";
import OrderItem from "../../components/UserDashboard/Orders/OrderItem";
import OrderButtons from "../../components/UserDashboard/Orders/OrderButtons";
import axios from "axios";

function Orders() {
  const [selectedImages, setSelectedImages] = useState([]);
  const user_id = JSON.parse(localStorage.getItem("client")).id
  const [orderImage, setOrderImage] = useState([]);
  const server_url = process.env.REACT_APP_SERVER_API_URL


  useEffect(() => {
    const fetch_order = async () => {
      try {
        const response = await axios.get(`${server_url}/download/${user_id}`);
        const data = response.data;
        const mappedData = data.map((item) => ({
          id: item.id,
          img: item.url,
          filename: item.fileName,
        }));
        setOrderImage(mappedData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetch_order()
  }, [user_id, server_url]);



  const handleImageSelect = (image) => {
    const isSelected = selectedImages.includes(image);
    if (isSelected) {
      // Deselect image
      setSelectedImages((prevSelectedImages) =>
        prevSelectedImages.filter((selectedIndex) => selectedIndex !== image)
      );
    } else {
      // Select image
      setSelectedImages((prevSelectedImages) => [...prevSelectedImages, image]);
    }
  };

  const handleSelectAll = () => {
    const allImageIndices = orderImage.map((item) => item.img);
    setSelectedImages(allImageIndices);
  };

  const handleCancelSelection = () => {
    setSelectedImages([]);
  };

  const handleDownload = () => {
    if (selectedImages){
      selectedImages.forEach((url)=>{
        const break_url = url.split('/');
        const user_id = break_url[break_url.length - 2];
        const image_id = break_url[break_url.length - 1];
        downloadImage(user_id, image_id);

      })

    }else {
      alert("Something went wrong")
    }
  };



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



  return (
    <section className='px-4 sm:px-6 md:px-10 lg:px-20 py-10'>
      {/* Heading */}
      <h2 className='uppercase text-xl sm:text-2xl lg:text-4xl font-medium md:text-center mb-6 md:mb-10'>
        Y<span className='italic font-normal font-playfair'>o</span>ur{" "}
        <span className='italic font-normal font-playfair'>o</span>
        rder
      </h2>

      {/* Paragraph */}
      <p className='md:text-center mb-10'>
        According to your package plan, you can get only the viewed images and videos
      </p>

      {/* Buttons */}
      <OrderButtons
        onDownload={handleDownload}
        onSelectAll={handleSelectAll}
        onClearAll={handleCancelSelection}
        selectedImages={selectedImages}
      />

      {/* Image List */}
      <div className='max-w-3xl mx-auto'>
        <ImageList variant='masonry' cols={3} gap={8}>
          {orderImage.map((item) => (
            <ImageListItem key={item.img}>
              <OrderItem
                onSelect={handleImageSelect}
                selectedImages={selectedImages}
                item={item}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
}

export default Orders;
