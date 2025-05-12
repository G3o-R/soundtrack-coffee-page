import {
  EventWrapper,
  EventContainer,
  ImageWrapper,
  ImageContainer,
  TextContainer,
  EventTitle,
  EventDescription,
  VinylSVGWrapper, // new
} from "../styles/EventCardStyles";

import { ReactComponent as VinylRecordVinyl } from "../images-svgs/vinyl-record-events.svg";

export default function EventCard({ eventObj }) {
  const { description, title, image_url } = eventObj;
  let setting = { color: "#" };
  // let setting = { color: "#BC9A7E" };
  const { color } = setting;

  return (
    <EventWrapper className="event-card-wrapper">
      <EventContainer className="event-card-container">
        <ImageWrapper className="event-card-image-wrapper">
          <VinylSVGWrapper className="vinyl-svg-wrapper" color={color}>
            <VinylRecordVinyl />
          </VinylSVGWrapper>
          <ImageContainer className="event-card-image-container">
            <img src={image_url} alt={`image for event ${description}`} />
          </ImageContainer>
        </ImageWrapper>
        <TextContainer className="text-container">
          <EventTitle>{title}</EventTitle>
          <EventDescription>{description} lorem ipsum dog burger hair</EventDescription>
        </TextContainer>
      </EventContainer>
    </EventWrapper>
  );
}
