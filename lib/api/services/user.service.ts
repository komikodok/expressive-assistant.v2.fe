import { apiClient } from "../api-client"


export interface IUser {
    email: string
    username: string
    password: string
    image?: string
}

export const userService = {
    getAll: async (params?: { search?: string }) => {
        const response = await apiClient.get('/users', {
            params: params
        })

        return response.data
    },
    getById: async (id: string | number) => {
        const response = await apiClient.get(`/users/${id}`)

        return response.data
    },
}