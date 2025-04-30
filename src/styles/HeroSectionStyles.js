import styled from "styled-components";

export const StyledHeroSection = styled.section`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  
  @media screen and (min-width: 960px){
    height: 28.25rem;

  }
  `;

export const HeroWrapper = styled.div`
  max-width: 81.25rem;
  width: auto;
  display: flex;
  align-items: center;
  height: 23.5rem;
  @media screen and (min-width: 769px){
    width: 100%;
  }

  @media screen and (max-width: 960px){
    margin: 1rem 0;

  }
`;

export const HeroContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  text-align: right;
  padding: 0 .5rem;
  width: auto;
  @media screen and (max-width: 768px) {
    position: relative;
    padding: 0;
    .booking-btn-wrapper {
      margin-top: -7.5rem;
    }
    .logo-wrapper {
      margin-left: auto;
    }
    
  }

  
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  `;

export const MobileContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: visible;
  margin-left: -3rem;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

`;

export const LogoContainer = styled.div`
  max-height: 18.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: visible;

  @media screen and (max-width: 420px) {
    margin-left: calc((-10rem) + 10vw);


   }
   @media screen and (max-width: 768px) {
    /* margin-left: -12rem; */
    max-height: 60%;

   }

  @media screen and (min-width: 769px) {
    max-height: 23.5rem;
    width: auto;
  }

  .logo {
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;

export const TextWrapper = styled.div`
  max-width: 35rem;
  width: 100%;
  max-height: 16.875rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  text-align: left;
  h1 {
    margin: 0;
  }
`;

export const BookingBtnWrapper = styled.div``;

export const BookingBtn = styled.button`
  box-sizing: border-box;
  max-width: 20rem;
  padding: 0rem 1.75rem;
  background: #F8D6A5;
  border: 3px solid #d98000;
  border-radius: 9999px;
  cursor: pointer;
`;
