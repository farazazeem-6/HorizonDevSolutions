import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const FAQS = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most marketing websites take 3–5 weeks from kickoff to launch. Larger builds — e-commerce stores or custom web applications — usually run 6–12 weeks depending on scope. We share a clear timeline with milestones before any work begins, so you always know what is happening and when.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Pricing depends entirely on scope. A focused landing page starts considerably lower than a full WooCommerce store or a custom SaaS dashboard. After a short discovery call we send a fixed-price proposal with a detailed breakdown — no hourly surprises and no hidden fees.',
  },
  {
    question: 'How long before I see results from SEO?',
    answer:
      'Technical fixes can lift rankings within a few weeks, but meaningful growth in organic traffic typically shows between months three and six. SEO compounds — the work done early keeps paying off. We report on rankings, traffic, and conversions monthly so you can see progress long before the big wins land.',
  },
  {
    question: 'Do you handle digital marketing and the website together?',
    answer:
      'That is where we do our best work. A site built with campaigns in mind converts far better than one marketing gets bolted onto later — tracking is right from day one, landing pages match the ads, and nothing gets lost between the two. We are happy to run marketing on a site we did not build, too.',
  },
  {
    question: 'What can AI automation actually do for my business?',
    answer:
      'Usually it removes the repetitive work quietly draining your team’s hours — answering the same customer questions, qualifying inbound leads, moving data between tools, processing documents and invoices. We start by finding which tasks are worth automating, then build only those. If the numbers do not justify it, we will tell you.',
  },
  {
    question: 'Do you design the website as well, or only build it?',
    answer:
      'We handle both. Every project starts with design — wireframes, then a full visual direction tailored to your brand. Nothing is built from a template. Once you approve the design, we move into development with the exact look already locked in.',
  },
  {
    question: 'Will my website work well on mobile phones?',
    answer:
      'Always. Every site we ship is built responsive-first and tested across phones, tablets, and desktops before launch. We also optimise loading speed on mobile networks, since that is where most of your visitors will arrive from.',
  },
  {
    question: 'Can I update the website content myself after launch?',
    answer:
      'Yes. We connect your site to a CMS — WordPress or a headless option — so you can edit text, images, blog posts, and products without touching code. We also record a short walkthrough video for your team covering the parts you will use most.',
  },
  {
    question: 'Do you provide support after the website goes live?',
    answer:
      'Every project includes 30 days of post-launch support for fixes and small adjustments. Beyond that, we offer ongoing maintenance plans covering updates, backups, security monitoring, and performance checks — entirely optional, never locked in.',
  },
  {
    question: 'Can I hire you for just one service?',
    answer:
      'Of course. Plenty of clients come to us for SEO on a site someone else built, or automation for a business with no website work needed at all. Each service stands on its own — we will only suggest combining them when it genuinely makes your results better.',
  },
]

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="bg-black relative py-14 sm:py-20 md:py-28 px-3 sm:px-4 md:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-10 sm:mb-14 md:mb-20">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-6">
            FAQs
          </p>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.92] max-w-2xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Questions we get', className: 'text-primary font-normal' },
                { text: 'asked the most.', className: 'text-primary font-serif italic' },
              ]}
              containerClassName="justify-start"
            />
          </div>
        </div>

        {/* ── Accordion ── */}
        <div ref={ref} className="flex flex-col gap-3 sm:gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group bg-[#0d0d0d] border rounded-2xl overflow-hidden transition-colors duration-500 ${
                  isOpen ? 'border-primary/20' : 'border-white/5 hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left px-5 sm:px-8 py-5 sm:py-6 cursor-pointer bg-transparent"
                >
                  <h3
                    className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
                      isOpen ? 'text-primary' : 'text-primary/80 group-hover:text-primary'
                    }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Plus / Cross toggle */}
                  <span
                    className={`w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-white/10 text-primary/50 group-hover:border-primary/40 group-hover:text-primary'
                    }`}
                  >
                    <motion.span
                      className="flex items-center justify-center"
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-8 pb-5 sm:pb-6">
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
