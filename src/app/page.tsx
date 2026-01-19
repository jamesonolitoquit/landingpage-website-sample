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
    </PageLayout>
  );
}
