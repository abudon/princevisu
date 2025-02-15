function MessageItem({ message, sender, user, time }) {
  return (
    <div
      className={`flex flex-col gap-2 text-xs md:text-sm ${
        user ? "items-end" : ""
      }`}
    >
      {/* Sender & Date */}
      <div className='flex items-center gap-2'>
        {/* Avatar */}
        <img className='w-6' src={sender.avatar} alt={sender.name} />
        {/* Sender's DName */}
        <p className='div'>{sender.name}</p>
        {/* Time of message */}
        <p className=''>{time}</p>
      </div>
      {/* Message */}
      <div
        className={`bg-white w-11/12 sm:w-9/12 p-4 rounded border border-stone-300 ${
          user ? "" : "md:translate-x-8"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default MessageItem;
