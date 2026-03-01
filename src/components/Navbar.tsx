import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
    { name: 'Academie', href: '#academie' },
    { name: 'Programe', href: '#programe' },
    { name: 'Programa', href: '#programa' },
    { name: 'Preturi', href: '#preturi' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Despre noi', href: '#despre-noi' },
    { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-2xl font-black tracking-tighter text-white hover:text-neon transition-colors">
                        RESILIENCE <span className="text-neon">BJJ</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-10">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="nav-link text-xs">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-white hover:text-neon"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black p-8 flex flex-col items-center justify-center gap-12"
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-neon"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={40} />
                        </button>

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-4xl font-black uppercase tracking-tighter hover:text-neon transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="btn-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            RESERVĂ O CLASĂ GRATUITĂ
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
