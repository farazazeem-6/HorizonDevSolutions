import WordsPullUpMultiStyle from "../components/WordsPullUpMultiStyle";
import AnimatedParagraph from "../components/AnimatedParagraph";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "50+", label: "Projects shipped" },
  { value: "2+", label: "Years of craft" },
  { value: "30+", label: "Happy clients" },
  { value: "100%", label: "Satisfaction rate" },
];

const SPECIALTIES = [
  "WordPress",
  "WooCommerce",
  "Custom Websites",
  "Web Applications",
  "Mobile Apps",
  "UI/UX Design",
];

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="bg-black py-14 sm:py-20 md:py-28 px-3 sm:px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16">
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8">
            About us
          </p>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Left — heading + body */}
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[0.95] mb-6 sm:mb-8">
                <WordsPullUpMultiStyle
                  segments={[
                    {
                      text: "We build things that",
                      className: "font-normal text-primary",
                    },
                    {
                      text: "actually work.",
                      className: "font-serif italic text-primary",
                    },
                  ]}
                  containerClassName="justify-start"
                />
              </div>
              <AnimatedParagraph
                text="Horizon Dev Solutions is a Pakistan-based digital agency specialising in WordPress development, WooCommerce stores, custom websites, web applications, and mobile apps. We partner with startups and growing businesses to craft digital experiences that are fast, beautiful, and built to convert."
                className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
              />
            </div>

            {/* Right — stats grid */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-3 sm:gap-4 content-start"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-black/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1"
                    style={{ color: "#E1E0CC" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialty pills */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap gap-2 sm:gap-3">
            {SPECIALTIES.map((item) => (
              <span
                key={item}
                className="text-[10px] sm:text-xs text-primary/60 border border-primary/20 rounded-full px-2.5 sm:px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
