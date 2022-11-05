import React from 'react'
import './Settings.css'
import messages from "../images/messages.png"
import back from "../images/back.png"
import account from "../images/account.png"
import chatSettings from "../images/chatSettings.png"
import networks from "../images/networks.png"
import privacy from "../images/privacy.png"
import about from "../images/about.png"



function Settings() {

  return (
    <div>
      <h1 className= 'radius-title' color='white'>RADIUS</h1>
      <br></br>
      <h2 className= 'settings-title' color='white'>Settings</h2>
      <div className= 'bottom-border'></div>
      <button className='messages-icon'> <img src={messages} alt='messages'/></button>
      <button className='back-icon'> <img src={back} alt='back'/></button>
      <button className='account'> <img style={{ width: 550, height: 90 }} src={account} alt='account'/></button>
      <button className='chatSettings'> <img style={{ width: 550, height: 90 }} src={chatSettings} alt='chatSettings'/></button>
      <button className='networks'> <img style={{ width: 550, height: 90 }} src={networks} alt='networks'/></button>
      <button className='privacy'> <img style={{ width: 550, height: 90 }} src={privacy} alt='privacy'/></button>
      <button className='about'> <img style={{ width: 550, height: 90 }} src={about} alt='about'/></button>
    </div>
    
  )
}

export default Settings