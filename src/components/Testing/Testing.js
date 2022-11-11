import React, { Component } from "react";
import "./Testing.css";
import profile from "../images/profile.png"
import settings from "../images/settings.png"
import messages from "../images/messages.png"

class UserCards extends Component {
  state = {
    data: [],
    per: 1,
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

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
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
        <button className='profile-icon'> <img src={profile} alt='profile'/></button>
        <button className='settings-icon'> <img src={settings} alt='settings'/></button>
      </div>
      <div className= 'nearby-middle'>
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
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
                <button className= "friend">Add Friend</button>
              </div>
            </div>
          ))}
      </div>
      <div className= 'nearby-bottom'>
        <button className='messages-icon-nearby'> <img src={messages} alt='messages'/></button>
      </div>   
      
    </div>
    );
  }
}

export default UserCards;
