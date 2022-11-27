import React, { Component } from "react";
import './Nearby.css'
import Navbar from '../Navbar/Navbar'
import Dropdown from 'react-bootstrap/Dropdown';
import frie from "../images/frie.png"


class Nearby extends Component {
  state = {
    data: [],
    per: 3,
    page: 1,
    total_pages: null,
    text: "Add Friend"
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
  
  changeText = (text) => {
  
    this.setState({ text }); 
  } 

  render() {
    const { text } = this.state
    return (
      <div className='nearby-screen'>
        <div className='nearby-header-screen'>
            <h1 className='radius-title-screen' color='white'>RADIUS</h1>
            <br></br>
            <h2 className= 'nearby-title-screen' color='white'>Nearby</h2>
      </div>

      <div className="friend-request">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"><img src={frie} alt=""/></Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Something</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
                <button className= "friend" onClick={ () => { this.changeText("Sent")}}>{text}</button>
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