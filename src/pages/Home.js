import HeroSection from "../components/HeroSection";
import { StyledHomePage } from "../styles/HomeStyles";

export default function Home() {
  return (
    <StyledHomePage className="home-page">
      <HeroSection />
    </StyledHomePage>
  );
}