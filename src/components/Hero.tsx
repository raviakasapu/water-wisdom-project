
import { ChevronDown, Laugh, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1669155015799-9f0d7d3a6266')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-semibold tracking-wide">
          Ocean Heroes <Laugh className="h-4 w-4" />
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Let's Save Our Ocean Friends!<br />
          <span className="inline-flex items-center">
            Together We Can Do It <Heart className="h-8 w-8 ml-2 text-[#D946EF] animate-bounce" />
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-8">
          Join our amazing adventure to clean up the oceans and help sea creatures live happily!
          Every small action counts in making our ocean a better home for all its wonderful inhabitants.
        </p>
        <div className="flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 transition-colors"
          >
            Start the Adventure!
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
