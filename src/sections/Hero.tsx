import { motion } from 'framer-motion'
import { useRef } from 'react'
import heroVideo from '../assets/hero-video.mp4'

export const Hero = () => {
    const ref = useRef<HTMLElement>(null)

    return (
        <section ref={ref} id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-black">

            {/* ── Background Video ── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.65 }}
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                {/* Vignette overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            </div>

            {/* ── Hero Text Content ── */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Eyebrow */}
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-10 bg-neon" />
                        <span className="text-neon font-black tracking-[0.4em] uppercase text-xs">
                            Resilience BJJ — România
                        </span>
                        <div className="h-[2px] w-10 bg-neon" />
                    </div>

                    {/* Main headline */}
                    <h1 className="text-7xl md:text-[9rem] font-black leading-[0.9] tracking-tighter italic uppercase">
                        TRANSFORMĂ
                        <br />
                        <span className="text-neon" style={{ textShadow: '0 0 60px rgba(255,255,0,0.4)' }}>
                            HAOSUL
                        </span>
                    </h1>

                    <p className="max-w-lg text-lg md:text-xl text-white/60 font-semibold leading-relaxed mt-2">
                        Nu doar o academie de lupte. O familie bazată pe respect,<br />
                        disciplină și curaj — pe și în afara covorului.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 mt-6">
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-neon text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300"
                            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                        >
                            Începe Gratuit
                        </a>
                        <a
                            href="#programe"
                            className="px-10 py-4 border border-white/30 text-white font-black text-sm uppercase tracking-widest hover:border-neon hover:text-neon transition-colors duration-300"
                            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                        >
                            Vezi Programele
                        </a>
                    </div>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-12 border border-white/10 bg-black/60 backdrop-blur-xl px-12 py-5"
                >
                    {[
                        { value: '200+', label: 'Membri Activi' },
                        { value: '50+', label: 'Medalii' },
                        { value: '5+', label: 'Locații' },
                        { value: '5+', label: 'Ani de Activitate' },
                    ].map((s, i) => (
                        <div key={i} className={`text-center ${i > 0 ? 'border-l border-white/10 pl-12' : ''}`}>
                            <p className="text-2xl font-black text-neon">{s.value}</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-[1px] h-10 bg-gradient-to-b from-neon to-transparent"
                    />
                </div>
            </div>
        </section>
    )
}
