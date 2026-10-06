import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">AD<span>.</span></span>
          <span>ABHINAV DESHMUKH</span>
        </a>
        <div className={`nav-menu${open ? ' is-open' : ''}`} id="primary-navigation">
          <div className="nav-links">
            {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          </div>
          <div className="availability"><span className="status-dot" />AVAILABLE FOR OPPORTUNITIES</div>
        </div>
        <button className="menu-toggle icon-button" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  )
}