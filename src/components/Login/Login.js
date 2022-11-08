// React libraries
import React from 'react'
import { useState} from "react";

// Styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { Row} from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'





function Login() {
  // Constants for login form
  const [passwordShown, setPasswordShown] = useState(false);
  const [validated, setValidated] = useState(false);

  const eye = <FontAwesomeIcon icon={faEye} />;


  const onSubmit = data => {
    console.log(data);
  };


  
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // change inverse the boolean state passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
              className='password-input'
              type="email" 
              placeholder="Enter email" 
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
              required
            />
            <i onClick={togglePassword} className='icon-position'>{eye}</i>

            {/* Remember Me Checkbox */}
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check className='remember-me' type="checkbox" label="Remember Me" />

            </Form.Group>
          </Form.Group>

          {/* Login Button */}
          <Button className='login-btn' type="submit" onClick={onSubmit()}>
            Login
          </Button>
        </Form>
        <p className='forgot-password' onClick={event => window.location.href='/sign-up'}>Don't have an account? Sign up</p>
      </div>
    </main>
  )
}

export default Login