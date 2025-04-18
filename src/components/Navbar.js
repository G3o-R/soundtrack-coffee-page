import {
  NavbarContainer,
  NavbarWrapper,
  LinksContainer,
  MotionNav,
  MenuWrapper,
  MenuDrop,
  NavLinks,
  LinkWrapper,
  StyledLink,
} from "../styles/NavbarStyles";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as VinylRecord } from "../images-svgs/record-vinyl.svg";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [effect, setEffect] = useState("--visible");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <NavbarWrapper className="navbar-wrapper">
      <NavbarContainer className="navbar-container">
        {/* <h1 style={{margin: 0}}>test</h1> */}
        <LinksContainer className="links-container">
          <MotionNav
            className="motion-nav"
            initial={{ height: 0 }}
            animate={{ height: isDropdownVisible && isMobile ? "auto" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <NavLinks
              className={`nav-links ${isMobile ? "mobile" : ""} ${
                isMobile && isDropdownVisible ? "active" : ""
              }`}
            >
              <LinkWrapper>
                <StyledLink to="/">
                  <VinylRecord />
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink to="/classes">Classes</StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink to="/catering">Catering</StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink to="/events">Events</StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink to="/booking">Booking</StyledLink>
              </LinkWrapper>
            </NavLinks>
          </MotionNav>
          <MenuWrapper className="menu-wrapper">
            <MenuDrop
              onClick={toggleDropdown}
              className={isDropdownVisible ? "active" : "inactive"}
            />
          </MenuWrapper>
        </LinksContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
