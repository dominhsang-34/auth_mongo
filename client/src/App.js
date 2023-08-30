import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Login from './Login';
import Signup from "./Signup";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="login" element = {<Login/>}></Route>
      <Route path="signup" element = {<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
