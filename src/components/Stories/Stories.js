import React, {Component} from 'react';
import '../Stories/Stories.css';
import Story from "./Story";
import HorizontalScroll from "react-scroll-horizontal";
import { render } from '@testing-library/react';
import { fetchNearby } from '../../backend/nearby';

class Stories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  fetchData = async () => {
    const activeUsers = await fetchNearby();
    this.setState({
      activeUsers: activeUsers
    })
  }
  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    return (
      <div className="stories">
        <HorizontalScroll className="scroll" reverseScroll={true}>
          {this.state.activeUsers?.map(user => {
            return (<div key={user.id} onClick={event => window.location.href='/conversation?id=' + user.id + '&userName=' + user.userName}>
              <Story key={user.id} user={user} />
            </div>)
          })}
        </HorizontalScroll>
      </div>
    );
  }
   
}

export default Stories;