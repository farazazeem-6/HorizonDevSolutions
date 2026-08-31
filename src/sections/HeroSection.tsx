import { useState, useEffect } from 'react'
import WordsPullUp from '../components/WordsPullUp'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_ITEMS = ['About', 'Services', 'Projects', 'FAQ', 'Contact']

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleNavClick = (item: string) => {
    setMenuOpen(false)
    // Let the drawer close before scrolling so the two animations don't fight
    setTimeout(() => scrollTo(item.toLowerCase()), 300)
  }

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="hero" className="h-screen p-3 sm:p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/85 z-[2]" />

        {/* ── Navbar — desktop links ── */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-black rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl px-3 sm:px-5 md:px-8 py-2">
            <nav className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer bg-transparent border-none"
                  style={{ color: 'rgba(225,224,204,0.75)' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E1E0CC')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(225,224,204,0.75)')}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Navbar — mobile menu button ── */}
        <div className="md:hidden absolute top-0 right-3 sm:right-5 z-10">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex items-center gap-2 bg-black rounded-b-xl sm:rounded-b-2xl px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer border-none"
          >
            <Menu size={14} className="text-primary/75" />
            <span className="text-primary/75 text-[11px] sm:text-xs uppercase tracking-widest">
              Menu
            </span>
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="md:hidden fixed inset-0 z-40 bg-black/60"
                style={{ backdropFilter: 'blur(4px)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Panel */}
              <motion.div
                className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

                {/* Panel header */}
                <div className="relative flex items-center justify-between px-6 pt-6 pb-2">
                  <span className="text-primary/40 text-[10px] uppercase tracking-widest">
                    Menu
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer bg-transparent"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Links — large display type */}
                <nav className="relative flex-1 flex flex-col justify-center px-6 pb-10">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.07,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-baseline gap-3 py-3 text-left cursor-pointer bg-transparent border-none border-b border-white/5 last:border-b-0"
                    >
                      <span className="text-primary/25 text-[10px] tabular-nums shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-primary text-3xl sm:text-4xl font-serif italic font-normal leading-[1.05] tracking-tight group-hover:text-primary/70 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Panel footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative px-6 pb-8 pt-4 border-t border-white/5"
                >
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-3">
                    Have a project?
                  </p>
                  <button
                    onClick={() => handleNavClick('Contact')}
                    className="group w-full flex items-center justify-between gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-primary text-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  >
                    Start a project
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── Hero content — bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-5 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-5">

            {/* Heading block */}
            <div className="min-w-0">
              <p
                className="text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase mb-1 sm:mb-2 opacity-55"
                style={{ color: '#E1E0CC' }}
              >
                Digital Agency
              </p>
              {/* Each word on its own line keeps sizing safe at 350px */}
              <h1
                className="font-medium leading-[0.85] tracking-[-0.05em] text-[14vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="Horizon" />
              </h1>
              <h1
                className="font-medium leading-[0.85] tracking-[-0.05em] text-[14vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] text-primary/40"
              >
                <WordsPullUp text="Dev Solutions" delayOffset={0.15} />
              </h1>
            </div>

            {/* Tagline + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-3 sm:gap-4 pb-1 lg:pb-4 lg:max-w-xs shrink-0">
              <motion.p
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] sm:text-xs md:text-sm text-primary/65 lg:text-right leading-snug max-w-[260px] lg:max-w-none"
              >
                We design, build, and grow digital products — everything your business needs to win online.
              </motion.p>

              <motion.button
                onClick={() => scrollTo('projects')}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-4 pr-1 py-1 transition-all duration-300 cursor-pointer border-none shadow-[0_0_24px_-4px_rgba(127,186,140,0.55)] hover:shadow-[0_0_32px_-2px_rgba(127,186,140,0.75)]"
              >
                <span className="text-black font-medium text-xs sm:text-sm whitespace-nowrap">
                  View our work
                </span>
                <span className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <ArrowRight size={14} className="text-[#E1E0CC]" />
                </span>
              </motion.button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
