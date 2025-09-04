import { useEffect } from "react"
import {
  Navbar,
  Hero,
  FeaturedProperties,
  WhyUs,
  Testimonials,
  ContactSection,
  Footer
} from "@/components/sections"

export default function LandingPage() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in-up')
      elements.forEach(element => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          element.classList.add('animate')
        }
      })
    }

    window.addEventListener('scroll', handleScrollAnimation)
    handleScrollAnimation() // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation)
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onScrollToSection={scrollToSection} />
      <Hero onScrollToSection={scrollToSection} />
      {/* <FeaturedProperties /> */}
      <WhyUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}