import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'

const days = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă']

const scheduleData: Record<string, any[]> = {
    'Luni': [
        { time: '08:00 - 09:30', program: 'Adulți Fundamente', level: 'Toate nivelele', location: 'Tatami Principal', accent: true },
        { time: '17:30 - 18:30', program: 'BJJ Copii (4-8 ani)', level: 'Copii', location: 'Tatami Mic', accent: false },
        { time: '18:30 - 19:30', program: 'BJJ Copii (9-12 ani)', level: 'Copii', location: 'Tatami Mic', accent: false },
        { time: '19:30 - 21:00', program: 'Adulți Avansați', level: 'Peste centura albastră', location: 'Tatami Principal', accent: true },
    ],
    'Marți': [
        { time: '07:30 - 09:00', program: 'Drilling & Sparring', level: 'Intermediar', location: 'Tatami Principal', accent: true },
        { time: '18:00 - 19:30', program: 'BJJ Femei', level: 'Femei', location: 'Tatami Principal', accent: true },
        { time: '19:30 - 21:00', program: 'No-Gi Fundamente', level: 'Toate nivelele', location: 'Tatami Mic', accent: true },
    ],
    'Miercuri': [
        { time: '08:00 - 09:30', program: 'Adulți Fundamente', level: 'Toate nivelele', location: 'Tatami Principal', accent: true },
        { time: '17:30 - 18:30', program: 'BJJ Copii (4-8 ani)', level: 'Copii', location: 'Tatami Mic', accent: false },
        { time: '18:30 - 19:30', program: 'BJJ Copii (9-12 ani)', level: 'Copii', location: 'Tatami Mic', accent: false },
        { time: '19:30 - 21:00', program: 'Adulți Avansați', level: 'Peste centura albastră', location: 'Tatami Principal', accent: true },
    ],
    'Joi': [
        { time: '18:00 - 19:30', program: 'BJJ Femei', level: 'Femei', location: 'Tatami Principal', accent: true },
        { time: '19:30 - 21:00', program: 'No-Gi Fundamente', level: 'Toate nivelele', location: 'Tatami Mic', accent: true },
    ],
    'Vineri': [
        { time: '08:00 - 09:30', program: 'Adulți Fundamente', level: 'Toate nivelele', location: 'Tatami Principal', accent: true },
        { time: '19:30 - 21:00', program: 'Open Mat', level: 'Toate nivelele', location: 'Tatami Principal', accent: true },
    ],
    'Sâmbătă': [
        { time: '10:00 - 11:30', program: 'Antrenament Competiție', level: 'Avansați', location: 'Tatami Principal', accent: true },
        { time: '11:45 - 13:00', program: 'Social Training', level: 'Membri', location: 'Tatami Principal', accent: false },
    ],
}

export const Schedule = () => {
    const [activeDay, setActiveDay] = useState('Luni')

    return (
        <section id="programa" className="py-24 md:py-40 bg-black relative px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col gap-6 mb-20 text-center items-center">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-white/20" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Aici ne antrenăm</span>
                        <div className="h-[2px] w-12 bg-white/20" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter max-w-3xl leading-none">ORARUL <span className="text-neon">RESILIENCE BJJ</span></h2>
                    <p className="text-secondary font-bold max-w-xl">Descoperă programul nostru de antrenamente și alege grupele care ți se potrivesc.</p>
                </div>

                {/* Day Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-8 py-3 font-black uppercase text-xs tracking-widest transition-all duration-300 border-2 ${activeDay === day ? 'bg-neon text-black border-neon' : 'bg-transparent text-white border-white/10 hover:border-white/30'}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule Grid */}
                <div className="relative overflow-hidden min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="grid gap-6"
                        >
                            {scheduleData[activeDay]?.map((item, idx) => (
                                <div key={idx} className="group relative glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/10 transition-colors border-l-4 border-l-transparent hover:border-l-neon">
                                    <div className="flex items-center gap-6">
                                        <div className="p-3 bg-neon/10 text-neon rounded-lg group-hover:scale-110 transition-transform duration-300">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-neon tracking-widest uppercase mb-1">{item.time}</p>
                                            <h4 className="text-2xl font-black tracking-tight">{item.program}</h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-6 items-center w-full md:w-auto">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-white/40" />
                                            <span className="text-xs font-bold text-white/60">{item.location}</span>
                                        </div>
                                        <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-neon group-hover:border-neon transition-colors">
                                            {item.level}
                                        </div>

                                        <a href="#contact" className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${item.accent ? 'bg-neon/10 border-neon text-neon hover:bg-neon hover:text-black' : 'border-white/20 text-white/40 hover:border-white hover:text-white'}`}>
                                            Rezervă Loc
                                        </a>
                                    </div>

                                    {/* Background Highlight Decoration */}
                                    {item.accent && (
                                        <div className="absolute inset-0 bg-neon/5 -z-10 group-hover:bg-neon/10 transition-colors" />
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
