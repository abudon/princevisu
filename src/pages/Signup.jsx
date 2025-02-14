import React, { useState } from 'react'
import signupIMG from '../assets/images/home/signimg.png'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {PiEye, PiEyeClosedLight} from 'react-icons/pi'
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IoMdCheckmark } from "react-icons/io"
import {IoCallSharp} from 'react-icons/io5'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordLine, RiContactsLine} from 'react-icons/ri'
import {AiOutlineMail , AiOutlineMessage} from 'react-icons/ai'
import axios from "axios";



const Signup = () => {

  const [openModal, setOpenModal] = useState(false);
    const [enable, setEnable] = useState(true);
    const [logic, setLogic] = useState(false);
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
    email:'',
    username:'',
    password:'',
   })

   const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name] : e.target.value});
   };

   const submitHandler = async event => {

    console.log(formData)
    event.preventDefault();
       setErrors([]);

       axios.post(`${process.env.REACT_APP_SERVER_API_URL}/signup`,formData).then((response) => {
           console.log("User created successfully:", response.data.user);
           // Optionally, you can redirect the user to another page or show a success message
           setOpenModal(true)
       })
           .catch((error) => {
               if (error.response && error.response.status === 400) {
                   // Set validation errors from the backend
                   setErrors(error.response.data.errors);
               } else {
                   console.error('An unexpected error occurred:', error);

               }
               // Handle the error (e.g., display an error message to the user)
           })


   }


  return (
    <div className='bg-no-repeat bg-center   w-full '>
    <div className=' mt-[0] bg-gray-50 items-center flex sm:flex-row lg:flex-col'>
      <div className='flex flex-col md:flex-row md:mt-[4rem] mt-[2rem] mx-[8px]  md:mx-[15%]   gap-5 '  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
       <div className=''>
         <img src={signupIMG} className='bg-cover h-[20rem] md:h-[32rem] w-[370px] rounded-4-2xl  md:rounded-l-2xl md:w-[350px]' alt="" />
       </div>
       <form action="" onSubmit={submitHandler}>
       <div className='sm:w-[200px] md:w-[300px] mt-[-2rem]'>
        <div className='m-[10%] text-center'>
        <h2 className='sm:text-[11px] md:text-[12px] '>(J<span className='italic'>O</span>IN <span className='italic'>O</span>UR C<span className='italic'>O</span>MMUNITY)</h2>
        <h1 className='text-[20px] font-bold leading-7'>CREATE AN ACC<span className='italic'>O</span>UNT</h1>
        <p className='text-[13px] leading-8 mb-2'>Capturing every special moments.</p>
        </div>
        <button className='uppercase text-[12px] rounded-full w-full btn bg-transparent mb-[1.5rem] hover:bg-[#00193D] text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full"'>
          <span className='flex ml-[3rem] gap-1'><FcGoogle className='h-[16px] w-[15px]' />
          Sign up with Google</span></button>

        <div className='mt-[1rem]'>
        <div className='mb-4 text-[15px]'>
          <label htmlFor="email" className='text'>Email</label>
          <input type="email" placeholder='example@gmail.com' name='email' value={formData.email} onChange={handleInputChange} className='bg-transparent py-2 px-3 text-gray-700 leading-tight border border-gray-400 rounded-full w-full' />
        </div>
        <div className='mb-4 text-[15px]'>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder='Enter your name' value={formData.name} onChange={handleInputChange} className='bg-transparent py-2 px-3 text-gray-700 leading-tight border border-gray-400 rounded-full w-full' />
        </div>
        <div className='mb-4 text-[15px]'>
          <label htmlFor="password">Password</label>
            {
                logic ? (<PiEye className='absolute float-right ml-[16.5rem] mt-[0.5rem]' onClick={()=>setLogic(prevState => !prevState)}/>):
                    (<PiEyeClosedLight className='absolute float-right ml-[16.5rem] mt-[0.5rem]' onClick={()=>setLogic(prevState => !prevState)} />)
            }

            <input type={!logic?"password":'text'} value={formData.password}
                   name='password' onChange={handleInputChange}
                   placeholder=''  className='myinput mb-3 py-2 px-3 text-gray-700
                   leading-tight border bg-transparent border-gray-400 rounded-full
                   w-full'  />

           <div className='flex flex-col gap-3'>
               {
                    errors.length > 0 && (
                        <ul className={'list-disc'}>
                            {
                                errors.map(error => (
                                    <li className={'mb-2 '}><span className='text-[11px] text-wrap ml-1 text-red-500'>{error}</span></li>
                                ))
                            }
                        </ul>
                   )
               }
            {/*<span className='text-[10px] ml-7 text-red-500'>Password must include 8 symbols!</span>*/}
            <div className='flex'>
           <input type="radio"  onChange={()=>setEnable(prevState => !prevState)}/><span className='text-[12px] ml-4 bg-transparent'>I agree with <Link to={'/'}><span className='capitalize underline text-blue-500'>Terms & Conditions</span></Link>  of clarity</span>
           </div>
           <button  disabled={enable}  className='uppercase text-[12px] rounded-full w-full btn bg-[#00193D] hover:bg-[#1d2a3d] text-white font-semibold py-2 px-4 border border-gray-500 hover:border-transparent rounded-full"'>Sign up</button>



                    {/* Flowbite */}
                    {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" data-aos="zoom-in" data-aos-duration="200" onClose={() => setOpenModal(false)} popup className='mt-[3rem] md:mt-[-7rem] lg:mt-[0]'>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <IoMdCheckmark className="mx-auto mb-4 h-12 w-12 text-green-500 bg-green-200 dark:text-gray-200" />
            <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
             Your account has been created successfully !
            </p>
            <p className='text-[14px]'>A confirmation email has been sent to your inbox - please follow the link in the email
to verify your account.</p>
            <div className="flex justify-center gap-4">
              <Link to={'/login'}><Button onClick={() => setOpenModal(false)} className='bg-[#00193D]'>
                {"Go to Signin"}
              </Button></Link>
              {/* <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>



           <span className='text-[12px] ml-6'>Already have an account? <Link to={'/'}><span className='underline text-blue-500 '>Login</span></Link></span>
           </div>
       </div>
        </div>
       </div>
       </form>
      </div>


    </div>
    <div className='contact-us signup-content grid grid-cols-1 md:grid-cols-2 mt-[7rem] lg:mb-[5rem] lg:mt-[5rem] px-[1rem] md:px-[5rem] gap-[3rem]'>
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
    {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
    </div>
  )
}

export default Signup;

// export async function action({ request }) {
//   // Get Data from form
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   // change acceptTerms from "on"/"off" to true/false
//   const details = {
//     ...data,
//     // acceptTerms: data.acceptTerms === "on",
//     acceptTerms: undefined,
//   };

//   // Handle Errors
//   const errors = {};
//   if (details.password.length < 8)
//     errors.password = "Password must include 8 characters!.";

//   if (Object.keys(errors).length > 0) return errors;

//   // If everything is okay, create new user and redirect
//   // Register new user

//   try {
//     const newUser = await registerUser(details);

//     console.log(newUser);
//     if (newUser.errors) {
//       errors.signUp = newUser.errors.msg;
//       return errors;
//     }
//   } catch (err) {
//     errors.signUp = "Failed to register user, Try again later";
//     return errors;
//   }

//   // store.dispatch(clearCart());

//   return null;
//   // return redirect(`/`);
// }
