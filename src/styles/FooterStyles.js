import styled from "styled-components";

export const FooterSection = styled.section`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 4rem;
  `;

export const FooterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  `;

export const FooterContainer = styled.div`
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialMediaIconAnchor = styled.a`
    cursor: pointer;
    svg{
      width: 3.125rem;
      path{
        fill: #000000;
      }
    }
`;