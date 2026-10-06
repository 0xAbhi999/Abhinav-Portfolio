import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

function useRoleText() {
  const [role, setRole] = useState('')

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setRole(profile.roles[0])
      return
    }

    let roleIndex = 0
    let characterIndex = 0
    let deleting = false
    let timer: number
    const tick = () => {
      const current = profile.roles[roleIndex]
      characterIndex += deleting ? -1 : 1
      setRole(current.slice(0, characterIndex))
      let delay = deleting ? 34 : 64
      if (!deleting && characterIndex === current.length) {
        deleting = true
        delay = 1500
      } else if (deleting && characterIndex === 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % profile.roles.length
        delay = 320
      }
      timer = window.setTimeout(tick, delay)
    }
    timer = window.setTimeout(tick, 450)
    return () => window.clearTimeout(timer)
  }, [])

  return role
}

function Terminal() {
  const lines = [
    ['Python', '92%'],
    ['SQL', '84%'],
    ['Cybersecurity', '76%'],
    ['Web Dev', '82%'],
  ]

  return (
    <aside className="terminal" aria-label="Terminal-style skills summary">
      <div className="terminal-top"><div className="terminal-lights"><i /><i /><i /></div><span>SECURITY_SHELL — 01</span><span className="terminal-lock">[ ENCRYPTED ]</span></div>
      <div className="terminal-body">
        <p className="terminal-command"><span>$</span> whoami</p>
        <p className="terminal-output">abhinav@security:~$ <b>portfolio</b></p>
        <p className="terminal-command"><span>$</span> skills --scan</p>
        <p className="familiarity-label">SELF-ASSESSED FAMILIARITY</p>
        <div className="terminal-skills">
          {lines.map(([label, value]) => <div className="terminal-skill" key={label}><span>{label}</span><span className="terminal-track"><i style={{ width: value }} /></span></div>)}
        </div>
        <p className="terminal-command"><span>$</span> system.status</p>
        <div className="system-state"><p>STATUS <b><span className="status-dot" />ONLINE</b></p><p>MODE <b>LEARNING + BUILDING</b></p><p>LOCATION <b>PUNE, IN</b></p></div>
      </div>
      <div className="terminal-bottom"><span>SYS.ID 0xAD2026</span><span>ALL SYSTEMS NOMINAL <i /></span></div>
    </aside>
  )
}

export default function Hero() {
  const role = useRoleText()
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> CYBERSECURITY <span>•</span> DATA <span>•</span> SOFTWARE</div>
        <p className="hero-greeting">Hi, I'm</p>
        <h1>Abhinav<br /><span>Deshmukh</span><b className="heading-period">.</b></h1>
        <div className="role-line" aria-live="off"><span className="prompt-mark">&gt;_</span><span>{role}</span><i className="typing-cursor" /></div>
        <p className="hero-intro">Electronics &amp; Telecommunication Engineering graduate with hands-on experience in Python, SQL, data analysis, web development and cybersecurity. I enjoy solving practical problems through technology, data and security.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my projects <ArrowUpRight size={16} /></a>
          <a className="button button-outline" href="/resume.pdf" download>Download resume <ArrowDown size={15} /></a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={16} /> Email <ArrowUpRight size={12} /></a>
        </div>
      </div>
      <div className="hero-visual"><div className="visual-index">FIG 01 / PROFILE OVERVIEW</div><Terminal /><div className="visual-caption"><span>FOCUSED ON WHAT'S NEXT</span><span>PUNE, INDIA</span></div></div>
      <a className="scroll-cue" href="#about"><span className="scroll-cue-icon"><ArrowDown size={15} /></span><span>SCROLL TO EXPLORE</span><span className="scroll-cue-rule" /></a>
    </section>
  )
}