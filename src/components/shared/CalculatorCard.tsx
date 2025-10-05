import Link from 'next/link';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  status: 'live' | 'coming-soon';
}

export default function CalculatorCard({
  title,
  description,
  icon,
  href,
  status,
}: CalculatorCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
      {/* Icon */}
      <div className="text-5xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>

      {/* Button */}
      {status === 'live' ? (
        <Link
          href={href}
          className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate →
        </Link>
      ) : (
        <button
          disabled
          className="inline-flex items-center justify-center px-4 py-2 bg-gray-300 text-gray-500 font-medium rounded-md cursor-not-allowed"
        >
          Coming Soon
        </button>
      )}
    </div>
  );
}
