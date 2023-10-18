"use client";
import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import CustomButton from "./custom-button";
import { GoogleSVG, LinkedIn2SVG } from "./svgs";

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const FormContainer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #111927;
  width: 60%;
  margin: 0px auto;
  gap: 32px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.02em;
  text-align: left;
`;

const HeaderContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #6c737f;
`;

const SocialSignUp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

const Divider = styled.div`
  flex: 1;
  border-top: 1px solid #e5e7eb;
`;

const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const EmailSignUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const FlexButton = styled(CustomButton)`
  flex: 1;
`;

const InfoText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const FormInputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const FormInputField = styled.input`
  padding: 10px 14px 10px 14px;
  border-radius: 8px;
  border: 1px solid #d2d6db;
  width: 100%;
`;

const NameInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const PasswordInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SignupButton = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
`;

const Switch = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #1b18e4;
`;

interface AuthenticationFormProps {
  Login?: boolean;
}

export default function AuthenticationForm({
  Login = false,
}: AuthenticationFormProps) {
  const [loading, setLoading] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(Login);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const [message, setMessage] = React.useState("");

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function areFieldsFilled(formData: any) {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.emailAddress.trim() !== "" &&
      formData.password.trim() !== ""
    );
  }

  function isValidEmail(email: string) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  function isValidPassword(password: string) {
    return password.length >= 8;
  }
  interface AxiosErrorType {
    response?: {
      data?: any;
      status?: number;
      headers?: Record<string, string>;
    };
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
      return;
    }
    if (!areFieldsFilled(formData)) {
      alert("All fields are required.");
      return;
    }

    if (!isValidEmail(formData.emailAddress)) {
      alert("Invalid email address.");
      return;
    }

    if (!isValidPassword(formData.password)) {
      alert("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://squadron-dev.ap-southeast-2.elasticbeanstalk.com/api/User/Register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        alert("Successfully registered!");
      } else {
        alert("Registration failed.");
      }
    } catch (err) {
      const error = err as AxiosErrorType;
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("An error occurred during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://squadron-dev.ap-southeast-2.elasticbeanstalk.com/api/User/Login?username=${formData.emailAddress}&password=${formData.password}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        alert("Successfully logged in!");
      } else {
        alert("Login failed.");
      }
    } catch (err) {
      const error = err as AxiosErrorType;
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("An error occurred during login.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <FormContainer>
        <Header>
          <HeaderTitle>{isLogin ? "Log in" : "Sign up"}</HeaderTitle>
          {!isLogin && (
            <HeaderContent>Start your 30-day free trial.</HeaderContent>
          )}
        </Header>
        <SocialSignUp>
          <FlexButton preset="outlined" label={<GoogleSVG />} />
          <FlexButton preset="outlined" label={<LinkedIn2SVG />} />
        </SocialSignUp>
        <DividerContainer>
          <Divider />
          <InfoText>or use your email</InfoText>
          <Divider />
        </DividerContainer>
        <EmailSignUp>
          {!isLogin && (
            <NameInput>
              <FormInput>
                <FormInputLabel>Name*</FormInputLabel>
                <FormInputField
                  name="firstName"
                  placeholder="Enter your name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </FormInput>
              <FormInput>
                <FormInputLabel>Last name*</FormInputLabel>
                <FormInputField
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </FormInput>
            </NameInput>
          )}
          <FormInput>
            <FormInputLabel>Email*</FormInputLabel>
            <FormInputField
              name="emailAddress"
              placeholder="Enter your email"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
          </FormInput>
          <PasswordInput>
            <FormInput>
              <FormInputLabel>Password*</FormInputLabel>
              <FormInputField
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormInput>
            {!isLogin && <InfoText>Must be at least 8 characters.</InfoText>}
          </PasswordInput>
        </EmailSignUp>
        <SignupButton>
          <FlexButton
            type="submit"
            preset="default"
            label={
              loading
                ? isLogin
                  ? "Logging in..."
                  : "Creating..."
                : isLogin
                ? "Log in"
                : "Create an Account"
            }
            disabled={loading}
          />
        </SignupButton>
        <LoginContainer>
          <InfoText>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </InfoText>
          <Switch type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </Switch>
        </LoginContainer>
      </FormContainer>
      <div>{message}</div>
    </SignUpForm>
  );
}
