import { useEffect, useRef, useState, type CSSProperties, type KeyboardEventHandler, type MouseEventHandler, type ReactNode } from 'react'
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  ChefHat,
  ChevronUp,
  CircleDot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Dumbbell,
  ExternalLink,
  GitFork,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'
import './styles.css'

const GITHUB_URL = 'https://github.com/esakki-2008'
const LINKEDIN_URL = 'https://www.linkedin.com/in/esakki-raja-dev'
const EMAIL = 'esakkiraja2528@gmail.com'

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Achievements', 'achievements'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
] as const

type IconType = typeof Code2

type TiltCardProps = {
  children: ReactNode
  className?: string
  key?: string | number
  onClick?: MouseEventHandler<HTMLDivElement>
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
  tabIndex?: number
}

function TiltCard({ children, className = '', onClick, onKeyDown, tabIndex }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = card.getBoundingClientRect()
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -4
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 4
    card.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.style.setProperty('--rotate-y', `${rotateY}deg`)
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  const reset = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--rotate-x', '0deg')
    card.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <div ref={cardRef} className={`tilt-card ${className}`} onMouseMove={handleMove} onMouseLeave={reset} onClick={onClick} onKeyDown={onKeyDown} tabIndex={tabIndex}>
      {children}
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
}: {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function SocialLink({
  href,
  label,
  icon: Icon,
  external = true,
}: {
  href: string
  label: string
  icon: IconType
  external?: boolean
}) {
  return (
    <a
      className="social-link"
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <Icon size={17} strokeWidth={1.8} />
      <span>{label}</span>
    </a>
  )
}

function LoadingScreen() {
  return (
    <div className="loading-screen" aria-label="Loading portfolio" role="status">
      <div className="loader-mark"><span /><span /><span /><span /></div>
      <div className="loader-name">ESAKKI RAJA SALAIKUMAR</div>
      <div className="loader-status"><span className="pulse-dot" /> initializing intelligent systems</div>
    </div>
  )
}

function NeuralVisual() {
  const nodes = [
    [18, 29], [27, 52], [35, 20], [40, 73], [49, 42], [57, 17], [59, 65], [69, 35], [76, 57], [87, 25], [88, 75], [47, 90],
  ]
  const lines = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 4], [3, 11], [4, 5], [4, 6], [4, 7], [5, 7], [5, 9], [6, 7], [6, 11], [6, 8], [7, 8], [7, 9], [8, 10], [9, 10]]
  return (
    <div className="neural-visual" aria-hidden="true">
      <div className="visual-orbit visual-orbit--one" />
      <div className="visual-orbit visual-orbit--two" />
      <div className="visual-grid" />
      <div className="visual-label visual-label--top"><span /> vector space / 01</div>
      <svg viewBox="0 0 100 100" className="network-svg" preserveAspectRatio="none">
        {lines.map(([from, to], index) => (
          <line
            key={`${from}-${to}`}
            className="network-line"
            style={{ animationDelay: `${index * -0.16}s` }}
            x1={nodes[from][0]}
            y1={nodes[from][1]}
            x2={nodes[to][0]}
            y2={nodes[to][1]}
          />
        ))}
        {nodes.map(([x, y], index) => (
          <g key={`${x}-${y}`} className="network-node" style={{ animationDelay: `${index * -0.25}s` }}>
            <circle cx={x} cy={y} r={index % 3 === 0 ? 1.45 : 1} />
            <circle cx={x} cy={y} r={index % 3 === 0 ? 3.5 : 2.5} className="node-halo" />
          </g>
        ))}
        <circle className="data-particle particle-one" r="1.2" cx="27" cy="52" />
        <circle className="data-particle particle-two" r="1" cx="49" cy="42" />
        <circle className="data-particle particle-three" r="1.1" cx="76" cy="57" />
      </svg>
      <div className="visual-label visual-label--bottom"><span className="live-dot" /> model online <b>0.98</b></div>
      <div className="network-core"><BrainCircuit size={25} strokeWidth={1.2} /><span>AI</span></div>
    </div>
  )
}

