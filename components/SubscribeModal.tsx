import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  freeFeatures: string[];
  onSubscribe: () => void;
  onNotNow: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  appName,
  freeFeatures,
  onSubscribe,
  onNotNow,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-[#722f37] to-[#8b3a62] rounded-2xl shadow-2xl p-8 text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-[#d4af37]" />
          <h2 className="text-2xl font-bold">Unlock Free Features!</h2>
        </div>

        <p className="text-lg mb-6">
          Subscribe to try <span className="font-semibold text-[#d4af37]">{freeFeatures.join(', ')}</span> right now in {appName}.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onSubscribe}
            className="flex-1 bg-[#d4af37] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#e5c158] transition transform hover:scale-105"
          >
            Yes, Subscribe
          </button>
          <button
            onClick={onNotNow}
            className="flex-1 bg-white/10 font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition"
          >
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
};
