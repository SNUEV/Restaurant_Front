import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './Header.scss';

export class Header extends Component {
  
  render() {
    return (
      <div className="header">
        <div className="nav">
          <div className="logo">LOGO</div>
          <div className="menuLink">메뉴1</div>
          <div className="menuLink">메뉴2</div>
          <div className="menuLink">Login</div>
        </div>
        <Jumbotron className="banner">
          <div className="title">
            <h1>기가 맥힌 멘트!!!</h1>
            <h1>Restaurant</h1>
          </div>
        </Jumbotron>
      </div>

    )
  }

  componentDidMount() {

  }
}