import Header from '@components/Header';
import Hero from '@components/Hero';
import PricingNote from '@components/PricingNote';
import Features from '@components/Features';
import HowItWorks from '@components/HowItWorks';
import Benefits from '@components/Benefits';
import FAQ from '@components/FAQ';
import ContactSection from '@components/ContactSection';
import Footer from '@components/Footer';
import styles from './App.module.css';

const App = () => {
  const handleAnchorClick = (event, href) => {
    if (!href || !href.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <main id="main">
        <Hero onCtaClick={handleAnchorClick} />
        <PricingNote />
        <Features />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;