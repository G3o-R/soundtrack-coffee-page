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
import { ReactComponent as Arrow } from "../images-svgs/link-arrow.svg";
import ClassesImg from "../images-svgs/classes-image.jpg";
import CateringImg from "../images-svgs/catering-image.jpg";
import EventsImg from "../images-svgs/events-image.jpg";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <ServicesSectionStyled className="services-section">
      <ServicesWrapper className="services-wrapper">
        <ServicesContainer className="services-container">
          <ServiceCardWrapper className="service-card-wrapper">
            <ServiceCardContainer className="service-card-container">
              <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                  <img src={ClassesImg} loading="lazy" alt="Classes" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer className="service-header-container" onClick={() => navigate("/classes")}>
                <h2>Classes <Arrow /> </h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
          <ServiceCardWrapper className="service-card-wrapper">
            <ServiceCardContainer className="service-card-container">
              <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                  <img src={CateringImg} loading="lazy" alt="Catering" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer className="service-header-container" onClick={() => navigate("/catering")}>
                <h2>Catering <Arrow /></h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
          <ServiceCardWrapper className="service-card-wrapper">
            <ServiceCardContainer className="service-card-container">
              <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                  <img src={EventsImg} loading="lazy" alt="Events" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer className="service-header-container" onClick={() => navigate("/events")}>
                <h2>Events <Arrow /></h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
        </ServicesContainer>
      </ServicesWrapper>
    </ServicesSectionStyled>
  );
}
