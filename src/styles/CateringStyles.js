import styled from "styled-components";

export const StyledCateringPage = styled.div`
  width: 100%;
`;

export const PageInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
  
  @media screen and (min-width: 768px) {
      padding-top: 5.125rem;
  }
`;

export const PageInfoContainer = styled.div`
  max-width: 67.5rem;
  text-align: left;
  padding: 0 1.5rem;
`;

export const Titlecontainer = styled.div``;

export const Title = styled.h1`
  margin: 0;
`;

export const DescriptionContainer = styled.div``;

export const BookingBtnWrapper = styled.div`
  padding-top: 2rem;
`;

export const BookingBtn = styled.button`
  font-size: 2rem;
  box-sizing: border-box;
  max-width: 20rem;
  padding: 0rem 1.75rem;
  background: #fbe8cd;
  border: 5px solid #2f2120;
  border-radius: 9999px;
  cursor: pointer;
`;
