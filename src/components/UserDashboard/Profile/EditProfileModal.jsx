import React from 'react'
import { Modal } from "flowbite-react";
import {useEffect, useState} from "react";
import axios from "axios";







const EditProfileModal = ({ open, onClose }) => {

  const [userData, setUserData] = useState({});
  const [updateUser, setUpdateUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const user = JSON.parse(localStorage.getItem('client'))
  const user_id = user.id





  const onchange = (event) => {
    setUpdateUser({...updateUser, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post('https://backendmediavault-production.up.railway.app/getuser', { user_id });
        const userData = response.data;
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  console.log(userData)



  const handleFormSubmit = async (updateUser) => {
    try {
      // Send updatedUserData to the server to update user data
      const response = await axios.put(`https://backendmediavault-production.up.railway.app/users/${user_id}`, updateUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200){

      } else {

      }

    } catch (error) {
      console.error('Error updating user data:', error);

    }
  };






  return (
    <Modal show={open} onClose={onClose} popup>
      {/* Personal Info */}
      <Modal.Body className='p-4'>
        <form className=' max-w-xl bg-white rounded mx-auto flex flex-col gap-6 p-4 md:p-8'>
          {/* Heading */}
          <h2 className='uppercase text-xl sm:text-2xl lg:text-4xl font-medium text-center mb-6 md:mb-10'>
            edit inf<span className='italic font-normal font-playfair'>o</span>
            rmation
          </h2>

          {/* User Name */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='username'>User Name</label>
            <input
              type='text'
              id='username'
              name='username'
              className='bg-transparent px-6 py-3 rounded-full w-full'
              defaultValue= {userData.username}
              onChange={onchange}
            />
          </div>
          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name="email"
              id='email'
              className='bg-transparent px-6 py-3 rounded-full w-full'
              defaultValue={userData.email}
              onChange={onchange}
            />
          </div>
          {/* Password */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password</label>
            <input
              name="password"
              type='password'
              id='password'
              className='bg-transparent px-6 py-3 rounded-full w-full'
              defaultValue={userData.password}
              onChange={onchange}
            />
          </div>
          <label className='flex text-sm md:text-base items-center gap-2'>
            <input type='checkbox' id='notify' />
            <span htmlFor='notify'>Notify me about new messages by email</span>
          </label>

          {/* Buttons */}
          <Modal.Footer className='flex justify-between items-center'>
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className='font-semibold underline text-red-400'
            >
              Cancel
            </button>
            {/* Save Button */}

            <button
              onClick={onClose}
              type='submit'
              className='font-semibold underline text-blue-400'
            >
              Save
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default React.memo(EditProfileModal)