function AboutVisual() {
  const chips = ['Python', 'JavaScript', 'AI', 'ML', 'React Native', 'Firebase', 'Gemini API']
  return (
    <div className="about-visual" role="img" aria-label="Developer profile visual">
      <div className="about-rings about-rings--outer" />
      <div className="about-rings about-rings--inner" />
      <div className="profile-core">
        <div className="profile-core__top"><span className="live-dot" /> profile.system</div>
        <div className="profile-glyph"><Code2 size={43} strokeWidth={1.2} /></div>
        <span className="profile-core__name">ESAKKI</span>
        <span className="profile-core__role">builder / learner / lead</span>
      </div>
      {chips.map((chip, index) => (
        <span className={`tech-chip tech-chip--${index + 1}`} key={chip} title={chip}>{chip}</span>
      ))}
      <div className="about-signal about-signal--one"><Activity size={13} /> 100+ students</div>
      <div className="about-signal about-signal--two"><ShieldCheck size={13} /> responsible by design</div>
    </div>
  )
}

const skillGroups: { title: string; icon: IconType; items: string[]; tone: string }[] = [
  { title: 'Programming Languages', icon: Terminal, items: ['Python', 'JavaScript'], tone: 'blue' },
  { title: 'AI & Machine Learning', icon: BrainCircuit, items: ['Artificial Intelligence', 'Machine Learning', 'Gemini API'], tone: 'mint' },
  { title: 'Mobile Development', icon: Smartphone, items: ['React Native', 'Expo'], tone: 'violet' },
  { title: 'Backend & Cloud', icon: Cloud, items: ['Firebase', 'Render'], tone: 'amber' },
  { title: 'Areas', icon: Layers3, items: ['AI Application Development', 'Software Development', 'Mobile Application Development', 'Cybersecurity'], tone: 'rose' },
]

function SkillCard({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const Icon = group.icon
  return (
    <TiltCard className={`skill-card skill-card--${group.tone} reveal`}>
      <div className="skill-card__head">
        <span className="skill-icon"><Icon size={19} strokeWidth={1.7} /></span>
        <span className="skill-index">0{index + 1}</span>
      </div>
      <h3>{group.title}</h3>
      <div className="skill-list">
        {group.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </TiltCard>
  )
}

function RecommendationVisual() {
  const steps = [
    { label: 'business requirement', icon: BriefcaseBusiness, className: 'flow-step--one' },
    { label: 'AI / ML processing', icon: Cpu, className: 'flow-step--two' },
    { label: 'recommendation engine', icon: Network, className: 'flow-step--three' },
    { label: 'sustainable output', icon: Sparkles, className: 'flow-step--four' },
  ]
  return (
    <div className="recommendation-visual" role="img" aria-label="EcoPackAI recommendation flow from business requirement to sustainable packaging recommendation">
      <div className="rec-topline"><span className="live-dot" /> live inference path <span className="rec-topline__right">eco.pack / 01</span></div>
      <div className="flow-canvas">
        <div className="flow-axis" />
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div className={`flow-step ${step.className}`} key={step.label}>
              <div className="flow-step__index">0{index + 1}</div>
              <div className="flow-step__icon"><Icon size={20} strokeWidth={1.5} /></div>
              <div className="flow-step__label">{step.label}</div>
              {index < steps.length - 1 && <ArrowDownRight className="flow-arrow" size={17} />}
            </div>
          )
        })}
        <div className="flow-particle flow-particle--one" />
        <div className="flow-particle flow-particle--two" />
        <div className="flow-particle flow-particle--three" />
      </div>
      <div className="rec-footer"><span><Database size={14} /> recommendation engine</span><span><span className="pulse-dot" /> processing</span></div>
    </div>
  )
}

type DemoProject = {
  id: 'level-up-gym' | 'spice-haven'
  name: string
  category: 'Client Demo Website'
  type: string
  description: string
  purpose: string
  features: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  preview: 'gym' | 'restaurant'
  businessDetails?: { location: string; phone: string }
  formFields?: string[]
}

