import React from 'react'
import { HowDoesitWork } from '../components/HowDoesitWork'
import { Process } from '../components/Process'
import { Whychooseus } from '../components/Whychooseus'

export const Home = () => {
  return (
    <div className="bg-black">
        <main className="home bg-yellow-700 py-6 sm:py-10 md:py-14 lg:py-16 xl:py-20 custom-rounded min-h-screen">
            <div className="px-4 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-10 lg:items-center ">
                    {/* Text Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                          Fastest Online Food Delivery Service
                        </h1>
                        <p className="mt-4 text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            We are the fastest and most favorite food delivery service.
                        </p>
                        {/* Search Form */}
                        <form className="mt-6 sm:mt-8">
                            <div className="relative flex items-center p-2 sm:border sm:rounded-xl group sm:focus-within:ring-1 sm:focus-within:ring-black">
                                <input 
                                    type="text" 
                                    placeholder="Search Food or Restaurants" 
                                    className="w-full px-4 py-3 text-gray-900 bg-transparent border border-black rounded-xl sm:border-none placeholder-black" />
                                <button 
                                    type="submit" 
                                    className="ml-3 px-6 py-3 text-base rounded-xl bg-amber-500 font-medium text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.08]" >
                                    Search
                                </button>
                            </div>
                        </form>
                        {/* Stats */}
                        <div className="flex flex-col items-center justify-center mt-8 space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
                            <div className="flex items-center">
                                <p className="text-3xl font-medium text-white sm:text-4xl">15k</p>
                                <p className="ml-3 text-sm text-white sm:text-base">Reviews<br />(4.8)</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-3xl font-medium text-white sm:text-4xl">300+</p>
                                <p className="ml-3 text-sm text-white sm:text-base">Order<br />Completed</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-3xl font-medium text-white sm:text-4xl">45</p>
                                <p className="ml-3 text-sm text-white sm:text-base">Min<br />Time Max</p>
                            </div>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div>
                        <img 
                            className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px] rounded-lg object-cover " 
                            src="/assets/delivery-man-holdingl.jpg" 
                            alt="Delivery Man" 
                        />
                    </div>
                </div>
            </div>
        </main>
    <HowDoesitWork />
    <Process />
    <Whychooseus />
    </div>
  )
}
