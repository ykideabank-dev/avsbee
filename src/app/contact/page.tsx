import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | AvsBee',
  description: 'Get in touch with AvsBee for questions, feedback, or support regarding our financial calculators.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8 sm:p-12">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600">
                We&apos;d love to hear from you. Whether you have questions, feedback, or need support,
                feel free to reach out.
              </p>
            </div>

            {/* Email Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Email Us
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                For general inquiries, feedback, or support, please email us at:
              </p>
              <p className="text-lg mb-4">
                <a
                  href="mailto:contact@avsbee.com"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                >
                  contact@avsbee.com
                </a>
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We typically respond within 24-48 hours during business days.
              </p>
            </div>

            {/* What to Include Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What to Include in Your Message
              </h2>
              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>For Bug Reports:</strong> Please describe the issue, what calculator you were using,
                    and any steps to reproduce the problem.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>For Feature Requests:</strong> Let us know what calculator or feature you&apos;d like
                    to see, and how it would help you.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>For General Questions:</strong> We&apos;re here to help! Ask us anything about using
                    our calculators or understanding your results.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>For Partnership Inquiries:</strong> Include details about your organization and how
                    you&apos;d like to collaborate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Media Section (Optional - for future use) */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Follow us on social media for updates, tips, and new calculator releases.
                (Social media links coming soon!)
              </p>
            </div>

            {/* FAQ Link */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Have a Quick Question?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Check out our{' '}
                <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
                  About page
                </Link>
                {' '}to learn more about how our calculators work, or visit our{' '}
                <Link href="/disclosures" className="text-blue-600 hover:text-blue-800 underline">
                  Disclosures page
                </Link>
                {' '}for information about our privacy practices and affiliate relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
}
