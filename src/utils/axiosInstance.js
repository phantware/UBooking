import axios from 'axios'

// let headers = {}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800/api',
  // headers,
})

export default axiosInstance
