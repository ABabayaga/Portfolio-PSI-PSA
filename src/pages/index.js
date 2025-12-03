import Header from '@/components/Header'
import HeroSection from '@/components/HomeSection'
import AboutSection from '@/components/HomeSection2'
import ServicesSection from '@/components/AboutSection'
import ContactSection from '@/components/TherapytSection'
import Footer from '@/components/Footer'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Pãmella S. Aranda</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Atendimento psicológico humanizado, com base em estudos científicos, acolhendo a dor e promovendo transformação."
        />
        <link rel="icon" href="/psi.png" />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  )
}