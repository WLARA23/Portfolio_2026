import { Hero } from '../components/organisms/Hero';
import { SkillsTicker } from '../components/organisms/SkillsTicker';
import { ProjectsSection } from '../components/organisms/ProjectsSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ContactSection } from '../components/organisms/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <SkillsTicker />
      <ProjectsSection limit={6} showViewAll />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
