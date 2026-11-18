import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'
import HowIWork from './sections/HowIWork/HowIWork'
import Skills from './sections/Skills/Skills'
import Education from './sections/Education/Education'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main id="home">
        <Hero />
        <Projects />
        <About />
        <HowIWork />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
