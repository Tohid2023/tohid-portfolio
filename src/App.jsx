import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import { Experience } from './sections/Experiance'
import { Testimonials } from './sections/Testimonials'
import {Contact} from './sections/Contact'
import { Footer } from './layout/Footer'
import Skills from './sections/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          {/* <Testimonials /> */}
          <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App