const demoProjects: DemoProject[] = [
  {
    id: 'level-up-gym',
    name: 'Level Up Gym',
    category: 'Client Demo Website',
    type: 'Fitness Center Website',
    description: 'A modern, responsive, and professional website concept created for Level Up Gym, a local fitness center in Dombivli East, Maharashtra.',
    purpose: 'This project was created as a sample website concept for a local gym business and as part of my freelance web-development portfolio.',
    features: [
      'Modern fitness-focused homepage',
      'Hero section with strong call-to-action',
      'Fitness programs',
      'Strength training',
      'Weight training',
      'Cardio fitness',
      'Beginner programs',
      'Personal training',
      'Facilities showcase',
      'Trainer showcase',
      'Testimonials section',
      'Contact and enquiry section',
      'Click-to-call functionality',
      'Google Maps directions',
      'Responsive mobile navigation',
      'Smooth scrolling',
      'Scroll animations',
      'Hover interactions',
      'Responsive layouts',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
    liveUrl: 'https://level-up-gym-1.ai.studio',
    githubUrl: 'https://github.com/esakki-2008/Level-Up-Gym',
    preview: 'gym',
    businessDetails: { location: 'Dombivli East, Maharashtra', phone: '089766 45170' },
  },
  {
    id: 'spice-haven',
    name: 'Spice Haven',
    category: 'Client Demo Website',
    type: 'Fine Dining & Restaurant Website',
    description: 'A modern, premium restaurant website concept designed for Spice Haven, an Indian fine-dining restaurant focused on authentic flavours, elegant presentation, and memorable dining experiences.',
    purpose: 'This project is a portfolio/demo website created to demonstrate professional restaurant web-development capabilities and as a concept that could be used when approaching potential clients.',
    features: [
      'Premium restaurant homepage',
      'Restaurant branding',
      'Hero section',
      'Menu showcase',
      'Starters',
      'Main Course',
      'Biryani',
      'Desserts',
      'Drinks',
      'Customer reviews',
      'Restaurant gallery',
      'About Us section',
      'Reservation enquiry form',
      'Contact section',
      'Location/map area',
      'Responsive design',
      'Mobile-first layout',
      'Smooth animations',
      'Interactive cards and buttons',
      'Responsive navigation',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
    liveUrl: 'https://spice-haven-fine-dining-authentic-flavours.ai.studio',
    githubUrl: 'https://github.com/esakki-2008/Spice-Haven',
    preview: 'restaurant',
    formFields: ['Name', 'Phone number', 'Date', 'Time', 'Number of guests'],
  },
]

function ProjectPreview({ kind }: { kind: DemoProject['preview'] }) {
  if (kind === 'gym') {
    return (
      <div className="demo-preview demo-preview--gym" aria-hidden="true">
        <div className="preview-browser-bar"><span className="preview-dots"><i /><i /><i /></span><span>levelup / demo</span><b>01</b></div>
        <div className="preview-gym-grid" />
        <div className="preview-gym-orbit" />
        <div className="preview-gym-mark"><Dumbbell size={28} strokeWidth={1.4} /></div>
        <div className="preview-gym-copy"><span>fitness center website</span><strong>LEVEL UP<br /><em>GYM</em></strong></div>
        <div className="preview-gym-program"><span>programs</span><b>strength / cardio</b></div>
        <div className="preview-gym-footer"><span>Dombivli East, Maharashtra</span><span>enquire now <ArrowRight size={12} /></span></div>
      </div>
    )
  }

  return (
    <div className="demo-preview demo-preview--restaurant" aria-hidden="true">
      <div className="preview-browser-bar"><span className="preview-dots"><i /><i /><i /></span><span>spicehaven / concept</span><b>02</b></div>
      <div className="preview-restaurant-grid" />
      <div className="preview-restaurant-ring preview-restaurant-ring--one" />
      <div className="preview-restaurant-ring preview-restaurant-ring--two" />
      <div className="preview-plate"><ChefHat size={31} strokeWidth={1.2} /><span>SH</span></div>
      <div className="preview-restaurant-copy"><span>fine dining &amp; restaurant website</span><strong>SPICE<br /><em>HAVEN</em></strong><small>authentic flavours</small></div>
      <div className="preview-menu-strip"><span>starters</span><span>biryani</span><span>desserts</span></div>
      <div className="preview-restaurant-footer"><span>menu / gallery / about</span><span>reserve <ArrowRight size={12} /></span></div>
    </div>
  )
}

function ProjectCard({ project, index, onOpen }: { project: DemoProject; index: number; onOpen: (project: DemoProject) => void }) {
  const openFromCard = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    onOpen(project)
  }

  const openFromKeyboard = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(project)
    }
  }

  return (
    <TiltCard className={`demo-project-card demo-project-card--${project.preview} reveal`}>
      <article className="demo-project-card__article" tabIndex={0} onClick={openFromCard} onKeyDown={openFromKeyboard}>
        <div className="demo-project-card__preview"><ProjectPreview kind={project.preview} /><span className="preview-hint">click to explore</span></div>
        <div className="demo-project-card__body">
          <div className="demo-project-card__meta"><span className="client-demo-badge">{project.category}</span><span className="project-index">0{index + 1}</span></div>
          <h3>{project.name}</h3>
          <p className="demo-project-card__type">{project.type}</p>
          <p className="demo-project-card__description">{project.description}</p>
          <div className="demo-tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <div className="demo-project-card__actions">
            <button className="button button--quiet" onClick={() => onOpen(project)}>View Details <ArrowRight size={15} /></button>
            <a className="button button--outline" href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>View Live <ExternalLink size={14} /></a>
            <a className="button button--outline demo-github-button" href={project.githubUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>GitHub <GitFork size={14} /></a>
          </div>
        </div>
      </article>
    </TiltCard>
  )
}

