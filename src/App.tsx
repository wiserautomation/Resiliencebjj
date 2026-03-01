import { useScroll, useSpring, motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Programs } from './sections/Programs'
import { Schedule } from './sections/Schedule'
import { Pricing } from './sections/Pricing'
import { Instructors } from './sections/Instructors'
import { Gallery } from './sections/Gallery'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <main className="relative bg-black text-white antialiased overflow-x-hidden">
            {/* Dynamic Background Noise/Overlay */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <Navbar />

            <div className="relative z-10 flex flex-col">
                <Hero />
                <About />
                <Programs />
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
                <Schedule />
                <Pricing />
                <Instructors />
                <Gallery />
                <Testimonials />
                <FAQ />
                <Contact />
                <Footer />
            </div>

            {/* Global Scroll Progress Bar */}
            <motion.div
                className="fixed bottom-0 left-0 right-0 h-[4px] bg-neon z-[100] origin-left shadow-lg shadow-neon/40"
                style={{ scaleX }}
            />
        </main>
    )
}

export default App
