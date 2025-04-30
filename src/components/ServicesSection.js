import {
  ServicesSectionStyled,
  ServicesWrapper,
  ServicesContainer,
  ServiceCardWrapper,
  ServiceCardContainer,
  ImageWrapper,
  ImageContainer,
  ServiceHeaderContainer,
} from "../styles/ServicesSectionStyles";
import ClassesImg from "../images-svgs/classes-image.jpg";
import CateringImg from "../images-svgs/catering-image.jpg";
import EventsImg from "../images-svgs/events-image.jpg";

export default function ServicesSection() {
  return (
    <ServicesSectionStyled className="services-section">
      <ServicesWrapper className="services-wrapper">
        <ServicesContainer className="services-container">
          <ServiceCardWrapper className="service-card-wrapper">
            <ServiceCardContainer className="service-card-container">
              <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                  <img src={ClassesImg} alt="Classes" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer>
                <h2>Classes </h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
          <ServiceCardWrapper className="service-card-wrapper">
            <ServiceCardContainer className="service-card-container">
              <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                  <img src={CateringImg} alt="Catering" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer>
                <h2>Catering</h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
          <ServiceCardWrapper className="service-card-wrapper">
            <ServiceCardContainer className="service-card-container">
              <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                  <img src={EventsImg} alt="Events" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer>
                <h2>Events</h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
        </ServicesContainer>
      </ServicesWrapper>
    </ServicesSectionStyled>
  );
}
