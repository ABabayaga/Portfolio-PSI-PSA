import Header from '@/components/Header'
import HeroSection from '@/components/HomeSection'
import AboutSection from '@/components/HomeSection2'
import ServicesSection from '@/components/AboutSection'
import ContactSection from '@/components/TherapytSection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  )
}