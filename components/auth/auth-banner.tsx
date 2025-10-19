import { Exo_2 } from "next/font/google"
import Image from "next/image"

const Exo2 = Exo_2({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-exo2",
})

const AuthBanner = () => {
  return (
        <>
        <h2 className={`head text-7xl text-[#cf381d] ${Exo2.className}`}>
            Clyre
        </h2>

        <div className={`
            text-3xl text-center text-[#ee4c30] flex justify-center items-center
            ${Exo2.className}
        `}>
            <p className="phar-1">Create</p>
            <Image id="logo" src="/logo.png" width={52} height={52} alt="logo" />
            <p className="phar-2">Your Article</p>
        </div>
        </>
  )
}

export default AuthBanner
