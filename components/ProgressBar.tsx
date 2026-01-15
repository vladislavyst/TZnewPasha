'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="w-full mb-6 animate-fade-in">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm sm:text-base font-semibold text-gray-700">Прогресс заполнения</span>
        <span className="text-sm sm:text-base font-bold text-indigo-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 sm:h-5 overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-700 ease-out flex items-center justify-center relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              animation: 'shimmer 2s infinite',
            }}
          ></div>
          {percentage > 15 && (
            <span className="text-xs font-bold text-white relative z-10 drop-shadow-sm">
              {current} / {total}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
