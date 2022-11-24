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
        <Button className='start-btn' type="submit" onClick={redirectToLogin}>
          Welcome
        </Button>
    </div>
  )
}

export default Home