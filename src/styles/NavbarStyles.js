import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavbarWrapper = styled.header`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  max-height: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &.large-screen {
    display: flex;
    justify-content: center;

    
    @media screen and (min-width: 769px) and (max-width: 1349px) {
      justify-content: left;
    }
    @media screen and (min-width: 1350px) {
      .navbar-container {
        margin-right: 11.5rem;
      }
    }
  }

`;

export const NavbarContainer = styled.div`
  background-color: #fff;
  height: 5rem;
  margin-left: 2.5rem;
  @media screen and (max-width: 768px) {
    height: 4rem;
    margin-left: 0;
  }
`;

export const StyledSection = styled.section`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    .logo{
        height: 2rem;
    }
`;

export const StyledHeader = styled.h1`
    font-family: SpecialElite;
    margin: auto 0 .75rem;
    line-height: 2rem;
    font-size: 1.75rem;
    
    @media screen and (min-width: 420px) {
      font-size: 2rem;
    }


`;

export const LinksContainer = styled.div`
  position: static;
  top: auto;
  left: 0;
  right: 0;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    position: absolute;
  }

  @media screen and (min-width:769px) and (max-width: 1079px) {
    padding-top: 0.5rem;
  }
  
`;

export const MotionNav = styled(motion.nav)`
  overflow: "visible";
  width: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  background: linear-gradient(180deg, #FEFEFE 0%, #D6D6D6 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 1.5rem;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MenuDrop = styled(CiMenuBurger)`
  height: 80%;
  font-size: 2rem;
  cursor: pointer;
  stroke-width: 1;
  transition: stroke-width 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: #adadad;
    stroke-width: 2;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 10px;
    align-self: center;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
  box-shadow: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 0px;

    &.mobile {
      overflow: hidden;
      width: 100%;
    }

    &.mobile.active {
      visibility: visible;
    }
  }

  @media screen and (min-width: 960px){
    gap: 3rem;
  }

  @media screen and (min-width: 1260px){
    gap: 4rem;
  }
`;

export const LinkWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(217, 128, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const StyledLink = styled(Link)`
  color: #101010;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  line-height: auto;
  font-size: 2.25rem;
  font-family: BioRhymeLight;

  svg {
    margin-bottom: -0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }
  @media screen and (min-width: 768px) {
    &:hover::before {
      width: 100%;
    }

    &:hover {
      color: #000;
  
      .vinyl-record {
        animation: ${spin} 1.25s linear infinite;
      }
    }
  }

  @media screen and (min-width: 850px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 3rem;
  }
`;
