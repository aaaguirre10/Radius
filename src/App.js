import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
// import Request from './components/Request/Request'
import Messages from './components/Messages/Messages';
import Signup from './components/Signup/Signup';
import "./styles.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        {/* <Route exact path="/request" element={<Request/>}></Route> */}
        <Route exact path="/messages" element={<Messages/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
  )
}

export default App