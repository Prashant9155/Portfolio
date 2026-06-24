import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import AIChat from './components/sections/AIChat'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="theme-transition min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-6 pb-2 w-full">
        <Hero />
        {/* <Stats /> */}
        <br />

        <Experience />
        <Projects />
        <Skills />
        <AIChat />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}