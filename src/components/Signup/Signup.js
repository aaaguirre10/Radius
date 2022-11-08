import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'

function Signup() {
  return (
    <main className='signup-screen'>
      {/* Create Account Title */}
      <div className='signup-title'>
        <h1>Sign-up</h1>
        <h6>Let's be in reach?</h6>
      </div>
      {/* Create form */}
      <div className='create-form-container'>
        <Form>
          {/* First Name Section */}
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className='name-input'
              type="text" 
              placeholder="First Name..." 
              required
            />
          </Form.Group>

          {/* Last Name Section */}
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className='name-input'
              type="text" 
              placeholder="Last Name..." 
              required
            />
          </Form.Group>

          {/* Password Section */}
          <Form.Group className="mb-3 pass-wrapper" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className='password-input'
              type= "text"
              placeholder="Password..." 
              required
            />
          </Form.Group>

          {/* Password Section */}
          <Form.Group className="mb-3 pass-wrapper" controlId="formBasicPassword">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              className='password-input'
              type= "text"
              placeholder="Bio..." 
              required
            />
          </Form.Group>

          {/* Login Button */}
          <Button className='signup-btn' type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </main>
  )
}

export default Signup