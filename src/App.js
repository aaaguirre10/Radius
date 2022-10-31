import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import "./styles.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  )
}

export default App