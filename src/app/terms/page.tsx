import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use - AvsBee',
  description: 'Terms of Use for AvsBee comparison calculators and decision-making tools.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Page Content */}
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-sm text-gray-500">
              Last Updated: October 13, 2025
            </p>
          </div>

          {/* Main Content - White Background Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-8 sm:p-12">
              {/* Table of Contents */}
              <nav className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li><a href="#acceptance" className="text-blue-600 hover:text-blue-800 hover:underline">1. Acceptance of Terms</a></li>
                  <li><a href="#service" className="text-blue-600 hover:text-blue-800 hover:underline">2. Description of Service</a></li>
                  <li><a href="#no-advice" className="text-blue-600 hover:text-blue-800 hover:underline">3. No Professional Advice</a></li>
                  <li><a href="#accuracy" className="text-blue-600 hover:text-blue-800 hover:underline">4. Accuracy of Information</a></li>
                  <li><a href="#liability" className="text-blue-600 hover:text-blue-800 hover:underline">5. Limitation of Liability</a></li>
                  <li><a href="#responsibilities" className="text-blue-600 hover:text-blue-800 hover:underline">6. User Responsibilities</a></li>
                  <li><a href="#intellectual-property" className="text-blue-600 hover:text-blue-800 hover:underline">7. Intellectual Property</a></li>
                  <li><a href="#third-party" className="text-blue-600 hover:text-blue-800 hover:underline">8. Third-Party Links and Affiliates</a></li>
                  <li><a href="#privacy" className="text-blue-600 hover:text-blue-800 hover:underline">9. Privacy</a></li>
                  <li><a href="#changes" className="text-blue-600 hover:text-blue-800 hover:underline">10. Changes to Terms</a></li>
                  <li><a href="#termination" className="text-blue-600 hover:text-blue-800 hover:underline">11. Termination</a></li>
                  <li><a href="#governing-law" className="text-blue-600 hover:text-blue-800 hover:underline">12. Governing Law</a></li>
                  <li><a href="#contact" className="text-blue-600 hover:text-blue-800 hover:underline">13. Contact</a></li>
                </ol>
              </nav>

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-base text-gray-600 leading-relaxed">
                  Welcome to AvsBee. By using our website and tools, you agree to these Terms of Use. Please read them carefully.
                </p>
              </section>

              {/* Sections */}
              <div className="space-y-12">
                {/* Section 1 */}
                <section id="acceptance" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    By accessing or using AvsBee&apos;s website and calculators, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use our services.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="service" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    2. Description of Service
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    AvsBee provides free online comparison calculators and decision-making tools (the &quot;Service&quot;) to help users analyze and compare various financial and lifestyle options. Our tools are designed for informational and educational purposes only.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="no-advice" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    3. No Professional Advice
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base text-gray-900 font-bold">
                      IMPORTANT: AvsBee does not provide financial, legal, tax, investment, or professional advice of any kind. Our calculators and tools:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Are for general informational purposes only</li>
                      <li>Should not be considered as professional advice or recommendations</li>
                      <li>May not reflect your specific circumstances or local conditions</li>
                      <li>Are not a substitute for consultation with qualified professionals</li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      You should always consult with licensed financial advisors, tax professionals, accountants, attorneys, or other qualified experts before making important financial decisions.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="accuracy" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    4. Accuracy of Information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      While we strive to provide accurate and up-to-date information, we make no warranties or representations about:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>The accuracy, reliability, or completeness of our calculators</li>
                      <li>The suitability of default values or assumptions for your situation</li>
                      <li>The current relevance of market data or rates</li>
                      <li>The applicability to your specific location or circumstances</li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      You are responsible for verifying all information and results before making any decisions.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="liability" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    5. Limitation of Liability
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      To the maximum extent permitted by law, AvsBee and its operators shall not be liable for any:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Decisions made based on our tools or information</li>
                      <li>Financial losses or damages resulting from use of our Service</li>
                      <li>Errors, omissions, or inaccuracies in our calculators</li>
                      <li>Technical issues, downtime, or service interruptions</li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed font-semibold">
                      You use our Service at your own risk.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="responsibilities" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    6. User Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      By using AvsBee, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Provide accurate inputs to our calculators</li>
                      <li>Use the Service lawfully and ethically</li>
                      <li>Not attempt to hack, exploit, or damage our systems</li>
                      <li>Not misrepresent our tools or results to others</li>
                      <li>Take full responsibility for your decisions</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="intellectual-property" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    7. Intellectual Property
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    All content, calculators, design, and materials on AvsBee are owned by or licensed to us and are protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, or distribute our content without permission.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="third-party" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    8. Third-Party Links and Affiliates
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Our website may contain affiliate links to third-party websites and services. We are not responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>The content or practices of third-party sites</li>
                      <li>Products or services offered by affiliates</li>
                      <li>Transactions between you and third parties</li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We may earn commissions from affiliate links, as disclosed in our Affiliate Disclosure page.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="privacy" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    9. Privacy
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Your use of AvsBee is also governed by our Privacy Policy. We respect your privacy and handle data as described in our Privacy Policy, available at{' '}
                    <Link href="/disclosures" className="text-blue-600 hover:text-blue-800 underline">
                      our Disclosures & Privacy page
                    </Link>.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="changes" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We may update these Terms of Use from time to time. Changes will be effective immediately upon posting. Your continued use of the Service after changes constitutes acceptance of the updated terms.
                  </p>
                </section>

                {/* Section 11 */}
                <section id="termination" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    11. Termination
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We reserve the right to suspend or terminate your access to AvsBee at any time, for any reason, without notice.
                  </p>
                </section>

                {/* Section 12 */}
                <section id="governing-law" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    12. Governing Law
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of California.
                  </p>
                </section>

                {/* Section 13 */}
                <section id="contact" className="border-t border-gray-200 pt-8 scroll-mt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    13. Contact
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    If you have questions about these Terms of Use, please{' '}
                    <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                      contact us
                    </Link>.
                  </p>
                </section>
              </div>

              {/* Back to Home */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <span aria-hidden="true">←</span>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
