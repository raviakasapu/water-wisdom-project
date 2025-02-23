
import { Heart } from 'lucide-react';
import Navigation from "@/components/Navigation";

const Solution = () => {
  return (
    <main className="min-h-screen bg-[#D3E4FD]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="inline-block h-12 w-12 text-[#0EA5E9] animate-bounce mb-4" />
            <h1 className="text-4xl font-bold text-[#0EA5E9] mb-6">We Can Help!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Together, we can make our oceans clean and happy again!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-[#0EA5E9] mb-4">Beach Clean-ups</h2>
              <p className="text-gray-600">Join our super fun beach clean-up crews! It's like a treasure hunt, but instead of finding gold, we're finding trash to remove from our beaches.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-[#0EA5E9] mb-4">Reduce Plastic Use</h2>
              <p className="text-gray-600">Use reusable water bottles and bags. Every time you do, you're being an ocean superhero!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Solution;
