import React, { Component } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Profile.css'
import {fetchProfileLogin} from '../../backend/login'
import Navbar from '../Navbar/Navbar'

const sprites = [
  "male",
  "female",
  "initials",
  "bottts",
  "avataaars",
  "micah"
];

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: sessionStorage.getItem('id')    
      }
    }
     


    // handleSubmit = async (event) => {
    //     //Submit profile
    //     event.preventDefault();
    //     event.stopPropagation();
    //     const id = sessionStorage.getItem('id');

    //     //Refactoring opportunity,
    //     //extract methods to generate public/protected/private requests
    //     // firstName = document.getElementById('formBasicFirstName').value;
    //     // lastName = document.getElementById('formBasicLastName').value;
    //     // bio = document.getElementById('formBasicPassword').value;
    //     const submitted = await submitProfile(
    //     id,
    //     'signature_placeholder',
    //     {
    //         'firstName': firstName,
    //         'lastName': lastName,
    //         'bio': bio,
    //         'pic_url': imgURL
    //     },
    //     {'message':id/*temp*/},
    //     {'message':id/*temp*/});

    //     if (submitted) {
    //     navigate('/nearby');
    //     } else {
    //     alert('Error creating logging in please try again');
    //     }
    // }

    fetchProfile = async () => {
      const profileResponse = await fetchProfileLogin(this.state.id);
      console.log(profileResponse);
      const public_data = profileResponse['public_data'];
      this.firstName = public_data['firstName'];
      this.lastName = public_data['lastName'];
      this.bio = public_data['bio'];
      this.setState({
        firstName: public_data['firstName'],        
        lastName: public_data['lastName'],
        bio: public_data['bio'],
        imgURL: public_data['imgURL']
      });
    }

    componentDidMount() {
        this.fetchProfile();
    }

    render() {
        return (
            <div className='signup-screen'>

              {/* Create Account Title */}
              <div className='signup-title'>
                <h1>Profile</h1>
              </div>
              
              {/* Avatar */}
              <div className="avatar-container">
                <div className="row">
                  <div className="col-12">
                      <div
                        className="card border-info shadow-lg "
                        style={{ width: "10rem" }}
                      >
                        <img src={this.state.imgURL} alt="dicebar" style={{ height: "10rem" }}/>
                      </div>
                    
                    <div
                      className="card py-1 px-1 d-flex justify-content-center mx-auto mt-6 "
                      style={{ width: "100%", float: 'left', backgroundColor: '#1C5E76' }}
                      >  
                      
                      <input
                        className='form-control'
                        placeholder="Avatar generator"
                      />
                      <select className="form-select">
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
                <Form>
                  {/* Username */}
                  <Form.Group className="mb-1" controlId="formBasicFirstName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      className='username-input'
                      type="text" 
                      placeholder="Username" 
                      value={this.state.id}                      
                    />
                  </Form.Group>
        
                  
                  {/* First Name Section */}
                  <Form.Group className="mb-1" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className='name-input'
                      type="text" 
                      placeholder="First Name..." 
                      value={this.state.firstName}
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
                      value={this.state.lastName}
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
                      value={this.state.bio}
                      required
                    />
                  </Form.Group>
        
                  {/* Login Button */}
                  {/* <Button className='signup-btn' type="submit" >
                    Sign up
                  </Button> */}
                </Form>
              </div>
              
              <div>
                <Navbar/>
              </div>
               
            </div>
            
          )
    }
}

export default Profile