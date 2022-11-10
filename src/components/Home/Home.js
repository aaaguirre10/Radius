import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const redirectToLogin = () => { 
    navigate('/login');
    console.log("hello");
  }

  return (
    <div className='home-brand'>
        <h1>RADIUS</h1>
        <p>Are we in reach?</p>
        <Button className='login-btn' type="submit" onClick={redirectToLogin}>
            Login
        </Button>
    </div>
  )
}

export default Home