
import { Star } from 'lucide-react';
import Navigation from "@/components/Navigation";

const Problem = () => {
  return (
    <main className="min-h-screen bg-[#FEF7CD]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Star className="inline-block h-12 w-12 text-[#F97316] animate-spin-slow mb-4" />
            <h1 className="text-4xl font-bold text-[#F97316] mb-6">Oh No! Our Oceans Need Help!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Our ocean friends are facing some big problems, and they need our help!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-[#F97316] mb-4">Plastic Trouble</h2>
              <p className="text-gray-600">Plastic bags and bottles are making it hard for sea creatures to swim and find food. Imagine trying to play in a pool full of plastic!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-[#F97316] mb-4">Oil Spills</h2>
              <p className="text-gray-600">Sometimes big ships spill oil into the ocean. It's like getting sticky paint all over your favorite toy - not fun at all!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Problem;
