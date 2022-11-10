import { React, useState } from 'react'
import { useLocation } from "react-router-dom";



function Signup() {
  const location = useLocation();

  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  // get user id and username
  //console.log(location.state.id);
  //console.log(location.state.username);

  return (
    <>
      <div>{username}</div>
      <div>{id}</div>
    </>
  );
}

export default Signup