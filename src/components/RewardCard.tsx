import React from 'react';
import { Lock, Download, Gift, Zap, Tag, Clock } from 'lucide-react';

interface RewardCardProps {
  reward: {
    id: string;
    title: string;
    reward_type: 'pdf' | 'feature_unlock' | 'tool_access' | 'discount' | 'trial';
    file_url?: string;
    internal_feature_key?: string;
  };
  unlocked: boolean;
  onClaim?: () => void;
}

const rewardIcons = {
  pdf: Download,
  feature_unlock: Zap,
  tool_access: Gift,
  discount: Tag,
  trial: Clock,
};

export const RewardCard: React.FC<RewardCardProps> = ({ reward, unlocked, onClaim }) => {
  const Icon = rewardIcons[reward.reward_type];

  return (
    <div className={`relative bg-white rounded-xl shadow-md p-6 border-2 transition ${
      unlocked ? 'border-[#d4af37]' : 'border-gray-200 opacity-60'
    }`}>
      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm rounded-xl">
          <Lock className="w-12 h-12 text-gray-400" />
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${unlocked ? 'bg-[#d4af37]/20' : 'bg-gray-100'}`}>
          <Icon className={`w-6 h-6 ${unlocked ? 'text-[#722f37]' : 'text-gray-400'}`} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">{reward.title}</h3>
          <p className="text-sm text-gray-600 mb-3">Usable in app</p>
          
          {unlocked && onClaim && (
            <button
              onClick={onClaim}
              className="bg-gradient-to-r from-[#722f37] to-[#8b3a62] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              Claim Reward
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
