import React from "react";

const CoffeeCard = ({ title, description, ingredients, image, id, price }) => {
  return <div >
    <div style={{ width: "500px", border: "2px solid black",margin:"20px",margin:"auto" }}>

      <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <ul className="ingredient">
        {
          ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  </div>;
};

export default CoffeeCard;

/*
    "": "Black",
    "": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    "": ["Coffee"],
    "": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
    "": 1,
    "": 540
*/