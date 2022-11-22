import React, { Component } from "react";
import './Nearby.css'
import message from "../images/messages.png"
import friends from "../images/friends.png"
import profile from "../images/profile.png"

class Nearby extends Component {
  state = {
    data: [],
    per: 5,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className='nearby-screen'>
        <div className='nearby-header'>
        <h1 className= 'radius-title' color='white'>RADIUS</h1>
        <br></br>
        <h2 className= 'nearby-title' color='white'>Nearby</h2>
      </div>

      <div className="row">
      {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                </div>
                <button className= "friend">Add Friend</button>
              </div>
            </div>
          ))}
      </div>


      <div className= 'nearby-bottom'>
        <button className='message-icon'> <img src={message} alt='message'/></button>
        <button className='friends-icon'> <img style={{ width: 40, height: 40 }} src={friends} alt='friends'/></button>        
        <button className='profile-icon'> <img src={profile} alt='profile'/></button>
      </div>   
      
    </div>
    
  )
}
}

export default Nearby