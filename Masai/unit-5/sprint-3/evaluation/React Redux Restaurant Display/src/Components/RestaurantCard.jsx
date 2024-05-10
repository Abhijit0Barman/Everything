import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant_card">
      <img src={restaurant.image} alt={restaurant.name} className="image" />
      <h3 className="name">{restaurant.name}</h3>
      <h4 className="type">{restaurant.type}</h4>
      <p className="votes">Votes: {restaurant.number_of_votes}</p>
      <p className="price">Price: {restaurant.price_starts_from}</p>
      <p className="rating">Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantCard;
