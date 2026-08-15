import WordsPullUp from '../components/WordsPullUp'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const NAV_ITEMS = ['About', 'Services', 'Projects', 'Contact']

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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

        {/* ── Navbar ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
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
                WordPress, custom websites and web apps — built to grow your business.
              </motion.p>

              <motion.button
                onClick={() => scrollTo('projects')}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-4 pr-1 py-1 transition-all duration-300 cursor-pointer border-none"
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
