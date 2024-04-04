import { useEffect, useState } from "react";
import axios from 'axios'

async function getData() {
  try {
    let res = await fetch("https://reqres.in/api/users?page=2");
    let data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

const Avatar = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    // getData("https://reqres.in/api/users?page=2")
    // .then((res) => res.json())
    // .then((data) => setCount(data.data))
    // .catch((err) => console.log(err));

    getData().then(data => setCount(data))

    // axios
    //   .get("https://reqres.in/api/users?page=2")
    //   .then((data) => {
    //     // console.log(data);
    //     setCount(data.data)
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  console.log(count);

  return (
    <>
      {count?.map((item) => (
        <div key={item.id}>
          <img src={item.avatar} alt="image" />
          <p>Name: {item.first_name}</p>
        </div>
      ))}
    </>
  );
};
export default Avatar;


