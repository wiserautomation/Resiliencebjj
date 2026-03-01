import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface HoverRevealImageProps {
    baseImage: string
    revealImage: string
    alt?: string
    revealSize?: number
    className?: string
}

export const HoverRevealImage: React.FC<HoverRevealImageProps> = ({
    baseImage,
    revealImage,
    alt = "Interactive Reveal",
    revealSize = 150,
    className = ""
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(-1000)
    const mouseY = useMotionValue(-1000)

    // Smooth physics for the reveal circles
    const springX = useSpring(mouseX, { stiffness: 150, damping: 25 })
    const springY = useSpring(mouseY, { stiffness: 150, damping: 25 })

    // Fragments for that "Lando Norris" organic feel
    const trailX = useSpring(mouseX, { stiffness: 80, damping: 20 })
    const trailY = useSpring(mouseY, { stiffness: 80, damping: 20 })

    const fastX = useSpring(mouseX, { stiffness: 250, damping: 40 })
    const fastY = useSpring(mouseY, { stiffness: 250, damping: 40 })

    // REACTIVE CLIP PATHS
    const mainClipPath = useTransform(
        [springX, springY],
        ([x, y]) => `circle(${revealSize}px at ${x}px ${y}px)`
    )

    const fastClipPath = useTransform(
        [fastX, fastY],
        ([x, y]) => `circle(${revealSize * 0.4}px at ${x}px ${y}px)`
    )

    const trailClipPath = useTransform(
        [trailX, trailY],
        ([x, y]) => `circle(${revealSize * 0.3}px at ${x}px ${y}px)`
    )

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    const handleMouseLeave = () => {
        mouseX.set(-1000)
        mouseY.set(-1000)
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full overflow-hidden rounded-2xl border border-white/10 cursor-none group bg-black/20 ${className}`}
        >
            {/* Layer 1: Base Image (Visible by default) */}
            <div className="absolute inset-0 z-10 w-full h-full">
                <img
                    src={baseImage}
                    alt={alt}
                    className="w-full h-full object-cover object-top grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Layer 2: Reveal Image (Masked) */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden w-full h-full"
                style={{ clipPath: mainClipPath }}
            >
                <img
                    src={revealImage}
                    alt={`${alt} revealed`}
                    className="w-full h-full object-cover object-top"
                />
            </motion.div>

            {/* Extra Fragments */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none overflow-hidden opacity-60 mix-blend-color-dodge w-full h-full"
                style={{ clipPath: fastClipPath }}
            >
                <img src={revealImage} alt="" className="w-full h-full object-cover object-top" />
            </motion.div>

            <motion.div
                className="absolute inset-0 z-25 pointer-events-none overflow-hidden opacity-40 mix-blend-screen w-full h-full"
                style={{ clipPath: trailClipPath }}
            >
                <img src={revealImage} alt="" className="w-full h-full object-cover object-top" />
            </motion.div>

            {/* Cursor Decoration */}
            <motion.div
                className="absolute z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ left: springX, top: springY }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-full border border-neon/5 absolute animate-[spin_12s_linear_infinite] opacity-30" />
                    <div className="w-4 h-4 rounded-full bg-neon shadow-[0_0_15px_5px_rgba(255,255,0,0.5)]" />
                </div>
            </motion.div>

            {/* Floating Hint */}
            <div className="absolute bottom-8 right-8 z-40 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                    <p className="text-neon font-black uppercase tracking-[0.2em] text-[10px]">Move cursor to reveal</p>
                </div>
            </div>
        </div>
    )
}

