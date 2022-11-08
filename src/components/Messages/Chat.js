 import React from 'react'
import './Chat.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Chat() {
  return (
    <div className='chat'>
        <AccountCircleIcon/>
        <div className='chat-information'>
            <h3>Antonio Aguirre</h3>
            <p>I'm a CS student...</p>
            <small>timestamp</small>
        </div>
    </div>
  )
}

export default Chat