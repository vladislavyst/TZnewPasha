'use client';

import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Sparkles Background Effect */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#6366f1"
        />
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 animate-fade-in">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Интерактивный тест
            </span>
            <br />
            <span className="text-gray-800">для сбора ТЗ</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Современное веб-приложение для сбора технического задания от клиентов по разработке сайта
          </p>
        </div>
        
        <div className="relative mb-10 animate-slide-up">
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-full mx-auto p-6 sm:p-8 lg:p-10 relative rounded-2xl shadow-2xl overflow-hidden group">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-indigo-600 z-20" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-indigo-600 z-20" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-indigo-600 z-20" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-indigo-600 z-20" />

            {/* EvervaultCard как фон */}
            <div className="absolute inset-0 z-0">
              <EvervaultCard className="w-full h-full rounded-2xl" />
            </div>

            {/* Контент поверх эффекта */}
            <div className="relative z-10 w-full">
              <h2 className="dark:text-white text-gray-900 text-2xl sm:text-3xl font-bold text-center w-full mb-6">
                Возможности
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  '76 вопросов по 9 основным разделам',
                  'Выбор одного или нескольких вариантов ответа',
                  'Произвольные комментарии к каждому вопросу',
                  'Автоматическая генерация ТЗ в формате Word (.docx)',
                  'Автоматическое скачивание Word документа',
                  'Отправка готового ТЗ на email',
                  'Скачивание ТЗ в текстовом формате',
                  'Адаптивный дизайн для всех устройств'
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 transition-colors duration-200 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-slide-up">
          <Link
            href="/test"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700"
          >
            <span>Начать тест</span>
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
