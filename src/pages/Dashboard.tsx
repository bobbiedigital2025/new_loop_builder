import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="text-box mb-6">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#4b0082' }}>Dashboard</h1>
        <p style={{ color: '#4b0082' }}>Welcome to your BoDiGi Learn & Earn dashboard! Start your learning journey today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-box">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#4b0082' }}>Your Progress</h2>
          <p style={{ color: '#4b0082' }}>Track your learning achievements and unlock rewards as you progress through the questions.</p>
        </div>
        
        <div className="text-box-alt">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#4b0082' }}>Recent Activity</h2>
          <p style={{ color: '#4b0082' }}>Stay updated with your latest learning activities and completed milestones.</p>
        </div>
      </div>
      
      <div className="text-box mt-6">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#4b0082' }}>Getting Started</h2>
        <ul className="list-disc list-inside space-y-2" style={{ color: '#4b0082' }}>
          <li>Complete question sets to earn rewards</li>
          <li>Unlock premium features by subscribing</li>
          <li>Track your progress in real-time</li>
          <li>Redeem your earned rewards</li>
        </ul>
      </div>
    </div>
  );
};
