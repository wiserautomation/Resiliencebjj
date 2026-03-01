import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

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
    revealSize = 130,
    className = ""
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(-500)
    const mouseY = useMotionValue(-500)

    // Smooth physics for the reveal circles
    const springX = useSpring(mouseX, { stiffness: 120, damping: 22 })
    const springY = useSpring(mouseY, { stiffness: 120, damping: 22 })

    // Fragments for that "Lando Norris" organic feel
    const trailX = useSpring(mouseX, { stiffness: 60, damping: 18 })
    const trailY = useSpring(mouseY, { stiffness: 60, damping: 18 })

    const fastX = useSpring(mouseX, { stiffness: 220, damping: 35 })
    const fastY = useSpring(mouseY, { stiffness: 220, damping: 35 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    const handleMouseLeave = () => {
        mouseX.set(-500)
        mouseY.set(-500)
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full overflow-hidden rounded-2xl border border-white/10 cursor-none group ${className}`}
        >
            {/* Layer 1: Base Image (Greyscale/Muted) */}
            <div className="absolute inset-0 z-10 w-full h-full">
                <img
                    src={baseImage}
                    alt={alt}
                    className="w-full h-full object-cover object-top grayscale transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Layer 2: Reveal Image (Main Mask) */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden w-full h-full"
                style={{ clipPath: `circle(${revealSize}px at ${springX}px ${springY}px)` }}
            >
                <img
                    src={revealImage}
                    alt={`${alt} revealed`}
                    className="w-full h-full object-cover object-top"
                />
            </motion.div>

            {/* Extra Fragment: Shimmer Shard (Color Dodge) */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none overflow-hidden opacity-60 mix-blend-color-dodge w-full h-full"
                style={{ clipPath: `circle(${revealSize * 0.5}px at ${fastX}px ${fastY}px)` }}
            >
                <img src={revealImage} alt="" className="w-full h-full object-cover object-top" />
            </motion.div>

            {/* Extra Fragment: Ghost Trail (Screen) */}
            <motion.div
                className="absolute inset-0 z-25 pointer-events-none overflow-hidden opacity-30 mix-blend-screen w-full h-full"
                style={{ clipPath: `circle(${revealSize * 0.4}px at ${trailX}px ${trailY}px)` }}
            >
                <img src={revealImage} alt="" className="w-full h-full object-cover object-top" />
            </motion.div>

            {/* Cursor Decoration */}
            <motion.div
                className="absolute z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ x: springX, y: springY }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="w-[260px] h-[260px] rounded-full border border-neon/10 absolute animate-[spin_10s_linear_infinite] opacity-20" />
                    <div className="w-5 h-5 rounded-full bg-neon shadow-[0_0_20px_6px_rgba(15,255,80,0.4)]" />
                </div>
            </motion.div>

            {/* Floating Hint */}
            <div className="absolute bottom-6 left-6 z-40 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
                    <p className="text-neon font-black uppercase tracking-widest text-[10px]">Move to transform</p>
                </div>
            </div>
        </div>
    )
}
