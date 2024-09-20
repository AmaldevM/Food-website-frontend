function App() {

  return (
    <div className="w-[1440px] m-auto" class="bg-gray-50">

      {/* NavBar */}
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
    


    {/* Hero Session */}

    <section class="pt-12 pb-12 sm:pb-16 lg:pt-8">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
      <div>
        <div class="text-center lg:text-left">
          <h1 class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
            Fastest Online Food Delivery Service
          </h1>
          <p class="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
            We are the fastest and most favorite food delivery service all over the state.
          </p>

          <form action="#" method="POST" class="mt-8 sm:mt-10">
            <div class="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
              <input type="text" placeholder="Search Food or Restaurants" class="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent" />
              <div class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                <button type="submit" class="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">
                  Search
                </button>
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

      <div>
        <img class="w-full rounded-lg" src="../public/assets/delivery-man-holdingl.jpg" alt="Delivery Man" />
      </div>
    </div>
  </div>
</section>

</div>


{/* Restaurant Details */}


<div class="flex min-h-screen items-center justify-center bg-gray-50 p-6">
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-72 sm:h-80 lg:h-96 w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1603471431201-a526d16e4569?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cafe Crush" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl lg:text-3xl font-bold text-white">Cafe Crush</h1>
        <p class="mb-3 text-base lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">Order Now</button>
      </div>
    </div>
    
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-72 sm:h-80 lg:h-96 w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://plus.unsplash.com/premium_photo-1675864534274-3652b78bfff1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Crumbz Cafe" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl lg:text-3xl font-bold text-white">Crumbz Cafe</h1>
        <p class="mb-3 text-base lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">Order Now</button>
      </div>
    </div>
    
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-72 sm:h-80 lg:h-96 w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Velvet Cafe" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl lg:text-3xl font-bold text-white">Velvet Cafe</h1>
        <p class="mb-3 text-base lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-neutral-700">Order Now</button>
      </div>
    </div>
  </div>
</div>


{/* How does it works? */}


<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">OUR SERVICE.</p>
        </div>

        <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 1 </span>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Easy to Order</h3>
                    <p class="mt-4 text-base text-gray-600">You only need a few staps in Ordering Food</p>
                </div>

                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Fastest Delivery</h3>
                    <p class="mt-4 text-base text-gray-600">Delivery thats is always ontime even faster</p>
                </div>

                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 3 </span>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Best Quality</h3>
                    <p class="mt-4 text-base text-gray-600">Not only fast for us quality is also number one</p>
                </div>
            </div>
        </div>
    </div>
</section>






    </div>   
  )
}

export default App
