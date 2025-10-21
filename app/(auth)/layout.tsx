"use client"

import AuthBanner from "@/components/auth/auth-banner"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

const AuthLayout = ({ children }: {children: React.ReactNode}) => {
	const [mousePos, setMousePos] = useState<{x: number, y: number}>({x: 0, y: 0})
	const mouse = useRef<HTMLDivElement>(null)

	const router = useRouter()

	function mouseMove(e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) {
		if (!ref.current) return
		const mouse = ref.current.getBoundingClientRect()
		
		const x = e.clientX - (mouse.width / 2)
		const y = e.clientY - (mouse.height / 2)
		
		setMousePos({x, y})
	}
	
	return (
		<div onMouseMove={(e) => mouseMove(e, mouse)} className='h-screen w-screen relative overflow-hidden bg-[#0F241D] flex'>
			<motion.div 
				ref={mouse}
				animate={{ x: mousePos.x, y: mousePos.y }}
				transition={{ type: 'spring', duration: 1, delay: 0.005 }}
				className="absolute w-10 md:w-14 aspect-square border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-cyan-400 rounded-full"
			/>
			 
			<motion.div 
				ref={mouse}
				animate={{ x: mousePos.x, y: mousePos.y }}
				transition={{ type: 'spring', duration: 1 }}
				className="absolute w-10 md:w-14 aspect-square border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-emerald-500 rounded-full"
			/>

			<div className='w-1/2 h-full overflow-hidden flex-shrink-0 flex flex-col gap-2 justify-center items-center max-lg:hidden'>
				<AuthBanner />
			</div>

			<div className="w-full md:w-1/2 flex-shrink-0 relative flex justify-center items-center">
				<Button onClick={() => router.back()} className="cursor-pointer absolute top-2 left-2 md:left-auto md:right-2 w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-white/80 active:bg-white/80 transition-all duration-500">
					<ArrowLeft className="stroke-[#0F241D] size-4"></ArrowLeft>
				</Button>
				
				<motion.div 
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white shadow-xs shadow-white rounded-xl h-fit max-w-xs m-auto flex justify-center items-center"
				>
					{children}
				</motion.div>
			</div>
		</div>
	)
}

export default AuthLayout