import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const TESTIMONIALS = [
  {
    quote: "Working with this team completely transformed our online presence. The website they built is fast, beautiful, and has already increased our leads significantly.",
    author: "Sarah Johnson",
    role: "CEO, Bloom Retail"
  },
  {
    quote: "Professional, creative, and always on time. They understood our vision from day one and delivered a site that perfectly represents our brand.",
    author: "Michael Chen",
    role: "Founder, Chen Interiors"
  },
  {
    quote: "The entire process was smooth from start to finish. Communication was excellent, deadlines were met, and the final website exceeded our expectations.",
    author: "David Walker",
    role: "CEO, Walker Digital"
  },
  {
    quote: "The attention to detail and the 3D visuals really set our project apart from anything our competitors have. Highly recommend their work.",
    author: "Amelia Rivera",
    role: "Marketing Lead, Nextlevel Studio"
  },
  {
    quote: "Our new website looks modern, loads incredibly fast, and has helped us build more trust with potential clients. A fantastic experience overall.",
    author: "Emily Carter",
    role: "Founder, Carter Consulting"
  },
  {
    quote: "They took our ideas and turned them into a stunning website with clean design, smooth animations, and excellent performance across all devices.",
    author: "James Thompson",
    role: "Director, VisionTech Solutions"
  }
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  // const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getVisibleCards = () => {
    if (windowWidth < 640) return 1
    if (windowWidth < 1024) return 2
    return 3
  }

  const visibleCards = getVisibleCards()
  const maxIndex = TESTIMONIALS.length - visibleCards

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [maxIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="bg-black py-14 sm:py-20 md:py-28 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4">
              Testimonials
            </p>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.92] max-w-2xl">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'What our clients', className: 'text-primary font-normal' },
                  { text: 'say about us.', className: 'text-primary font-serif italic' },
                ]}
                containerClassName="justify-start"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer bg-transparent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer bg-transparent"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div ref={ref} className="w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[260px] hover:border-primary/20 transition-colors duration-500">
                  <div>
                    <Quote className="text-primary/20 mb-4 sm:mb-6" size={24} />
                    <p className="text-primary/95 text-sm sm:text-base leading-relaxed font-light mb-6">
                      “{item.quote}”
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-primary text-sm font-semibold tracking-wide">
                      {item.author}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
