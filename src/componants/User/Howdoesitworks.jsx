import React from 'react';

const Howdoesitworks = () => {
    return (
        <div>
            
<section className="py-10 bg-gradient-to-r from-amber-200 to-yellow-500 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-white">OUR SERVICE</p>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How Does it Work?</h2>
        </div>

              <div className="relative mt-1 lg:mt-20">
                 <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-30">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-black"> 1 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold leading-tight text-black md:mt-10">Easy to Order</h3>
                    <p className="mt-4 text-base text-black">You only need a few staps in Ordering Food</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold leading-tight text-black md:mt-10">Fastest Delivery</h3>
                    <p className="mt-4 text-base text-black font-semibol ">Delivery thats is always ontime even faster</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700 "> 3 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold leading-tight text-black md:mt-10">Best Quality</h3>
                    <p className="mt-4 text-base text-black font-semibold">Not only fast for us quality is also number one</p>
                </div>
            </div>
        </div>
    </div>
</section>      
        </div>
    );
};

export default Howdoesitworks;