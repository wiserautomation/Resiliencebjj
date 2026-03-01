import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import pantherImg from '../assets/panther-transform.jpg'

export const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    // Scrolling parallax effects like Lando Norris site
    const yText = useTransform(scrollYProgress, [0, 1], [0, 400])
    const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    // Scale the panther for the "zooming into the character" feel
    const pantherScale = useTransform(scrollYProgress, [0, 1], [1, 2.5])
    const pantherY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const pantherOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.4])

    // Reveal new text during transformation
    const revealOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])
    const revealY = useTransform(scrollYProgress, [0.4, 0.8], [50, 0])

    return (
        <section ref={ref} className="relative h-[200vh] bg-black">
            {/* Sticky Container for the Transition */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Back Layer: Panther Figure */}
                <motion.div
                    style={{
                        scale: pantherScale,
                        y: pantherY,
                        opacity: pantherOpacity
                    }}
                    className="absolute inset-0 z-0 overflow-hidden"
                >
                    <img
                        src={pantherImg}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                        alt="Resilience Panther Transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                </motion.div>

                {/* Hero Content Layer 1: Initial Hook */}
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
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
                        className="text-6xl md:text-9xl font-black leading-none mb-10 tracking-tighter italic uppercase"
                    >
                        TRANSFORMĂ <br />
                        <span className="text-neon">HAOSUL</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    >
                        <a href="#contact" className="btn-primary scale-110">
                            Începe Transformarea
                        </a>
                    </motion.div>
                </motion.div>

                {/* Hero Content Layer 2: Transformative Message (appears as you scroll) */}
                <motion.div
                    style={{ opacity: revealOpacity, y: revealY }}
                    className="absolute z-20 text-center px-6 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase mb-6">
                        DINCOLO DE LUPTĂ, <br />
                        <span className="text-neon">EȘTI REZILIENȚĂ.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-secondary font-bold text-lg italic leading-relaxed">
                        Nu este vorba doar despre tehnici. Este vorba despre cine devii când ești pus la încercare. Alătură-te celor care aleg să reziste.
                    </p>
                </motion.div>

                {/* Hero Bottom indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-neon"
                        />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">SCROLL SĂ DESCOPERI</span>
                </div>
            </div>
        </section>
    )
}

