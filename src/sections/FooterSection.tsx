import { ArrowRight } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NAV_LINKS = ["About", "Services", "Projects", "Contact"];
const SERVICE_LINKS = [
  "WordPress Development",
  "WooCommerce Stores",
  "Custom Websites",
  "Web Applications",
  "Mobile Apps",
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
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-2 sm:mb-3">
              Ready when you are
            </p>
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Horizon Dev Solutions
            </h2>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-4 sm:pl-5 pr-1 py-1 transition-all duration-300 self-start sm:self-center shrink-0 cursor-pointer border-none"
          >
            <span className="text-black font-medium text-xs sm:text-sm whitespace-nowrap">
              Start a project
            </span>
            <span className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
              <ArrowRight size={13} className="text-[#E1E0CC]" />
            </span>
          </button>
        </div>
      </div>

      {/* ══ LINKS SECTION ══ */}
      <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 border-b border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <p className="text-primary text-base sm:text-lg font-bold mb-2 sm:mb-3">
              HDS
            </p>
            <p className="text-gray-600 text-xs leading-relaxed max-w-[200px]">
              A digital agency crafting premium WordPress, web, and mobile
              experiences from Lahore, Pakistan.
            </p>
          </div>

          {/* Navigation + Services — two columns on small screens, part of grid on larger */}
          <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8">
            {/* Company nav */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3 sm:mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-2 sm:gap-2.5">
                {NAV_LINKS.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="text-primary/50 text-xs hover:text-primary transition-colors duration-200 cursor-pointer bg-transparent border-none text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1 sm:col-span-1">
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3 sm:mb-4">
                Services
              </p>
              <ul className="flex flex-col gap-2 sm:gap-2.5">
                {SERVICE_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-primary/50 text-xs hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3 sm:mb-4">
                Connect
              </p>
              {/* On mobile — horizontal row of links */}
              <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-primary/50 text-xs hover:text-primary transition-colors duration-200"
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
      <div className="max-w-6xl mx-auto py-5 sm:py-6">
        <div className="flex flex-col xs:flex-row items-center justify-between gap-2 text-center xs:text-left">
          <p className="text-gray-700 text-[10px]">
            &copy; {year} Horizon Dev Solutions. All rights reserved.
          </p>
          <p className="text-gray-700 text-[10px]">
            Built with care in Lahore &#127477;&#127472;
          </p>
        </div>
      </div>
    </footer>
  );
}
