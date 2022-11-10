import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './IndividualMessage.css'

function IndividualMessage() {
  return (
    <div className='individualMessage-container'>
        <AccountCircleIcon className='conversation-icon'/>
        <p>This is a message</p>
        <small>Timestamp</small>
    </div> 
    
  )
}

export default IndividualMessage