import React from 'react';

const Hero = () => {
    return (
<div>
    <div className="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">

                {/* Text Section */}
                <div>
                    <div className="text-center lg:text-left">
                    {/* Title: Adjusted Font Size */}
                    <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl font-pj">
                        Fastest Online Food Delivery Service
                    </h1>
                    {/* Subtitle: Adjusted Font Size */}
                    <p className="mt-2 text-lg text-white sm:mt-8 font-medium">
                        We are the fastest and most favorite food delivery service all over the state.
                    </p>
                    {/* Search Form */}
                    <form action="#" method="POST" className="mt-8 sm:mt-10">
                        <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                        <input 
                            type="text" 
                            placeholder="Search Food or Restaurants" 
                            className="block w-full font-bold px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                        />
                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                            <button 
                            type="submit" 
                            className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                            >
                            Search
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">15k</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Reviews<br />(4.8)</p>
                    </div>
                    <div className="hidden sm:block">
                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">300+</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Order<br />Completed</p>
                    </div>
                    <div className="hidden sm:block">
                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">100+</p>
                        <p className="ml-3 text-sm text-gray-900 font-pj">Food<br />Items</p>
                    </div>
                    </div>
                </div>
                {/* Image Section: Adjusted Size */}
                <div>
                    <img className="w-full rounded-lg h-[500px] object-cover mask mask-squircle" src="/assets/delivery-man-holdingl.jpg" alt="Delivery Man" />
                </div>
            </div>
        </div>
    </div>
    <div class="flex min-h-10 items-center justify-center bg-gray-50 p-10 m-auto"> 
    </div>
  </div>
    );
};

export default Hero;

