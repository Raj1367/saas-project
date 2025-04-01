import CallToAction from "./_components/CallToaction";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LogoTicker from "./_components/LogoTicker";
import Pricing from "./_components/Pricing";
import ProductShowcase from "./_components/ProductShowcase";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
