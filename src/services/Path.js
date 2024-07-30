import axios from "axios";
const backendPath = process.env.BACKEND_PATH
 const Path = axios.create({baseURL:backendPath})

 export default Path