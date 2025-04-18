import {
  NavbarContainer,
  NavbarWrapper,
  StyledSection,
  LinksContainer,
  MotionNav,
  MenuWrapper,
  MenuDrop,
  NavLinks,
  LinkWrapper,
  StyledLink,
  StyledHeader,
  HeaderContainer,
} from "../styles/NavbarStyles";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as VinylRecord } from "../images-svgs/record-vinyl.svg";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [effect, setEffect] = useState("--visible");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navRef = useRef(null);
  console.log(isMobile)


  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropdownVisible &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY > window.scrollY || window.scrollY < 100) {
        setEffect("--visible");
      }
      if (lastScrollY > window.scrollY && window.scrollY < 400) {
        setEffect("--transparent");
      } else if (lastScrollY < window.scrollY && window.scrollY > 100) {
        setEffect("--hidden");
        setDropdownVisible(false);
      }
      lastScrollY = window.scrollY;
    });

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownVisible]);

  return (
    <NavbarWrapper ref={navRef} className="navbar-wrapper">
      <NavbarContainer className="navbar-container">
        <StyledSection className="styled-section">
          <HeaderContainer className="header-container">
            <VinylRecord className="logo"/>
            <StyledHeader className="styled-header">
              Soundtrack Coffee
            </StyledHeader>
          </HeaderContainer>
        </StyledSection>
        <LinksContainer className="links-container">
          <MotionNav
            className="motion-nav"
            initial={{ height: isMobile ? 0 : "100%" }}
            // initial={{ height: 0}}
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
                  {isMobile ? "Home" : <VinylRecord /> }
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
