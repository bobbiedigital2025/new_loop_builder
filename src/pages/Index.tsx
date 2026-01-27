import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#722f37] via-[#8b3a62] to-[#d4af37]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              BoDiGi™ Learn & Earn
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              A gamified learning platform with strategic subscribe-gates and customizable rewards
            </p>
          </div>

          {/* Features */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">15 Questions</h3>
                <p className="text-white/80">5 sets of progressive learning content</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Subscribe Gates</h3>
                <p className="text-white/80">Strategic conversion points</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">Rewards System</h3>
                <p className="text-white/80">Unlock features, PDFs, and more</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-[#722f37] hover:bg-white/90 font-bold text-lg px-8 py-6"
            >
              Get Started
            </Button>
            <p className="text-white/80 text-sm">
              Demo mode enabled - explore without signup
            </p>
          </div>

          {/* Footer */}
          <div className="mt-16 text-white/60 text-sm">
            <p>©2025 Bobbie Gray. BoDiGi™, Aura™, and Boltz™ are trademarks of Bobbie Digital™.</p>
            <p className="mt-2">Built with Famous.AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
