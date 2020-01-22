import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './Header.scss';

export class Header extends Component {
  
  render() {
    return (
      <Jumbotron>
        <div className="nav">
          <div className="logo">LOGO</div>
          <div>메뉴1</div>
          <div>메뉴2</div>
          <div>마이페이지</div>
        </div>
        <div className="title">
          <h1>기가 맥힌 멘트!!!</h1>
          <h1>Restaurant</h1>
        </div>
      </Jumbotron>

    )
  }

  componentDidMount() {

  }
}