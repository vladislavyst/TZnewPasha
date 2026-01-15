'use client';

import { Question, QuestionAnswer } from '@/lib/types';

interface QuestionCardProps {
  question: Question;
  answer: QuestionAnswer | undefined;
  onAnswerChange: (questionId: string, selectedAnswers: string[]) => void;
  onCommentChange: (questionId: string, comment: string) => void;
}

export default function QuestionCard({
  question,
  answer,
  onAnswerChange,
  onCommentChange,
}: QuestionCardProps) {
  const handleAnswerToggle = (answerId: string) => {
    const currentAnswers = answer?.selectedAnswers || [];
    
    if (question.multiple) {
      if (currentAnswers.includes(answerId)) {
        onAnswerChange(question.id, currentAnswers.filter(id => id !== answerId));
      } else {
        onAnswerChange(question.id, [...currentAnswers, answerId]);
      }
    } else {
      onAnswerChange(question.id, [answerId]);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-tight">
        {question.text}
      </h3>
      
      <div className="space-y-3 mb-6">
        {question.answers.map((ans, index) => {
          const isSelected = answer?.selectedAnswers.includes(ans.id) || false;
          return (
            <label
              key={ans.id}
              className={`group flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                isSelected
                  ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-md'
                  : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center flex-1">
                <div className={`relative flex-shrink-0 w-6 h-6 mr-4 rounded-full border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300 group-hover:border-indigo-400'
                }`}>
                  {isSelected && (
                    <svg className="absolute inset-0 w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {question.multiple && !isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-indigo-400 transition-colors"></div>
                    </div>
                  )}
                </div>
                <input
                  type={question.multiple ? 'checkbox' : 'radio'}
                  name={question.id}
                  value={ans.id}
                  checked={isSelected}
                  onChange={() => handleAnswerToggle(ans.id)}
                  className="sr-only"
                />
                <span className={`text-gray-700 font-medium text-base sm:text-lg flex-1 ${
                  isSelected ? 'text-indigo-900' : ''
                }`}>
                  {ans.text}
                </span>
              </div>
            </label>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Комментарий (необязательно)
          </span>
        </label>
        <textarea
          value={answer?.comment || ''}
          onChange={(e) => onCommentChange(question.id, e.target.value)}
          placeholder="Добавьте свои комментарии или уточнения..."
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none text-gray-700 placeholder-gray-400"
          rows={3}
        />
      </div>
    </div>
  );
}
