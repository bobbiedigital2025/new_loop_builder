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
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#722f37]">BoDiGi™</span> Learn & Earn
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gamify user engagement with a learning journey that rewards app interactions and promotes subscriptions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-[#722f37] hover:bg-[#8b3a62]">
              Start Learning
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                5-Set Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                15 total questions across progressive difficulty levels. Complete each set to unlock rewards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                Rewards System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Unlock PDFs, feature unlocks, tool trials, and discounts as you progress through the questions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Subscribe Gates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Strategic prompts after each set to boost conversions and engage users with your app.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Demo Section */}
        <Card className="bg-gradient-to-r from-[#722f37] to-[#8b3a62] text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Try Demo Mode?</CardTitle>
            <CardDescription className="text-gray-100">
              Experience a complete example with SmartBrand Builder - 15 questions and 5 rewards!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" variant="secondary" className="bg-[#d4af37] text-gray-900 hover:bg-[#c49f27]">
              Try Demo
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
