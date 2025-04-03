import React from 'react'
import "../Components/Style/Chat.css"
const Chat = () => {
  return (
    <div className='chat'>
      {/* Chat header */}
      <div className="chatHeader">
      <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />  

      <div className="chatHeaderInfo">
        <h3>Room name</h3>
        <p>Last seen at....</p>
      </div>    
      <div className="chatHeaderRight">
        <button style={{border:"none"}}><i class="ri-search-line"></i></button>
        <button style={{border:"none"}}><i class="ri-attachment-line"></i></button>
        <button style={{border:"none"}}>
        <i class="ri-more-2-line"></i>
                </button>
      </div>
      </div>
      {/* chatBody */}
      <div className="chatBody">
        <p className='chatMessage'>
          <span className='chatName'>Rahul</span>
          Hello
          <span className='timestamp'>06:08 AM</span>
        </p>
        <p className='chatMessage'>
          <span className='chatName'>Rahul</span>
          Hello
          <span className='timestamp'>06:08 AM</span>
        </p>
        <p className='chatMessage chatReceiver'>
          <span className='chatName'>Aman</span>
          Hello Rahul
          <span className='timestamp'>06:08 AM</span>
        </p>
      </div>
      {/* chatFooter */}
      <div className="chatFooter">
        <span><i class="ri-emoji-sticker-line"></i></span>
        <form>
          <input type="text" placeholder='type your message...' />
          <button style={{border:"none"}} type='submit'><i class="ri-send-plane-2-fill"></i></button>
          <button style={{border:"none"}}><i class="ri-mic-fill"></i></button>
        </form>
      </div>
      </div>
  )
}

export default Chat