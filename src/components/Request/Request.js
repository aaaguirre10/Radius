import React from 'react'
import './Request.css'
import txt from "./Images/txt.png"
import prof from "./Images/profile.png"
import fri from "./Images/friends.png"
import set from "./Images/setting.png"
import pete from "./Images/pete.png"



function Request() {

  return (
    <div>
      <div>
        <h1 className= 'radius-title'>RADIUS</h1>
      </div>
      <div className='bottom-border' ></div> 
      <button className='text-logo'> <img src={txt}/></button> 
      <button className='profile-logo'> <img src={prof}/></button> 
      <button className='friends-logo'> <img src={fri}/></button> 
      <button className='settings-logo'> <img src={set}/></button>
      <div className='pete-name'>Pete is in radius...</div>
      <div className='pete'><img src={pete}/></div>
      <button className='decline'>Decline</button>
      <button className='accept'>Accept</button>
     

   
      
      
    
    </div>
    
  )
}

export default Request