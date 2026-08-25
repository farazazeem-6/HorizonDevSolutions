import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import WordsPullUpMultiStyle from "../components/WordsPullUpMultiStyle";

const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
  { icon: Mail, label: "Email", value: "info@horizondevsolutions.com" },
  { icon: Phone, label: "Phone", value: "+92 319 1784223" },
];

const BUDGETS = ["Under $1k", "$1k - $5k", "$5k - $15k", "$15k+"];

const SERVICES = [
  "WordPress Development",
  "WooCommerce Store",
  "Custom Website",
  "Web Application",
  "Mobile App",
  "SEO",
  "Digital Marketing",
  "AI Automation",
  "Other",
];

const INPUT_BASE =
  "w-full bg-transparent border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-primary text-xs sm:text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/40 transition-colors duration-300";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", service: "", budget: "", message: "" });
  };

  const selectStyle = { background: "#0d0d0d", color: "#DEDBC8" };

  return (
    <section
      id="contact"
      className="bg-black py-14 sm:py-20 md:py-28 px-3 sm:px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16">
          {/* ── Header ── */}
          <div className="mb-8 sm:mb-12">
            <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5">
              Get in touch
            </p>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.9] max-w-2xl">
              <WordsPullUpMultiStyle
                segments={[
                  {
                    text: "Let us build something",
                    className: "text-primary font-normal",
                  },
                  {
                    text: "great together.",
                    className: "text-primary font-serif italic",
                  },
                ]}
                containerClassName="justify-start"
              />
            </div>
          </div>

          {/* ── Two-col layout ── */}
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16"
          >
            {/* ── Form (wider) ── */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:col-span-3 flex flex-col gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  className={INPUT_BASE}
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  className={INPUT_BASE}
                  required
                />
              </div>

              {/* Service + Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, service: e.target.value }))
                  }
                  className={`${INPUT_BASE} appearance-none`}
                  required
                >
                  <option value="" disabled style={selectStyle}>
                    Service needed
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} style={selectStyle}>
                      {s}
                    </option>
                  ))}
                </select>
                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, budget: e.target.value }))
                  }
                  className={`${INPUT_BASE} appearance-none`}
                  required
                >
                  <option value="" disabled style={selectStyle}>
                    Project budget
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} style={selectStyle}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                className={`${INPUT_BASE} resize-none`}
                required
              />

              {/* Submit */}
              <button
                type="submit"
                className="group self-start flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-4 sm:pl-5 pr-1 py-1 transition-all duration-300 cursor-pointer"
              >
                <span className="text-black font-medium text-xs sm:text-sm whitespace-nowrap">
                  {sent ? "Message sent!" : "Send message"}
                </span>
                <span className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <Send size={13} className="text-[#E1E0CC]" />
                </span>
              </button>
            </motion.form>

            {/* ── Contact info ── */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-6 sm:gap-8"
              initial={{ opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex flex-col gap-4 sm:gap-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-primary/55" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-[10px] uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-primary text-xs sm:text-sm break-all">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-5 sm:pt-6">
                <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries,
                  reach us during business hours{" "}
                  <span className="text-primary/45">Mon-Fri, 9am-6pm PKT</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
