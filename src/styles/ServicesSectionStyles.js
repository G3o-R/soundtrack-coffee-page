import styled from "styled-components";

export const ServicesSectionStyled = styled.section`
  background-color: #ffffff;
  width: 100%;
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 97.5rem;
  width: 100%;
  padding: 0rem .5rem;
`;

export const ServiceCardWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 100vw;

  @media screen and (min-width: 480px){
    max-width: calc(10vw + 35%);
  }

  @media screen and (min-width: 1024px) {
    max-width: 18.75rem;
  }

  @media screen and (min-width: 1280px) {
    max-width: 24rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 26rem;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
`;

export const ServiceHeaderContainer = styled.div`
  text-align: left;
  cursor: pointer;
  h2 {
    border-bottom: 1px solid #d98000;
    /* font-size: 1.5rem; */
    font-weight: 500;
    padding: 0 0 0.75rem;
    color: #171717;
    margin:0;
    padding: 0;

  }
`;
