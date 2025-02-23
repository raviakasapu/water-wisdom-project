
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="relative w-full min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')",
            filter: "brightness(0.8) saturate(1.2)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#8B5CF6] mb-4 text-center">
              Our Ocean Friends Need Your Help!
            </h2>
            <p className="text-lg text-gray-700 text-center">
              The ocean is home to amazing creatures like colorful fish, friendly sea turtles, 
              and beautiful coral reefs. Together, we can keep their home clean and safe!
            </p>
          </div>
        </div>
      </section>
      {/* Additional sections will be added later */}
    </main>
  );
};

export default Index;
