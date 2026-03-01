import { motion } from 'framer-motion'
import { ChevronDown, Trophy, Users, Shield } from 'lucide-react'
import videoBg from '../assets/hero-video.mp4'

export const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Video with subtle overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 filter brightness-90 grayscale-[0.2]"
                >
                    <source src={videoBg} type="video/mp4" />
                </video>
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            </div>

            {/* Main Hero Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-neon animate-pulse" />
                        <span className="text-neon font-black tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-[0_0_10px_rgba(15,255,80,0.5)]">
                            Resilience BJJ Romania presents
                        </span>
                        <div className="h-[2px] w-12 bg-neon animate-pulse" />
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black leading-none mb-4 tracking-tighter italic uppercase drop-shadow-2xl">
                        TRANSFORMĂ <br />
                        <span className="text-neon neon-text-glow">HAOSUL</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-secondary font-bold leading-relaxed mb-4 italic px-4">
                        Nu doar o academie de lupte. O familie bazată pe respect, disciplină și curaj – unde fiecare sparring te face mai puternic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mt-6">
                        <a href="#programe" className="btn-primary group border-neon/50 bg-neon/5 hover:bg-neon hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(15,255,80,0.15)] px-10 py-5 rounded-none font-black text-lg uppercase skew-x-[-12deg]">
                            <span className="inline-block skew-x-[12deg]">Alege Programul</span>
                        </a>
                        <a href="#schedule" className="btn-secondary group bg-white/5 hover:bg-white hover:text-black transition-all duration-500 border-white/20 hover:border-white px-10 py-5 rounded-none font-black text-lg uppercase skew-x-[-12deg]">
                            <span className="inline-block skew-x-[12deg]">Program Clădiri</span>
                        </a>
                    </div>
                </motion.div>

                {/* Performance Highlights Bar */}
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-[-20%] md:bottom-[-25%] hidden lg:flex bg-black/80 backdrop-blur-3xl border border-white/10 p-8 gap-20 shadow-2xl rounded-lg"
                >
                    <div className="flex items-center gap-6">
                        <div className="bg-neon/10 p-4 rounded-full border border-neon/20 group-hover:bg-neon transition-all">
                            <Users className="text-neon" size={32} />
                        </div>
                        <div className="text-left">
                            <p className="text-3xl font-black leading-none mb-1 text-neon">200+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">MEMBRI ACTIVI</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 border-l border-white/10 pl-20">
                        <div className="bg-neon/10 p-4 rounded-full border border-neon/20 group-hover:bg-neon transition-all">
                            <Trophy className="text-neon" size={32} />
                        </div>
                        <div className="text-left">
                            <p className="text-3xl font-black leading-none mb-1 text-neon">50+</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">MEDALII CÂȘTIGATE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 border-l border-white/10 pl-20">
                        <div className="bg-neon/10 p-4 rounded-full border border-neon/20 group-hover:bg-neon transition-all">
                            <Shield className="text-neon" size={32} />
                        </div>
                        <div className="text-left">
                            <p className="text-3xl font-black leading-none mb-1 text-neon">24/7</p>
                            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">SUPORT COMUNITATE</p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Scroll Decorator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-neon transition-colors">START LUPTĂ</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown className="text-neon animate-bounce" size={24} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
