import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { FreelanceCtaSection } from '@/components/sections/FreelanceCtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { StatsSection } from '@/components/sections/StatsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <ProcessSection />
      <LeadershipSection />
      <FreelanceCtaSection />
    </>
  );
}
