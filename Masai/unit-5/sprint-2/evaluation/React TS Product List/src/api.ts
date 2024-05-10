import axios from "axios";

const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`

export const addProduct = async (data: DataType) => {
  // Add product functionality here
  const res = await axios.post(`${URL}/products`, data)
  return res.data
};

export const getProducts = async () => {
  // Get products functionality
  const res = await axios.get(`${URL}/products`)
  // console.log(res.data);

  return res.data
};

export const updateLike = async (id?: number, like?: number) => {
  // Update like functionality
  const res = await axios.patch(`${URL}/products/${id}`, { like: like ? like + 1 : 1 })
  // console.log(res.data);
  return res.data
};

export const updateDisLike = async (id?: number, dislike?: number) => {
  // Update dislike functionality
  const res = await axios.patch(`${URL}/products/${id}`, { dislike: dislike ? dislike + 1 : 1 })
  // console.log(res.data);
  return res.data
};

export const deleteProduct = async (id?: number) => {
  // Delete functionality
  const res = await axios.delete(`${URL}/products/${id}`)
  // console.log(res);
  if (res.status) {
    return id
  }
};


export type DataType = {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id?: number
}