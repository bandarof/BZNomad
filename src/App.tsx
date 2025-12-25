import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
}
