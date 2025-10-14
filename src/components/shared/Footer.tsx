import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/disclosures"
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Disclosures & Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 mb-2">
          Educational tools only. Not financial advice.
        </p>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © 2025 AvsBee
        </p>
      </div>
    </footer>
  );
}
