import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const images = [
    'https://images.unsplash.com/photo-1549476464-37392f717551?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1563810332292-6f298810753f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1555597408-26bc8e548a46?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1520110120385-dd27c30ce62c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1553341640-6b306b9ea209?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1518611012118-296072bb5604?auto=format&fit=crop&q=80&w=1200',
]

export const Gallery = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    // Large-scale parallax translation for a Lando-style feel
    const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const yImage3 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const yImage4 = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <section id="galerie" ref={containerRef} className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 mb-24 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-neon" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Vibrația noastră</span>
                    </div>
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none uppercase">GALERIE ȘI <br /> <span className="text-neon">ATMOSFERĂ</span></h2>
                    <p className="text-secondary font-bold max-w-sm">Vezi cum arată antrenamentele, competițiile și momentele de succes din viața Resilience BJJ.</p>
                </div>

                {/* Dynamic Gallery Grid with Parallax */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div style={{ y: yImage1 }} className="relative aspect-[4/5] md:aspect-auto h-[600px] overflow-hidden rounded-xl border border-white/10 group">
                        <img src={images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 group-hover:scale-110 opacity-70" alt="BJJ Gallery 1" />
                        <div className="absolute inset-x-8 bottom-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-neon font-black text-2xl uppercase tracking-tighter">ANTRENAMENT GI</p>
                            <p className="text-white font-bold text-sm tracking-widest uppercase opacity-60">Fundația este totul</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                    </motion.div>

                    <div className="grid gap-8">
                        <motion.div style={{ y: yImage2 }} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 group">
                            <img src={images[1]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 group-hover:scale-110 opacity-70" alt="BJJ Gallery 2" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </motion.div>
                        <motion.div style={{ y: yImage3 }} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 group">
                            <img src={images[2]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 group-hover:scale-110 opacity-70" alt="BJJ Gallery 3" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </motion.div>
                    </div>

                    <motion.div style={{ y: yImage4 }} className="relative aspect-[4/5] md:aspect-auto h-[600px] overflow-hidden rounded-xl border border-white/10 group">
                        <img src={images[3]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 group-hover:scale-110 opacity-70" alt="BJJ Gallery 4" />
                        <div className="absolute inset-x-8 bottom-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-neon font-black text-2xl uppercase tracking-tighter">COMPETIȚIE</p>
                            <p className="text-white font-bold text-sm tracking-widest uppercase opacity-60">Dincolo de sală</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                    </motion.div>

                    {/* Animated Motion Lines (Lando-style decoration) */}
                    <div className="absolute top-[20%] right-[-10%] w-[120%] h-[1px] bg-neon opacity-20 -rotate-12 pointer-events-none hidden md:block" />
                    <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-neon opacity-20 rotate-12 pointer-events-none hidden md:block" />
                </div>
            </div>

            {/* Background Section Title Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-black text-[30vw] -z-10 select-none uppercase pointer-events-none">
                MOMENTE
            </div>
        </section>
    )
}
