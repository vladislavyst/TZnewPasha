'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestResults } from '@/lib/types';
import { sections } from '@/lib/questions';
import TZGenerator from '@/components/TZGenerator';

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<TestResults>({});
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Загрузить результаты из localStorage
    const saved = localStorage.getItem('tz-test-results');
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка загрузки результатов:', e);
        router.push('/test');
      }
    } else {
      router.push('/test');
    }
  }, [router]);

  const handleSendEmail = async () => {
    if (!email || !email.includes('@')) {
      alert('Пожалуйста, введите корректный email');
      return;
    }

    setIsSending(true);
    setSendStatus('idle');

    try {
      // Генерация текстового ТЗ
      let tzText = 'ТЕХНИЧЕСКОЕ ЗАДАНИЕ\n';
      tzText += '='.repeat(50) + '\n\n';
      tzText += `Дата создания: ${new Date().toLocaleDateString('ru-RU')}\n\n`;

      sections.forEach((section, sectionIndex) => {
        tzText += `\n${sectionIndex + 1}. ${section.title}\n`;
        tzText += `${section.description}\n`;
        tzText += '-'.repeat(50) + '\n';

        section.questions.forEach((question) => {
          const answer = results[question.id];
          if (answer && answer.selectedAnswers.length > 0) {
            tzText += `\n${question.text}\n`;

            const selectedAnswers = answer.selectedAnswers
              .map((answerId) => {
                const ans = question.answers.find((a) => a.id === answerId);
                return ans ? `  • ${ans.text}` : '';
              })
              .filter(Boolean);

            tzText += selectedAnswers.join('\n') + '\n';

            if (answer.comment) {
              tzText += `  Комментарий: ${answer.comment}\n`;
            }
          }
        });
      });

      const response = await fetch('/api/send-tz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tz: tzText,
        }),
      });

      if (response.ok) {
        setSendStatus('success');
        setEmail('');
      } else {
        setSendStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const handleStartOver = () => {
    localStorage.removeItem('tz-test-results');
    router.push('/test');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/20 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Тест завершен!
              </span>
            </h1>
            <p className="text-lg text-gray-600">Ваше техническое задание готово</p>
          </div>

          <div className="mb-8 animate-slide-up">
            <TZGenerator results={results} />
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Отправить ТЗ на email
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={handleSendEmail}
                disabled={isSending || !email}
                className="group px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {sendStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400 text-green-800 rounded-lg animate-slide-up">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ТЗ успешно отправлено на email!
                </div>
              </div>
            )}

            {sendStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 text-red-800 rounded-lg animate-slide-up">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Ошибка отправки. Проверьте настройки SMTP или скачайте ТЗ вручную.
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleStartOver}
              className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Начать заново
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
