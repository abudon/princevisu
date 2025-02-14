import { useState } from "react";
import Notification from "../../components/UserDashboard/Messages/MessagesComponent";

function Messages() {
  const user_id = JSON.parse(localStorage.getItem("client")).id
    console.log(user_id)

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <section className=' sm:p-10 md:px-20'>
      {/* Heading */}
      <h2 className='uppercase px-6 text-xl sm:text-2xl lg:text-4xl font-medium md:text-center mb-10'>
        Y<span className='italic font-normal font-playfair'>o</span>ur messages
      </h2>

      {/* Chat Box */}
      <div className='max-w-3xl mx-auto bg-[#F5F5F3] p-4 md:p-6 lg:p-8 rounded-sm '>
        {/* Messages */}
        <Notification userId={user_id}/>

        {/* Message Input */}
        {/* <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder='Write your message'
          shouldReturn
          borderRadius={4}
          height={60}
        /> */}
      </div>
    </section>
  );
}

export default Messages;
