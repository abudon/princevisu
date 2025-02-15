import React, { useState } from 'react'
import signupIMG from '../assets/images/home/log.png'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import {PiEyeClosedLight} from 'react-icons/pi'
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {IoCallSharp} from 'react-icons/io5'
import { IoMdCheckmark } from "react-icons/io"
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdCancel, MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Modal} from "flowbite-react";

const Login = () => {
    const [openModal, setOpenModal] = useState(false);
  const server_url = process.env.REACT_APP_SERVER_API_URL

 const [formData, setFormData] = useState({
  username:'',
  password:'',
 })

const navigate = useNavigate()

 const handleInputChange = e => {
  setFormData({ ...formData, [e.target.name] : e.target.value});
 };



 // Getting Users By Email and Password

    const fetchUser = async (email, password) => {
        try {
            // Send a POST request to the backend endpoint with the provided email and password
            const response = await axios.post(`${server_url}/signin`, { email, password });

            // Check if the request was successful (status code 200)
            if (response.status === 200) {
                // Return the user data from the response
                return response.data;
            } else {
                // If the request was not successful, log an error and return null
                console.error('Failed to fetch user:', response.statusText);
                return null;
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error fetching user:', error.message);
            return null;
        }
    };





    const submitHandler = async event => {
  event.preventDefault();

  const user = await fetchUser(formData.username, formData.password)
        console.log(user)
        if (user && user.role === "admin") {
            // User was successfully fetched, proceed with further actions (e.g., redirect to dashboard)
            localStorage.setItem('adminClient', JSON.stringify(user))
            window.location.href = "https://dashboard.princevisuals.com/dashboard"

        } else if (user && user.role === "user") {
            localStorage.setItem('client', JSON.stringify(user))
            navigate("/dashboard/profile")


        }else {
            setOpenModal(true)
            console.error('Authentication failed');
        }
 }


  return (
    <div className='container bg-no-repeat text-gray-700 mt-[0]  items-center '>
      <div className='flex flex-col md:flex-row mt-[2rem] mx-[8px]  md:mx-[15%]   gap-5 ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
       <div className=''>
         <img src={signupIMG} className='bg-cover rounded-l-2xl h-[20rem] md:h-[28rem] w-[320px] md:w-[350px]' alt="" />
       </div>
       <form action="" onSubmit={submitHandler}>
       <div className='sm:w-[200px] md:w-[300px] mt-[-2rem]'>
        <div className='m-[10%] text-center'>
        <h2 className='sm:text-[11px] md:text-[14px]'>(GLAD TO SEE YOU)</h2>
        <h1 className='text-2xl font-bold leading-7'>WELCOME BACK!</h1>
        <p className='text-[13px] leading-8 mb-2'>Capturing every special moments.</p>
        </div>
        <button className='uppercase text-[12px] rounded-full w-full btn bg-transparent mb-[1.5rem]
        hover:bg-[#00193D] text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full"'> <span className='flex ml-[3rem] gap-1'><FcGoogle className='h-[16px] w-[15px]' />
        Login with google</span></button>

        <div className='mt-[1rem]'>
        <div className='mb-4 text-[15px]'>
          <label htmlFor="username">Email</label>
          <input type="text" placeholder='Enter your email' name='username' value={formData.username} onChange={handleInputChange} className='py-2 px-3 bg-transparent text-gray-700 leading-tight border border-gray-400 rounded-full w-full' />
        </div>
        <div className='mb-4 text-[15px]'>
          <label htmlFor="password">Password</label>
          <PiEyeClosedLight className='absolute float-right ml-[16.5rem] mt-[0.5rem]' /> <input type="password" placeholder='' name='password' value={formData.password} onChange={handleInputChange}  className='py-2 px-3 text-gray-700 bg-transparent leading-tight border border-gray-400 rounded-full w-full' />

           <div className='flex flex-col gap-3'>
            {/* <span className='text-[12px] ml-7 text-red-500'>Password must include 8 symbols!</span> */}
            <div className='flex justify-between mt-5'>
          <Link to={'/'}><span className='text-[12px] ml-4 text-blue-600 underline'>Forgot Email</span></Link>
           <Link to={'/'}><span className='text-[12px] ml-4 text-blue-600 underline'>Forgot Password</span></Link>
           </div>
           <button
               className='uppercase mt-3 text-[12px] rounded-full w-full btn bg-[#00193D] hover:bg-[#fff] text-white font-semibold hover:text-gray-700 py-2 px-4 border border-gray-500 hover:border-transparent rounded-full"'
           >LOGIN</button>
           <span className='text-[12px] ml-6'>I don't have an account. <Link className='text-blue-600 underline' to={'/signup'}>Signup</Link></span>
       </div>
       </div>
       </div>
       </div>
       </form>

          <Modal
              show={openModal}
                 size="md"
              data-aos="zoom-in"
              data-aos-duration="200"
              onClose={() => setOpenModal(false)}
              popup className='mt-[3rem] md:mt-[-7rem] lg:mt-[0]'>
              <Modal.Header />
              <Modal.Body>
                  <div className="text-center">
                      <MdCancel
                          className="mx-auto mb-4 h-12 w-12 text-red-800 bg-red-200 dark:text-gray-200" />
                      <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Please Check Email or Password
                      </p>
                  </div>
              </Modal.Body>
          </Modal>


      </div>

      <div className='contact-us grid grid-cols-1 md:grid-cols-2  mt-[7rem] lg:mb-[5rem] lg:mt-[5rem] px-[1rem] md:px-[5rem] gap-[3rem]'>
       <div className='' data-aos="zoom-in" data-aos-duration="2000">
          <p className='text-[#00193D] text-2xl font-bold py-[1rem]'>Get In Touch</p>
          <div className='text-gray-500'>
          <span className='flex items-center gap-1 font-bold py-2' ><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold'><IoCallSharp />+1(973) 438 8190</span>
          <span className='flex items-center gap-1 font-bold pt-[1rem]'><MdEmail />Email@gmail.com</span>
          </div>
          <h1 className='md:text-5xl text-4xl font-bold mt-4 mb-4 text-[#00193D]'>Book Us For Your Event</h1>
          <span className='text-gray-500'><p className='max-w-30rem'>Ad graeci theophrastus, libris timeam sapientem. Pellentes faucibus sollicitudin
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
  );
};

export default Login;

// export async function action({ request }) {
//   // Get Data from form
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   console.log(data);

//   // Handle Errors
//   const errors = {};

//   if (Object.keys(errors).length > 0) return errors;

//   // If everything is okay, create new user and redirect
//   // Login user
//   try {
//     const user = await loginUser(data);

//     if (user.errors) {
//       errors.login = user.errors.msg;
//       return errors;
//     }
//   } catch (err) {
//     errors.login = "Failed to login, Try again later";
//     return errors;
//   }

//   // store.dispatch(clearCart());

//   return null;
//   // return redirect(`/`);
// }
