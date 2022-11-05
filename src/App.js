import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Nearby from './components/Nearby/Nearby'
import Settings from './components/Settings/Settings'
import "./styles.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/nearby" element={<Nearby/>}></Route>
        <Route exact path="/settings" element={<Settings/>}></Route>
      </Routes>
    </Router>
  )
}

export default App