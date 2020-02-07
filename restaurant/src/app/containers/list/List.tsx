import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import './List.scss';

import { Restaurant } from './models/models';



interface ListProps {
    restaurants: Restaurant[]
};



const RestaurantItem = ({id, name, description, rating}: Restaurant) => {

  return (
    <Card className="restaurantItem">
    <Card.Img variant="top" src={require("./img/temp.jpg")}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
    )
}

export class List extends Component<ListProps> {
  
  static defaultProps = {
    restaurants: [
      {id:0, name: "Outback", description:"family restaurant. Good steaks, breads are great", rating:4.2},
      {id:1, name: "Haksik", description:"very cheap. refill possible", rating:2.8},
      {id:2, name: "Nongsik", description:"very cheap. refill possible", rating:3.0},
      {id:3, name: "Sasik", description:"very cheap. refill possible", rating:2.8},
      {id:4, name: "GongGGang", description:"very cheap. refill possible", rating:3.0},
      {id:5, name: "Duraemidam", description:"very cheap. refill possible", rating:2.8},
    ]
  }

  render() {
    const { restaurants} = this.props;

    return (
      <div>
        <h2>최근 핫한 맛집!</h2>
        <div className="restaurant-container">
          {restaurants.map(restaurant => (
            <RestaurantItem
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              description={restaurant.description}
              rating={restaurant.rating}
            />
          ))}

        </div>
      </div>



    );
  }

  componentDidMount() {
    
  }
}

