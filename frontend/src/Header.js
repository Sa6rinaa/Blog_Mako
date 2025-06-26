import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src="../images/OceanofMako.jpg" alt="Logo" className="logo" />
      </Link>

      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/abysses">Abysses</Link></li>
          <li><Link to="/sharks">Requins</Link></li>
          <li><Link to="/prehistoric">Préhistorique</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
