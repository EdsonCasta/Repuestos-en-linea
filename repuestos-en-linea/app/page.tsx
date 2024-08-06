// repuestos-en-linea/app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
