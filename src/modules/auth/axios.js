import axios from 'axios'
import { Cookies } from "react-cookie";

const cookie = new Cookies();


const token = cookie.get("token");

const axiosInstance= axios.create({
    baseURL :process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: token !== undefined ? `Bearer ${token}` : "",
      },
})


export default axiosInstance