// React libraries
import React from 'react'
import { useState} from "react";

// Styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'




function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;

  const onSubmit = data => {
    console.log(data);
  };


  
  // Password toggle handler
  // const togglePassword = () => {
  //   // When the handler is invoked
  //   // chnage inverse the boolean state passwordShown
  //   setPasswordShown(!passwordShown);
  // };



  return (
    <main className='login-screen'>
      <div className='brand-name'>
        <h1>RADIUS</h1>
      </div>
      <div className='brand-slogan'>
        <p>Are we in reach?</p>
      </div>
      <div className='login-form-container'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3 pass-wrapper" controlId="formBasicPassword">
            <Form.Control type={passwordShown ? "text" : "password"} placeholder="Password" />
            <i className='icon-position'>{eye}</i>
            {/* <button onClick={togglePassword}>Show Password</button> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Button className='login-btn' type="submit" onClick={onSubmit()}>
            Login
          </Button>

        </Form>
      </div>
    </main>
  )
}

export default Login