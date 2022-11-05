import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Request from './components/Request/Request'
import "./styles.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/request" element={<Request/>}></Route>
      </Routes>
    </Router>
  )
}

export default App