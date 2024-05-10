import React, { Dispatch, SetStateAction, useState } from "react";
import { DataType } from "../constants";
import { deleteProduct, updateDisLike, updateLike } from "../api";


interface CardProps extends DataType {
  updateState: Dispatch<SetStateAction<DataType[]>>
}

// interface newType extends DataType{
//   handleIncre:(para:DataType)=>void
//   handleDecre:(para:DataType)=>void
//   handleDelete:(x:number)=>void
// }

export const PostCard = ({ id, name, author, image, content, category, like, dislike, updateState }: CardProps) => {

  const handleDeleteL = () => {
    deleteProduct(id).then(() => {
      updateState((p) => {
        return p.filter((el) => el.id !== id)
      })
    })
    // deleteProduct(id)
    // .then((res) => {
    //   if (res === 200) {
    //     if (id) {
    //       handleDelete(id)
    //     }
    //   }
    // })
  }
  const handleDecreL = () => {
    updateDisLike(dislike, id).then((res) => {
      updateState((p) => {
        const newState = p.map((el) => {
          if (el.id === id) {
            return res
          } else {
            return el
          }
        })
        return newState
      })
    })
    // updateDisLike(dislike - 1, id)
    //   .then(res => {
    //     handleDecre(res)
    //   })
  }
  const handleIncreL = () => {
    updateLike(like, id).then((res) => {
      updateState((p) => {
        const newState = p.map((el) => {
          if (el.id === id) {
            return res
          } else {
            return el
          }
        })
        return newState
      })
    })
    // updateLike(like + 1, id)
    //   .then(res => {
    //     handleIncre(res)
    //   })
  }


  return <div className="post-card">
    <img src={image} alt={name} className="post-image" />
    <h3 className="post-name">{name}</h3>
    <p className="post-author">Author: {author}</p>
    <p className="post-content">{content}</p>
    <h3 className="post-category">Category: {category}</h3>
    <div>
      <button data-testid="like-button" onClick={handleIncreL}>👍</button>
      <p className="post-like">like: {like}</p>
      <button data-testid="dislike-button" onClick={handleDecreL}>👎🏻</button>
      <p className="post-dislike">dislike: {dislike}</p>
    </div>
    <button data-testid="delete-button" onClick={handleDeleteL}>Delete</button>
  </div>;
};
