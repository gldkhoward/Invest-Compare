import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import InvestmentOptions from '@/components/InvestmentOptions';
import InteractiveCalculator from '@/components/InteractiveCalculator';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <div className="w-full">
        <ValueProposition />
        <HowItWorks />
        <InvestmentOptions />
        <div id="calculator">
          <InteractiveCalculator />
        </div>
        <SocialProof />
        <FinalCTA />
        <Footer />
      </div>
      
    </main>
  );
}