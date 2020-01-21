import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './SearchBar.scss';

export class SearchBar extends Component {

  render() {

    return (
      <div>
        <div className="button-group">
          first group of filter (Category)
        </div>
        <div className="button-group">
          second group of filter (Tags)
        </div>
        <div className="button-group">
          third group of filter (Price range)
        </div>
        <Button variant="outline-primary">Search</Button>
      </div>
    );
  }

  componentDidMount() {
    
  }

}