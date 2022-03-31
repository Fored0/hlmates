import axios from "axios"

const request = axios.create({
  baseURL:'http://192.168.3.119:1025/loadData'
})

export default request