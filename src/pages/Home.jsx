import React from 'react'
import Header from '../componants/Header'
import Hero from '../componants/Hero'
import RestaurantsDetails from '../componants/RestaurantsDetails'
import Howdoesitworks from '../componants/Howdoesitworks'
import Process from '../componants/process'
import Whychooseus from '../componants/Whychooseus'
import { Footer } from '../componants/Footer'

export const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <RestaurantsDetails />
        <Howdoesitworks />
        <Process />
        <Whychooseus />
        <Footer />

    </div>
  )
}
