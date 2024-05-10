import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { DataType } from "../constants";
import { addPost } from "../api";

// interface UpdateType {
//   handleUp: (res: DataType) => void;
// }

const initData = {
  name: "",
  author: "",
  image: "",
  content: "",
  category: "",
  like: 0,
  dislike: 0,
};

export const AddPost = () => {
  const [postData, setPostData] = useState<DataType>(initData);
  const { name, author, image, content, category, like, dislike } = postData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData(p => ({ ...p, [name]: value }))
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPostData(p => {
      return { ...p, [name]: value }
    }
    )
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(postData)
    //   .then((res) => {
    //     // handleUp(res)
    //   })
    //   .catch((er) => {
    //     console.log(er)
    //   })
    // setPostData(initData)
  };

  return (
    <div>
      <Navbar pagename="Add Post Page" />
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Post Name"
          className="post-name"
          onChange={handleChange}
          value={name}
          type="text"
        />
        <input
          placeholder="Post Image"
          type="text"
          className="post-image"
          onChange={handleChange}
          name="image"
          value={image}
        />
        <input
          placeholder="Post Author"
          type="text"
          className="post-author"
          onChange={handleChange}
          name="author"
          value={author}
        />
        <input
          placeholder="Post Content"
          type="text"
          className="post-content"
          onChange={handleChange}
          name="content"
          value={content}
        />
        <select
          className="post-category"
          onChange={handleSelect}
          name="category"
          value={category}>
          <option value="">Select Category</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JS</option>
          <option value="react">React</option>
        </select>
        <button type="submit" className="submit-form">
          Add post
        </button>
      </form>
    </div>
  );
};
