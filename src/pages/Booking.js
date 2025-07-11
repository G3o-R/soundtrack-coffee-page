import {
  BookingForm,
  BookingFormContainer,
  BookingFormWrapper,
  ContentContainer,
  ContentWrapper,
  FlexContainer,
  FormGroup,
  InfoContainer,
  ServicesContainer,
  ServicesWrapper,
  StyledBookingPage,
  StyledHeader,
  SubmitButton,
  TextContainer,
  TextWrapper,
} from "../styles/BookingStyles";
import { ReactComponent as VinylOrange } from "../images-svgs/record-vinyl-orange.svg";
import { ReactComponent as VinylBrown } from "../images-svgs/record-vinyl-brown.svg";
import { ReactComponent as VinylBaige } from "../images-svgs/record-vinyl-baige.svg";

import { useState } from "react";
import Footer from "../components/Footer";

export default function Booking() {
  const [formData, setFormData] = useState({
    requested_date: "",
    customer_name: "Geo",
    contact_info: "Geo@gmail.com",
    type: "Catering",
    additional_info:
      "I was really hoping to learn more about different latte art styles and designs is that a service you offer?",
  });

  const { requested_date, customer_name, contact_info, type, additional_info } = formData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleRequestSubmit(e) {
    e.preventDefault();
    
        fetch("http://127.0.0.1:3000/contact_space/SoundtrackCoffee",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            customer_name: customer_name,
            customer_email: contact_info,
            message: ` customer name: ${customer_name}, contact: ${contact_info}, Requested date: ${requested_date}, Type: ${type}, Additional info: ${additional_info}`,
          })
        })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Booking request submitted successfully:", data);
          // setFormData({
          //   requested_date: "",
          //   contact_info: "",
          //   type: "",
          //   additional_info: "",
          // });
        })
  }

  return (
    <StyledBookingPage className="booking-page">
      <ContentWrapper className="content-wrapper">
        <ContentContainer className="content-container">
          <StyledHeader className="header">
            <h1>Booking</h1>
          </StyledHeader>
          <FlexContainer className="flex-container">
            <BookingFormWrapper className="booking-form-wrapper">
              <BookingFormContainer className="booking-form-container">
                <BookingForm
                  onSubmit={handleRequestSubmit}
                  className="booking-form"
                >
                  <FormGroup className="form-group">
                    <label>Requested Date</label>
                    <input
                      name="requested_date"
                      value={requested_date}
                      type="date"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup><FormGroup className="form-group">
                    <label>Name</label>
                    <input
                      name="customer_name"
                      value={customer_name}
                      type="text"
                      placeholder="John Doe"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label>Contact</label>
                    <input
                      name="contact_info"
                      value={contact_info}
                      type="text"
                      placeholder="Email or Phone"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label>Type</label>
                    <select name="type" value={type} onChange={handleChange}>
                      <option value="">Select Type</option>
                      <option value="Beginner Brewing Class">
                        Beginner Brewing Class
                      </option>
                      <option value="Latte Art Class">Latte Art Class</option>
                      <option value="Catering">Catering</option>
                    </select>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <label>Additional info</label>
                    <textarea
                      className="additional-info"
                      name="additional_info"
                      value={additional_info}
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <SubmitButton type="submit">Complete Booking</SubmitButton>
                </BookingForm>
              </BookingFormContainer>
            </BookingFormWrapper>
            <InfoContainer className="info-container">
              <TextWrapper className="text-wrapper">
                <TextContainer className="text-container">
                  <p>
                    Pick a date, choose your service, and share any notes—I'll
                    be in touch shortly to confirm the details.
                  </p>
                </TextContainer>
              </TextWrapper>
              <ServicesWrapper className="services-wrapper">
                <ServicesContainer className="services-container">
                  <span className="service">
                    <p>Classes</p> <VinylOrange className="icon" />
                  </span>
                  <span className="service">
                    <p>Catering</p> <VinylBrown className="icon" />
                  </span>
                  <span className="service">
                    <p>Coffee</p> <VinylBaige className="icon" />
                  </span>
                </ServicesContainer>
              </ServicesWrapper>
            </InfoContainer>
          </FlexContainer>
        </ContentContainer>
      </ContentWrapper>
      <Footer />
    </StyledBookingPage>
  );
}
