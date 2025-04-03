import React from 'react'
import "../Components/Style/SidebarChat.css"

const SidebarChat = ({addNewChat}) => {
  return (
    !addNewChat?(<div className='sidebarChat'>
        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
        <div className="sidebarChatInfo">
            <h2>code room</h2>
         <p>This is messages</p>   
        </div>
    </div>):(
      <div className="sidebarChat">
        <h3>Add New Chat</h3>
      </div>)
    
  )
}

export default SidebarChat