import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import EditProfileModal from "../../components/UserDashboard/Profile/EditProfileModal";

function MyProfile() {




  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const storedClient =  JSON.parse(localStorage.getItem('client'))




  return (
    <section className='px-4 sm:px-6 md:px-10 lg:px-20 py-10'>
      {/* Heading */}
      <h2 className='uppercase text-xl sm:text-2xl lg:text-4xl font-medium md:text-center mb-6 md:mb-10'>
        my pr<span className='italic font-normal font-playfair'>o</span>file
      </h2>

      {/* Profile */}
      <div className='max-w-3xl mx-auto bg-secondary p-4 md:p-8 rounded-sm flex flex-col md:flex-row gap-4 md:gap-8 '>
        <div className='flex flex-col md:items-center gap-4'>
          {/* Profile Image */}
          <div className='bg-white text-3xl font-bold border border-black flex items-center justify-center w-20 h-20 rounded-full'>
            AF
          </div>
          {/* Edit Photo */}
          <div className='flex items-center gap-2 text-blue-500'>
            {/* Edit Icon */}
            <CiEdit size={22} />
            <p className='underline'>Edit photo</p>
          </div>
        </div>

        {/* Personal Info */}
        <form className='flex-1 flex flex-col gap-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Personal info</h2>
            {/* Edit Photo */}
            <button
              onClick={handleModalOpen}
              className='flex items-center gap-2 text-blue-500'
            >
              {/* Edit Icon */}
              <CiEdit size={22} />
              <p className='underline'>Edit</p>
            </button>
          </div>

          {/* Modal */}
          <EditProfileModal open={isModalOpen} onClose={handleModalClose} />

          {/* User Name */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='username'>User Name</label>
            <input
              type='text'
              id='username'
              className='bg-transparent px-6 py-3 rounded-full w-full'
              value={storedClient.username}
              disabled={true}
            />
          </div>
          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              className='bg-transparent px-6 py-3 rounded-full w-full'
              defaultValue= {storedClient.email}
              disabled={true}
            />
          </div>
          {/* Password */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className='bg-transparent px-6 py-3 rounded-full w-full'
              defaultValue={storedClient.password}
              disabled={true}
            />
          </div>
          <div className='flex text-sm md:text-base items-center gap-2'>
            <input type='checkbox' id='notify' />
            <label htmlFor='notify'>
              Notify me about new messages by email
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default MyProfile;
