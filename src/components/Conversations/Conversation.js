import React from 'react'
// import { useState } from 'react';
import './Conversation.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




function Conversation() {

    const sendMessage = (e) => {
        e.preventDefault();
    };


  return (
    <main className='conversation-screen'>
        <div className='backarrow-position'>
            <IconButton>
                <ArrowBackIosNewIcon className='messages-header'/>
            </IconButton>
      </div>
        {/* chat header */}
        <div className='conversation-header'>
            <AccountCircleIcon className='conversation-icon'/>
            <strong>Antonio Aguirre</strong>
        </div>
        {/* chat messages */}

        {/* chat input */}
        <div className='conversation-input'>
            <form>
                <input placeholder='Are we in reach?' type='text'/>
                <button onClick={sendMessage}>Send Message</button>
            </form>
        </div>

    </main>
  )
}

export default Conversation