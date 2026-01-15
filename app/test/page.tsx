'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { sections, getAllQuestions } from '@/lib/questions';
import { TestResults } from '@/lib/types';
import ProgressBar from '@/components/ProgressBar';
import SectionHeader from '@/components/SectionHeader';
import QuestionCard from '@/components/QuestionCard';

export default function TestPage() {
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [results, setResults] = useState<TestResults>({});

  const currentSection = sections[currentSectionIndex];
  const allQuestions = getAllQuestions();

  // Вычисляем прогресс: сколько вопросов заполнено из всех
  const progress = useMemo(() => {
    const answeredCount = allQuestions.filter(question => {
      const answer = results[question.id];
      return answer && answer.selectedAnswers && answer.selectedAnswers.length > 0;
    }).length;
    
    return {
      answered: answeredCount,
      total: allQuestions.length,
      percentage: allQuestions.length > 0 
        ? Math.round((answeredCount / allQuestions.length) * 100) 
        : 0
    };
  }, [results, allQuestions]);

  useEffect(() => {
    // Загрузить сохраненные результаты из localStorage
    const saved = localStorage.getItem('tz-test-results');
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка загрузки сохраненных результатов:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Сохранить результаты в localStorage
    localStorage.setItem('tz-test-results', JSON.stringify(results));
  }, [results]);

  const handleAnswerChange = (questionId: string, selectedAnswers: string[]) => {
    setResults((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        questionId,
        selectedAnswers,
        comment: prev[questionId]?.comment || '',
      },
    }));
  };

  const handleCommentChange = (questionId: string, comment: string) => {
    setResults((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        questionId,
        selectedAnswers: prev[questionId]?.selectedAnswers || [],
        comment,
      },
    }));
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      // Прокрутка вверх при переходе к следующему разделу
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Тест завершен
      router.push('/results');
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      // Прокрутка вверх при переходе к предыдущему разделу
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Проверяем, заполнены ли все обязательные вопросы текущего раздела
  const isCurrentSectionComplete = () => {
    return currentSection.questions.every(question => {
      const answer = results[question.id];
      return answer && answer.selectedAnswers && answer.selectedAnswers.length > 0;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-6 sm:py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressBar
          current={progress.answered}
          total={progress.total}
        />

        <div className="mb-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <span className="text-sm sm:text-base font-medium text-gray-700">
              Заполнено: <span className="font-bold text-indigo-600">{progress.answered}</span> из <span className="font-bold text-gray-900">{progress.total}</span> вопросов
            </span>
          </div>
        </div>

        <SectionHeader
          title={currentSection.title}
          description={currentSection.description}
          sectionNumber={currentSectionIndex + 1}
          totalSections={sections.length}
        />

        <div className="space-y-4 sm:space-y-6 mb-8">
          {currentSection.questions.map((question, index) => (
            <div
              key={question.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-slide-up"
            >
              <QuestionCard
                question={question}
                answer={results[question.id]}
                onAnswerChange={handleAnswerChange}
                onCommentChange={handleCommentChange}
              />
            </div>
          ))}
        </div>

        {!isCurrentSectionComplete() && (
          <div className="bg-yellow-50/90 backdrop-blur-sm border-l-4 border-yellow-400 p-4 sm:p-5 mb-6 rounded-xl shadow-sm animate-slide-up">
            <p className="text-sm sm:text-base text-yellow-800 flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Не все вопросы раздела заполнены. Вы можете продолжить, но рекомендуется ответить на все вопросы.</span>
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pb-8">
          <button
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0}
            className="group px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-sm hover:shadow-md disabled:hover:shadow-sm flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад
          </button>
          <button
            onClick={handleNext}
            className="group px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
          >
            <span>
              {currentSectionIndex === sections.length - 1
                ? 'Завершить тест'
                : 'Следующий раздел'}
            </span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
