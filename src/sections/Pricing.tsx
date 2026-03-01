import { motion } from 'framer-motion'
import { Check, Star, Zap, Users2 } from 'lucide-react'

const pricingOptions = [
    {
        name: 'Săptămână de Probă',
        price: 'GRATUIT',
        description: 'Experimentează atmosfera Resilience BJJ fără niciun cost.',
        features: [
            'Acces la 3 clase',
            'Îndrumare profesională',
            'Fără obligații ulterioare',
            'Consultation gratuită'
        ],
        icon: <Zap />,
        highlight: false,
        cta: 'Rezervă Probă'
    },
    {
        name: 'Abonament Lunar',
        price: '250 LEI',
        description: 'Acces nelimitat pentru cei care își doresc performanță constantă.',
        features: [
            'Clase nelimitate (Gi & No-Gi)',
            'Acces la toate seminariile',
            'Participare la Open Mat',
            'Discount echipament'
        ],
        icon: <Star />,
        highlight: true,
        cta: 'Înscrie-te Acum'
    },
    {
        name: 'Family Pack',
        price: '400 LEI',
        description: 'Antrenează-te împreună cu familia ta și economisește.',
        features: [
            '2 Adulți + 1 Copil',
            'Clase dedicate familiilor',
            'Suport nutrițional de bază',
            'Echipament personalizat inclus'
        ],
        icon: <Users2 />,
        highlight: false,
        cta: 'Contactează-ne'
    }
]

export const Pricing = () => {
    return (
        <section id="preturi" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 mb-20 text-center items-center">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-white/20" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Investiția în tine</span>
                        <div className="h-[2px] w-12 bg-white/20" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter max-w-3xl leading-none">PREȚURI ȘI <br /> <span className="text-neon">ABONAMENTE</span></h2>
                    <p className="text-secondary font-bold max-w-xl">Alege planul de care ai nevoie pentru a-ți schimba viața prin disciplina BJJ.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {pricingOptions.map((option, i) => (
                        <motion.div
                            key={option.name}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative glass-card flex flex-col items-center text-center gap-8 ${option.highlight ? 'border-neon/50' : 'border-white/10'}`}
                        >
                            {option.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-neon/20">
                                    RECOMANDAT
                                </div>
                            )}

                            <div className={`p-4 rounded-xl ${option.highlight ? 'bg-neon/10 text-neon' : 'bg-white/5 text-white/40'}`}>
                                {option.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-black mb-2 uppercase italic">{option.name}</h3>
                                <p className="text-4xl font-black text-white">{option.price}</p>
                                <p className="text-xs text-white/40 mt-1 uppercase font-bold tracking-widest">pe lună</p>
                            </div>

                            <p className="text-sm text-secondary font-medium leading-relaxed italic">{option.description}</p>

                            <div className="w-full space-y-4 text-left">
                                {option.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <Check size={16} className="text-neon shrink-0" />
                                        <span className="text-xs font-bold text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className={`w-full py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${option.highlight ? 'bg-neon text-black border-neon hover:bg-black hover:text-neon shadow-lg shadow-neon/20' : 'bg-transparent text-white border-white/20 hover:border-white'}`}>
                                {option.cta}
                            </a>

                            {/* Background Decoration */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-black text-[150px] -z-10 select-none uppercase italic leading-none overflow-hidden h-full flex items-center">
                                {option.name && option.name.split(' ')[0]}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
