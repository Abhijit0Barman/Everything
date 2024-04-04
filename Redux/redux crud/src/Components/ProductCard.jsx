export const ProductCard = ({ name, image, price, category, gender }) => {
  return <div>
    <img src={image} alt="Product-Image" />
    <h1>Name: {name}</h1>

  </div>;
};
/**
 * {
      "name": "T shirt",
      "image": "https://picsum.photos/200",
      "brand": "Puma",
      "price": 456,
      "category": "topwear",
      "gender": "female",
      "id": 1
    },
 */