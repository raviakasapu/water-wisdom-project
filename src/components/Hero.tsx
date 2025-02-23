
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/20 to-transparent"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518877593221-1f28583780b4')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block mb-4 px-4 py-1.5 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-sm font-semibold tracking-wide">
          Ocean Cleanup Initiative
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Restoring Our Oceans<br />for a Sustainable Future
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-8">
          Join our mission to clean and protect our oceans from plastic pollution and marine debris.
          Together, we can save marine life and preserve ocean ecosystems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#donate"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 transition-colors"
          >
            Make a Donation
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </div>
  );
};

export default Hero;
