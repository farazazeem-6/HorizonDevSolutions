import './index.css'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FooterSection from './sections/FooterSection'
import ContactSection from './sections/ContactSection'
import ProjectsSection from './sections/ProjectsSection'
import ServicesSection from './sections/ServicesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FaqSection from './sections/FaqSection'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
