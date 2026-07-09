import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import EcosystemSection from '../components/home/EcosystemSection';
import MentorsSection from '../components/home/MentorsSection';
import CompaniesMarquee from '../components/home/CompaniesMarquee';
import EventsSection from '../components/home/EventsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <MentorsSection />
      <CompaniesMarquee />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
