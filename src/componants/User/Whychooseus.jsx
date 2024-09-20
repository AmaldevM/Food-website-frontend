import React from 'react';

const Whychooseus = () => {
    return (
        <div>
            <div className="bg-white p-8 bg-gradient-to-r from-amber-200 to-yellow-500 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1">
                    <img src="../public/assets/productphotos/pngwing.com.png" alt="" />
                    </div>
                    <div className="flex-1 text-center md:text-left text-black">
                    <h2 className="text-6xl font-extrabold mb-4">Why Choose Us?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                        <span className="material-icons mr-2 font-extrabold">restaurant</span>
                        <span className="material-icons mr-2 font-extrabold">High-Quality Food</span>
                        </li>
                        <li className="flex items-center">
                        <span className="material-icons mr-2 font-extrabold">local_shipping</span>
                        <span className="material-icons mr-2 font-extrabold">Fast Delivery</span>
                        </li>
                        <li className="flex items-center">
                        <span className="material-icons mr-2 font-extrabold">support_agent</span>
                        <span className="material-icons mr-2 font-extrabold">24/7 Customer Support</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="mt-8 p-8 bg-amber-500 rounded-lg text-center text-black font-bold">
                    <blockquote className="text-xl italic">"Foody is the best. Besides the many delicious meals, the service is also very good, especially the delivery. Highly recommend Foody to you."</blockquote>
                    <cite className="block mt-4">- Guy Hawkins</cite>
                </div>
                </div>
        </div>
    );
};

export default Whychooseus;