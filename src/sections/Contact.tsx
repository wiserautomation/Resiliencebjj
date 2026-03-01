import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-neon" />
                            <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Vino să ne cunoști</span>
                        </div>
                        <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">CONTACTEAZĂ-NE <br /> <span className="text-neon">ȘI ÎNCEPE</span></h2>
                        <p className="text-secondary font-bold max-w-sm leading-relaxed mb-4 italic">Fie că ai întrebări sau ești pregătit să pornești la drum, noi suntem aici. Echipa Resilience BJJ te așteaptă la prima ta clasă gratuită.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:pt-20">
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-neon group-hover:bg-neon group-hover:text-black transition-all duration-300 transform group-hover:rotate-6">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">TELEFON</p>
                                <p className="text-xl font-black text-white">+40 712 345 678</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-neon group-hover:bg-neon group-hover:text-black transition-all duration-300 transform group-hover:rotate-6">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">EMAIL</p>
                                <p className="text-xl font-black text-white">contact@resiliencebjj.ro</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-neon group-hover:bg-neon group-hover:text-black transition-all duration-300 transform group-hover:rotate-6">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">ADRESĂ</p>
                                <p className="text-xl font-black text-white italic">Calea Victoriei 123, București</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 glass-card border-white/5 border-2 rounded-3xl p-10 md:p-16 relative overflow-hidden"
                    >
                        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-neon font-black uppercase tracking-widest px-1">Nume Complet</label>
                                    <input type="text" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-neon focus:bg-white/10 transition-all outline-none rounded-t-lg font-bold" placeholder="EX. ANDREI POPESCU" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-neon font-black uppercase tracking-widest px-1">Email</label>
                                    <input type="email" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-neon focus:bg-white/10 transition-all outline-none rounded-t-lg font-bold" placeholder="EX. ANDREI@EMAIL.RO" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-neon font-black uppercase tracking-widest px-1">Telefon</label>
                                    <input type="tel" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-neon focus:bg-white/10 transition-all outline-none rounded-t-lg font-bold" placeholder="+40 7XX XXX XXX" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-neon font-black uppercase tracking-widest px-1">Program Interes</label>
                                    <select className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-neon focus:bg-white/10 transition-all outline-none rounded-t-lg font-bold appearance-none cursor-pointer">
                                        <option className="bg-black">BJJ ADULȚI</option>
                                        <option className="bg-black">BJJ COPII</option>
                                        <option className="bg-black">BJJ FEMEI</option>
                                        <option className="bg-black">COMPETIȚIE</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-neon font-black uppercase tracking-widest px-1">Mesaj</label>
                                <textarea rows={4} className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-neon focus:bg-white/10 transition-all outline-none rounded-t-lg font-bold resize-none" placeholder="SCRIE MESAJUL TĂU AICI..." />
                            </div>

                            <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3">
                                TRIMITE MESAJUL <Send size={20} />
                            </button>
                        </form>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                            <Send size={200} className="-rotate-12" />
                        </div>
                    </motion.div>

                    {/* Map/Graphic Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[40%] h-[500px] md:h-[650px] rounded-3xl overflow-hidden relative border-2 border-white/10 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <div className="w-full h-full bg-[#111] flex items-center justify-center p-20">
                                {/* Simplified Geometric Graphic instead of a real map to keep it clean */}
                                <div className="relative w-full h-full border-2 border-white/5 rounded-full animate-pulse flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 border-2 border-white/5 rounded-full flex items-center justify-center">
                                        <div className="w-1/2 h-1/2 border-2 border-white/5 rounded-full flex items-center justify-center">
                                            <MapPin size={100} className="text-neon animate-bounce" />
                                        </div>
                                    </div>

                                    {/* Decorative points */}
                                    <div className="absolute top-10 left-1/4 w-3 h-3 bg-neon rounded-full" />
                                    <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-white/20 rounded-full" />
                                    <div className="absolute top-1/2 right-10 w-2 h-2 bg-neon/40 rounded-full" />
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 z-20">
                                <p className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-2">NE GĂSEȘTI <br /> <span className="text-neon font-black">ÎN BUCUREȘTI</span></p>
                                <p className="text-white/40 text-[10px] font-black tracking-widest uppercase">DISPONIBIL PENTRU TINE ZILNIC</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
