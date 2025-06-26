import React from 'react'
import Hero from './Hero'
import About from './About'
import ExplorerBlog from './ExplorerBlog'
import Contact from './Contact' // Tu peux importer pour l'utiliser si besoin (optionnel)

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <ExplorerBlog /> <br></br><br></br> {/* Section blog dans la home */}
      <Contact />  
      {/* Ne pas mettre Contact ici si tu veux route séparée */}
    </div>
  )
}

export default HomePage
