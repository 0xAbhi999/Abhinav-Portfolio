import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Send,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { profile, projects, skillGroups, stats } from '../data/portfolio'

const skillIcons = { braces: Braces, database: Database, shield: ShieldCheck, code: Code2, wrench: Wrench }

export function About() {
  const details = [
    ['Location', profile.location],
    ['Education', 'Electronics & Telecommunication Engineering'],
    ['Focus', 'Cybersecurity · Data · Software'],
    ['Email', profile.email],
  ]
  return (
    <section className="section section-wrap" id="about">
      <div className="section-heading reveal"><p className="section-kicker">01 / A LITTLE CONTEXT</p><h2>About <span>Me</span></h2></div>
      <div className="about-layout">
        <div className="about-copy reveal">
          <p className="about-lead">Curious by nature.<br />Practical by design.</p>
          <p>I am an Electronics &amp; Telecommunication Engineering professional with a strong interest in cybersecurity, data analytics, Python development and modern web technologies.</p>
          <p>I enjoy learning by building practical projects and experimenting with real-world technologies. My experience includes data analysis, machine learning fundamentals, SQL, web development, Linux/Kali, Nmap, Wireshark, GNU Radio and SDR-based security projects.</p>
        </div>
        <div className="about-details reveal">
          {details.map(([label, value], index) => <div className="detail-row" key={label}><span className="detail-index">0{index + 1}</span><div><span className="detail-label">{label}</span><span className="detail-value">{value}</span></div><ArrowDownRight size={16} /></div>)}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section section-wrap" id="skills">
      <div className="section-heading reveal"><p className="section-kicker">02 / TOOLKIT</p><h2>Skills &amp; <span>Systems</span></h2><p className="section-summary">A practical mix of analytical thinking, security tooling and software fundamentals.</p></div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.icon as keyof typeof skillIcons]
          return <article className="skill-card reveal" key={group.title} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
            <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="mono-index">0{index + 1}</span></div>
            <h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
          </article>
        })}
      </div>
    </section>
  )
}

export function Experience() {
  const responsibilities = [
    'Worked on placement prediction activities',
    'Organized project-related data and prepared it for analysis',
    'Prepared reports and project documentation',
    'Performed analysis and data preparation',
    'Collaborated on project activities',
    'Developed analytical and problem-solving skills',
  ]
  return (
    <section className="section section-wrap" id="experience">
      <div className="section-heading reveal"><p className="section-kicker">03 / EXPERIENCE</p><h2>Learning by <span>Doing</span></h2></div>
      <div className="timeline reveal">
        <div className="timeline-marker"><span><BriefcaseBusiness size={18} /></span></div>
        <article className="experience-entry"><div className="experience-meta"><span>INTERNSHIP</span><span>DATA SCIENCE</span></div><h3>Data Science Intern</h3><p className="entry-place">Sofcon Training</p><p className="entry-description">Contributed to placement-prediction project activities, data preparation and reporting.</p><ul>{responsibilities.map(item => <li key={item}>{item}</li>)}</ul></article>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section section-wrap" id="projects">
      <div className="section-heading reveal"><p className="section-kicker">04 / SELECTED WORK</p><h2>Selected <span>Projects</span></h2><p className="section-summary">Explorations at the intersection of useful software, data and security.</p></div>
      <div className="projects-grid">
        {projects.map(project => <article className="project-card reveal" key={project.number}>
          <div className="project-top"><span className="project-number">PROJECT / {project.number}</span><ExternalLink size={17} /></div>
          <h3>{project.title}</h3><p className="project-description">{project.description}</p>
          <div className="project-tech">{project.technologies.map((technology, index) => <span className="tech-badge" key={technology} style={{ '--delay': `${index * 35}ms` } as React.CSSProperties}>{technology}</span>)}</div>
          <div className="project-links"><a href={project.url} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={14} /></a><a href={project.url} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14} /></a></div>
        </article>)}
      </div>
    </section>
  )
}

