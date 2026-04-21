import { PageLayout } from "@/components/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { EmailSignup } from "@/components/EmailSignup";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <EmailSignup />
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">Case Study Snapshot</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quote-to-Booking Funnel Concept</h2>
            <p className="text-gray-600 leading-relaxed">
              This portfolio sample is tuned around a practical conversion workflow for service businesses.
              Metrics shown are illustrative benchmark targets used to communicate expected impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-6">
              <p className="text-3xl font-bold text-blue-700 mb-2">+24%</p>
              <p className="text-sm text-gray-700">Illustrative quote request completion rate</p>
            </div>
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-6">
              <p className="text-3xl font-bold text-blue-700 mb-2">-35%</p>
              <p className="text-sm text-gray-700">Illustrative response delay before first callback</p>
            </div>
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-6">
              <p className="text-3xl font-bold text-blue-700 mb-2">+19%</p>
              <p className="text-sm text-gray-700">Illustrative package page to booking intent conversion</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-intent visitors often leave when pricing pages do not provide enough confidence and a clear next step.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The flow guides users from value proposition to package comparison, then to quote capture and callback booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
