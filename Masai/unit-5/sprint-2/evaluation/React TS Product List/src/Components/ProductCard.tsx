import React, { Dispatch, SetStateAction } from "react";
import { DataType, deleteProduct, updateDisLike, updateLike } from "../api";

interface Cardprops extends DataType {
  setProducts: Dispatch<SetStateAction<DataType[]>>
}

export const ProductCard = ({ setProducts, name, brand, price, image, like, dislike, id }: Cardprops) => {
  const handleDelete = () => {
    deleteProduct(id).then((res) => {
      setProducts(p => {
        return p.filter((el) => el.id !== id)
      })
    })
  }

  const handleLike = () => {
    updateLike(id, like).then((res) => {
      setProducts(p => {
        const newPro = p.map((el) => {
          if (el.id === id) {
            return res
          } else {
            return el
          }
        })
        return newPro
      })
    })
  }

  const handleDis = () => {
    updateDisLike(id, dislike).then((res) => {
      setProducts(p => {
        const newPro = p.map((el) => {
          if (el.id === id) {
            return res
          } else {
            return el
          }
        })
        return newPro
      })
    })
  }
  return (
    <div className={`product-card`}>
      {/* Add all elements of product card here */}
      <img className="product-image" src={image} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <button onClick={handleLike} data-testid="like-button">Like👍</button>
      <p className="product-like">{like}</p>
      <button onClick={handleDis} data-testid="dislike-button">Dislike👎</button>
      <p className="product-dislike">{dislike}</p>
      <button onClick={handleDelete} data-testid="delete-button">Delete</button>
    </div>
  );
};
