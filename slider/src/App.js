import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <ShowDate/>
          <p>Hi, my dear friend!!!</p>
          <p>My name is Vasya</p>
        </div>
    );
  }
}

function ShowDate() {
  let currentTime = new Date();
  return (
      <div>
        <h1>Current Time:</h1>
        <p><span>{currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}</span></p>
      </div>
    )
}


export default App;
