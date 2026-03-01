import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import teacherGi from '../assets/cristian-matascan.jpg'
import pantherImg from '../assets/panther-transform.jpg'

export const About = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    })

    // Scrolling parallax and zoom - Nando Norris style
    const scaleLayer1 = useTransform(scrollYProgress, [0, 1], [1, 2.5])
    const opacityLayer1 = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    const scaleLayer2 = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityLayer2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
    const yLayer2 = useTransform(scrollYProgress, [0, 1], [100, 0])

    const textReveal = useTransform(scrollYProgress, [0.6, 1], [0, 1])
    const textY = useTransform(scrollYProgress, [0.6, 1], [50, 0])

    return (
        <section ref={sectionRef} className="relative h-[250vh] bg-black">
            {/* Sticky Container for the Transition */}
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden">

                {/* Visual Canvas (The Transformation Area) */}
                <div className="absolute inset-0 md:relative md:w-3/5 h-screen overflow-hidden order-1 md:order-2">
                    {/* Layer 1: Teacher in Gi (The starting point) */}
                    <motion.div
                        className="absolute inset-0 z-10"
                        style={{ scale: scaleLayer1, opacity: opacityLayer1 }}
                    >
                        <img
                            src={teacherGi}
                            className="w-full h-full object-cover grayscale"
                            alt="Tradition - BJJ Gi"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </motion.div>

                    {/* Layer 2: Panther Warrior (The Transformation) */}
                    <motion.div
                        className="absolute inset-0 z-20"
                        style={{ scale: scaleLayer2, opacity: opacityLayer2, y: yLayer2 }}
                    >
                        <img
                            src={pantherImg}
                            className="w-full h-full object-cover"
                            alt="Transformation - Panther Warrior"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-neon/20 to-transparent mix-blend-color-dodge" />
                    </motion.div>
                </div>

                {/* Content Area (Left side on Desktop, Absolute on Mobile) */}
                <div className="relative z-30 w-full md:w-2/5 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-black/10 backdrop-blur-sm md:backdrop-blur-none order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8 max-w-xl"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-neon" />
                            <span className="text-neon font-black tracking-widest uppercase text-xs">Transformare & Reziliență</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter text-white uppercase italic">
                            REZILIENȚA <br />
                            <span className="text-neon">PE ȘI ÎN AFARA</span> <br />
                            COVORULUI.
                        </h2>

                        {/* Transitioning Content */}
                        <div className="relative h-40">
                            {/* Text for Stage 1 */}
                            <motion.div
                                style={{ opacity: opacityLayer1 }}
                                className="absolute inset-0"
                            >
                                <p className="text-xl md:text-2xl text-secondary font-bold leading-relaxed">
                                    Resilience BJJ s-a născut dintr-o dorință pură de educație prin disciplină și respect. Nu este doar sport, este o formă de artă.
                                </p>
                            </motion.div>

                            {/* Text for Stage 2 (Panther Stage) */}
                            <motion.div
                                style={{ opacity: textReveal, y: textY }}
                                className="absolute inset-0"
                            >
                                <p className="text-xl md:text-2xl text-neon font-black leading-relaxed italic drop-shadow-[0_0_10px_rgba(15,255,80,0.3)]">
                                    Transformarea începe unde se termină confortul. Dincolo de tehnică, construim spiritul unui războinic modern.
                                </p>
                                <p className="mt-4 text-white/60 text-sm">
                                    Bullying Bullies din 2020 – te învățăm să transformi frica în putere.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-40 hidden md:flex">
                    <div className="h-40 w-[2px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
                            className="bg-neon w-full origin-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
