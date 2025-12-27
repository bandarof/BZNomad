import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import SectionDivider from '../components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Destinations />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
