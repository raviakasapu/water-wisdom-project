
import { Heart, ChevronDown, Laugh } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-blue-900 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/underwater-scene.jpeg)`,
          backgroundPosition: "center bottom"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 via-transparent to-blue-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 text-white backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide">
          Ocean Heroes <Laugh className="h-4 w-4" />
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Let's Save Our Ocean Friends!<br />
          <span className="inline-flex items-center">
            Together We Can Do It <Heart className="h-8 w-8 ml-2 text-[#D946EF] animate-bounce" />
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white mb-8 drop-shadow-lg">
          Join our amazing adventure to clean up the oceans and help sea creatures live happily!
          Every small action counts in making our ocean a better home for all its wonderful inhabitants.
        </p>
        <div className="flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white bg-[#8B5CF6]/80 hover:bg-[#8B5CF6] backdrop-blur-sm transition-colors"
          >
            Start the Adventure!
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-white/80 transition-colors"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </div>
  );
};

export default Hero;