function ProjectModal({ project, onClose, closeRef }: { project: DemoProject | null; onClose: () => void; closeRef: { current: HTMLButtonElement | null } }) {
  if (!project) return null
  return (
    <div className="project-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`project-modal-title-${project.id}`}>
        <button ref={closeRef} className="project-modal__close" onClick={onClose} aria-label="Close project details"><X size={19} /></button>
        <div className="project-modal__preview"><ProjectPreview kind={project.preview} /></div>
        <div className="project-modal__content">
          <div className="project-modal__meta"><span className="client-demo-badge">{project.category}</span><span className="project-modal__type">{project.type}</span></div>
          <h2 id={`project-modal-title-${project.id}`}>{project.name}</h2>
          <p className="project-modal__overview">{project.description}</p>
          {project.businessDetails && <div className="project-business-details"><span><MapPin size={14} /> {project.businessDetails.location}</span><span><Phone size={14} /> {project.businessDetails.phone}</span><small>Business information shown as demo/project content.</small></div>}
          <div className="project-modal__columns">
            <div><h3>Key features</h3><ul className="project-feature-list" tabIndex={0} aria-label="Key features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
            <div><h3>Technology</h3><div className="demo-tech-list demo-tech-list--modal">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><h3 className="project-modal__subheading">Project purpose</h3><p className="project-modal__purpose">{project.purpose}</p></div>
          </div>
          {project.formFields && <div className="project-modal__form-fields"><h3>Reservation enquiry fields</h3><div className="demo-tech-list demo-tech-list--modal">{project.formFields.map((field) => <span key={field}>{field}</span>)}</div></div>}
          {project.id === 'spice-haven' && <p className="project-modal__note"><CalendarDays size={14} /> The reservation enquiry form is a frontend demo, not a real booking system.</p>}
          <div className="project-modal__actions"><a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">View Live <ExternalLink size={15} /></a><a className="button button--outline" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <GitFork size={15} /></a></div>
        </div>
      </section>
    </div>
  )
}

const experiences = [
  {
    date: 'FEB 2026 — PRESENT',
    role: 'President — Cyber Club',
    organization: 'The S.I.A College of Higher Education (Autonomous)',
    location: 'Mumbai, Maharashtra, India',
    icon: ShieldCheck,
    current: true,
    points: [
      'Led an orientation session for 100+ students across 6 departments: B.Sc. IT, B.Com, BMS, BAF, BBI, and BAMMC.',
      'Designed the 2026–27 Cyber Club roadmap covering ethical hacking, AI workshops, and inter-college competitions.',
      'Built a cross-department student community around cybersecurity, AI, and responsible digital citizenship.',
      'Coordinated hands-on technical events and leadership initiatives for the academic year.',
    ],
  },
  {
    date: 'JUN 2026 — JUL 2026',
    role: 'Google Gemini Student Ambassador',
    organization: 'Google Student Ambassadors (India)',
    location: 'Mumbai, Maharashtra, India',
    icon: Sparkles,
    current: false,
    points: [
      'Selected as a Google Gemini Student Ambassador 2026.',
      'Promoted AI literacy and Google Gemini adoption among students.',
      'Organized campus outreach and awareness activities.',
      'Created educational content related to AI and productivity.',
      'Engaged with student communities and fellow ambassadors.',
      'Participated in training sessions, workshops, and program initiatives.',
    ],
  },
  {
    date: 'DEC 2025 — MAR 2026',
    role: 'AI Developer Intern — EcoPackAI',
    organization: 'Infosys Springboard',
    location: '',
    icon: Rocket,
    current: false,
    points: [
      'Built and deployed EcoPackAI, a live AI-powered sustainable packaging recommendation system for businesses.',
      'Designed an AI recommendation engine using Machine Learning to match packaging options to business needs.',
      'Worked with React Native, Expo, JavaScript, Python, Firebase, Gemini API, and Machine Learning.',
      'Deployed the full application to production using Render.',
      'Gained hands-on experience in AI development, cloud deployment, and real-world product delivery.',
    ],
  },
]

