import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 5rem;
`;

export const NavbarWrapper = styled.div`
width: 100%;
height: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1.25rem;
  `;

export const StyledLink = styled(Link)`
  color: #101010;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  line-height: auto;
  font-family: BioRhyme;

  svg{
    margin-bottom: -0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 3em;
  }

  @media screen and (max-width: 1560px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 1260px) {
    font-size: 2.5rem;
  }
`;
