import axios from 'axios'
import { Cookies } from "react-cookie";

const cookie = new Cookies();


const token = cookie.get("token");

const axiosInstance= axios.create({
    baseURL :'https://vlearn-backend.onrender.com/',
    headers: {
        "Content-Type": "application/json",
        Authorization: token !== undefined ? `Bearer ${token}` : "",
      },
})


export default axiosInstance