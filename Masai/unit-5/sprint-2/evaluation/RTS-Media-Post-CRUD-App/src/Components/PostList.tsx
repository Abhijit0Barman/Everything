import React, { useEffect, useState } from "react";
import { getPosts } from "../api"
import { PostCard } from "./PostCard";
import { DataType } from "../constants"
import { AddPost } from "../Pages/AddPost";

export const PostList = () => {
  const [posts, setPosts] = useState<DataType[]>([])

  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  // const handleUp = (newData: DataType) => {
  //   setPosts((prev) => [...prev, newData])
  // }

  /*
  const handleIncre = (res: DataType) => {
    setPosts((prev) => {
      return prev.map((el) => (el.id === res.id ? res : el))
    })
  }

  const handleDecre = (res: DataType) => {
    setPosts((prev) => {
      return prev.map((el) => (el.id === res.id ? res : el))
    })
  }

  const handleDelete = (x: number) => {
    setPosts((prev) => {
      return prev.filter((ele) => ele.id !== x)
    })
  }
*/
  return <div data-testid="post-list">
    {/* {false && <AddPost handleUp={handleUp}/>} */}
    {
      posts?.map((item) => (
        // <PostCard key={item.id} {...item} handleIncre={handleIncre} handleDecre={handleDecre} handleDelete={handleDelete} />
        <PostCard key={item.id} {...item} updateState={setPosts} />
      ))
    }
  </div>;
};
