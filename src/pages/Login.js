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

export default function Login({setAdminData}) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "exampleTenant1234",
    password: "exampleTenantPassword",
  });

  const { username, password } = loginData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("login clicked")
    fetch("http://localhost:3000/tenant-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
          navigate("/admin");
          setAdminData(data);
          setLoginData({
            username: "",
            password: "",
          });
      })
      .catch((error) => {
        // don't forget to add error handling
    })
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
          <LoginForm className="login-form" onSubmit={handleLoginSubmit}>
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
