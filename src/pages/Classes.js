import {
  StyledClassesPage,
  LessonOptionsWrapper,
  LessonOptionsContainer,
  LessonWrapper,
  LessonContainer,
  BookingBtnWrapper,
  BookingBtn,
  HeaderContainer,
  TextContainer,
} from "../styles/ClassesStyles";
import Footer from "../components/Footer";
import LattePNG from "../images-svgs/Latte-Art.png";
import BrewingPNG from "../images-svgs/Brewing.png";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useRef } from "react";

export default function Classes() {
  const [expanded, setExpanded] = useState("");
  const lessonRef = useRef(null);
  const isntMobile = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        expanded &&
        lessonRef.current &&
        !lessonRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [expanded]);

  return (
    <StyledClassesPage className="classes-page">
      <LessonOptionsWrapper className="options-wrapper">
        <LessonOptionsContainer className="options-container">
          <LessonWrapper className="lesson-wrapper brewing" ref={lessonRef}>
            <LessonContainer className="lesson-container">
              <HeaderContainer className="header-container">
                <h1>Beginners Brewing</h1>
              </HeaderContainer>
              <TextContainer
                className={`text-container motion ${
                  !isntMobile ? "mobile" : ""
                } ${expanded === "brew" ? "expanded" : ""}`}
                initial={{ height: !isntMobile ? "4rem" : "100%" }}
                animate={{
                  height:
                    expanded === "brew"
                      ? "100%"
                      : !isntMobile
                      ? "4rem"
                      : "100%", // Or any desired collapsed height on desktop
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => (isntMobile ? null : setExpanded("brew"))}
              >
                <p>
                  Brewing coffee is a delicate craft where every element works
                  together to create the perfect cup. The quality of water, the
                  freshness of the beans, and the precision of your pour all
                  influence the final flavor. Mastering these
                  details—controlling grind size, extraction time, and brewing
                  techniques—unlocks the full depth and aroma of your coffee. In
                  this lesson, you'll learn how to bring these elements into
                  harmony, creating a brew that is both rich and balanced.
                </p>
              </TextContainer>
              <img
                src={BrewingPNG}
                alt="Brewing class logo"
                className="classes-png"
              />
            </LessonContainer>
          </LessonWrapper>
          <LessonWrapper className="lesson-wrapper latte-art" ref={lessonRef}>
            <LessonContainer className="lesson-container">
              <HeaderContainer className="header-container">
                <h1>Latte Art</h1>
              </HeaderContainer>
              <TextContainer
                className={`text-container motion ${
                  !isntMobile ? "mobile" : ""
                } ${expanded === "latte" ? "expanded" : ""}`}
                initial={{ height: !isntMobile ? "4rem" : "100%" }}
                animate={{
                  height:
                    expanded === "latte"
                      ? "100%"
                      : !isntMobile
                      ? "4rem"
                      : "100%", // Or any desired collapsed height on desktop
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => (isntMobile ? null : setExpanded("latte"))}
              >
                <p>
                  Latte art is a skill that enhances both the beauty and taste
                  of a well-crafted coffee. Proper milk steaming creates a
                  smooth, velvety texture, making every sip more enjoyable.
                  Mastering this technique not only elevates your coffee
                  presentation but also improves your understanding of espresso
                  and milk balance. Whether for personal enjoyment or
                  professional growth, latte art transforms an ordinary cup into
                  a delightful experience.
                </p>
              </TextContainer>
              <img
                src={LattePNG}
                alt="Latte art class logo"
                className="classes-png"
              />
            </LessonContainer>
          </LessonWrapper>
        </LessonOptionsContainer>
      </LessonOptionsWrapper>
      <BookingBtnWrapper className="booking-btn-wrapper">
        <BookingBtn
          onClick={() => console.log("booking clicked")}
          className="booking-btn"
        >
          Book Now
        </BookingBtn>
      </BookingBtnWrapper>
      <Footer />
    </StyledClassesPage>
  );
}
