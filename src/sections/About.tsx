import { motion } from 'framer-motion'
import { HoverRevealImage } from '../components/HoverRevealImage'
import instructorImg from '../assets/instructor-base.png'
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
                    className="relative h-[650px] w-full order-1 md:order-2"
                >
                    <HoverRevealImage
                        baseImage={instructorImg}
                        revealImage={pantherImg}
                        alt="Transformation Reveal"
                        revealSize={150}
                    />
                </motion.div>
            </div>
        </section>
    )
}

