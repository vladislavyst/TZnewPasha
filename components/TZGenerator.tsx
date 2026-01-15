'use client';

import { TestResults } from '@/lib/types';
import { sections } from '@/lib/questions';
import { saveAs } from 'file-saver';

interface TZGeneratorProps {
  results: TestResults;
  onDownload?: () => void;
}

export default function TZGenerator({ results, onDownload }: TZGeneratorProps) {
  const generateTextTZ = (): string => {
    let tz = 'ТЕХНИЧЕСКОЕ ЗАДАНИЕ\n';
    tz += '='.repeat(50) + '\n\n';
    tz += `Дата создания: ${new Date().toLocaleDateString('ru-RU')}\n\n`;

    sections.forEach((section, sectionIndex) => {
      tz += `\n${sectionIndex + 1}. ${section.title}\n`;
      tz += `${section.description}\n`;
      tz += '-'.repeat(50) + '\n';

      section.questions.forEach((question) => {
        const answer = results[question.id];
        if (answer && answer.selectedAnswers.length > 0) {
          tz += `\n${question.text}\n`;
          
          const selectedAnswers = answer.selectedAnswers.map(answerId => {
            const ans = question.answers.find(a => a.id === answerId);
            return ans ? `  • ${ans.text}` : '';
          }).filter(Boolean);
          
          tz += selectedAnswers.join('\n') + '\n';
          
          if (answer.comment) {
            tz += `  Комментарий: ${answer.comment}\n`;
          }
        }
      });
    });

    return tz;
  };


  const handleDownloadText = () => {
    const text = generateTextTZ();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `ТЗ_${new Date().toISOString().split('T')[0]}.txt`);
    onDownload?.();
  };

  const handleDownloadDocx = async () => {
    try {
      const response = await fetch('/api/generate-docx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(results),
      });

      if (!response.ok) {
        throw new Error('Ошибка при генерации документа');
      }

      const blob = await response.blob();
      saveAs(blob, `ТЗ_${new Date().toISOString().split('T')[0]}.docx`);
      onDownload?.();
    } catch (error) {
      console.error('Ошибка при генерации DOCX:', error);
      alert('Ошибка при генерации документа. Попробуйте скачать текстовую версию.');
    }
  };

  return (
    <div className="space-y-4 animate-slide-up">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Скачать ТЗ
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadText}
          className="group px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Скачать TXT
        </button>
        <button
          onClick={handleDownloadDocx}
          className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Скачать DOCX
        </button>
      </div>
    </div>
  );
}
