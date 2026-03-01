import { motion } from 'framer-motion'
import { Shield, Users, Target, Zap } from 'lucide-react'
import adultImg from '../assets/adult-bjj.jpg'
import kidsImg from '../assets/kids-bjj.jpg'
import competitionImg from '../assets/competition-team.jpg'

const programs = [
    {
        title: 'BJJ Adulți',
        subtitle: 'Începător / Intermediar / Avansat',
        desc: 'Tehnici fundamentale de control și auto-apărare pentru adulți, indiferent de nivelul de experiență.',
        icon: <Users size={40} />,
        image: adultImg
    },
    {
        title: 'BJJ Copii',
        subtitle: '4-12 Ani',
        desc: 'Construim încrederea, disciplina și respectul celor mici prin jocuri și tehnici de luptă sigure.',
        icon: <Shield size={40} />,
        image: kidsImg
    },
    {
        title: 'BJJ Femei',
        subtitle: 'Auto-Apărare & Fitness',
        desc: 'O clasă dedicată femeilor care vor să învețe să se protejeze și să își depășească limitele fizice.',
        icon: <Zap size={40} />,
        image: 'https://images.unsplash.com/photo-1518611012118-296072bb5604?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Competiție / Team',
        subtitle: 'Antrenament Intens',
        desc: 'Pentru cei care vor să urce pe podium. Strategii avansate, drilling intens și sparring la nivel înalt.',
        icon: <Target size={40} />,
        image: competitionImg
    }
]

export const Programs = () => {
    return (
        <section id="programe" className="py-24 md:py-40 bg-black relative px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-neon" />
                            <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Alege-ți calea</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter max-w-2xl leading-none">PROGRAME DE ANTRENAMENT <br /> <span className="text-neon">PERSONALIZATE</span></h2>
                    </div>
                    <p className="text-secondary font-bold max-w-sm text-right">Fie că ești la prima clasă sau un luptător experimentat, avem programul potrivit pentru obiectivele tale.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={prog.title}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[500px] overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-neon/50"
                        >
                            {/* Card Image */}
                            <div className="absolute inset-0 z-0">
                                <img src={prog.image} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 filter grayscale" alt={prog.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col justify-end gap-6">
                                <div className="text-neon mb-2 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    {prog.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-1 group-hover:text-neon transition-colors">{prog.title}</h3>
                                    <p className="text-xs text-neon/60 font-black tracking-widest uppercase mb-4">{prog.subtitle}</p>
                                </div>
                                <p className="text-secondary text-sm leading-relaxed mb-4 group-hover:text-white transition-colors line-clamp-3">
                                    {prog.desc}
                                </p>
                                <div className="w-0 h-[2px] bg-neon group-hover:w-full transition-all duration-500" />
                            </div>

                            {/* Overlay Decoration */}
                            <div className="absolute top-8 right-8 text-white/5 font-black text-6xl group-hover:text-neon/10 transition-colors">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
