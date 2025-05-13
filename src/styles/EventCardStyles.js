import styled from "styled-components";

export const EventWrapper = styled.div`
  height: 100%;
  max-width: 53.125rem;
  width: 100%;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 568px) {
    max-height: 21.875rem;
  }
  `;

export const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 21.875rem;
  padding-bottom: .75rem;
  border-bottom: 1px solid rgba(217, 128, 0);
  
  @media screen and (min-width: 568px) {
    border-bottom: none;
    justify-content: flex-start;
    flex-direction: row;
    max-width: 100%;
    gap: 2.5rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 21.875rem;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
`;

export const VinylSVGWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
    margin-left: -70%;
    transform: rotate(-22deg);
    path {
      fill: ${(props) => props.color || "#000"};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 99;
  @media screen and (min-width: 568px) {
    gap: 0.75rem;
  }
`;

export const EventTitle = styled.h2`
  margin: 0;
`;

export const EventDescription = styled.p`
  margin: 0;
`;

export const TimeNDate = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #000;
`;
