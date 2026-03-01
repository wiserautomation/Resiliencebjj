import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroVideo from '../assets/hero-video.mp4'

export const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    // Scrolling parallax effects like Lando Norris site
    const yText = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    return (
        <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background Video/Image Layer with Parallax */}
            <motion.div
                style={{ scale: heroScale }}
                className="absolute inset-0 z-0 bg-black/40"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-opacity duration-1000"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
            </motion.div>

            {/* Hero Content with Scroll Animation */}
            <motion.div
                style={{ y: yText, opacity }}
                className="relative z-10 text-center px-6 max-w-5xl"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-neon font-black tracking-[0.3em] uppercase mb-6 text-sm md:text-base neon-glow"
                >
                    Resilience BJJ – Școala unde te construiești pe covor
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-9xl font-black leading-none mb-10 tracking-tighter"
                >
                    BULLYING BULLIES <br />
                    <span className="text-neon">DIN 2020</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a href="#contact" className="btn-primary scale-110">
                        Reservă o clasă gratuită
                    </a>
                    <p className="max-w-xs text-secondary text-sm md:text-left leading-relaxed">
                        Disciplina, respectul și reziliența se învață prin luptă. Alătură-te celei mai puternice comunități de BJJ din România.
                    </p>
                </motion.div>
            </motion.div>

            {/* Hero Bottom indicators/decorations */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-neon"
                    />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">SCROLL</span>
            </div>
        </section>
    )
}
