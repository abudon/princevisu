
import BookingTable from "./views";
import {useEffect, useState} from "react";
import axios from "axios";
export const ViewBookings = () => {
    const [rows, setRows] = useState([]);
    const user_id = JSON.parse(localStorage.getItem("client")).id
    const column = ["Status", "Name", "Phone Number", "Email Address", "Home Address", "Booked Date & Time", "Event"]
    const server_url = process.env.REACT_APP_SERVER_API_URL
    useEffect(()=>{
        const fetch_booking = async ()=> {
            try {
                const response = await axios.get(`${server_url}/booking-list/${user_id}`)
                if (response.status===200){

                    console.log(response.data.bookingList)
                    console.log("successful")
                    setRows(response.data.bookingList)
                }

            }catch (e) {
                console.log(e)
            }
        }

        fetch_booking()
    }, [user_id])

    return (
        <div className="flex h-screen bg-gray-100 mb-10">
            <BookingTable row={rows} column={column}></BookingTable>
        </div>
    )
}
