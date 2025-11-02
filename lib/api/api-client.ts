import axios from "axios"
import { BASE_API_URL } from "./base-url"

export const apiClient = axios.create({
    baseURL: BASE_API_URL,
    timeout: 10000
})

// apiClient.interceptors.request.use(
//     (res) => res,
//     (error) => {
//         console.error('Request Error: ', error)
        
//         return Promise.reject(error)
//     }
// )

// apiClient.interceptors.response.use(
//     (res) => res,
//     (error) => {
//         console.error('Response Error: ', error)
        
//         return Promise.reject(error)
//     }
// )