import React from 'react';

const Whychooseus = () => {
    return (
        <div>
            
            <div class="bg-white p-8 bg-gradient-to-r from-amber-200 to-yellow-500 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="flex-1">
                    <img src="../public/assets/productphotos/pngwing.com.png" alt="" />
                    </div>
                    <div class="flex-1 text-center md:text-left text-black">
                    <h2 class="text-6xl font-extrabold mb-4">Why Choose Us?</h2>
                    <ul class="space-y-4">
                        <li class="flex items-center">
                        <span class="material-icons mr-2 font-extrabold">restaurant</span>
                        <span class="material-icons mr-2 font-extrabold">High-Quality Food</span>
                        </li>
                        <li class="flex items-center">
                        <span class="material-icons mr-2 font-extrabold">local_shipping</span>
                        <span class="material-icons mr-2 font-extrabold">Fast Delivery</span>
                        </li>
                        <li class="flex items-center">
                        <span class="material-icons mr-2 font-extrabold">support_agent</span>
                        <span class="material-icons mr-2 font-extrabold">24/7 Customer Support</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="mt-8 p-8 bg-amber-500 rounded-lg text-center text-black font-bold">
                    <blockquote class="text-xl italic">"Foody is the best. Besides the many delicious meals, the service is also very good, especially the delivery. Highly recommend Foody to you."</blockquote>
                    <cite class="block mt-4">- Guy Hawkins</cite>
                </div>
                </div>
        </div>
    );
};

export default Whychooseus;