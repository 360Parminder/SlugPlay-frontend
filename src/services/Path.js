import axios from "axios";
const backendPath = 'from env file '
export default axios.create({baseURL:backendPath})