import axios from "axios"
import { BASE_API_URL } from "./base-url"

export const apiClient = axios.create({
    baseURL: BASE_API_URL,
    timeout: 10000
})