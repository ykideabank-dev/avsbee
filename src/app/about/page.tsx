import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About AvsBee - Making Better Decisions Made Easy',
  description: 'Learn about AvsBee and our mission to help you make smarter financial and lifestyle decisions with clear, honest comparison tools.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Page Content */}
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About AvsBee
            </h1>
            <p className="text-lg text-gray-600">
              Making decisions shouldn't be so hard
            </p>
          </div>

          {/* Main Content - White Background Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-8 sm:p-12">
              {/* Introduction */}
              <section className="mb-12">
                <div className="text-base text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Life is full of decisions. Some are small—where to eat dinner. Others are big—whether to buy a home or keep renting, which job offer to accept, or where to live.
                  </p>
                  <p>
                    In our busy world, we're constantly weighing options, comparing alternatives, and trying to make the smartest choice with limited time and incomplete information. You wish there was a tool that could help you see the full picture—something that takes the complexity out of comparison and gives you clarity when you need it most.
                  </p>
                  <p className="font-semibold text-gray-900">
                    That's why AvsBee exists.
                  </p>
                </div>
              </section>

              {/* Story Section */}
              <section className="border-t border-gray-200 pt-8 mt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Why I Built This
                </h2>
                <div className="text-base text-gray-600 leading-relaxed space-y-4">
                  <p>
                    I'm Kim, and like you, I've faced countless decisions where I wished I had a better way to compare my options. Whether it was calculating the real cost of buying versus renting, comparing job offers with different benefits packages, or weighing lifestyle trade-offs, I found myself building spreadsheets over and over again.
                  </p>
                  <p>
                    I realized I wasn't alone. We all share this experience—the desire to make informed decisions without spending hours doing math or second-guessing ourselves.
                  </p>
                  <p>
                    So I built AvsBee: a collection of practical comparison tools designed for real people making real decisions. No jargon. No complexity. Just clear, honest insights to help you choose confidently.
                  </p>
                </div>
              </section>

              {/* Approach Section */}
              <section className="border-t border-gray-200 pt-8 mt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Our Approach
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Clarity over complexity
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We break down complicated decisions into understandable comparisons
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Your time matters
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Get insights in minutes, not hours
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Transparency first
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We show you exactly how calculations work, with no hidden assumptions
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Empowering, not prescriptive
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Our tools inform your decision; you stay in control
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Constantly improving
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We listen to feedback and add tools that help you make better choices
                    </p>
                  </div>
                </div>
              </section>

              {/* Future Section */}
              <section className="border-t border-gray-200 pt-8 mt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  More Tools Coming Soon
                </h2>
                <div className="text-base text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Right now, AvsBee helps you compare renting versus buying a home. But this is just the beginning.
                  </p>
                  <p className="font-semibold text-gray-900">
                    We're working on tools to help you compare:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Job offers (salary, benefits, commute, growth potential)</li>
                    <li>Living expenses across different cities</li>
                    <li>Lease vs. buy for cars</li>
                    <li>Education options and student loan scenarios</li>
                    <li>And many more everyday decisions</li>
                  </ul>
                  <p>
                    Have a comparison you wish existed?{' '}
                    <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                      Contact us
                    </Link>
                    {' '}— we'd love to hear from you.
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="border-t border-gray-200 pt-8 mt-12">
                <div className="text-center">
                  <p className="text-xl text-gray-900 mb-6">
                    Ready to make your next big decision?
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explore Our Tools
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
