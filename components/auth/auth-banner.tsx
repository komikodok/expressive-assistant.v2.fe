"use client"

import { motion } from "motion/react"
import { Orbitron } from "next/font/google"
import Image from "next/image"


const orbitron = Orbitron({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-orbitron",
})

const AuthBanner = () => {
  return (
        <>
        <motion.h2 
            animate={{ letterSpacing: ['-1em', '0em'] }}
            transition={{ duration: 1, type: 'spring', repeatDelay: 5, repeat: Infinity, }}
            className={`text-7xl text-stone-100 ${orbitron.className}`}
        >
            Clyre
        </motion.h2>

        <div className="text-3xl text-center text-stone-100 flex justify-center items-center">
            <motion.p 
                initial={{ opacity: 0, letterSpacing: '-0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0em' }}
                transition={{ delay: 0.5, type: 'spring', repeatDelay: 5, repeat: Infinity, ease: 'anticipate' }}
                className="flex flex-col"
            >
                Grow up your business, built for you
            </motion.p>
            
            {/* <Image id="logo" src="/logo.png" width={52} height={52} alt="logo" /> */}
        </div>
        </>
  )
}

export default AuthBanner
