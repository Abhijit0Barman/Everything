import axios from "axios";
import { DataType } from "./constants"

const baseURL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

export const addPost = async (postData: DataType) => {
    // try {
        const res = await axios.post(`${baseURL}/posts`, postData);
        return res.data;
    // } catch (error) {
    //     console.log(error);
    // }
};

export const getPosts = async () => {
    // try {
        const res = await axios.get(`${baseURL}/posts`);
        return res.data;
    // } catch (error) {
    //     console.log(error);
    // }
};

export const updateLike = async (like: number, postId?: number) => {
    // try {
        const res = await axios.patch(`${baseURL}/posts/${postId}`, {like:like?like+1:1});
        return res.data;
    // } catch (error) {
    //     console.log(error);
    // }
};

export const updateDisLike = async (dislike: number, postId?: number) => {
    // try {
        const res = await axios.patch(`${baseURL}/posts/${postId}`, {dislike:dislike?dislike+1:1});
        return res.data;
    // } catch (error) {
    //     console.log(error);
    // }
};

export const deleteProduct = async (deleteId?: number) => {
    // try {
        const res = await axios.delete(`${baseURL}/posts/${deleteId}`);
        return res.status;
    // } catch (error) {
    //     console.log(error);
    // }
};
