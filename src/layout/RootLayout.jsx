import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
            <Header />
            <div>
            <Outlet />
            </div>
            <Footer />
    </div>
  )
}
