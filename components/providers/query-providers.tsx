"use client"

import { queryClient } from "../../lib/react-query/query-client";
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            
            {process.env.NEXT_NODE_ENV === 'development' &&
                <ReactQueryDevtools initialIsOpen={false} />
            }
        </QueryClientProvider>
    )
}

export default QueryProviders