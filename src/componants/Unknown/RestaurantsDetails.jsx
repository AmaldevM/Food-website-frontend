import React from 'react';

const RestaurantsDetails = () => {
    return (
        <div>
            <div className="flex min-h-10 items-center justify-center bg-gray-50 p-10 m-auto">
                <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
                    
                    {/* Cafe Crush */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-90 sm:h-96 lg:h-[30rem] w-full">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1603471431201-a526d16e4569?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cafe Crush" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl lg:text-4xl font-bold text-white">Cafe Crush</h1>
                        <p className="mb-3 text-lg lg:text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.
                        </p>
                        <button className="rounded-full bg-neutral-900 py-3 px-4 font-com text-base capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">
                        Order Now
                        </button>
                    </div>
                    </div>
                    
                    {/* Crumbz Cafe */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-80 sm:h-96 lg:h-[30rem] w-full">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://plus.unsplash.com/premium_photo-1675864534274-3652b78bfff1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Crumbz Cafe" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl lg:text-4xl font-bold text-white">Crumbz Cafe</h1>
                        <p className="mb-3 text-lg lg:text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.
                        </p>
                        <button className="rounded-full bg-neutral-900 py-3 px-4 font-com text-base capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">
                        Order Now
                        </button>
                    </div>
                    </div>
                    
                    {/* Velvet Cafe */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-80 sm:h-96 lg:h-[30rem] w-full">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Velvet Cafe" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl lg:text-4xl font-bold text-white">Velvet Cafe</h1>
                        <p className="mb-3 text-lg lg:text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.
                        </p>
                        <button className="rounded-full bg-neutral-900 py-3 px-4 font-com text-base capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">
                        Order Now
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantsDetails;