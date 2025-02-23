
import { Smile } from 'lucide-react';
import Navigation from "@/components/Navigation";

const Impact = () => {
  return (
    <main className="min-h-screen bg-[#F2FCE2]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Smile className="inline-block h-12 w-12 text-[#8B5CF6] animate-pulse mb-4" />
            <h1 className="text-4xl font-bold text-[#8B5CF6] mb-6">Look What We've Done!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Your amazing help is making a big difference!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">Happy Sea Animals</h2>
              <p className="text-gray-600">Thanks to your help, dolphins can jump higher, turtles can swim faster, and fish can play freely!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:rotate-2 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">Cleaner Beaches</h2>
              <p className="text-gray-600">Our beaches are becoming cleaner every day. That means more fun for everyone - including our ocean friends!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Impact;
