import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  containerClassName?: string
  delayOffset?: number
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delayOffset = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  // Flatten all words preserving their segment className
  const allWords: { word: string; className: string }[] = []
  segments.forEach((seg) => {
    const words = seg.text.split(' ')
    words.forEach((word) => {
      if (word) allWords.push({ word, className: seg.className || '' })
    })
  })

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          className={`overflow-hidden inline-block mr-[0.2em] ${item.className}`}
          style={{ display: 'inline-block' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delayOffset + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}
