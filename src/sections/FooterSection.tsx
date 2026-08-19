import { ArrowRight } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NAV_LINKS = ["About", "Services", "Projects", "FAQ", "Contact"];
const SERVICE_LINKS = [
  "WordPress Development",
  "WooCommerce Stores",
  "Custom Websites",
  "Web Applications",
  "Mobile Apps",
  "SEO",
  "Digital Marketing",
  "AI Automation",
];
const SOCIAL_LINKS = ["Twitter / X", "LinkedIn", "Dribbble", "GitHub"];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 px-3 sm:px-4 md:px-6">
      {/* ══ CTA SECTION ══ */}
      <div className="max-w-6xl mx-auto pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 border-b border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8">
          <div>
            <p className="text-gray-500 text-[11px] sm:text-xs uppercase tracking-widest mb-2.5 sm:mb-3.5">
              Ready when you are
            </p>
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Horizon Dev Solutions
            </h2>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 transition-all duration-300 self-start sm:self-center shrink-0 cursor-pointer border-none"
          >
            <span className="text-black font-medium text-sm sm:text-base whitespace-nowrap">
              Start a project
            </span>
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
              <ArrowRight size={15} className="text-[#E1E0CC]" />
            </span>
          </button>
        </div>
      </div>

      {/* ══ LINKS SECTION ══ */}
      <div className="max-w-6xl mx-auto py-10 sm:py-12 md:py-14 border-b border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <p className="text-primary text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              HDS
            </p>
            <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed max-w-[240px]">
              A digital agency building, marketing, and automating premium
              digital experiences from Lahore, Pakistan.
            </p>
          </div>

          {/* Navigation + Services — two columns on small screens, part of grid on larger */}
          <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8">
            {/* Company nav */}
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-500 mb-4 sm:mb-5">
                Company
              </p>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {NAV_LINKS.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="text-primary/60 text-[13px] sm:text-sm hover:text-primary transition-colors duration-200 cursor-pointer bg-transparent border-none text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1 sm:col-span-1">
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-500 mb-4 sm:mb-5">
                Services
              </p>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {SERVICE_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-primary/60 text-[13px] sm:text-sm hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-500 mb-4 sm:mb-5">
                Connect
              </p>
              {/* On mobile — horizontal row of links */}
              <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2.5 sm:flex-col sm:gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-primary/60 text-[13px] sm:text-sm hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div className="max-w-6xl mx-auto py-6 sm:py-7">
        <div className="flex flex-col xs:flex-row items-center justify-between gap-2 text-center xs:text-left">
          <p className="text-gray-600 text-[11px] sm:text-xs">
            &copy; {year} Horizon Dev Solutions. All rights reserved.
          </p>
          <p className="text-gray-600 text-[11px] sm:text-xs">
            Built with care in Lahore &#127477;&#127472;
          </p>
        </div>
      </div>
    </footer>
  );
}
