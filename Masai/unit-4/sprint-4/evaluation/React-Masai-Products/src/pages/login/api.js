import axios from "axios";

export const loginPostRequest = (logindata) => {
    return axios({
        method: "post",
        url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login`,
        data: logindata
    })
        .then(res => res)
}