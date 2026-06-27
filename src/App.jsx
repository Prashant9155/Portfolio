import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import AIChat from './components/sections/AIChat'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import FloatingAIButton from './components/sections/FloatingAIButton'
import CareerHighlights from './components/sections/CareerHighlights'

export default function App() {
  return (
       <div className="relative min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100">
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.06),transparent_40%)]
            dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_40%)]
          "
        />
      </div>
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 pb-2 w-full ">
        <Hero />
        <About />
        <CareerHighlights />
        <Experience />
        <Projects />
        <Skills />
        <AIChat />
        <Contact />
        <FloatingAIButton />
      </main>
      
      <Footer />
    </div>
  )
}