"use client"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { createContext, useContext, useState } from "react"

type SidebarContextType = {
    openSidebar: boolean
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextType>({
    openSidebar: false,
    setOpenSidebar: () => {}
})

function Root({
    ...props
} : React.ComponentProps<"div">) {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    return (
        <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
            <div
                className={cn(
                    "w-screen h-screen bg-[#031a1c] flex overflow-hidden",
                    props.className
                )}
                {...props}
            >
                {props.children}
            </div>
        </SidebarContext.Provider>
    )
}

function Sidebar({
    ...props
} : React.ComponentProps<"aside">) {
    return (
        <aside {...props}>
            {props.children}
        </aside>
    )
}

function SidebarTrigger({
    asChild,
    ...props
} : React.ComponentProps<"button"> & {
    asChild?: boolean
}) {
    const { openSidebar, setOpenSidebar } = useContext(SidebarContext)
    const Comp = asChild ? Slot : "button"
    return (
        <Comp 
            onClick={() => setOpenSidebar(!openSidebar)}
            className={cn(
                "w-10 h-10 flex justify-center bg-background items-center rounded-lg",
                props.className
            )}
            {...props}
        >
            {props.children}
        </Comp>
    )
}

function SidebarHeader({
    children,
    className,
    ...props
} : React.ComponentProps<"header">) {
    return (
        <header 
            className={cn(
                "flex px-1 gap-2 w-full h-fit",
                className
            )}
            {...props}
        >
            {children}
        </header>
    )
}

function SidebarContent({
    ...props
} : React.ComponentProps<"div">) {
    const { openSidebar } = useContext(SidebarContext)
    
    return (
        <div
            className={cn(
                "w-64 fixed inset-y-0 duration-400 space-y-1 border border-white",
                openSidebar ? "translate-x-0" : "-translate-x-full",
                props.className
            )}
            {...props}
        >
            {props.children}
        </div>
    )
}

function Header({
    children,
    className,
    ...props
} : React.ComponentProps<"header">) {
    return (
        <header 
            className={cn(
                "flex px-1 gap-2 w-full h-fit",
                className
            )}
            {...props}
        >
            {children}
        </header>
    )
}

function Content({
    className,
    children,
    ...props
} : React.ComponentProps<"div">) {
    const { openSidebar } = useContext(SidebarContext)

    return (
        <main>
            <div
                className={cn(
                    "w-full h-full flex-1 border border-pink-500",
                    openSidebar ? "ml-64" : "ml-0",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </main>
    )
}

export const Chat = {
    Root,
    Sidebar,
    SidebarTrigger,
    SidebarHeader,
    SidebarContent,
    Header,
    Content
}