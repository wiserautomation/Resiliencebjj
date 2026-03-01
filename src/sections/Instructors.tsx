import { motion } from 'framer-motion'
import { Award, Target, Trophy, Clock } from 'lucide-react'
import cristianImg from '../assets/cristian-matascan.jpg'
import raduImg from '../assets/radu-instructor.jpg'
import emilImg from '../assets/emil-instructor.jpg'

const instructors = [
    {
        name: 'Cristian Matascan',
        belt: 'Centura Neagră 2 Degree',
        experience: '20+ ani de experiență',
        bullets: ['Expert în Gi BJJ', 'Antrenor personalizat pentru performanță', 'Fondator Resilience BJJ'],
        image: cristianImg
    },
    {
        name: 'RADU',
        belt: 'Centura Neagră 2 Degree',
        experience: '15+ ani de experiență',
        bullets: ['Campion European No-Gi', 'Expert în strategii de auto-apărare', 'Fost antrenor de lupte libere'],
        image: raduImg
    },
    {
        name: 'Emil "The Pirate"',
        belt: 'Centura Maro',
        experience: '8+ ani de experiență',
        bullets: ['Specialist în BJJ Copii', 'Medaliat la numeroase concursuri', 'Pasionat de biomecanica mișcării și control'],
        image: emilImg
    }
]

export const Instructors = () => {
    return (
        <section id="antrenori" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-neon" />
                            <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Cei mai buni antrenori</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter max-w-2xl leading-none">PĂSTREAZĂ <br /> <span className="text-neon">STANDARDELE RIDICATE</span></h2>
                    </div>
                    <p className="text-secondary font-bold max-w-sm text-right leading-relaxed mb-4 italic">Antrenorii noștri sunt mai mult decât instructori. Sunt mentori care te vor ghida în fiecare pas al călătoriei tale BJJ.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {instructors.map((ins, i) => (
                        <motion.div
                            key={ins.name}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative h-[650px] overflow-hidden rounded-xl bg-black border border-white/10"
                        >
                            <img src={ins.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 group-hover:scale-110 opacity-60" alt={ins.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content Panel */}
                            <div className="absolute inset-0 flex flex-col justify-end p-10 z-20 group-hover:translate-y-[-10px] transition-transform duration-500">
                                <div className="mb-6">
                                    <span className="inline-block py-1 px-3 bg-neon text-[10px] font-black uppercase tracking-tighter text-black mb-3">
                                        {ins.belt}
                                    </span>
                                    <h3 className="text-4xl font-black text-white">{ins.name}</h3>
                                </div>

                                <div className="space-y-4 overflow-hidden max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-700 delay-100">
                                    <div className="flex items-center gap-3 text-neon/80">
                                        <Clock size={16} />
                                        <p className="text-xs font-bold uppercase tracking-widest">{ins.experience}</p>
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {ins.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-secondary">
                                                <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn-primary w-full py-3 text-[10px]">VEZI PROFIL COMPLET</button>
                                </div>
                            </div>

                            {/* Overlay Decoration */}
                            <div className="absolute top-8 right-8 text-neon/10 text-7xl font-black italic select-none">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
