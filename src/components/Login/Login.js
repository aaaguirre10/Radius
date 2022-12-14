// React libraries
import React from 'react'
import { useState} from "react";
import { useNavigate, redirect } from 'react-router-dom';
// Styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { Row} from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { fetchProfileLogin } from '../../backend/login'
import { sha256 } from 'js-sha256';



function Login() {
  const navigate = useNavigate();
  // Constants for login form
  const [passwordShown, setPasswordShown] = useState(false);
  const [validated, setValidated] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const eye = <FontAwesomeIcon icon={faEye} />;
  
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // change inverse the boolean state passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);
    const id = sha256(username+password);
    const loginResponse = await fetchProfileLogin(id);

    if (loginResponse['id'] === 'NOT_FOUND') {
      //TODO: Refactor opportunity; extract outside of if/else block
      sessionStorage.setItem('id', id); 
      sessionStorage.setItem('userName', username);
      //redirect to profile creation
      alert("Going to signup");
      navigate('/signup');
    } else {
      alert("going to nerby");
      //TODO: Refactor opportunity
      sessionStorage.setItem('id', id); 
      sessionStorage.setItem('userName', username);
      //redirect to home screen and log in
      navigate("/nearby");
    }
  };


  return (
    // Login Screen Page
    <main className='login-screen'>
      {/* Brand Logo, Brand Name, Brand Slogan */}
      <picture>
        <img src="Radius-Icon.png" alt="Radius Logo"/>
      </picture>
      <div className='brand-name'>
        <h1>RADIUS</h1>
      </div>
      <div className='brand-slogan'>
        <p>Are we in reach?</p>
      </div>

      {/* Login form */}
      <div className='login-form-container'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          {/* Email Section */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className='username-input'
              type="text"
              placeholder="Enter username" 
              onChange={e => {setUsername(e.target.value)}}
              required
            />
            {/* <Form.Check className='remember-me' type="checkbox" label="Remember Me" /> */}
          </Form.Group>

          {/* Password Section */}
          <Form.Group className="mb-3 pass-wrapper" controlId="formBasicPassword">
            <Form.Control
              className='password-input'
              type={passwordShown ? "text" : "password"} 
              placeholder="Password" 
              onChange={e => {setPassword(e.target.value)}}
              required
            />
            <i onClick={togglePassword} className='icon-position'>{eye}</i>

            {/* Remember Me Checkbox */}
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check className='remember-me' type="checkbox" label="Remember Me" />

            </Form.Group>
          </Form.Group>

          {/* Login Button */}
          <Button className="login-btn" type="submit">
            Login
          </Button>
        </Form>
        <p className="forgot-password" onClick={event => window.location.href='/signup'}>Don't have an account? Sign up</p>
      </div>
    </main>
  )
}

export default Login