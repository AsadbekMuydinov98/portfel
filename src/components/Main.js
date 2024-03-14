import React from 'react'
import { Banner } from './Banner'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import About from './About'

const Main = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main
