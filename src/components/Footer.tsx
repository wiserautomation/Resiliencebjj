import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="py-20 bg-black border-t border-white/5 relative px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <a href="#" className="text-4xl font-black tracking-tighter text-white hover:text-neon transition-colors">
                            RESILIENCE <span className="text-neon uppercase italic">BJJ</span>
                        </a>
                        <p className="text-secondary font-bold text-center md:text-left max-w-xs italic leading-relaxed">
                            Resilience BJJ – Brazilian Jiu-Jitsu pentru România. Unde transformăm lupta în succes.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h4 className="text-xs font-black uppercase tracking-widest text-neon">Link-uri Rapide</h4>
                            <ul className="space-y-2">
                                <li><a href="#academie" className="text-sm font-bold text-white/40 hover:text-white transition-colors">Academie</a></li>
                                <li><a href="#programe" className="text-sm font-bold text-white/40 hover:text-white transition-colors">Programe</a></li>
                                <li><a href="#preturi" className="text-sm font-bold text-white/40 hover:text-white transition-colors">Prețuri</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h4 className="text-xs font-black uppercase tracking-widest text-neon">Program Sala</h4>
                            <ul className="space-y-2">
                                <li className="text-sm font-bold text-white/40">Luni - Vineri: 07:30 - 21:00</li>
                                <li className="text-sm font-bold text-white/40">Sâmbătă: 10:00 - 15:00</li>
                                <li className="text-sm font-bold text-white/40">Duminică: Închis</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center md:items-end">
                        <h4 className="text-xs font-black uppercase tracking-widest text-neon">Urmărește-ne</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-neon hover:text-black hover:scale-110 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-neon hover:text-black hover:scale-110 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-neon hover:text-black hover:scale-110 transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">
                        © 2026 RESILIENCE BJJ ROMÂNIA. TOATE DREPTURILE REZERVATE.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-white/20 font-black uppercase tracking-widest hover:text-white transition-colors">POLITICA DE CONFIDENȚIALITATE</a>
                        <a href="#" className="text-[10px] text-white/20 font-black uppercase tracking-widest hover:text-white transition-colors">TERMENI ȘI CONDIȚII</a>
                    </div>
                </div>
            </div>

            {/* Background Branding Overlay */}
            <div className="absolute -bottom-10 right-[-10%] text-white/[0.01] font-black text-[20vw] italic pointer-events-none select-none uppercase">
                RESILIENCE
            </div>
        </footer>
    )
}
