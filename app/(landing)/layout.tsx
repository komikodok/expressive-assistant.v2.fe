import Navbar from '@/components/common/navbar'
import LandingContent from '@/components/landing/landing-content'
import LandingHero from '@/components/landing/landing-hero'
import { SessionProvider } from 'next-auth/react'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <SessionProvider>
          <Navbar />
        </SessionProvider>

        <div className="space-y-8 md:space-y-20">
            <LandingHero />
            
            <LandingContent>
                { children }
            </LandingContent>
        </div>
    </>
  )
}

export default LandingLayout
