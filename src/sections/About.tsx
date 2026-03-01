import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import instructorImg from '../assets/instructor-rashguard.jpg'
import pantherImg from '../assets/panther-transform.jpg'

export const About = () => {
    return (
        <section id="despre-noi" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* ── Text Content (left) ── */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-8 md:pr-12 order-2 md:order-1"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-neon" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Povestea noastră</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter text-white uppercase italic">
                        REZILIENȚA <br />
                        <span className="text-neon">PE ȘI ÎN AFARA</span> <br />
                        COVORULUI.
                    </h2>

                    <p className="text-xl text-white/60 font-semibold leading-relaxed max-w-lg">
                        Resilience BJJ s-a născut din dorința de a construi o comunitate bazată pe respect, disciplină și curaj. Nu suntem doar o academie de lupte. Suntem o familie unde fiecare pas de pe tatami te face mai puternic în viața de zi cu zi.
                    </p>

                    <p className="text-base text-white/40 leading-relaxed max-w-lg">
                        Bullying Bullies din 2020 — învățăm cum să transformăm vulnerabilitatea în forță. Jiu-Jitsu Brazilian este instrumentul nostru de auto-cunoaștere, auto-apărare și succes.
                    </p>

                    <div className="flex gap-12 mt-4">
                        <div>
                            <p className="text-4xl font-black text-neon mb-1">200+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">MEMBRI ACTIVI</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-neon mb-1">10+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">INSTRUCTORI</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-neon mb-1">5+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">LOCAȚII</p>
                        </div>
                    </div>
                </motion.div>

                {/* ── Interactive Reveal Canvas (right) ── */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-[600px] w-full order-1 md:order-2"
                >
                    <PantherReveal />
                </motion.div>
            </div>
        </section>
    )
}

// ── Lando Norris-style interactive cursor-reveal component ──
const PantherReveal = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(-300)
    const mouseY = useMotionValue(-300)

    // Primary smooth reveal circle
    const springX = useSpring(mouseX, { stiffness: 120, damping: 22 })
    const springY = useSpring(mouseY, { stiffness: 120, damping: 22 })

    // Trailing echo — slightly slower
    const trailX = useSpring(mouseX, { stiffness: 60, damping: 18 })
    const trailY = useSpring(mouseY, { stiffness: 60, damping: 18 })

    // Fast bright fragment
    const fastX = useSpring(mouseX, { stiffness: 220, damping: 35 })
    const fastY = useSpring(mouseY, { stiffness: 220, damping: 35 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    const handleMouseLeave = () => {
        mouseX.set(-300)
        mouseY.set(-300)
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 cursor-none group"
        >
            {/* ── Layer 1: Base image — instructor in rashguard (greyscale) ── */}
            <div className="absolute inset-0 z-10">
                <img
                    src={instructorImg}
                    alt="Resilience BJJ Coach"
                    className="w-full h-full object-cover object-top grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* subtle dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* ── Layer 2: Panther (colour) — main cursor reveal ── */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                style={{ clipPath: `circle(130px at ${springX}px ${springY}px)` }}
            >
                <img
                    src={pantherImg}
                    alt="Panther Transform"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* ── Fragment A: bright fast shard (mix-blend color dodge) ── */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none overflow-hidden opacity-70 mix-blend-color-dodge"
                style={{ clipPath: `circle(70px at ${fastX}px ${fastY}px)` }}
            >
                <img
                    src={pantherImg}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* ── Fragment B: slow ghost trail (mix-blend screen) ── */}
            <motion.div
                className="absolute inset-0 z-25 pointer-events-none overflow-hidden opacity-40 mix-blend-screen"
                style={{ clipPath: `circle(55px at ${trailX}px ${trailY}px)` }}
            >
                <img
                    src={pantherImg}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* ── Cursor ring ── */}
            <motion.div
                className="absolute z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ x: springX, y: springY }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="w-[260px] h-[260px] rounded-full border border-neon/20 absolute animate-[spin_8s_linear_infinite] opacity-30" />
                    <div className="w-6 h-6 rounded-full bg-neon shadow-[0_0_25px_8px_rgba(255,255,0,0.5)]" />
                </div>
            </motion.div>

            {/* ── Floating label (appears on hover) ── */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 z-40 pointer-events-none"
            >
                <div className="bg-black/70 backdrop-blur-xl border-l-4 border-neon px-6 py-4 rounded-r-lg">
                    <p className="text-neon font-black uppercase tracking-widest text-xs mb-1">Move your cursor</p>
                    <p className="text-white font-black uppercase italic text-lg leading-none">Descoperă Transformarea</p>
                </div>
            </motion.div>
        </div>
    )
}
