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
import { DiscFullOutlined, ThirtyFpsSelect } from '@mui/icons-material';
import { fetchProfileLogin } from '../../backend/login';


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    }
  }

  
  fetchData = async () => {
    const conversationsFetched = await fetchConversations(sessionStorage.getItem('id'));
    let participants = [];
    await Promise.all(
      conversationsFetched.map(async function (userId) {
        const response = await fetchProfileLogin(userId)
        const profile = {
          id: response['id'],
          userName: response['public_data']['userName'],
          imgURL: response['public_data']['imgURL']
        };
        participants = [...participants, profile];
      })
    ) 
    
    this.setState({
      conversations: conversationsFetched,
      participants: participants
    });
  }



  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    return (
      <main className='messages-screen'>
        {/* Screen Title */}
        <div className='tittle-container'>
          <h1 className='message-title'>Messages</h1>
        </div>
        
        <div className='stories-container'>
          <Stories/>
        </div>
        

        {/* Search Message */}
        <div className='searchbar-container'>
          <SearchIcon/>
          <input className='search-input' placeholder='Search'/>
        </div>
  
        {/* Message Section */}
        <div className='messages-container'>
          {
            this.state.participants?.map(user => {
              console.log('user below');
              console.log(user);
              return (
                <Chat key={user.id} id={user.id} user={user}/>
              );
            })
          }
        </div>
        
        <div>
          <Navbar/>
        </div>
      </main>
    )
  }
}

export default Messages