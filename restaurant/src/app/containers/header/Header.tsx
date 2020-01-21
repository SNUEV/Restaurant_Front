import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './Header.scss';

export class Header extends Component {
  
  render() {
    return (
      <Jumbotron>
        <h1>Restaurant</h1>
        <p>bookings.com을 참고하세요</p>
      </Jumbotron>
    )
  }

  componentDidMount() {

  }
}