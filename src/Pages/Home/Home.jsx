import React from 'react'
import PrimarySearchAppBar from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/heroSection'
import LandingCards from '../../components/Landig-Cards/LandingCards'
import AppDownload from '../../components/LayoutSection/LayoutSection'
import OfficeWork from '../../components/Office/OfficeWork'
import PrepareFood from '../../components/Prepae-food/PrepareFood';
import QuestionSection from '../../components/QuestionsSection/QuestionSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <HeroSection />
      <PrepareFood />
      <LandingCards />
      <AppDownload />
      <OfficeWork />
      <QuestionSection />
      <Footer />
    </>
  )
}

export default Home
