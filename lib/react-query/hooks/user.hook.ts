import { userService } from "@/lib/api/services/user.service"
import { UseQueryConfig } from "../query-client"
import { useQuery } from "@tanstack/react-query"


const usersQueryKey = () => ["users"]
const userDetailQueryKey = (id: string | number) => ["user", id]

export const useUsers = (
    params?: { search: string},
    { config }: UseQueryConfig<typeof userService.getAll> = {}
) => {
    return useQuery({
        queryKey: usersQueryKey(),
        queryFn: () => userService.getAll(params),
        ...config
    })
}

export const useUserDetail = (
    id: string | number,
    { config }: UseQueryConfig<typeof userService.getById> = {}
) => useQuery({
    queryKey: userDetailQueryKey(id),
    queryFn: () => userService.getById(id),
    enabled: !!id,
    ...config
})