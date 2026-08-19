import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight, ChevronDown } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

interface Project {
  id: string
  title: string
  category: string
  year: string
  desc: string
  highlights: string[]
  image: string        // Replace with real project screenshot URL
  liveUrl: string      // Replace with real live URL
  span: 'wide' | 'narrow'
  accentColor: string
}

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'FreshCart',
    category: 'WooCommerce Store',
    year: '2024',
    desc: 'Full-featured grocery e-commerce store with custom WooCommerce checkout, loyalty rewards, and same-day delivery scheduling.',
    highlights: ['WooCommerce', 'Custom Checkout', 'Payment Gateway'],
    image: 'https://placehold.co/900x480/101010/DEDBC8?text=FreshCart+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'wide',
    accentColor: '#B8A88A',
  },
  {
    id: '02',
    title: 'Archway',
    category: 'Custom Website',
    year: '2024',
    desc: 'Bespoke real estate agency website with property listings, virtual tour embeds, and a lead capture CRM integration.',
    highlights: ['Custom Design', 'WordPress', 'CRM Integration'],
    image: 'https://placehold.co/440x480/101010/8B9E8E?text=Archway+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'narrow',
    accentColor: '#8B9E8E',
  },
  {
    id: '03',
    title: 'LegalEdge',
    category: 'Web Application',
    year: '2023',
    desc: 'Client portal web app for a law firm — case tracking, document uploads, appointment scheduling, and invoice management.',
    highlights: ['Web App', 'Client Portal', 'Dashboard'],
    image: 'https://placehold.co/440x480/101010/9E8B6E?text=LegalEdge+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'narrow',
    accentColor: '#9E8B6E',
  },
  {
    id: '04',
    title: 'TrailMate',
    category: 'Mobile App',
    year: '2023',
    desc: 'Cross-platform hiking and trail app with offline maps, GPS tracking, community trail reviews, and social features — live on iOS and Android.',
    highlights: ['iOS & Android', 'React Native', 'Offline Maps'],
    image: 'https://placehold.co/900x480/101010/8A8EB8?text=TrailMate+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'wide',
    accentColor: '#8A8EB8',
  },
  {
    id: '05',
    title: 'Northwind',
    category: 'Custom Website',
    year: '2023',
    desc: 'Corporate site for a logistics firm — live shipment tracking, multi-language support, and a resource hub built for organic search.',
    highlights: ['Custom Design', 'Multi-language', 'SEO'],
    image: 'https://placehold.co/900x480/101010/7FA3A8?text=Northwind+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'wide',
    accentColor: '#7FA3A8',
  },
  {
    id: '06',
    title: 'Lumen Studio',
    category: 'WordPress',
    year: '2023',
    desc: 'Portfolio site for a photography studio with a custom gallery engine, client proofing areas, and booking enquiries.',
    highlights: ['WordPress', 'Custom Theme', 'Gallery'],
    image: 'https://placehold.co/440x480/101010/C2A878?text=Lumen+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'narrow',
    accentColor: '#C2A878',
  },
  {
    id: '07',
    title: 'Pulse HR',
    category: 'Web Application',
    year: '2022',
    desc: 'Internal HR dashboard handling onboarding, leave requests, and payroll exports with role-based access for 200+ staff.',
    highlights: ['Dashboard', 'User Roles', 'Automation'],
    image: 'https://placehold.co/440x480/101010/A88BA3?text=Pulse+HR+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'narrow',
    accentColor: '#A88BA3',
  },
  {
    id: '08',
    title: 'Verde Kitchen',
    category: 'WooCommerce Store',
    year: '2022',
    desc: 'Meal-kit subscription store with recurring billing, delivery zone logic, recipe content, and a fully custom cart experience.',
    highlights: ['WooCommerce', 'Subscriptions', 'Custom Cart'],
    image: 'https://placehold.co/900x480/101010/8FAF85?text=Verde+Kitchen+Screenshot',
    liveUrl: 'https://your-live-link.com',
    span: 'wide',
    accentColor: '#8FAF85',
  },
]

const INITIAL_COUNT = 4

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = useState(false)

  const visibleProjects = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT)

  const handleCollapse = () => {
    setExpanded(false)
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="projects" className="bg-black py-14 sm:py-20 md:py-28 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col xs:flex-row xs:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <div>
            <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5">
              Selected work
            </p>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.9]">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Projects we are', className: 'text-primary font-normal' },
                  { text: 'proud of.', className: 'text-primary font-serif italic' },
                ]}
                containerClassName="justify-start"
              />
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-1.5 text-primary/55 text-xs sm:text-sm hover:text-primary transition-colors duration-300 shrink-0 cursor-pointer bg-transparent border-none self-start xs:self-auto"
          >
            Start a project
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* ── Grid ── */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <AnimatePresence initial={false}>
          {visibleProjects.map((project, i) => {
            const isExtra = i >= INITIAL_COUNT
            return (
            <motion.div
              key={project.id}
              layout
              className={[
                'group relative rounded-2xl overflow-hidden border border-white/5',
                'hover:border-white/10 transition-all duration-500 flex flex-col bg-[#0a0a0a]',
                project.span === 'wide' ? 'md:col-span-2' : 'md:col-span-1',
              ].join(' ')}
              initial={{ opacity: 0, y: 32 }}
              animate={isExtra || isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.7,
                delay: (isExtra ? (i - INITIAL_COUNT) : i) * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* ── Image placeholder ── */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: project.span === 'wide' ? '16/7' : '4/3' }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-50"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                  }}
                />
                {/* Live link — reveals on hover; always visible on touch devices */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover-reveal absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: `${project.accentColor}20`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}45`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <ExternalLink size={10} />
                  View live
                </a>
              </div>

              {/* ── Card body ── */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6">
                {/* Category + year row */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span
                    className="text-[10px] font-medium tracking-wide uppercase px-2 sm:px-2.5 py-1 rounded-full border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}35`,
                      backgroundColor: `${project.accentColor}12`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[10px] text-gray-600">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-medium tracking-tight mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4">
                  {project.desc}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] text-gray-600 border border-white/8 rounded-full px-2 sm:px-2.5 py-0.5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
            )
          })}
          </AnimatePresence>
        </div>

        {/* ── Show more / less ── */}
        <motion.div layout className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={() => (expanded ? handleCollapse() : setExpanded(true))}
            aria-expanded={expanded}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0d0d] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-primary/70 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            {expanded ? 'Show less' : `Show ${PROJECTS.length - INITIAL_COUNT} more projects`}
            <motion.span
              className="flex items-center justify-center"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChevronDown size={15} />
            </motion.span>
          </button>
        </motion.div>

      </div>
    </section>
  )
}
