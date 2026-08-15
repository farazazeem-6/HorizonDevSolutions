import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, ShoppingCart, Code2, Layers, Smartphone, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const SERVICES = [
  {
    icon: Globe,
    number: '01',
    title: 'WordPress Development',
    desc: 'Custom WordPress websites built from scratch — pixel-perfect themes, plugin development, speed optimisation, and seamless migrations. We make WordPress work exactly the way you need it.',
    highlights: ['Custom themes & templates', 'Plugin development', 'Speed & SEO optimisation', 'WordPress migrations'],
  },
  {
    icon: ShoppingCart,
    number: '02',
    title: 'WooCommerce Stores',
    desc: 'Full-featured online stores powered by WooCommerce. Payment gateway integration, inventory management, custom checkout flows, and everything else your e-commerce business needs.',
    highlights: ['Payment gateway setup', 'Custom checkout & cart', 'Inventory management', 'Store performance tuning'],
  },
  {
    icon: Code2,
    number: '03',
    title: 'Custom Websites',
    desc: 'Bespoke, fully hand-crafted websites designed and built from the ground up. No templates — just clean code, stunning design, and an experience tailored entirely to your brand.',
    highlights: ['Fully custom design', 'Fast-loading & SEO-ready', 'CMS integration', 'Responsive on all devices'],
  },
  {
    icon: Layers,
    number: '04',
    title: 'Web Applications',
    desc: 'Complex web platforms — dashboards, SaaS tools, booking systems, portals — built with modern frameworks for performance and scale. From MVP to full production.',
    highlights: ['SaaS & dashboard builds', 'API & backend development', 'Authentication & user roles', 'Scalable architecture'],
  },
  {
    icon: Smartphone,
    number: '05',
    title: 'App Development',
    desc: 'iOS and Android apps — native or cross-platform — with buttery-smooth interactions and a design your users will love. From concept to App Store launch.',
    highlights: ['iOS & Android', 'React Native / cross-platform', 'App Store submission', 'Push notifications & APIs'],
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="bg-black relative py-14 sm:py-20 md:py-28 px-3 sm:px-4 md:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-10 sm:mb-14 md:mb-20">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-6">
            What we do
          </p>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.92] max-w-2xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Services built to', className: 'text-primary font-normal' },
                { text: 'grow your business.', className: 'text-primary font-serif italic' },
              ]}
              containerClassName="justify-start"
            />
          </div>
        </div>

        {/* ── Cards Grid (2-column layout on desktop) ── */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            const isLast = svc.number === '05'

            return (
              <motion.div
                key={svc.title}
                className={`group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-500 cursor-pointer min-h-[300px] ${
                  isLast ? 'md:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-600">{svc.number}</span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-medium mb-3 group-hover:text-primary/90 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Bar inside Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {svc.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] sm:text-xs text-primary/55 border border-primary/15 rounded-full px-2.5 py-0.5 sm:py-1"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-primary/50 group-hover:border-primary/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300 shrink-0 self-end sm:self-auto">
                    <ArrowRight size={14} style={{ transform: 'rotate(-45deg)' }} />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
