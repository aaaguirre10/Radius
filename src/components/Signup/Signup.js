import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'

const sprites = [
  "male",
  "female",
  "human",
  "identicon",
  "initials",
  "bottts",
  "avataaars",
  "jdenticon",
  "gridy",
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
          <div className="col-20">
            {imgURL && (
              <div
                className="card border-info shadow-lg "
                style={{ width: "2rem" }}
              >
                <img src={imgURL} alt="dicebar" style={{ height: "2rem" }} />
              </div>
            )}
            <div
              className="card shadow py-1 px-1 d-flex justify-content-center mx-auto mt-2"
              style={{ width: "70%", float: 'right' }}
            >  
              <input
                className="form-control"
                value={inputVal}
                onChange={handleInputChange}
                placeholder="Type any random letter for random avatar"
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
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