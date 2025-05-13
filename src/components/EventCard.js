import {
  EventWrapper,
  EventContainer,
  ImageWrapper,
  ImageContainer,
  TextContainer,
  EventTitle,
  EventDescription,
  VinylSVGWrapper,
  TimeNDate,
} from "../styles/EventCardStyles";

import { ReactComponent as VinylRecordVinyl } from "../images-svgs/vinyl-record-events.svg";

export default function EventCard({ eventObj }) {
  const { description, title, image_url, start_time, end_time } = eventObj;
  let setting = { color: "#" };
  const { color } = setting;

  const formatTime = (datetimeStr) => {
  const date = new Date(datetimeStr);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};


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
          <TimeNDate>{formatTime(start_time)} – {formatTime(end_time)}</TimeNDate>
        </TextContainer>
      </EventContainer>
    </EventWrapper>
  );
}
