import {
  StyledCateringPage,
  PageInfoWrapper,
  PageInfoContainer,
  Titlecontainer,
  Title,
  DescriptionContainer,
  BookingBtnWrapper,
  BookingBtn,
} from "../styles/CateringStyles";
import Footer from "../components/Footer";

export default function Catering() {
  return (
    <StyledCateringPage>
      <PageInfoWrapper>
        <PageInfoContainer>
          <Titlecontainer>
            <Title>Catering That Brings the Café to You</Title>
          </Titlecontainer>
          <DescriptionContainer>
            <p>Hosting an event? Let us bring the coffee shop to you.</p>
            <p>
              Whether you’re planning a baby shower, wedding, corporate mixer,
              or a casual get-together, our catering service is the perfect way
              to elevate the experience.
            </p>
            <p>
              We offer a variety of freshly brewed options, from smooth
              pour-overs to rich espresso shots, professionally crafted lattes,
              and matcha drinks - all made on site or delivered hot and ready.
            </p>
            <p>
              Complement your beverage bar with a selection of our freshly baked
              breads and pastries, crafted in-house daily for peak flavor and
              freshness
            </p>
          </DescriptionContainer>
        </PageInfoContainer>
      </PageInfoWrapper>

      <BookingBtnWrapper>
        <BookingBtn>Book Now</BookingBtn>
      </BookingBtnWrapper>

      <Footer />
    </StyledCateringPage>
  );
}
