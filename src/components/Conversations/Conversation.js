import React from 'react'
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

    const [messageArr, setMessageArr] = useState([]);
    const [messageText, setMessageText] = useState('');
    const addMessage = (messageText) => {
        setMessageArr([...messageArr, messageText]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            id: messageText,
            message: messageText
        } 
        addMessage(newMessage);
        setMessageText('');
    };

    const sendMessage = async(e) => { //@TODO refactor function name
        e.preventDefault();
        e.stopPropagation();
        console.log(document.getElementById('message').value);
        let messageValue = document.getElementById('message').value;

        let id = messageValue; //make SHA
        const submitted = await sendMessages( // @TODO refactor
        id,
        {'sender': sessionStorage.getItem('id')},
        {'recipient': "TBD"}, 
        {'timestamp': new Date()}, 
        {'private':messageValue}//user ID instead of username
        );


            // id,
            // {'sender': sessionStorage.getItem('id')},
            // {'recipient': "TBD"}, 
            // {'timestamp': new Date()}, 
            // {'private':messageValue}//user ID instead of username
            // );
        if (submitted) {
            alert("message sent");
            } 
        else {
            alert('Error creating logging in please try again');
        }



    };

const wrapper = async(e) =>{
    sendMessage(e);
    handleSubmit(e);
}


  return (
    <main className='conversation-screen'>
        <div className='backarrow-position'>
            <IconButton  onClick={event => window.location.href='/messages'}>
                <ArrowBackIosNewIcon 
                    className='messages-header'
                   
                />
            </IconButton>
      </div>
        {/* chat header */}
        <div className='conversation-header'>
            <AccountCircleIcon className='conversation-icon'/>
            <strong>Antonio Aguirre</strong>
        </div>
        {/* chat messages */}
        <div className='conversation-messages'>
            <ul>
                {messageArr.map(({ id, message }) => (
                    <IndividualMessage key={id} message={message}>
                        {/* <li>{message}</li> */}
                        {console.log(message)}
                    </IndividualMessage>
                ))}
            </ul>
        </div>

        {/* chat input */}
        <div className='conversation-input'>
            <form onSubmit={wrapper}>
                <input id='message' placeholder='Are we in reach?' type='text' value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
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