import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface QuestionCardProps {
  question: {
    id: string;
    prompt: string;
    options: string[];
    correct_answer: string;
    explanation?: string;
  };
  onAnswer: (questionId: string, selected: string, isCorrect: boolean) => void;
  answered: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, answered }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    if (answered || showResult) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || showResult) return;
    const isCorrect = selected === question.correct_answer;
    setShowResult(true);
    onAnswer(question.id, selected, isCorrect);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{question.prompt}</h3>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          const isSelected = selected === option;
          const isCorrect = option === question.correct_answer;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;

          return (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              disabled={answered || showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition ${
                showCorrect ? 'bg-green-50 border-green-500' :
                showWrong ? 'bg-red-50 border-red-500' :
                isSelected ? 'bg-[#722f37]/10 border-[#722f37]' :
                'bg-gray-50 border-gray-200 hover:border-[#8b3a62]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showCorrect && <Check className="w-5 h-5 text-green-600" />}
                {showWrong && <X className="w-5 h-5 text-red-600" />}
              </div>
            </button>
          );
        })}
      </div>

      {!showResult && selected && (
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#722f37] to-[#8b3a62] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
        >
          Submit Answer
        </button>
      )}

      {showResult && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};
