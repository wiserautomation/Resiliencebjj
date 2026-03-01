import { motion, Variants, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'
import teacherGi from '../assets/cristian-matascan.jpg'
import teacherPanther from '../assets/hero-bg.jpg'

const MotionH2 = motion.h2
const MotionP = motion.p

export const About = () => {
    const containerRef = useRef(null)

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    }

    return (
        <section id="despre-noi" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Story Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="flex flex-col gap-8 md:pr-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-neon" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Povestea noastră</span>
                    </div>

                    <MotionH2
                        variants={variants}
                        className="text-5xl md:text-8xl font-black leading-tight tracking-tighter text-white"
                    >
                        REZILIENȚA <br />
                        <span className="text-neon">PE ȘI ÎN AFARA</span> <br />
                        COVORULUI.
                    </MotionH2>

                    <MotionP
                        variants={variants}
                        className="text-xl md:text-2xl text-secondary font-bold leading-relaxed"
                    >
                        Resilience BJJ s-a născut din dorința de a construi o comunitate bazată pe respect, disciplină și curaj. Nu suntem doar o academie de lupte. Suntem o familie unde fiecare pas de pe tatami te face mai puternic în viața de zi cu zi.
                    </MotionP>

                    <MotionP
                        variants={variants}
                        className="text-base text-white/60 leading-relaxed max-w-lg"
                    >
                        Bullying Bullies din 2020, învățăm cum să transformăm vulnerabilitatea în forță. Jiu-Jitsu Brazilian este instrumentul nostru de auto-cunoaștere, auto-apărare și succes.
                    </MotionP>

                    <motion.div variants={variants} className="flex gap-12 mt-4">
                        <div>
                            <p className="text-4xl font-black text-neon mb-1">200+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">MEMBRI ACTIVI</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-neon mb-1">10+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">INSTRUCȚORI</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-neon mb-1">5+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">LOCAȚII</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Decorative Visuals (Lando-style Interactive Reveal) */}
                <div className="relative h-[600px] w-full mt-12 md:mt-0 flex items-center justify-center">
                    <InteractionTeacher />
                </div>
            </div>
        </section>
    )
}

const InteractionTeacher = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for "fragments" effect
    const springX = useSpring(mouseX, { stiffness: 100, damping: 25 })
    const springY = useSpring(mouseY, { stiffness: 100, damping: 25 })

    // Additional fragments for that "brush" feel with varying lag
    const springX2 = useSpring(mouseX, { stiffness: 120, damping: 30 })
    const springY2 = useSpring(mouseY, { stiffness: 120, damping: 30 })
    const springX3 = useSpring(mouseX, { stiffness: 80, damping: 20 })
    const springY3 = useSpring(mouseY, { stiffness: 80, damping: 20 })
    const springX4 = useSpring(mouseX, { stiffness: 160, damping: 45 })
    const springY4 = useSpring(mouseY, { stiffness: 160, damping: 45 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    return (
        <div
            className="relative w-full h-[600px] group cursor-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            onMouseMove={handleMouseMove}
        >
            {/* Base Layer: Teacher in Gi */}
            <div className="absolute inset-0 z-10 overflow-hidden bg-black">
                <img
                    src={teacherGi}
                    alt="Teacher in Gi"
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Main Reveal Layer: Teacher with Panther */}
            <motion.div
                className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
                style={{
                    clipPath: `circle(120px at ${springX}px ${springY}px)`
                }}
            >
                <img
                    src={teacherPanther}
                    alt="Panther Warrior"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </motion.div>

            {/* Fragment Layer 2 (Faster/Slightly different size) */}
            <motion.div
                className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-60"
                style={{
                    clipPath: `circle(90px at ${springX4}px ${springY4}px)`
                }}
            >
                <img
                    src={teacherPanther}
                    alt="Panther Warrior Fragment"
                    className="w-full h-full object-cover transition-transform duration-700"
                />
            </motion.div>

            {/* Fragment Layer 3 (Trailing slower/smaller) */}
            <motion.div
                className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-40 mix-blend-screen"
                style={{
                    clipPath: `circle(60px at ${springX2}px ${springY2}px)`
                }}
            >
                <img
                    src={teacherPanther}
                    alt="Panther Warrior Fragment"
                    className="w-full h-full object-cover transition-transform duration-700"
                />
            </motion.div>

            {/* Fragment Layer 4 (Very lagged/Large ghost) */}
            <motion.div
                className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                    clipPath: `circle(140px at ${springX3}px ${springY3}px)`
                }}
            >
                <img
                    src={teacherPanther}
                    alt="Panther Warrior Fragment"
                    className="w-full h-full object-cover transition-transform duration-700"
                />
            </motion.div>

            {/* Custom Interactive Ring */}
            <motion.div
                className="absolute z-50 w-24 h-24 border-2 border-neon rounded-full pointer-events-none mix-blend-difference hidden group-hover:block translate-x-[-50%] translate-y-[-50%]"
                style={{
                    x: springX,
                    y: springY
                }}
            />

            {/* Quote Card Layered (Floating) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute bottom-10 -left-10 w-[70%] h-[25%] z-30 pointer-events-none"
            >
                <div className="w-full h-full bg-black/60 backdrop-blur-2xl border-l-[6px] border-neon flex items-center justify-center p-8 rounded-r-lg shadow-2xl">
                    <p className="text-2xl font-black leading-none text-neon italic uppercase tracking-tighter">
                        “NU TE OPRI CÂND EȘTI OBOSIT, OPREȘTE-TE CÂND AI TERMINAT.”
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
