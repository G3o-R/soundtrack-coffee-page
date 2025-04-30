import {
    FooterContainer,
    FooterSection,
    SocialMediaContainer,
    FooterWrapper,
    SocialMediaIconAnchor,
  } from "../styles/FooterStyles";
  
  import { ReactComponent as FacebookIcon } from "../images-svgs/facebook.svg";
  import { ReactComponent as InstagramIcon } from "../images-svgs/instagram.svg";
  import { ReactComponent as TiktokIcon } from "../images-svgs/tiktok.svg";
  
  export default function Footer() {
    return (
      <FooterSection className="footer-section">
        <FooterWrapper className="footer-wrapper">
          <FooterContainer className="footer-container">
                <SocialMediaContainer className="social-media">
                  <SocialMediaIconAnchor
                    href="https://www.facebook.com/profile.php?id=100009616453915"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </SocialMediaIconAnchor>
                  <SocialMediaIconAnchor
                    href="https://www.instagram.com/saldanas_garage/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </SocialMediaIconAnchor>
                  <SocialMediaIconAnchor
                    href="https://www.tiktok.com/@saldana602?lang=en"
                    target="_blank"
                  >
                    <TiktokIcon />
                  </SocialMediaIconAnchor>
                </SocialMediaContainer>
          </FooterContainer>
        </FooterWrapper>
      </FooterSection>
    );
  }
  