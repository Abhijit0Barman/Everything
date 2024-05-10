import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchRestaurantsDetails } from "../Redux/action";

const RestaurantPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    dispatch(fetchRestaurantsDetails(id));
  }, [dispatch, id]);

  const handleBooking = () => {
    // Add logic for booking the restaurant here
    // Set isBooked to true if booking is successful
    setIsBooked(true);
  };

  return (
    <div className="restaurant_single_wrapper">
      {/* Show success message here if restaurant booked successfully */}
      {isBooked && (
        <h1 className="success_msg">Restaurant Booked Successfully !!</h1>
      )}
      <div className="restaurant_single_card">
        <img src={restaurant.image} alt={restaurant.name} className="image" />
        <h3 className="name">{restaurant.name}</h3>
        <h4 className="type">{restaurant.type}</h4>
        <p className="votes">Votes: {restaurant.votes}</p>
        <p className="price">Price: {restaurant.price}</p>
        <p className="rating">Rating: {restaurant.rating}</p>
        {isBooked ? (
          <Link to="/" className="go_back">
            Go To Home
          </Link>
        ) : (
          <button className="book_now_btn" onClick={handleBooking}>
            Book Now!
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
