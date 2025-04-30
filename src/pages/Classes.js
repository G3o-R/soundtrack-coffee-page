import { StyledClassesPage, LessonOptionsWrapper, LessonOptionsContainer, LessonWrapper, LessonContainer, BookingBtnWrapper, BookingBtn } from "../styles/ClassesStyles";

import LattePNG from "../images-svgs/Latte-Art.png"
import BrewingPNG from "../images-svgs/Brewing.png"


export default function Classes() {
  return (
    <StyledClassesPage className="classes-page">
      <LessonOptionsWrapper className="options-wrapper">
        <LessonOptionsContainer className="options-container">
          <LessonWrapper className="lesson-wrapper brewing">
            <LessonContainer className="lesson-container">
              <h1>Beginners
              Brewing</h1>
              <p>Brewing coffee is a delicate craft where every element works together to create the perfect cup. The quality of water, the freshness of the beans, and the precision of your pour all influence the final flavor. Mastering these details—controlling grind size, extraction time, and brewing techniques—unlocks the full depth and aroma of your coffee. In this lesson, you'll learn how to bring these elements into harmony, creating a brew that is both rich and balanced.</p>
              <img src={BrewingPNG} alt="Brewing class logo" className="classes-png"/>
            </LessonContainer>
          </LessonWrapper>
          <LessonWrapper className="lesson-wrapper latte-art">
            <LessonContainer className="lesson-container">
              <h1>Latte Art</h1>
              <p>Latte art is a skill that enhances both the beauty and taste of a well-crafted coffee. Proper milk steaming creates a smooth, velvety texture, making every sip more enjoyable. Mastering this technique not only elevates your coffee presentation but also improves your understanding of espresso and milk balance. Whether for personal enjoyment or professional growth, latte art transforms an ordinary cup into a delightful experience.</p>
              <img src={LattePNG} alt="Latte art class logo" className="classes-png"/>
            </LessonContainer>
          </LessonWrapper>
        </LessonOptionsContainer>
      </LessonOptionsWrapper>
    </StyledClassesPage>
  );
}