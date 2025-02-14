import React from 'react'
import Home from '../pages/Home'
import Order from '../pages/Order'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Account from '../pages/Account'
import Photogallery from '../pages/Photogallery'
import Videogallery from '../pages/Videogallery'
import Servicepackages from '../pages/Servicepackages'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import BlogArticle from '../pages/BlogArticle'
import Prising from '../pages/Prising'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "../layout/Layouts";
import Error from "../components/UI/Error";
import UserDashboardLayout from "../layout/UserDashboardLayout";
import Downloads from "../pages/UserDashboard/Downloads";
import MyProfile from "../pages/UserDashboard/MyProfile";
import Messages from "../pages/UserDashboard/Messages";
import Orders from "../pages/UserDashboard/Orders";
import Payments from "../pages/UserDashboard/Payments";
import {Bookings} from "../pages/UserDashboard/Bookings";
import {AddBookings} from "../components/UserDashboard/Bookings/AddBookings";
import {ViewBookings} from "../components/UserDashboard/Bookings/ViewBookings";



const router = createBrowserRouter([
  {
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/photogallery",
        element: <Photogallery />,
      },
      {
        path: "/videogallery",
        element: <Videogallery />,
      },
      {
        path: "/servicepackages",
        element: <Servicepackages />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blogarticle",
        element: <BlogArticle />,
      },
      {
        path: "/prising",
        element: <Prising />,
      },

      // Dashboard Pages
      {
        path: "/dashboard",
        element: <UserDashboardLayout />,
        children: [
          {
            path: 'bookings',
            element: <Bookings/>,
            children: [
              {
                path: 'addbooking',
                element: <AddBookings/>
              },
              {
                path: 'viewbooking',
                element:<ViewBookings/>,
              },
            ],
          },
          {
            path: "downloads",
            element: <Downloads />,
          },
          {
            path: "profile",
            element: <MyProfile />,
           },
          {
            path: "messages",
            element: <Messages />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "payments",
            element: <Payments />,
          },

        ],
      },
    ],
  },
]);

function Routers() {
  return <RouterProvider router={router} />;
}

// const Routers = () => {
//   return <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='/account' element={<Account />} />
//           <Route path='/photogallery' element={<Photogallery />} />
//           <Route path='/videogallery' element={<Videogallery />} />
//           <Route path='/servicepackages' element={<Servicepackages />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/order' element={<Order />} />
//           <Route path='/profile' element={<Profile />} />
//           <Route path='/blogarticle' element={<BlogArticle />} />
//           <Route path='/prising' element={<Prising />} />
//           <Route path='/messages' element={<Messages />} />
//         </Routes>
// }

export default Routers;

// const Routers = () => {
//   return <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='/account' element={<Account />} />
//           <Route path='/photogallery' element={<Photogallery />} />
//           <Route path='/videogallery' element={<Videogallery />} />
//           <Route path='/servicepackages' element={<Servicepackages />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/order' element={<Order />} />
//           <Route path='/profile' element={<Profile />} />
//           <Route path='/blogarticle' element={<BlogArticle />} />
//           <Route path='/prising' element={<Prising />} />
//         </Routes>
// }

// export default Routers
