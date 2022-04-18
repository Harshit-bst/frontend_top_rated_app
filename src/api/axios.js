import axios from "axios";

const axiosInstance = axios.create({
    // headers: HEADERS,
    baseURL: "https://harshit-dev-dot-bluestacks-cloud-beginners.uc.r.appspot.com/api/v1"
});
export default axiosInstance;