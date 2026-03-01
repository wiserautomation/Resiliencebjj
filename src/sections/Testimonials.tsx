import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Andrei V.',
        role: 'Student, Centura Albastră',
        content: 'Jiu-Jitsu mi-a schimbat complet modul în care abordez provocările zilnice. Resilience BJJ este locul unde am găsit nu doar tehnici, ci și o familie.',
        image: 'https://images.unsplash.com/photo-1549476464-37392f717551?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Elena M.',
        role: 'Părinte',
        content: 'Fiul meu este mult mai disciplinat și mai încrezător de când a început cursurile de BJJ pentru copii. Antrenorii sunt extraordinari cu cei mici.',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Robert D.',
        role: 'Antreprenor',
        content: 'Este cea mai bună formă de relaxare activă. După o zi grea la birou, timpul pe tatami mă resetează complet și mă încarcă cu energie.',
        image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Maria G.',
        role: 'Studentă, Centura Albă',
        content: 'Am început de curând programul pentru femei și mă simt incredibil de bine. Comunitatea este primitoare și m-am simțit în siguranță de la prima clasă.',
        image: 'https://images.unsplash.com/photo-1548690312-e3b507d174ae?auto=format&fit=crop&q=80&w=200'
    }
]

export const Testimonials = () => {
    return (
        <section id="povestiri" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 mb-20 text-center items-center">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-white/20" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Testimoniale</span>
                        <div className="h-[2px] w-12 bg-white/20" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter max-w-3xl leading-none italic uppercase">POVESTIRI DE <br /> <span className="text-neon">PE COVOR</span></h2>
                    <p className="text-secondary font-bold max-w-xl">Află direct de la membrii noștri cum BJJ le-a influențat viața și ce înseamnă pentru ei Resilience.</p>
                </div>

                {/* Horizontal Staggered Scroll Layout */}
                <div className="flex flex-col gap-10 md:gap-0 lg:flex-row lg:flex-nowrap justify-center lg:items-center overflow-x-auto pb-12 scrollbar-hide px-4 lg:px-0">
                    {testimonials.map((test, i) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, x: 50, rotate: 0 }}
                            whileInView={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? 1 : -1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.3 } }}
                            className="min-w-full md:min-w-[400px] lg:min-w-[350px] p-8 glass-card border-white/5 border-2 rounded-2xl flex flex-col gap-6 shadow-2xl hover:border-neon group transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src={test.image} className="w-14 h-14 rounded-full object-cover border-2 border-neon grayscale group-hover:grayscale-0 transition-opacity duration-500" alt={test.name} />
                                    <div>
                                        <h4 className="text-lg font-black">{test.name}</h4>
                                        <p className="text-[10px] text-neon font-bold uppercase tracking-widest">{test.role}</p>
                                    </div>
                                </div>
                                <Quote size={24} className="text-white/10 group-hover:text-neon transition-colors" />
                            </div>

                            <p className="text-secondary font-medium leading-relaxed italic text-sm group-hover:text-white transition-colors duration-300">
                                “{test.content}”
                            </p>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, idx) => (
                                    <div key={idx} className="w-1.5 h-1.5 bg-neon rounded-full" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Animated indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    <div className="h-[3px] w-12 bg-neon rounded-full" />
                    <div className="h-[3px] w-4 bg-white/20 rounded-full" />
                    <div className="h-[3px] w-4 bg-white/20 rounded-full" />
                </div>
            </div>
        </section>
    )
}
