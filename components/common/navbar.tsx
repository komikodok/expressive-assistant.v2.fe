"use client"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    navigationMenuTriggerStyle,
    NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import Link from "next/link"
import { Exo_2 } from "next/font/google"
import { LogIn, SquareArrowOutUpRight, ChevronDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const Exo2 = Exo_2({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-exo2",
})

const Navbar = () => {
    const [openPopover, setOpenPopover] = useState<boolean>(false)

    return (
        <div className="max-w-7xl mx-auto bg-[#0d1e21]/5 flex space-x-3 items-center">
            <Link href="/" className="p-2">
                <h1 
                    className={`
                        font-bold text-lg md:text-2xl text-[#0d1e21] tracking-tight p-2
                        ${Exo2.className}
                    `}
                >
                    <span>Clyre.</span>
                    ai
                </h1>
            </Link>
            
            <NavigationMenu className="ml-auto hidden md:flex">
                <NavigationMenuList className="space-x-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" className={`cursor-pointer !bg-transparent ${navigationMenuTriggerStyle()}`}>
                            Get started
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" className={`cursor-pointer !bg-transparent ${navigationMenuTriggerStyle()}`}>
                            Docs
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <div className="gap-[1px] flex items-center">
                        <Link 
                            href="/auth/login" 
                            className='w-20 h-10 rounded-l-md flex justify-center items-center text-sm !text-white !bg-[#0d1e21] hover:text-white'
                        >
                            Try it
                        </Link>
                        <Popover open={openPopover} onOpenChange={setOpenPopover}>
                            <PopoverTrigger asChild>
                                <Button className='cursor-pointer rounded-l-none h-10 !text-white !bg-[#031a1c] p-3 flex items-center'>
                                    <ChevronDown className={cn("size-4 transition-all", openPopover && "rotate-180")}/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-[170px] space-y-3'>
                                <h1 className="font-semibold text-sm text-zinc-800">Start With</h1>
                                <ul className="space-y-2">
                                    <li className="cursor-pointer text-sm text-zinc-700 flex gap-2 items-center justify-between hover:bg-zinc-100 hover:underline rounded-md px-2 py-1">
                                        <p className="hover:underline">Clyre Chat</p>
                                        <SquareArrowOutUpRight className="size-3"/>
                                    </li>
                                    <li className="cursor-pointer text-sm text-zinc-700 flex gap-2 items-center justify-between hover:bg-zinc-100 hover:underline rounded-md px-2 py-1">
                                        <p className="hover:underline">Clyre Pulse</p>
                                        <SquareArrowOutUpRight className="size-3"/>
                                    </li>
                                </ul>

                                <Separator className="h-[1px] bg-stone-200" />

                                <Link href="/auth/login" className="text-sm text-zinc-800 font-semibold flex justify-between items-center">
                                    Login
                                    <LogIn className="size-4"/>
                                </Link>
                            </PopoverContent>
                        </Popover>
                        {/* <NavigationMenuItem className="h-full py-1">
                            <NavigationMenuTrigger className="rounded-l-none h-10 !text-white !bg-[#031a1c]"/>
                            <NavigationMenuContent>
                                <div className="w-[150px] space-y-3 p-2">
                                    <h1 className="font-semibold text-sm text-zinc-800">Start With</h1>
                                    <ul className="space-y-2">
                                        <li className="cursor-pointer text-sm text-zinc-700 flex gap-2 items-center justify-between hover:bg-zinc-100 hover:underline rounded-md px-2 py-1">
                                            <p className="hover:underline">Clyre Chat</p>
                                            <SquareArrowOutUpRight className="size-3"/>
                                        </li>
                                        <li className="cursor-pointer text-sm text-zinc-700 flex gap-2 items-center justify-between hover:bg-zinc-100 hover:underline rounded-md px-2 py-1">
                                            <p className="hover:underline">Clyre Pulse</p>
                                            <SquareArrowOutUpRight className="size-3"/>
                                        </li>
                                    </ul>
        
                                    <Separator className="h-[1px] bg-stone-200" />
        
                                    <Link href="/auth/login" className="text-sm text-zinc-800 font-semibold flex justify-between items-center">
                                        Login
                                        <LogIn className="size-4"/>
                                    </Link>
                                    
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem> */}
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar
