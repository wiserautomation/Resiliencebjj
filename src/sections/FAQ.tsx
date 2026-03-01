import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: 'Am nevoie de experiență prealabilă?',
        answer: 'Absolut nu. Avem clase speciale pentru începători unde vei învăța fundamentele într-un mediu sigur și relaxat. Majoritatea membrilor noștri au început de la zero.'
    },
    {
        question: 'Ce îmbrăcăminte să aduc la prima clasă?',
        answer: 'Pentru prima clasă, un tricou simplu și pantaloni scurți sau leggings sunt suficienți. Nu uita să aduci papuci de schimb și apă. Îți vom împrumuta noi un Gi dacă clasa necesită unul.'
    },
    {
        question: 'Este sigur pentru copii?',
        answer: 'Siguranța copiilor este prioritatea noastră numărul unu. Clasele noastre pentru cei mici sunt adaptate vârstei lor, cu accent pe disciplină, bazele mișcării și jocuri sigure. Nu există sparring intens pentru copiii mici.'
    },
    {
        question: 'Cât de des ar trebui să mă antrenez?',
        answer: 'Recomandăm cel puțin 2-3 antrenamente pe săptămână pentru a vedea progrese constante. Totuși, fiecare se antrenează în ritmul său, în funcție de program și obiective.'
    },
    {
        question: 'Există limită de vârstă?',
        answer: 'Niciodată nu este prea târziu să începi. Avem membri de toate vârstele, de la 4 la peste 60 de ani. Adaptăm intensitatea antrenamentului la posibilitățile tale fizice.'
    },
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 md:py-40 bg-black relative px-6 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col gap-6 mb-20">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-neon" />
                        <span className="text-neon font-black tracking-[0.2em] uppercase text-xs">Întrebări Frecvente</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none italic">SĂ REZOLVĂM <br /> <span className="text-neon">MISTERUL</span></h2>
                    <p className="text-secondary font-bold max-w-sm">Tot ce trebuie să știi înainte de a urca pe covor pentru prima dată.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`glass-card border-white/5 border-2 rounded-2xl transition-all duration-300 ${openIndex === i ? 'border-neon/40 shadow-xl shadow-neon/5' : ''}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full py-6 px-8 flex justify-between items-center text-left"
                            >
                                <span className={`text-lg md:text-2xl font-black italic tracking-tighter uppercase transition-colors ${openIndex === i ? 'text-neon' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full border transition-all duration-300 ${openIndex === i ? 'bg-neon border-neon text-black rotate-180' : 'bg-white/5 border-white/10 text-white'}`}>
                                    {openIndex === i ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 text-secondary font-medium italic leading-relaxed text-base border-t border-white/5 pt-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
