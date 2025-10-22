"use client"

import AuthBanner from "@/components/auth/auth-banner"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import AnimatedCursor from "@/components/common/animated-cursor"

const AuthLayout = ({ children }: {children: React.ReactNode}) => {
	const router = useRouter()
	
	return (
		<>
			<div className='h-screen w-screen relative overflow-hidden flex'>
				<AnimatedCursor />	

				<div className='w-1/2 h-full bg-[#0F241D] overflow-hidden flex-shrink-0 flex flex-col gap-2 justify-center items-center max-lg:hidden'>
					<AuthBanner />
				</div>

				<div className="w-full md:w-1/2 flex-shrink-0 bg-[#0F241D]/5 relative flex justify-center items-center">
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
		</>
	)
}

export default AuthLayout