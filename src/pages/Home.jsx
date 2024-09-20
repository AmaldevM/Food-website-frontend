import React from 'react'
import Hero from '../componants/User/Hero'
import RestaurantsDetails from '../componants/User/RestaurantsDetails'
import Howdoesitworks from '../componants/User/Howdoesitworks'
import Process from '../componants/User/Process'
import Whychooseus from '../componants/User/Whychooseus'
import Header from '../componants/User/Header'
import { Footer } from '../componants/User/Footer'

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
