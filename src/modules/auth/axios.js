import axios from 'axios'
import { Cookies } from "react-cookie";

const cookie = new Cookies();


const token = cookie.get("token");

const axiosInstance= axios.create({
    baseURL :'http://127.0.0.1:8000/',
    headers: {
        "Content-Type": "application/json",
        Authorization: token !== undefined ? `Bearer ${token}` : "",
      },
})


export default axiosInstance