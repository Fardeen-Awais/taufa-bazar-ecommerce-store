'use client'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Toys & Gifts for
              <span className="block text-yellow-300">Happy Kids</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover amazing toys, educational games, and perfect gifts for children of all ages. 
              Quality products at affordable prices with Cash on Delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Toys
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Find Gifts
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-100 text-sm">Toys & Gifts</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-2">COD</div>
                  <div className="text-blue-100 text-sm">Cash on Delivery</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-2">Free</div>
                  <div className="text-blue-100 text-sm">Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>
  )
} 