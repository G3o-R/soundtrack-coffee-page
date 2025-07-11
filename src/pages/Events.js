import {
  StyledEventsPage,
  ContentWrapper,
  ContentContainer,
  PageTitlecontainer,
  PageTitle,
  EventsContainer,
  EventsWrapper,
} from "../styles/EventsStyles";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

export default function Events({ eventsArr }) {
  const eventsToDisplay =
    eventsArr && eventsArr.length > 0 ? (
      eventsArr.map((event) => <EventCard key={event.id} eventObj={event} />)
    ) : (
      <div>Currently no events available.</div>
    );

  return (
    <StyledEventsPage className="events-page">
      <ContentWrapper className="events-page-content-wrapper">
        <ContentContainer className="events-page-content-container">
          <PageTitlecontainer className="events-page-title-container">
            <PageTitle className="page-title">Events</PageTitle>
          </PageTitlecontainer>
          <EventsWrapper className="events-wrapper">
            <EventsContainer className="events-container">
              {eventsToDisplay}
            </EventsContainer>
          </EventsWrapper>
        </ContentContainer>
      </ContentWrapper>
      <Footer />
    </StyledEventsPage>
  );
}
