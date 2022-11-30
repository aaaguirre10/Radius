import React, { useState, useEffect, Component } from 'react';
// Styling Imports
import "./Messages.css"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Chat from './Chat';
import Navbar from '../Navbar/Navbar';
import { fetchConversations } from '../../backend/messages'
import Stories from '../Stories/Stories';
import { DiscFullOutlined } from '@mui/icons-material';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    }
  }

  
  fetchData = async () => {
    const conversationsFetched = await fetchConversations(sessionStorage.getItem('id'));
  }



  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <main className='messages-screen'>
        {/* Screen Title */}
        <div className='tittle-container'>
          <h1 className='message-title'>Messages</h1>
        </div>
        
        <Stories/>

        {/* Search Message */}
        <div className='searchbar-container'>
          <SearchIcon/>
          <input className='search-input' placeholder='Search'/>
        </div>
  
        {/* Message Section */}
        <div className='messages-container'>
  
          <Chat otherParticipant={"leor5d4"}/>
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
        <div>
          <Navbar/>
        </div>
      </main>
    )
  }
}

export default Messages