const certifications = [
  { name: 'Artificial Intelligence Primer', context: '', icon: BrainCircuit },
  { name: 'Internship 6.0 (B11) – EcoPackAI', context: '', icon: BadgeCheck },
  { name: 'AI for Beginners', context: '', icon: Sparkles },
  { name: 'Data Science & Analytics', context: '', icon: Activity },
  { name: '5-Day AI Agents Intensive Course with Google', context: '', icon: Network },
]

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false)
  const [titleIndex, setTitleIndex] = useState<number>(0)
  const [cursor, setCursor] = useState<{ x: number; y: number; visible: boolean; active: boolean }>({ x: -100, y: -100, visible: false, active: false })
  const [selectedProject, setSelectedProject] = useState<DemoProject | null>(null)
  const modalCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1350)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const titleTimer = window.setInterval(() => setTitleIndex((current) => (current + 1) % 3), 3100)
    return () => window.clearInterval(titleTimer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
      setShowBackToTop(window.scrollY > 560)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [isLoading])

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return
    const move = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setCursor({ x: event.clientX, y: event.clientY, visible: true, active: Boolean(target.closest('a, button, .tilt-card, .tech-chip')) })
    }
    const leave = () => setCursor((current) => ({ ...current, visible: false }))
    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    if (!selectedProject) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.classList.add('modal-open')
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    const focusFrame = window.requestAnimationFrame(() => modalCloseRef.current?.focus())
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('modal-open')
      previouslyFocused?.focus()
    }
  }, [selectedProject])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const activeTitle = ['AI/ML Developer', 'Software Developer', 'React Native Developer'][titleIndex]

  if (isLoading) return <LoadingScreen />

  return (
    <div className="app-shell">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className={`custom-cursor-dot ${cursor.visible ? 'is-visible' : ''} ${cursor.active ? 'is-active' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} />
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <header className={`site-header ${scrollProgress > 2 ? 'site-header--scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); scrollTo('home') }} aria-label="Esakki Raja Salaikumar home">
          <span className="brand-mark"><span /></span>
          <span className="brand-name">ERS<span>.</span></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'desktop-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} onClick={(event) => { event.preventDefault(); scrollTo(id) }}>
              {label}
            </a>
          ))}
        </nav>
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map(([label, id], index) => (
          <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} style={{ '--item-index': index } as CSSProperties} onClick={(event) => { event.preventDefault(); scrollTo(id) }}>
            <span>0{index + 1}</span>{label}
          </a>
        ))}
      </div>

      <main>
        <section className="hero section" id="home">
          <div className="hero__backdrop" aria-hidden="true"><span className="hero__backdrop-word">INTELLIGENCE</span><div className="hero__backdrop-line" /></div>
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="availability-pill reveal"><span className="live-dot" /> building intelligent experiences</div>
              <p className="hero-kicker reveal">AI / SOFTWARE / MOBILE <span className="line" /></p>
              <h1 className="reveal">ESAKKI RAJA<br /><span>SALAIKUMAR</span></h1>
              <div className="hero-title reveal" aria-live="polite"><span className="hero-title__slash">/</span><span key={activeTitle} className="hero-title__animated">{activeTitle}</span></div>
              <p className="hero-description reveal">AI/ML and software developer with hands-on experience building and deploying AI-powered applications and mobile solutions.</p>
              <p className="hero-location reveal"><MapPin size={13} /> Mumbai Metropolitan Region, India</p>
              <div className="hero-actions reveal">
                <button className="button button--primary" onClick={() => scrollTo('projects')}>View Projects <ArrowRight size={17} /></button>
                <button className="button button--quiet" onClick={() => scrollTo('contact')}>Contact Me <ArrowDownRight size={16} /></button>
              </div>
              <div className="hero-socials reveal">
                <SocialLink href={GITHUB_URL} label="GitHub" icon={GitFork} />
                <SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={BriefcaseBusiness} />
                <SocialLink href={`mailto:${EMAIL}`} label="Email" icon={Mail} external={false} />
              </div>
            </div>
            <div className="hero__visual reveal"><NeuralVisual /></div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to About Me"><span>scroll to explore</span><ChevronUp size={15} /></button>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual-wrap reveal"><AboutVisual /></div>
            <div className="about-copy">
              <SectionHeading eyebrow="01 / profile" title="About Me" />
              <p className="lead reveal">I build at the intersection of <em>intelligence</em>, product thinking, and responsible technology.</p>
              <p className="body-copy reveal">AI/ML and software developer with hands-on experience building and deploying AI-powered applications and mobile solutions.</p>
              <div className="about-focus reveal">
                <div className="focus-item"><BrainCircuit size={18} /><span>Machine Learning<br /><b>& AI application development</b></span></div>
                <div className="focus-item"><Smartphone size={18} /><span>Software & mobile<br /><b>application development</b></span></div>
                <div className="focus-item"><ShieldCheck size={18} /><span>Cybersecurity<br /><b>responsible digital citizenship</b></span></div>
              </div>
              <div className="leadership-note reveal"><Users size={17} /><span>Led 100+ students across six departments as <strong>Cyber Club President.</strong></span></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-row">
              <SectionHeading eyebrow="02 / capabilities" title="Technical Skills" copy="A practical stack for turning ideas into useful, intelligent products." />
              <div className="section-stamp"><span>stack</span><strong>05</strong><small>areas of practice</small></div>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => <SkillCard group={group} index={index} key={group.title} />)}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="03 / selected builds" title="Featured Projects" copy="An AI product build plus two client demo website concepts for real-world business categories." />
            <TiltCard className="project-shell reveal">
              <div className="project-visual-column"><RecommendationVisual /></div>
              <div className="project-copy">
                <div className="project-meta"><span className="project-number">01</span><span className="project-status"><span className="live-dot" /> deployed system</span></div>
                <h3>EcoPack<span>AI</span></h3>
                <p className="project-subtitle">AI-Powered Sustainable Packaging Recommendation System</p>
                <p className="project-description">Developed an AI-powered platform that generates sustainable packaging recommendations for business use cases.</p>
                <div className="project-details"><span><Zap size={14} /> ML recommendation engine</span><span><Rocket size={14} /> Infosys Springboard 6.0 Virtual Internship</span></div>
                <div className="badge-list">
                  {['React Native', 'Expo', 'JavaScript', 'Python', 'Firebase', 'Gemini API', 'Machine Learning', 'Render'].map((badge) => <span key={badge}>{badge}</span>)}
                </div>
                <div className="project-actions"><span className="no-link-note"><CircleDot size={14} /> project links not provided</span></div>
              </div>
            </TiltCard>
            <div className="demo-projects-grid">
              {demoProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index + 1} onOpen={setSelectedProject} />)}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="04 / journey" title="Experience" copy="Leadership, community, and product delivery—grounded in hands-on work." />
            <div className="timeline timeline--experience">
              <div className="timeline-line"><span /></div>
              {experiences.map((experience, index) => {
                const Icon = experience.icon
                return (
                  <article className={`timeline-item reveal ${index % 2 === 1 ? 'timeline-item--offset' : ''}`} key={experience.role}>
                    <div className={`timeline-node ${experience.current ? 'timeline-node--active' : ''}`}><Icon size={15} /></div>
                    <div className="timeline-card">
                      <div className="timeline-card__top"><span className="timeline-date">{experience.date}</span>{experience.current && <span className="current-tag">current</span>}</div>
                      <h3>{experience.role}</h3>
                      <p className="timeline-org">{experience.organization}</p>
                      {experience.location && <p className="timeline-location">{experience.location}</p>}
                      <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section achievement-section" id="achievements">
          <div className="container">
            <SectionHeading eyebrow="05 / recognition" title="Achievements" />
            <TiltCard className="achievement-card reveal">
              <div className="achievement-glow" />
              <div className="achievement-visual"><div className="trophy-ring trophy-ring--one" /><div className="trophy-ring trophy-ring--two" /><Trophy size={55} strokeWidth={1.1} /><span>01</span></div>
              <div className="achievement-copy"><span className="achievement-kicker"><span className="eyebrow-dot" /> main achievement</span><h3>1ST PLACE<br /><span>WINNER</span></h3><p className="achievement-title">ML SHOWDOWN HACKATHON</p><p className="achievement-team">Team Quantum Nexus</p><p className="achievement-organizer">Organized by Department of Information Technology,<br />SVKM&apos;s Narsee Monjee College</p><p className="achievement-description">Secured 1st Place at the ML Showdown Hackathon as a member of Team Quantum Nexus.</p></div>
              <div className="achievement-side-label">recognition / 2026</div>
            </TiltCard>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container education-grid">
            <SectionHeading eyebrow="06 / foundation" title="Education" copy="The academic foundation behind the work." />
            <div className="timeline timeline--education">
              <div className="timeline-line"><span /></div>
              <article className="education-item reveal"><div className="timeline-node"><GraduationCap size={15} /></div><div><span className="timeline-date">JUNE 2025</span><h3>Bachelor of Science <span>(Information Technology)</span></h3><p>The S.I.A College of Higher Education</p></div></article>
              <article className="education-item reveal"><div className="timeline-node"><GraduationCap size={15} /></div><div><span className="timeline-date">2024 — 2025</span><h3>Higher Secondary Education</h3><p>Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)</p></div></article>
            </div>
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="container">
            <div className="section-row"><SectionHeading eyebrow="07 / continued learning" title="Certifications" copy="Curiosity, kept practical." /><span className="certification-count">05 <small>learning records</small></span></div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return <TiltCard className="certification-card reveal" key={cert.name}><div className="certification-card__top"><span className="certification-index">0{index + 1}</span><span className="certification-icon"><Icon size={18} /></span></div><h3>{cert.name}</h3><span className="certification-line" /><span className="certification-foot">verified learning record <ArrowUpRightIcon /></span></TiltCard>
              })}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-shell reveal">
            <div className="contact-decoration" aria-hidden="true"><span /><span /><span /></div>
            <div className="contact-copy"><span className="eyebrow"><span className="eyebrow-dot" />08 / open channel</span><h2>Let&apos;s build something <em>intelligent.</em></h2><p>Have an idea, project, or opportunity? Let&apos;s connect.</p></div>
            <div className="contact-links"><a className="contact-email" href={`mailto:${EMAIL}`}><span className="contact-link-icon"><Mail size={18} /></span><span><small>email</small>{EMAIL}</span><ArrowRight size={17} /></a><div className="contact-socials"><SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={BriefcaseBusiness} /><SocialLink href={GITHUB_URL} label="GitHub" icon={GitFork} /></div><div className="contact-buttons"><a className="button button--primary" href={`mailto:${EMAIL}`}>Email Me <Send size={16} /></a><a className="button button--outline" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={16} /></a><a className="button button--outline" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub <ArrowRight size={16} /></a><button className="button button--disabled" disabled title="Resume file not provided">Resume unavailable <span>—</span></button></div></div>
          </div>
        </section>
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} closeRef={modalCloseRef} />

      <footer className="site-footer"><div className="container footer-inner"><div><a className="footer-brand" href="#home" onClick={(event) => { event.preventDefault(); scrollTo('home') }}>ESAKKI RAJA SALAIKUMAR<span>.</span></a><p>AI/ML Developer <span>|</span> Software Developer <span>|</span> React Native Developer</p></div><div className="footer-right"><div className="footer-socials"><SocialLink href={GITHUB_URL} label="GitHub" icon={GitFork} /><SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={BriefcaseBusiness} /><SocialLink href={`mailto:${EMAIL}`} label="Email" icon={Mail} external={false} /></div><span className="copyright">Copyright © 2026 Esakki Raja Salaikumar</span></div></div></footer>
      {showBackToTop && <button className="back-to-top" onClick={() => scrollTo('home')} aria-label="Back to top"><ChevronUp size={18} /></button>}
    </div>
  )
}

function ArrowUpRightIcon() {
  return <ArrowRight size={14} className="arrow-up-right" />
}

export default App
