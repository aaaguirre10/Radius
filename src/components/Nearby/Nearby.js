import React from 'react'
import './Nearby.css'
import profile from "../images/profile.png"
import settings from "../images/settings.png"
import messages from "../images/messages.png"



function Nearby() {

  return (
    <div>
      <h1 className= 'radius-title' color='white'>RADIUS</h1>
      <br></br>
      <h2 className= 'nearby-title' color='white'>Nearby</h2>
      <div className= 'bottom-border'></div>
      <button className='profile-icon'> <img src={profile} alt='profile'/></button>
      <button className='settings-icon'> <img src={settings} alt='settings'/></button>
      <button className='messages-icon'> <img src={messages} alt='messages'/></button>
    </div>
    
  )
}

export default Nearby