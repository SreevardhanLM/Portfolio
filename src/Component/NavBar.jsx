import { useState, useEffect } from 'react'
import '../CSS/NavBar.css'

const NAV_LINKS = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Skills', label: 'Skills' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Contact', label: 'Contact' },
]

function NavBar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <a href="#Home" className="navbar-brand" onClick={e => handleClick(e, 'Home')}>
        <span className="navbar-logo">&lt;</span>
        Sreevardhan
        <span className="navbar-logo"> /&gt;</span>
      </a>
      <button
        className={`navbar-toggle ${open ? 'is-open' : ''}`}
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul id="primary-navigation" className={`navbar-menu ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`navbar-link ${activeSection === id ? 'active' : ''}`}
              onClick={e => handleClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar