import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #fff;
`;

export const LoginWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 22.25rem;
  border-left: 4px solid #2F2120;
`;

export const LoginContainer = styled.div`
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    margin: 0;
    font-size: 1.75rem;
    color: #2F2120;
    font-weight: 700;
    text-align: left;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #000;
  }

  input {
    padding: 0.5rem 0rem;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid #ccc;
    background-color: transparent;
    color: #000;
    font-family: inherit;

    &:focus {
      border-color: #D98000;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 0.25rem;
  text-align: right;
`;

export const ShowButton = styled.button`
  border: none;
  background: transparent;
  color: #2F2120;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.6rem 1rem;
  background-color: #E3A040;
  border: 3px solid #2F2120;
  color: white;
  font-weight: bold;
  border-radius: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #D98000;
  }
`;
