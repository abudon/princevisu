import avatar from "../../../assets/images/chat-avatar.png";
import React, {useEffect, useState} from "react"
import MessageItem from "./MessageItem";
import axios from "axios";


const Notification = (props)=> {
  const {userId} = props
  const [notifications, setNotifications] = useState([]);
  const server_url = process.env.REACT_APP_SERVER_API_URL

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC', // Specify your desired timezone
  };

  useEffect(()=>{
    const fetch_message = async ()=> {
      try {
        const response = await axios.get(`${server_url}/notifications/${userId}`)
        console.log(response)
        if (response.status === 200) {
          console.log("message successful")
          const data = response.data
          const mappedData = data.map((item) => ({
            sender: {
              avatar,
              name: "Prince Visual Team",
            },
            message: item.messages,
            time: new Date(item.created_at).toLocaleString("en-US", options)
          }))
          setNotifications(mappedData)
        } else {
          console.log("something went wrong")
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetch_message(userId)
  }, [])



  return(
      <div className='flex flex-col gap-8 mb-8'>
        {notifications.map((message, index) => (
            <MessageItem key={index} {...message} />
        ))}
      </div>
  )
}

export default Notification;
