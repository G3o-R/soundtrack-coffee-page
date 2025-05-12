import styled from 'styled-components';

export const EventWrapper = styled.div`
  max-height: 21.875rem;
  height: 100%;
  max-width: 53.125rem;
  width: 100%;
`;

export const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 21.875rem;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
    /* margin-left: 10%; */

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
    /* opacity: 0.1; */
    path {
      fill: ${(props) => props.color || '#000'};
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
  gap: 0.75rem;
  position: relative;
    z-index: 99;
`;

export const EventTitle = styled.h2`
  margin: 0;
`;

export const EventDescription = styled.p`
  margin: 0;
`;
