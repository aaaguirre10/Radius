import React from 'react';
// Styling Imports
import "./Messages.css"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Chat from './Chat';


function Messages() {
  return (
    <main className='messages-screen'>
      <div className='backarrow-position'>
        <IconButton>
          <ArrowBackIosNewIcon className='messages-header'/>
        </IconButton>
      </div>

      {/* Screen Title */}
      <div className='tittle-container'>
        <h1 className='message-title'>Messages</h1>
      </div>
      {/* Search Message */}
      <div className='searchbar-container'>
        <SearchIcon/>
        <input className='search-input' placeholder='Search'/>
      </div>

      {/* Message Section */}
      <div className='messages-container'>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
      </div>
    </main>
  )
}

export default Messages