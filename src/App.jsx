import './App.css';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import WhyLoom     from './components/WhyLoom';
import Capabilities from './components/Capabilities';
import Showcase    from './components/Showcase';
import HowItWorks  from './components/HowItWorks';
import Languages   from './components/Languages';
import CTA         from './components/CTA';
import Footer      from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhyLoom />
        <Capabilities />
        <Showcase />
        <HowItWorks />
        <Languages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
