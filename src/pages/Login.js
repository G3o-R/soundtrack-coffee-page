import {
  StyledLoginPage,
  LoginWrapper,
  LoginContainer,
  LoginForm,
  FormGroup,
  ButtonContainer,
  ShowButton,
  SubmitButton,
} from "../styles/LoginStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("logging in with data:", loginData);
    // if login is successful, navigate to admin page
  }

  const showButton = (
    <ButtonContainer>
      {password.length > 0 ? (
        <ShowButton
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </ShowButton>
      ) : null}
    </ButtonContainer>
  );

  return (
    <StyledLoginPage className="login-page">
      <LoginWrapper className="login-wrapper">
        <LoginContainer className="login-container">
          <LoginForm className="login-form">
          <h1>Admin</h1>
            <FormGroup className="form-group">
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Username..."
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="form-group">
              {/* <label htmlFor="password">Password:</label> */}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                placeholder="Password..."
                onChange={handleChange}
                required
              />
              {showButton}
            </FormGroup>
            <SubmitButton type="submit">Login</SubmitButton>
          </LoginForm>
        </LoginContainer>
      </LoginWrapper>
    </StyledLoginPage>
  );
}
