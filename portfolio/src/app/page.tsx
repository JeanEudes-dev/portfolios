import Projects from '@/components/Projects/projects';
import HeroSection from '../components/HeroSection'; // Import HeroSection
import SkillsSection from '@/components/SkillsSection';
import ContactForm from '../components/ContactForm';
import AboutMe from '@/components/AboutMe';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* <section id="resume">
        <h2>My Resume</h2>
      </section> */}

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <Projects />
        {/* Projects content here */}
      </section>

      <section id="achievements">
        <Achievements />
        {/* Projects content here */}
      </section>

      <section id="contact">
        <ContactForm />
      </section>
      
      <Footer />
    </main>
  );
}
