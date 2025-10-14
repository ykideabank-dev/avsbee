import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclosures & Privacy Policy - AvsBee',
  description: 'Affiliate disclosures, privacy policy, and terms of use for AvsBee comparison calculators.',
};

export default function DisclosuresPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Page Content */}
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Disclosures & Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Transparency and your privacy are important to us
            </p>
          </div>

          {/* Main Content - White Background Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-8 sm:p-12">
              {/* Table of Contents */}
              <nav className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <ol className="space-y-2 text-sm">
                  <li><a href="#affiliate-disclosure" className="text-blue-600 hover:text-blue-800 hover:underline">1. Affiliate Relationship Disclosure</a></li>
                  <li><a href="#privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline">2. Privacy Policy</a></li>
                  <li><a href="#terms-of-use" className="text-blue-600 hover:text-blue-800 hover:underline">3. Terms of Use</a></li>
                </ol>
              </nav>

              {/* Section 1: Affiliate Disclosure */}
              <section id="affiliate-disclosure" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Affiliate Relationship Disclosure
                </h2>

                <div className="space-y-6">
                  <p className="text-base text-gray-600 leading-relaxed">
                    AvsBee participates in affiliate marketing programs. This means that when you click on certain links on our website and make a purchase, sign up for a service, or take other actions, we may receive a commission or referral fee from the merchant or service provider.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      What This Means for You:
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>There is NO additional cost to you for using affiliate links</li>
                      <li>Affiliate relationships do NOT influence our calculator results or recommendations</li>
                      <li>We only recommend products and services that we believe may be helpful to our users</li>
                      <li>All calculator results are based on mathematical formulas and your inputs, not affiliate relationships</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Where Affiliate Links Appear:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Affiliate links may appear in recommended resources sections, comparison tools, or as call-to-action buttons after viewing your calculator results.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Our Commitment:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We are committed to transparency. Any commission we earn helps us maintain and improve our free financial calculators and tools. Your trust is important to us, and we strive to provide accurate, unbiased information regardless of affiliate relationships.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      FTC Compliance:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      This disclosure is made in accordance with the Federal Trade Commission&apos;s 16 CFR Part 255: &quot;Guides Concerning the Use of Endorsements and Testimonials in Advertising.&quot;
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Privacy Policy */}
              <section id="privacy-policy" className="border-t border-gray-200 pt-8 mt-12 mb-12 scroll-mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Privacy Policy
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                  <strong>Last Updated:</strong> {currentDate}
                </p>

                <div className="space-y-6">
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Information We Collect:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      AvsBee&apos;s calculators run entirely in your web browser. We do not collect, store, or transmit your personal financial information (such as home prices, income, or other inputs you enter into our calculators) to our servers.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">We may collect:</p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Anonymous usage analytics (via Google Analytics or similar) to understand how our tools are used</li>
                      <li>IP addresses for security purposes</li>
                      <li>Cookies for site functionality and analytics</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      How We Use Information:
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>To improve our calculator tools and website functionality</li>
                      <li>To understand user behavior and preferences</li>
                      <li>To comply with legal requirements</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Third-Party Services:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">We use third-party services such as:</p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Analytics providers (Google Analytics)</li>
                      <li>Affiliate networks (Impact.com, CJ Affiliate, etc.)</li>
                      <li>Hosting providers</li>
                    </ul>
                    <p className="text-base text-gray-600 leading-relaxed mt-4">
                      These services may collect information according to their own privacy policies.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Your Rights:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Understand what data is collected</li>
                      <li>Request deletion of any personal data we may have</li>
                      <li>Opt-out of analytics tracking</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Cookies:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Our website uses cookies for functionality and analytics. You can disable cookies in your browser settings, though some features may not work properly.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Data Security:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We implement reasonable security measures to protect any data we collect. However, no internet transmission is 100% secure.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Changes to This Policy:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We may update this privacy policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Contact Us:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      If you have questions about these disclosures or our privacy practices, please visit our{' '}
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                        Contact page
                      </Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Terms of Use */}
              <section id="terms-of-use" className="border-t border-gray-200 pt-8 mt-12 mb-12 scroll-mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Terms of Use
                </h2>

                <div className="space-y-6">
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Disclaimer:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      The calculators and tools on AvsBee are provided for informational and educational purposes only. They are not financial, legal, tax, or investment advice.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      No Professional Advice:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      Results from our calculators should not be considered as professional advice. For personalized guidance regarding your specific financial situation, including tax implications and investment decisions, please consult with qualified professionals such as:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Licensed financial advisors</li>
                      <li>Certified public accountants (CPAs)</li>
                      <li>Tax professionals</li>
                      <li>Real estate attorneys</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Accuracy of Information:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      While we strive to ensure our calculators use accurate formulas and reasonable default assumptions, we cannot guarantee:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>The accuracy of default values or assumptions</li>
                      <li>That results reflect your specific local market conditions</li>
                      <li>That tax calculations account for all applicable deductions and credits</li>
                      <li>That results will match your actual financial outcomes</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Limitation of Liability:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      AvsBee and its operators are not liable for any decisions made based on information from our calculators or any financial outcomes resulting from such decisions.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      User Responsibility:
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">By using our calculators, you acknowledge that:</p>
                    <ul className="list-disc list-inside space-y-3 text-base text-gray-600 ml-4">
                      <li>Results are estimates based on inputs and assumptions</li>
                      <li>You are responsible for verifying information</li>
                      <li>You should seek professional advice for important financial decisions</li>
                      <li>Calculator results do not constitute a recommendation to buy, rent, or make any specific financial decision</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <p className="text-base text-gray-600 leading-relaxed">
                      For complete terms, please visit our{' '}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                        Terms of Use page
                      </Link>.
                    </p>
                  </div>
                </div>
              </section>

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
