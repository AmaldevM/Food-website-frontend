import React from 'react'
import Header from '../componants/Unknown/Header'
import Hero from '../componants/Unknown/Hero'
import RestaurantsDetails from '../componants/Unknown/RestaurantsDetails'
import Howdoesitworks from '../componants/User/Howdoesitworks'
import Process from '../componants/User/Process'
import Whychooseus from '../componants/User/Whychooseus'
import { Footer } from '../componants/User/Footer'

export const UnknownLayout = () => {
  return (
    <div>
    <Header/>
    <Hero />
    <RestaurantsDetails />
    <Howdoesitworks />
    <Process />
    <Whychooseus />
    <Footer />
    </div>
  )
}
