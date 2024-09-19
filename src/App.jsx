
function App() {

  return (
    <div className="w-[1440px] m-auto" class="bg-gray-50">
      <div class="bg-gray-50">
    <header class="py-4 md:py-6">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img class="w-auto h-8" src="../public/assets/FlaveMe.png" alt="" />
                    </a>
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="text-gray-900">
                        <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Restaurants </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Foods </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact us </a>
                </div>

                <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Sign in </a>

                    <a href="#" title="" class="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Create free account
                    </a>
                </div>
            </div>
        </div>
    </header>
    
    <section class="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Fastest Online Food Delivery Service</h1>
                        <p class="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">We are most fastest and favourite food delivery service all over the state</p>

                        <form action="#" method="POST" class="mt-8 sm:mt-10">
                            <div class="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                               
                                <input type="text" placeholder="Search Food or Restaurants" className="input input-bordered w-full max-w-xs"  class="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"/>
                                <div class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                    <button type="submit" class="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                        <div class="flex items-center">
                            <p class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">15k</p>
                            <p class="ml-3 text-sm text-gray-900 font-pj">Reviews<br />(4.8)</p>
                        </div>

                        <div class="hidden sm:block">
                            <svg class="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                            </svg>
                        </div>

                        <div class="flex items-center">
                            <p class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">300+</p>
                            <p class="ml-3 text-sm text-gray-900 font-pj">Order<br />Completed</p>
                        </div>
                        <div class="hidden sm:block">
                            <svg class="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                            </svg>
                        </div>
                        <div class="flex items-center">
                            <p class="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">100+</p>
                            <p class="ml-3 text-sm text-gray-900 font-pj">Food<br />Items</p>
                        </div>
                    </div>
                </div>

                <div rounded-full>
                    <img class="w-full" src="../public/assets/delivery-man-holdingl.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    </div>
      
  )
}

export default App
