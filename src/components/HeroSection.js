import {
  StyledHeroSection,
  HeroWrapper,
  HeroContainer,
  LogoWrapper,
  LogoContainer,
  TextWrapper,
  TextContainer,
  BookingBtnWrapper,
  BookingBtn,
  MobileContainer,
} from "../styles/HeroSectionStyles";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as VinylRecord } from "../images-svgs/record-vinyl.svg";

import STCLogov2 from "../images-svgs/new-logo-tab.png";

export default function HeroSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <StyledHeroSection className="hero-section">
      <HeroWrapper className="hero-wrapper">
        <HeroContainer className="hero-container">
          {isMobile ? (
            // <MobileContainer className="mobile-container">
            <>
              <LogoWrapper className="logo-wrapper">
                <LogoContainer className="logo-container">
                  <img
                    src={STCLogov2}
                    alt="Soundtrack Coffee Logo"
                    className="logo"
                    />
                </LogoContainer>
              </LogoWrapper>
              <BookingBtnWrapper className="booking-btn-wrapper">
                <BookingBtn
                  onClick={() => console.log("booking clicked")}
                  className="booking-btn"
                  >
                  Book Now
                </BookingBtn>
              </BookingBtnWrapper>
                  </>
            // </MobileContainer>
          ) : (
            <>
              <LogoWrapper className="logo-wrapper">
                <LogoContainer className="logo-container">
                  <VinylRecord className="logo" />
                </LogoContainer>
              </LogoWrapper>
              <TextWrapper className="text-wrapper">
                <TextContainer className="text-container">
                  <h1 className="title">Soundtrack Coffee</h1>
                  <BookingBtnWrapper className="booking-btn-wrapper">
                    <BookingBtn
                      onClick={() => console.log("booking clicked")}
                      className="booking-btn"
                    >
                      Book Now
                    </BookingBtn>
                  </BookingBtnWrapper>
                </TextContainer>
              </TextWrapper>
            </>
          )}
        </HeroContainer>
      </HeroWrapper>
    </StyledHeroSection>
  );
}
