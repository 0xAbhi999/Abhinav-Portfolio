import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BinaryRain from './components/BinaryRain'
import { About, Certifications, Contact, Education, Experience, Footer, Projects, Skills, Stats } from './components/ContentSections'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <><BinaryRain /><Navbar /><main><Hero /><About /><Skills /><Experience /><Projects /><Education /><Certifications /><Stats /><Contact /></main><Footer /></>
}