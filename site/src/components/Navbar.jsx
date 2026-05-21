import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <img src="/logo.jpg" alt="Thanos Academia" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a></li>
          <li><a href="#estrutura" onClick={() => setMenuOpen(false)}>Estrutura</a></li>
          <li><a href="#aulas" onClick={() => setMenuOpen(false)}>Aulas Coletivas</a></li>
          <li><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a></li>
        </ul>

        <a href="#planos" className="btn-primary nav-cta">Matricule-se</a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
