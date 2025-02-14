import {useState} from "react";
import {Datepicker, Label, TextInput} from "flowbite-react";
import axios from "axios";

export const AddBookings = () => {
    const [bookingItems, setBookingItems] = useState({});
    const user_id = JSON.parse(localStorage.getItem('client')).id
    const server_url = process.env.REACT_APP_SERVER_API_URL

    const handleOnChange = (event) => {
        setBookingItems({...bookingItems, [event.target.name]: event.target.value})
        console.log(bookingItems)
    }
    const handleSubmit = (event) =>{
         send_booking();
        setBookingItems({});
    }

    const send_booking = async () => {
        try {
            const response = await axios.post(`${server_url}/booking-list`,
                {
                userId: user_id,
                bookingData: bookingItems
            }
            )

            if (response.status === 201){
                alert("Booking has been made successfully, Please wait for Confirmation")
            }
            else {
                alert("Something went wrong")
            }
        }catch (e) {
            console.log(e)
            alert("Network Issue or Fill All booking items")
        }
    }

    return (
        <div className="flex h-screen bg-gray-100 mb-10" style={{
            marginBottom: "400px"
        }}>
            <form onSubmit={handleSubmit}>
            <div className="m-auto">
                <div>


                    <div className="mt-5 bg-white rounded-lg shadow">

                        <div className="flex">
                            <div className="flex-1 py-5 pl-5 overflow-hidden">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                                </svg>

                                <h1 className="inline text-2xl font-semibold leading-none">Book Now</h1>
                            </div>
                        </div>

                        <div className="px-5 pb-5">
                            <input placeholder="Full Name"
                                   name="customer_name"
                                   onChange={handleOnChange}
                                   className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                            <input
                                placeholder="Home Address"
                                name="home_address"
                                onChange={handleOnChange}
                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                <div className="flex">
                                    <div className="flex-grow w-1/4 pr-2">
                                        <input placeholder="Phone Number"
                                               name="phone_number"
                                               onChange={handleOnChange}
                                               className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                    </div>
                                    <div className="flex-grow">
                                        <input placeholder="Email"
                                               name="email"
                                               onChange={handleOnChange}
                                               className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                    </div>
                                </div>


                        </div>
                        <div className="px-5 pb-5">
                            <div className="mb-2 block">
                                <Label htmlFor="large" value="Event Start Date" />
                            </div>
                            <Datepicker
                                title="Pick the Event Date"
                                name="booking_datetime"
                               onClick={handleOnChange}
                                className="w-full px-4 py-2.5 mt-2 transition duration-500 ease-in-out border-transparent rounded-lg bg-gray-200"
                            />

                            <div className="mb-2 block">
                                <label htmlFor="time"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Start
                                    Time:</label>
                            </div>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <input type="time" id="time"
                                       onChange={(event)=>setBookingItems(prevState=>({...prevState, [event.target.name]: event.target.value}))}
                                       name={'start_time'}

                                       className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                            </div>


                            <div className="mb-2 block">
                                <Label htmlFor="large" value="Event End Date" />
                            </div>
                            <Datepicker
                                title="Pick the Event End Date"
                                className="w-full px-4 py-2.5 mt-2 transition duration-500 ease-in-out border-transparent rounded-lg bg-gray-200"
                            />

                            <div className="mb-2 block">
                                <label htmlFor="time"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                                    End Time:</label>
                            </div>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <input type="time" id="time"
                                       name={'end_time'}
                                       onChange={(event)=>setBookingItems(prevState=>({...prevState, [event.target.name]: event.target.value}))}
                                       className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      />
                            </div>






                            <div className="mb-2 block">
                                <Label htmlFor="large" value="Event Type" />
                            </div>
                            <TextInput
                                name="session_type"
                                onChange={handleOnChange}
                                className="w-full px-4 py-2.5 mt-2 transition duration-500 ease-in-out border-transparent rounded-lg bg-gray-200 "
                                placeholder="Indicate The Event, Such As Wedding, e.t.c"
                                id="large" type="text" sizing="lg" />

                        </div>

                        <div className="px-5 pb-5">
                            <div className="mb-2 block">
                                <Label htmlFor="large" value="Specific Requirements" />
                            </div>
                            <TextInput
                                name="specific_requirement"
                                onChange={handleOnChange}
                                className="w-full px-4 py-2.5 mt-2 transition duration-500 ease-in-out border-transparent rounded-lg bg-gray-200 "
                                placeholder="Equiments You Might Need For The Ocasion..."
                                id="large" type="text" sizing="lg" />
                        </div>

                        <div className="px-5 pb-5">
                            <div className="mb-2 block">
                                <Label htmlFor="large" value="Additional Note" />
                            </div>
                            <TextInput
                                name="additional_notes"
                                onChange={handleOnChange}
                                className="w-full px-4 py-2.5 mt-2 transition duration-500 ease-in-out border-transparent rounded-lg bg-gray-200 "
                                placeholder="What Would You Like to Add..."
                                id="large" type="text" sizing="lg" />
                        </div>


                        <hr className="mt-4"/>

                        <div className="flex flex-row-reverse p-3">
                            <div className="flex-initial pl-3">
                                <button type="submit"
                                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                         width="24px" fill="#FFFFFF">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                                        <path
                                            d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                            opacity=".3"></path>
                                        <path
                                            d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                                    </svg>
                                    <span className="pl-2 mx-1">Submit</span>
                                </button>
                            </div>

                            <div className="flex-initial">
                                {/*<button type="button"*/}
                                {/*        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">*/}
                                {/*    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"*/}
                                {/*         width="24px">*/}
                                {/*        <path d="M0 0h24v24H0V0z" fill="none"></path>*/}
                                {/*        <path d="M8 9h8v10H8z" opacity=".3"></path>*/}
                                {/*        <path*/}
                                {/*            d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>*/}
                                {/*    </svg>*/}
                                {/*    <span className="pl-2 mx-1">Delete</span>*/}
                                {/*</button>*/}
                            </div>


                        </div>


                    </div>

            </div>


        </div>
            </form>
        </div>
)
}
