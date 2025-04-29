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
    <ServicesSectionStyled>
      <ServicesWrapper>
        <ServicesContainer>
          <ServiceCardWrapper>
            <ServiceCardContainer>
              <ImageWrapper>
                <ImageContainer>
                  <img src={ClassesImg} alt="Classes" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer>
                <h2>Classes </h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
          <ServiceCardWrapper>
            <ServiceCardContainer>
              <ImageWrapper>
                <ImageContainer>
                  <img src={CateringImg} alt="Catering" />
                </ImageContainer>
              </ImageWrapper>
              <ServiceHeaderContainer>
                <h2>Catering</h2>
              </ServiceHeaderContainer>
            </ServiceCardContainer>
          </ServiceCardWrapper>
          <ServiceCardWrapper>
            <ServiceCardContainer>
              <ImageWrapper>
                <ImageContainer>
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
