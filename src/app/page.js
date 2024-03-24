
import Image from 'next/image'

import Navbar from '@/Components/ReusableComponet/Navbar'
import HeroSection from '@/Components/HomePageComponent/HeroSection'
import OfferSection from '@/Components/HomePageComponent/OfferSection'
import ProductSection from '@/Components/HomePageComponent/ProductSection'
import AboutSection from '@/Components/HomePageComponent/AboutSection'
import GalllerySection from '@/Components/HomePageComponent/GallerySection'
import TestimonialSection from '@/Components/HomePageComponent/TestimonialSection'
import Footer from '@/Components/ReusableComponet/Footer'
import UserAuthModal from '@/Components/Modals/UserAuthModal'


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OfferSection />
      <ProductSection />
      <AboutSection />
      <GalllerySection />
      <TestimonialSection />
      <Footer />
      {/* <UserAuthModal /> */}
    </>
  )
}
