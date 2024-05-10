import React from "react";

const CoffeeCard = (props) => {
  const { item } = props;
  // console.log(item);

  return (
    <div>
      <img src={item.image} alt={item.price} />
      <h2 className="title">{item.title}</h2>
      <p className="price">{item.price}</p>
      <p className="description">{item.description}</p>
      <ul className="ingredient">
        {item.ingredients.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeCard;
