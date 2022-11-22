import React from 'react'
// import { useState } from 'react';
import './Conversation.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IndividualMessage from './IndividualMessage';
// import Chat from '../Messages/Chat';
import { getMessage, sendMessages } from '../../backend/sendMessage';
import { useState} from "react";


function Conversation() {

    const [messages, setMessages] = useState([]);
    const sendMessage = async(e) => { //@TODO refactor function name
        e.preventDefault();
        e.stopPropagation();
        console.log(document.getElementById('message').value);
        let messageValue = document.getElementById('message').value;

        let id = messageValue; //make SHA
        const submitted = await sendMessages( // @TODO refactor
            id,
            'signature_placeholder',
            {
              'hello':'there',
            },
            {'message':id/*temp*/},
            {'MessageSent': messageValue});
        if (submitted) {
            alert("message sent");
            } 
        else {
            alert('Error creating logging in please try again');
        }

        setMessages([...messages, messageValue]);



    };


  return (
    <main className='conversation-screen'>
        <div className='backarrow-position'>
            {/* <IconButton>
                <ArrowBackIosNewIcon 
                    className='messages-header'
                    onClick={event => window.location.href='/messages'}
                />
            </IconButton> */}
      </div>
        {/* chat header */}
        <div className='conversation-header'>
            <AccountCircleIcon className='conversation-icon'/>
            <strong>Antonio Aguirre</strong>
        </div>
        {/* chat messages */}
        <div className='conversation-messages'>
            <IndividualMessage/>
        </div>

        {/* chat input */}
        <div className='conversation-input'>
            <form onSubmit={sendMessage}>
                <input id='message' placeholder='Are we in reach?' type='text'/>
                <button>Send Message</button>
            </form>
            
            <IconButton>
                <PhotoCameraIcon className='conversation-camera'/>
            </IconButton>
        </div>

    </main>
  )
}
export default Conversation