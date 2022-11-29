import React, { Component } from "react";
import './Nearby.css'
import Navbar from '../Navbar/Navbar'
import { sha256 } from "js-sha256";
import { fetchNearby, sendFriendRequest } from '../../backend/nearby';

class Nearby extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nearbyUsers: [],
      per: 4,
      page: 1,
      total_pages: null
    }
  }

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };


  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadNearbyUsers
    );
  };

  loadNearbyUsers = async () => {
    const nearbyFetched =  await fetchNearby()
    this.setState({
      nearbyUsers: nearbyFetched
    });
    console.log('here');
    console.log(this.state.nearbyUsers);
    
    
  }

  componentDidMount() {
    this.loadNearbyUsers();
  }

  handleAddFriend= async (user) => {
    const id = sha256(sessionStorage.getItem('id'), user.id);
    const content = {
      type: 'request',
      from: sessionStorage.getItem('id'),
      to: user.id,
      message: 'Hey want to be friends?',
    }
    const response = await sendFriendRequest(id, content, {}, {});
    if(response === true) {
      alert('friend request sent');
    } else {
      alert('error sending friend request, try again.');
    }
  }

  render() {
    return (
      <div className='nearby-screen'>
        <div className='nearby-header-screen'>
            <h1 className='radius-title-screen' color='white'>RADIUS</h1>
            <br></br>
            <h2 className= 'nearby-title-screen' color='white'>Nearby</h2>
      </div>

      <div className="row">
      {this.state.nearbyUsers.map(user => (
            <div className="col-md-4 animated fadeIn" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={user.imgUrl}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(user.firstName) +
                      " " +
                      this.uppercase(user.lastName)}
                  </h5>
                  <p className="card-text">
                    {user.bio}
                    <br />
                    <span className="phone">{user.phone}</span>
                  </p>
                </div>
                <button className= "add-friend-button" onClick={event => {this.handleAddFriend(user)}}>Add Friend</button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <Navbar/>
      </div>   
    </div>
  )
}
}

export default Nearby