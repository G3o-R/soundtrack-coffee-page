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

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavbarContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 5rem;
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
    font-size: 2rem;
    margin: auto 0 1.25rem;
    line-height: 2rem;


`;

export const LinksContainer = styled.div`
  position: static;
  top: auto;
  left: 0;
  right: 0;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 81px;
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
  background-color: #cfcfcf;
  border-radius: 0 0 1.5rem 1.5rem;
  height: 1.5rem;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MenuDrop = styled(CiMenuBurger)`
  height: 80%;
  color: #000000;
  font-size: 2rem;
  cursor: pointer;
  stroke-width: 1;
  transition: stroke-width 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: #fff;
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
  font-family: BioRhyme;

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


  @media screen and (min-width: 1080px) {
    font-size: 3rem;
  }
`;
