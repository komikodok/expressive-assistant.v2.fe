import AuthBanner from "@/components/auth/auth-banner"

const AuthLayout = ({ children }: {children: React.ReactNode}) => {
	
	return (
		<div className='h-screen w-screen flex'>
			<div className='w-1/2 h-full bg-[tomato]/10 overflow-hidden flex-shrink-0 flex flex-col gap-2 justify-center items-center max-lg:hidden'>
				<AuthBanner />
			</div>

			<div className="max-w-3xs md:max-w-lg h-full mx-auto flex justify-center items-center">
				{children}
			</div>
		</div>
	)
}

export default AuthLayout