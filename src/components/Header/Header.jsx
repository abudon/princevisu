import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



import {AiOutlineMenu,
       AiOutlineClose,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  } from 'react-icons/ai'
import { FaHandPeace } from 'react-icons/fa'
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { headerLinks, headerSocials } from "./navLinksData";
import logoMenu from "../../assets/images/logo-ct.png";
import face from "../../assets/images/default.png"
import {Avatar, Button} from "flowbite-react";

const Header = () => {


  const user = JSON.parse(localStorage.getItem('client'))

  console.log(user)
  const Headerlinks =[
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '/photogallery',
      display: 'Photogallery'
    },
    {
      path: '/videogallery',
      display: 'Videogallery'
    },
    // {
    //   path: '/blog',
    //   display: 'Blog'
    // },
    // {
    //   path: '/blogarticle',
    //   display: 'Blogarticle'
    // },
    {
      path: '/prising',
      display: 'Prising'
    },
];



useEffect(() => {
  AOS.init();
}, [])

const [toggle, setToggle] = useState(false);

const toggleMenu =()=>menuRef.current.classList.toggle('show_menu')
const navigate = useNavigate()
  const onSignOut = () => {
  localStorage.clear()
  navigate('/')
}
  const [greetingText, setGreetingText] = useState("");
  const current_date = new Date();
  const current_time = current_date.getHours();
  const getGreeting = () => {
    if (current_time >= 0 && current_time < 12) {
      setGreetingText("Good Morning");
    } else if (current_time >= 12 && current_time < 17) {
      setGreetingText("Good Afternoon");
    } else {
      setGreetingText("Good Evening");
    }
  };

  useEffect(() => {
    getGreeting();
  }, []);

   const headerRef = useRef(null);
   const menuRef = useRef(null)

  return (
    <header className="container header border text-[18px] md:text-[20px]
     lg:text-[20px] w-full  md:w-[100%]  lg:w-[100%] sm:h-[50px] md:h-[80px]
     leading-4 t-0 sticky" class='sticky_header'>
       <div className='flex sm:justify-between w-[100%] gap-[70px] md:gap-[50px]
        lg:gap-[50px] items-center mx-6 md:mx-[-10px] mt-3 mb-3'>
        <div className=''>
          <span>
           {!toggle?
               <AiOutlineMenu onClick={()=>setToggle(true)}
                              className='h-5 w-5 cursor-pointer ml-[1.6rem]
                              md:ml-[5rem] lg:ml-[6rem] text-gray-600'  />
             :
               <AiOutlineClose onClick={()=>setToggle(false)}
                               className='h-5 w-5 absolute cursor-pointer
                               ml-[-1rem] md:ml-[1rem] text-gray-600' />}
          </span>

          {/* {!nav ? <AiOutlineMenu className='w-[13px] md:w-[20px]'/> : <AiOutlineClose />}   */}

         {!toggle? ""

         :

         <div className='absolute  gap-8 navigation ' ref={menuRef}
              onClick={toggleMenu} data-aos="fade-right"
              data-aos-duration="1000">
          <AiOutlineClose className='' />
          <div className=''>
         <ul className='absolute menu pt-[1rem] w-[20rem] md:w-[30rem] lg:w-[30rem] h-[100%]'>
         <AiOutlineClose onClick={()=>setToggle(false)}
                         className='w-6 h-6 transition-transform transform hover:rotate-180
                          text-[#00193d] font-500 absolute
                         cursor-pointer right-4 top-2 hover:scale-110  text-' />
           <br/>
           { user && <div className="flex  bg-[#00193d] rounded-[5px] p-4 items-center w-80 mx-auto ">
             <img className="w-12 h-12 rounded-full" src={face} alt="User Photo"></img>
               <div className="ml-4 flex flex-col">
                 <div className="flex flex-row justify-center items-center ">
                   <p className="text-white text-lg font-semibold">{greetingText} </p>
                   <div className="text-yellow-300">
                   <FaHandPeace size={24} />
                 </div>
                 </div>
                 <h4 className="text-white font-medium">{user.username}</h4>
               </div>
           </div>}
           <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
           {
               user&&<li className="transition-all pt-[10px] hover:scale-110
             text-gray-600  font-bold text-center p-2">
                 <a href="/dashboard/profile">
                   Dashboard
                 </a>
               </li>
           }
          {Headerlinks.map((item, index)=>{
            return(
                <li key={index} className='transition-all pt-[10px] hover:scale-110
             text-gray-600  font-bold text-center p-2 '>
               <a href={item.path}>{item.display}</a>
             </li>
            )
          })}
           {
             (user) ? (
                 <div className='flex flex-col my-2 mt-[1.5rem] ml-[5rem] md:ml-[5rem]'>
                   <button
                    onClick={onSignOut}
                    className='px-3 bg-[#00193d] rounded-[5px] font-bold
                           text-gray-100 py-2 w-[10rem] md:w-[20rem] '
                   >Sign Out
                   </button>
                 </div>
             ) : (
                 <div className='flex flex-col my-2 mt-[1.5rem] ml-[5rem] md:ml-[5rem]'>
                   <button
                       onClick={()=>{
                         navigate("/login")
                        setToggle(false)
                       }
                   }
                     className='bg-transparent border-[1px] border-gray-700
                       rounded-[5px]  text-gray-600 py-2 mb-4 font-bold px-3
                       w-[10rem] md:w-[20rem] hover:bg-[#00193d]
                       hover:scale-1 transition-all hover:text-white '
                   >Login
                   </button>
                   <button
                       onClick={()=>{
                         navigate("/signup")
                         setToggle(false)
                       }
                   }
                       className='px-3 bg-[#00193d] rounded-[5px] font-bold
                       text-gray-100 py-2 w-[10rem] md:w-[20rem]
                       hover:bg-transparent
                       hover:scale-1 transition-all hover:text-gray-600'>
                     Sign up
                   </button>
                 </div>
             )
           }

          <div className='flex gap-[7px] justify-center'>
          {/* <AiOutlineFacebook className='cursor-pointer h-5 w-5 text-[white] rounded-full bg-gray-500 hover:bg-[#264064] p-[4px]'  />
         <AiOutlineTwitter className='cursor-pointer  h-5 w-5 text-white rounded-full bg-gray-500 hover:bg-[#264064] p-[4px]' />
         <AiOutlineInstagram className='cursor-pointer  h-5 w-5 text-white rounded-full bg-gray-500 hover:bg-[#264064] p-[4px]' />
         <AiOutlineLinkedin className='cursor-pointer  h-5 w-5 text-white rounded-full bg-gray-500 hover:bg-[#264064] p-[4px]' /> */}
      </div>
          </ul>

          </div>
         </div>

         }
        </div>

        {/* Logo */}
        <Link className="w-16" to="/">
          <img src={logoMenu} alt="Logo" className="w-full ml-[7rem] md:ml-[3rem] lg:ml-[1rem]" />
        </Link>

        {/* Auth Buttons */}

          {
            (!user)?(
                <div className="items-center gap-3 hidden  md:flex">
                <Link
                    to={"/login"}
                    className="font-bold py-3 px-4 text-xs hover:shadow-md hover:-translate-y-1 duration-200"
                >
                  LOGIN
                </Link>
                <Link
                    to="/signup"
                    class="text-xs bg-[#00193D] text-white py-3 px-7 border hover:border hover:border-transparent rounded-md"
                >
                  SIGNUP
                </Link>
                </div>
                  )
                :
            (
                <div className="items-center gap-3 hidden  md:flex">
                  <Link
                      to={"/dashboard/profile"}
                      className="font-bold py-3 px-4 text-xs hover:shadow-md hover:-translate-y-1 duration-200"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Avatar rounded status={'online'} statusPosition={'top-right'} >
                        <div className="space-y-1 font-medium dark:text-white">
                          <div>DASHBOARD</div>
                        </div>
                      </Avatar>
                    </div>
                  </Link>
                  <Button
                      size={'small'}
                      onClick={onSignOut}
                      className="text-xs bg-[#00193D] text-white py-3 px-7 border hover:border hover:border-transparent rounded-md"
                  >
                    SIGN OUT
                  </Button>
                </div>

            )

          }




      </div>
      {/* <div className='items-center gap-3 hidden md:mr-[3rem] lg:mr-[5rem] float-left  md:flex'>
      <Link to={'/login'}> <h6 className='font-bold text-[12px]'>LOGIN</h6></Link>
        <Link to={'/signup'}><button class="text-[12px] btn  bg-[#00193D]   text-white py-2 px-7 border hover:border hover:border-transparent rounded-md">SIGNUP</button></Link>
      </div> */}
    </header>
  );
};

export default Header;







function NavBar({ navLinks, onClose }) {
  return (
    // <div className="  gap-8 navigation"  onClick={isNavOpenMenu}>
    <div className="gap-8 navigation" onClick={onClose}>
      {/* <AiOutlineClose className="" /> */}
      <div className="">
        <div className="absolute menu pt-[1rem] w-[30rem] h-[100%]">
          {/* Close Menu Icon */}
          <AiOutlineClose
            onClick={onClose}
            className="text-white w-8 h-8 absolute cursor-pointer right-3 top-3"
          />
          {/* NavLinks */}
          <ul className="space-y-4 mt-6">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="transition-all hover:scale-110 text-gray-100 font-bold text-center p-2 "
                >
                  <NavLink to={item.path}>{item.display}</NavLink>
                </li>
              );
            })}
          </ul>
          {/* Mobile Nav Auth Button */}
          <div className="flex flex-col py-4 justify-center items-center gap-4 font-bold">
            <Link to="/login">
              <button className="bg-transparent border border-gray-300 rounded-md text-white py-2 px-3 w-[20rem]">
                Login
              </button>
            </Link>
            <Link to="signup">
              <button className="px-3 bg-white rounded-md text-[#00193d] py-2 w-[20rem]">
                Sign up
              </button>
            </Link>
          </div>
          {/* Mobile Nav Social Links */}
          <ul className="flex gap-3 mt-4 items-center text-white  justify-center">
            {headerSocials.map((item) => (
              <li
                className="bg-red-600 hover:bg-gray-800 rounded-full duration-200 p-3"
                key={item.name}
              >
                <item.icon className="cursor-pointer w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
