import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './IndividualMessage.css'
import { useState } from 'react';

function IndividualMessage({key, message}) {
  return (
    <div className='individualMessage-container'>
        <AccountCircleIcon className='conversation-icon'/>
        <p>{message}</p>

    </div> 
    
  )
}

export default IndividualMessage