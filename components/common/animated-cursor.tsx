"use client"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

const AnimatedCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const mouse = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!mouse.current) return
      const rect = mouse.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.width / 2,
        y: e.clientY - rect.height / 2
      })
    }

    function handleTouch(e: TouchEvent) {
      if (!mouse.current) return
      const rect = mouse.current.getBoundingClientRect()
      setMousePos({
        x: e.touches[0].clientX - rect.width / 2,
        y: e.touches[0].clientY - rect.height / 2
      })
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchmove", handleTouch)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleTouch)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <motion.div
        ref={mouse}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", duration: 1, delay: 0.005 }}
        className="absolute w-10 md:w-14 aspect-square border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-cyan-400 rounded-full"
      />
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", duration: 1 }}
        className="absolute w-10 md:w-14 aspect-square border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-emerald-500 rounded-full"
      />
    </div>
  )
}

export default AnimatedCursor