export function Education() {
  const entries = [
    { type: 'DEGREE', title: 'Electronics & Telecommunication Engineering', place: 'M.E.S. Wadia College of Engineering', location: 'Pune' },
    { type: 'DIPLOMA', title: 'Diploma in Computer Engineering', place: 'Karmaveer Bhaurao Patil Polytechnic', location: 'Satara', score: '90.11%' },
  ]
  return (
    <section className="section section-wrap" id="education">
      <div className="section-heading reveal"><p className="section-kicker">05 / EDUCATION</p><h2>Foundations &amp; <span>Focus</span></h2></div>
      <div className="education-grid">
        {entries.map((entry, index) => <article className="education-card reveal" key={entry.type}>
          <div className="education-card-top"><span className="education-icon"><GraduationCap size={18} /></span><span className="mono-index">0{index + 1} / {entry.type}</span></div>
          <h3>{entry.title}</h3><p className="education-place">{entry.place}</p><p className="education-location"><MapPin size={14} />{entry.location}</p>
          {entry.score && <div className="education-score"><span>Diploma percentage</span><b>{entry.score}</b></div>}
        </article>)}
      </div>
    </section>
  )
}

export function Certifications() {
  return (
    <section className="section section-wrap cert-section">
      <div className="section-heading reveal"><p className="section-kicker">06 / CONTINUOUS LEARNING</p><h2>Certification</h2></div>
      <article className="certificate-card reveal"><div className="certificate-seal"><Award size={24} /></div><div className="certificate-content"><span className="certificate-label">WORKSHOP</span><h3>Python Using AI Workshop</h3><p>AI For Techies</p></div><time dateTime="2025-09">September 2025</time><span className="certificate-corner" aria-hidden="true">AD / 25</span></article>
    </section>
  )
}

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)
  const [values, setValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setStarted(true)
      observer.disconnect()
    }, { threshold: 0.25 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setValues(stats.map(item => item.value))
      return
    }
    const startedAt = performance.now()
    const duration = 900
    let frame = 0
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValues(stats.map(item => Math.round(item.value * eased)))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started])

  return (
    <section className="stats-band" ref={ref} aria-label="Portfolio statistics">
      <div className="section-wrap stats-grid">{stats.map((item, index) => <div className="stat-item reveal" key={item.label}><span className="stat-count">{String(values[index]).padStart(2, '0')}<i>{item.suffix}</i></span><span className="stat-label">{item.label}</span></div>)}</div>
    </section>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="section section-wrap contact-section" id="contact">
      <div className="section-heading reveal"><p className="section-kicker">07 / GET IN TOUCH</p><h2>Let's Build Something <span>Together.</span></h2><p className="section-summary">Whether it's cybersecurity, data analytics, software development or an interesting technical project, I'm always open to learning and building.</p></div>
      <div className="contact-layout">
        <div className="contact-details reveal"><div className="contact-detail"><span className="contact-label">EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15} /></a></div><div className="contact-detail"><span className="contact-label">LOCATION</span><span>{profile.location}</span></div>
          <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Email me <Send size={15} /></a><a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-row"><label>Name<input name="name" type="text" placeholder="Your name" autoComplete="name" required minLength={2} /></label><label>Email<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label></div>
          <label>Message<textarea name="message" placeholder="A little about what you have in mind..." rows={5} required minLength={10} /></label>
          <button className="button button-primary form-submit" type="submit">Send message <ArrowUpRight size={16} /></button>
          {submitted && <p className="form-confirmation" role="status">Thanks! Your message is ready to be sent.</p>}
          <p className="form-note">This form is frontend-only. No message is transmitted.</p>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer"><div className="section-wrap footer-inner"><a className="footer-brand" href="#home">ABHINAV DESHMUKH<span>Cybersecurity · Data · Software</span></a><p>© 2026 Abhinav Deshmukh. All rights reserved.</p><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></footer>
  )
}