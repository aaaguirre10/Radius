import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'
import {fetchProfileLogin, submitProfile} from '../../backend/login'

const sprites = [
  "male",
  "female",
  "initials",
  "bottts",
  "avataaars",
  "micah"
];

function Signup() {

  const [imgURL, setImgURL] = React.useState("");
  const [inputVal, setInputVal] = React.useState("");
  const [selectedSprite, setSelectedSprite] = React.useState(sprites[0]);

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
    await submitProfile(id, 'some_signature', {'message':id}, {}, {});
    
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
                className="card border-info shadow-lg mx-auto my-1 rounded-circle"
                style={{ width: "50%" }}
              >
                <img src={imgURL} alt="dicebar" style={{ height: "100px" }} className='rounded-circle'/>
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
          {/* First Name Section */}
          <Form.Group className="mb-1" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className='name-input'
              type="text" 
              placeholder="First Name..." 
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