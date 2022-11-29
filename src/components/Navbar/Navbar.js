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
          <nav className="nav">
            <a href="/messages" className="nav__link">
                <IconButton>
                    <MessageIcon className='icon-color'/>
                </IconButton>
            </a>
            <a href="/nearby" className="nav__link">
                <IconButton>
                    <HomeIcon className='icon-color'/>
                </IconButton>
            </a>
            <a href="/profile" className="nav__link">
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