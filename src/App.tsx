import { Timer } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI0ZERDg1RCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 inline-block">
            {/* <Feather className="w-16 h-16 text-amber-600 mx-auto" /> */}
            <img
              src="/logo-side.png"
              alt="Golden Goose Venture"
              className="w-156 h-36 lg:w-156 lg:h-36 mx-auto"
            />
          </div>

          {/* Main Content */}
          {/* <h1 className="text-5xl md:text-7xl font-bold text-[#7C6240] mb-6">
            Golden Goose Venture
          </h1> */}
          <p className="text-xl md:text-2xl text-[#11222B] mb-8 max-w-2xl mx-auto">
            Something extraordinary is hatching. We're crafting the future of
            innovative ventures.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center  gap-2 bg-amber-600/10 px-4 py-2 rounded-full text-[#7C6240] mb-12">
            <Timer className="w-5 h-5" />
            <span className="font-bold">Coming Soon</span>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-amber-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-3 text-sm text-amber-700/80">
              Be the first to know when we launch
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;