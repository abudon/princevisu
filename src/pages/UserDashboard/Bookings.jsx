import React from 'react'
import {Outlet, useNavigate} from "react-router-dom";
import Button from "../../components/UI/Button";
import {BiBookAdd} from "react-icons/bi";
import {Bookmark} from "@mui/icons-material";


export const Bookings = () => {
    const navigate = useNavigate()

    return (
            <section className='px-4 sm:px-6 md:px-10 lg:px-20 py-10'>

                <h2 className='uppercase text-xl sm:text-2xl lg:text-4xl font-medium md:text-center mb-6 md:mb-10'>
                    Y<span className='italic font-normal font-playfair'>o</span>ur{" "}
                    <span className='italic font-normal font-playfair'>B</span>
                    ookings
                </h2>

            <div className='flex gap-4 flex-col md:flex-row items-center justify-center md:justify-between mb-10'>
                {/* Left Side */}
                <div className='flex items-center gap-4 justify-between md:justify-normal'>
                    {/* Select all button */}
                    <Button  color='white'
                    onClick={()=>{
                        navigate('viewbooking')
                    }}>
                        <Bookmark size={20} />
                        <span className='uppercase hidden md:flex'>Previous Bookings</span>
                    </Button>

                    <Button  color='white' onClick={()=>{
                        navigate("addbooking")
                    }}>
                            <BiBookAdd size={20} />
                            <span className='uppercase'>New Bookings</span>
                    </Button>

                </div>
                <Outlet/>


            </div>
            </section>
    )
}
