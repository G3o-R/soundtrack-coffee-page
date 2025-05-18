import {
  BookingForm,
  BookingFormContainer,
  BookingFormWrapper,
  ContentContainer,
  ContentWrapper,
  FormGroup,
  StyledBookingPage,
  StyledHeader,
} from "../styles/BookingStyles";
import { useState } from "react";


export default function Booking() {

  const [formData, setFormData] = useState({
    requested_date: "",
    contact_info: "",
    type: "",
    additional_info: ""
  })

  const { requested_date, contact_info, type, additional_info } = formData

  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    setFormData({ ...formData, [name]: value })
  }

  return (
    <StyledBookingPage>
      <ContentWrapper>
        <ContentContainer>
          <StyledHeader>
            <h1>
              Booking
            </h1>
          </StyledHeader>
          <BookingFormWrapper>
            <BookingFormContainer>
              <BookingForm>
                <FormGroup>
                  <label>Requested Date</label>
                  <input name="requested_date"
                    value={requested_date}
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Contact</label>
                  <input name="contact_info"
                    value={contact_info}
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Type</label>
                  <input name="type"
                    value={type}
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Additional info</label>
                  <input name="additional_info"
                    value={additional_info}
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </BookingForm>
            </BookingFormContainer>
          </BookingFormWrapper>
        </ContentContainer>
      </ContentWrapper>
    </StyledBookingPage>
  );
}