import React from 'react'
import './Conversation.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IndividualMessage from './IndividualMessage';
// import Chat from '../Messages/Chat';
import { getMessages, sendMessages } from '../../backend/sendMessage';
import { useState} from "react";
import {useEffect} from "react";
import { fetchProfileLogin } from '../../backend/login';

function Conversation() {
    if(sessionStorage.getItem('id') == null){
        alert("PERMISSION DENIED")
        window.location.href='/'
    }
    const urlParams = new URLSearchParams(window.location.search);
    const participantId = urlParams.get('id');
    const participantUsername = urlParams.get('userName')

    const [messageArr, setMessageArr] = useState([]);
    const [messageText, setMessageText] = useState('');

    const addMessage = (messageText) => {
        setMessageArr([...messageArr, messageText]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            id: messageText,
            message: messageText,
            senderBoolean: true
        } 
        addMessage(newMessage);
        setMessageText('');
    };

    const sendMessage = async(e) => { //@TODO refactor function name (set this as handleSendMessage())
        e.preventDefault();
        e.stopPropagation();
        let messageValue = document.getElementById('message').value;

        let id = messageValue; //make SHA
        const submitted = await sendMessages( // @TODO refactor (set this as sendMessage())
        id,
        {'sender': sessionStorage.getItem('id')},
        {'recipient': participantId}, 
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


    const handleRenderBlockchainOrigin = (messageToRender, sender) => {
        let isSender;
        if (sender === sessionStorage.getItem("userName")){
            isSender = true;
        } else {isSender = false;}

        const newMessage = {
            id: messageText,
            message: messageToRender,
            senderBoolean: isSender
        } 
        addMessage(newMessage);
        setMessageText('');
    }
    const renderMessages = async() => {
        const blockchainResponse = await getMessages(sessionStorage.getItem('userName'), participantId);
        console.log(blockchainResponse)
        for (let index = 0; index<blockchainResponse.length; index++){
            handleRenderBlockchainOrigin(blockchainResponse[index].private_data.private, blockchainResponse[index].signature.sender);
        }
    }

    const renderPreviousMessages = async() => {
        renderMessages();
    }
    
    useEffect(() => {
        async function fetchData() {
            // ...
            const interval = setInterval(() => {
                renderPreviousMessages();
                }, 10000);
            return () => clearInterval(interval);
        }
        
        
      }, []);


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
            <strong>{participantUsername}</strong>
        </div>
        {/* chat messages */}
        <div className='conversation-messages'>
            <ul>
                {messageArr.map(({ id, message, senderBoolean }) => (
                    <IndividualMessage key={id} message={message} senderBoolean={senderBoolean}>
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