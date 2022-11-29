import React, { Component } from "react";
import "./Cards.css";
import { sha256 } from "js-sha256";

class Card extends Component {
  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadNearbyUsers = async () => {
    this.setState({
      nearbyUsers: await fetchNearby(),
    });
  };

  componentDidMount() {
    this.loadNearbyUsers();
  }

  handleAddFriend = async (user) => {
    const id = sha256(sessionStorage.getItem("id"), user.id);
    const content = {
      type: "request",
      from: sessionStorage.getItem("id"),
      to: user.id,
      message: "Hey want to be friends?",
    };
    const response = await sendFriendRequest(id, content, {}, {});
    if (response === true) {
      alert("friend request sent");
    } else {
      alert("error sending friend request, try again.");
    }
  };

  changeText = (text) => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <div className="avatar">
            <img src={user.imgUrl} className="card-img-top" alt="" />
          </div>
          <h5 className="card-title">
            {this.uppercase(user.firstName) +
              " " +
              this.uppercase(user.lastName)}
          </h5>
          <p className="card-text">
            {user.location.city + ", " + this.uppercase(user.location.state)}
            <br />
          </p>
        </div>
        <button
          className="friend"
          onClick={() => {
            this.changeText("Sent");
          }}
        >
          {text}
        </button>
      </div>
    );
  }
}

export default Card;
