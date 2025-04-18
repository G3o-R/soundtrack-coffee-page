import {
  NavbarContainer,
  NavbarWrapper,
  LinksContainer,
  StyledLink
} from "../styles/NavbarStyles";
import { ReactComponent as VinylRecord } from "../images-svgs/record-vinyl.svg";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LinksContainer>
          <StyledLink to="/"><VinylRecord/></StyledLink>
          <StyledLink to="/classes">Classes</StyledLink>
          <StyledLink to="/catering">Catering</StyledLink>
          <StyledLink to="/events">Events</StyledLink>
          <StyledLink to="/booking">Booking</StyledLink>
        </LinksContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
