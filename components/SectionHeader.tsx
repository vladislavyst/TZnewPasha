'use client';

interface SectionHeaderProps {
  title: string;
  description: string;
  sectionNumber: number;
  totalSections: number;
}

export default function SectionHeader({
  title,
  description,
  sectionNumber,
  totalSections,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-12 text-center animate-slide-up">
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-4">
        <span className="text-sm sm:text-base font-semibold text-indigo-700">
          Раздел {sectionNumber} из {totalSections}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          {title}
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
