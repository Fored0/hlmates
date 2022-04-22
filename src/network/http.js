import axios from "axios";

const request = axios.create({
  baseURL: "  http://127.0.0.1:8081/",
  timeout: 2000,
});

export default request;
