import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <Header />
      <HeroSection />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
