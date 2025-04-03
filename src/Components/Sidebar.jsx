import React from 'react'
import "../Components/Style/Sidebar.css"
import SidebarChat from './SidebarChat'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarHeader">
            <div>
                <img src="https://cdn-cm.freepik.com/previews/cbc50f02-60b9-4afa-9a2c-53949d122949.jpg?token=exp=1743608196~hmac=e9f4ea8358031484eaeea56e522cecb9dc0c7235eb15c08c9334a218e82e5fee?w=500&h=500" alt="" />
            </div>
            <div className="sidebarHeaderRight">
                <button style={{border:"none"}}>
                <i className="ri-arrow-down-circle-line"></i>
                        </button>

                <button style={{border:"none"}}>
                <i className="ri-more-2-line"></i>
               
                        </button>

                <button style={{border:"none"}}>
                <i className="ri-chat-3-line"></i>
                </button>
            </div>
        </div>
        {/* sidebar search */}
        <div className="sidebarSearch">
            <div className="sidebarSearchContainer">
            <i class="ri-search-line"></i>
            <input type="text" placeholder='Search Contact' />
            </div>
        </div>
        {/* sidebar chats */}
        <div className="sidebarChats">
            <SidebarChat addNewChat/>
            <SidebarChat/>
            <SidebarChat/>
            
        </div>
    </div>
  )
}

export default Sidebar