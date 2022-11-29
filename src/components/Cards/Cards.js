import React, { Component } from "react";
import "./Cards.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      text: "Add Friend",
    };
  }

  changeText = (text) => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="col-md-4 animated fadeIn" key={this.state.user.id}>
        <div className="card">
          <div className="card-body">
            <div className="avatar">
              <img
                src={this.state.user.imgUrl}
                className="card-img-top"
                alt=""
              />
            </div>
            <h5 className="card-title">
              {this.state.user.firstName + " " + this.state.user.lastName}
            </h5>
            {/* <p className="card-text">
              {this.state.user.location.city +
                ", " +
                this.uppercase(this.state.user.location.state)}
              <br />
              <span className="phone">{this.state.user.phone}</span>
            </p> */}
          </div>
          <button
            className="add-friend-button"
            onClick={() => {
              this.changeText("Sent");
            }}
          >
            {text}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
