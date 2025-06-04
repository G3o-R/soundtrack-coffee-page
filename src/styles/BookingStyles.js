import styled from "styled-components";

export const StyledBookingPage = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  max-width: 78.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  @media screen and (min-width: 960px) {
    padding: 0 2.5rem;
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  text-align: left;
  h1 {
    margin-bottom: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookingFormWrapper = styled.div`
  border-left: 3px solid #2f2120;
  padding: 1.5rem;
  @media screen and (min-width: 425px) {
    max-width: 22.25rem;
    width: 100%;
  }
`;

export const BookingFormContainer = styled.div`
  width: 100%;
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  input,
  select,
  textarea {
    padding: 0.5rem 0rem;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #2f2120;
    background-color: transparent;
    color: #000;
    outline: none;
    font-family: inherit;

    &:focus {
      border-bottom: 2px solid #d98000;
    }
  }

  .additional-info {
    min-height: 6rem;
    resize: none;
    overflow-y: auto;
    text-align: left;
    vertical-align: top;
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 0rem 1.5rem;
  /* margin-bottom: 1.25rem; */

  @media screen and (min-width: 425px) {
    max-width: 22.25rem;
    width: 100%;
  }
`;

export const TextWrapper = styled.div``;

export const TextContainer = styled.div`
  text-align: right;

  p{
    margin-top: 0;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #e3a040;
  border: 3px solid #2f2120;
  color: white;
  font-weight: bold;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d98000;
  }
`;
