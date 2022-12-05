import React from 'react'
import './Chat.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Chat({id, user}){
  return (
    <div className='chat' onClick={event => window.location.href='/conversation?id=' + id + '&userName=' + user.userName}>
        <AccountCircleIcon/>
        <div className='chat-information'>
            <h3>{user.userName}</h3>
            <p>I'm a CS student...</p>
            <small>timestamp</small>
        </div>
    </div>
  )
}

export default Chat