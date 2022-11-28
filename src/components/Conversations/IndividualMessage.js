import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './IndividualMessage.css'
import { useState } from 'react';

function IndividualMessage({key, message, senderBoolean}) {
  if (senderBoolean === true){
    return (
      <div className='individualMessage-container-sender'>
        <AccountCircleIcon className='conversation-icon-sender'/>
        <p>{message}</p>
      </div> 
    )
  }
  return (
    <div className='individualMessage-container'>
        <AccountCircleIcon className='conversation-icon'/>
        <p>{message}</p>
    </div> 
  )
}

export default IndividualMessage