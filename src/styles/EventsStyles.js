import styled from "styled-components";

export const StyledEventsPage = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 3.125rem;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 78.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.5rem;

  @media screen and (min-width: 768px) {
    min-height: 59.375rem;
  }

  @media screen and (min-width: 960px) {
    padding: 0 2.5rem;
  }
`;

export const PageTitlecontainer = styled.div`
  width: 100%;
  text-align: left;
  padding-bottom: 1.25rem;
`;

export const PageTitle = styled.h1`
  margin: 0;
`;

export const EventsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 568px) {
    gap: 1.25rem;
  }
`;
