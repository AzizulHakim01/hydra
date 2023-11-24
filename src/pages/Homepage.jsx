import React from 'react'
import Layout from '../component/Layout'
import HeroSlider from '../component/HeroSlider'
import OfferTab from '../component/offerTab'
import WhyChoosUs from '../component/whyChoosUs'

const Homepage = () => {
  return (
    <Layout>
        <HeroSlider/>
        <OfferTab/>
        <WhyChoosUs/>
    </Layout>
  )
}

export default Homepage