import React from 'react';

const Process = () => {
    return (
        <div>
            
                <section className="text-yellow-600 body-font mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
                        {/* Image centered */}
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
                            <img className="object-cover object-center rounded-lg shadow-lg h-80 md:h-96" alt="hero" src="../public/assets/front-view-young-male-courier-red-uniform-holding-delivery-food-yellow-background.jpg" />
                        </div>
                        {/* Titles and logos on the right */}
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
                            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-yellow-600">
                                A Very Simple Process
                                <br className="hidden lg:inline-block" /> To Order Your 
                                <br className="hidden lg:inline-block" /> Favorite Foods
                            </h1>
                            <p className="mb-8 leading-relaxed text-yellow-600">
                                Enjoy a hassle-free experience with our simple steps to order food.
                            </p>
                            {/* Steps with icons */}
                            <div className="flex flex-col items-center space-y-6">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-amber-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>Set your location first</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-amber-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>Choose the food you want to order</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-amber-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>Confirm your order with payment method</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-amber-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>Within 30 minutes, you will get your food</p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-10">
                                <button className="inline-flex items-center justify-center rounded-xl bg-amber-500 py-3 px-6 font-dm text-base font-medium text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.05]">
                                    Order Food Now
                                </button>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Process;