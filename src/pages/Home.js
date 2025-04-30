import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import { StyledHomePage } from "../styles/HomeStyles";

export default function Home() {
  return (
    <StyledHomePage className="home-page">
      <HeroSection />
      <ServicesSection />
      <Footer />
    </StyledHomePage>
  );
}