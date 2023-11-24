import React from 'react'
import Layout from '../component/Layout'
import HeroSlider from '../component/HeroSlider'
import OfferTab from '../component/offerTab'

const Homepage = () => {
  return (
    <Layout>
        <HeroSlider/>
        <OfferTab/>
    </Layout>
  )
}

export default Homepage