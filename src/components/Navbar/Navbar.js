import React from 'react'
import './Navbar.css'
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Icon, IconButton } from '@mui/material';

function Navbar() {
  return (
    <main>
        <div>
          <nav class="nav">
            <a href="/messages" class="nav__link">
                <IconButton>
                    <MessageIcon className='icon-color'/>
                </IconButton>
            </a>
            <a href="/nearby" class="nav__link">
                <IconButton>
                    <HomeIcon className='icon-color'/>
                </IconButton>
            </a>
            <a href="/" class="nav__link">
                <IconButton>
                    <AccountCircleIcon className='icon-color'/>
                </IconButton>
            </a>
          </nav>
        </div>
    </main>
  )
}

export default Navbar