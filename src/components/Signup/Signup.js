import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'
import {fetchProfileLogin, submitProfile} from '../../backend/login'
import { useNavigate, redirect } from 'react-router-dom';

const sprites = [
  "male",
  "female",
  "initials",
  "bottts",
  "avataaars",
  "micah"
];

function Signup() {
  const navigate = useNavigate();

  const [imgURL, setImgURL] = React.useState("https://avatars.dicebear.com/api/bottts/d.svg");
  const [inputVal, setInputVal] = React.useState("");
  const [selectedSprite, setSelectedSprite] = React.useState(sprites[0]);
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [bio, setBio] = useState('');

  const handleInputChange = (e) => {
    setInputVal(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/${selectedSprite}/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };

  const handleSpriteChange = (e) => {
    setSelectedSprite(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/${e.target.value}/${inputVal}.svg`
        );
      }
      return e.target.value;
    });
  };

  const handleSubmit = async (event) => {
    //Submit profile
    event.preventDefault();
    event.stopPropagation();
    const id = sessionStorage.getItem('id');
    //Refactoring opportunity,
    //extract methods to generate public/protected/private requests
    firstName = document.getElementById('formBasicFirstName').value;
    lastName = document.getElementById('formBasicLastName').value;
    bio = document.getElementById('formBasicPassword').value;
    const submitted = await submitProfile(
      id,
      'signature_placeholder',
      {
        'firstName': firstName,
        'lastName': lastName,
        'bio': bio
      },
      {'message':id/*temp*/},
      {'message':id/*temp*/});

    if (submitted) {
      navigate('/nearby');
    } else {
      alert('Error creating logging in please try again');
    }
  }

  return (
    <main className='signup-screen'>
      {/* Create Account Title */}
      <div className='signup-title'>
        <h1>Sign-up</h1>
        <h6>Let's be in reach?</h6>
      </div>
      
      {/* Avatar */}
      <div className="avatar-container">
        <div className="row">
          <div className="col-12">
            {imgURL && (
              <div
                className="card border-info shadow-lg "
                style={{ width: "10rem" }}
              >
                <img src={imgURL} alt="dicebar" style={{ height: "10rem" }} />
              </div>
            )}
            <div
              className="card py-1 px-1 d-flex justify-content-center mx-auto mt-6 "
              style={{ width: "100%", float: 'left', backgroundColor: '#1C5E76' }}
            >  
              <input
                className="form-control"
                value={inputVal}
                onChange={handleInputChange}
                placeholder="Avatar generator"
              />
              <select onChange={handleSpriteChange} className="form-select">
                {sprites.map((sprite, index) => (
                  <option value={sprite} key={index}>
                    {sprite}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Create form */}
      <div className='create-form-container'>
        <Form onSubmit={handleSubmit}>
          {/* Username */}
          <Form.Group className="mb-1" controlId="formBasicFirstName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              className='username-input'
              type="text" 
              placeholder="Username" 
              value={sessionStorage.getItem('username')}
              disabled
            />
          </Form.Group>

          
          {/* First Name Section */}
          <Form.Group className="mb-1" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className='name-input'
              type="text" 
              placeholder="First Name..." 
              onChange={e => {setFirstName(e.target.value)}}
              required
            />
          </Form.Group>

          {/* Last Name Section */}
          <Form.Group className="mb-1" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className='name-input'
              type="text" 
              placeholder="Last Name..." 
              onChange={e => {setLastName(e.target.value)}}
              required
            />
          </Form.Group>

          {/* Password Section */}
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              className='password-input'
              type= "text"
              placeholder="Bio..." 
              onChange={e => {setBio(e.target.value)}}
              required
            />
          </Form.Group>

          {/* Login Button */}
          <Button className='signup-btn' type="submit" >
            Sign up
          </Button>
        </Form>
      </div>
    </main>
  )
}

export default Signup