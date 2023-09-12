"use client";
import * as React from "react";
import styled from "styled-components";
import { Button, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const SignUpForm = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  min-width: 450px;
`;

const FormContainer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 60%;
  margin: auto;
`;

const Form = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Header = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const HeaderTitle = styled.h1`
  align-self: stretch;
  font-size: 2rem;
  font-weight: bold;
`;

const HeaderContent = styled.div`
  align-self: stretch;
`;

const SocialSignUp = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialSignUpButton = styled(Button)`
  flex: 1;
`;

const FormDivider = styled(Divider)`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const EmailSignUp = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const NameInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const FormTextFields = styled(TextField)`
  align-self: stretch;
  flex: 1;
`;

const Hint = styled.div`
  align-self: stretch;
  color: grey;
  font-size: 0.9rem;
  line-height: 0;
`;

const FormButton = styled(Button)`
  align-self: stretch;
  background-color: #4b48ec;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FormLink = styled(Link)`
  color: blue;
  margin-left: 0.5rem;
  font-weight: bold;
`;

export function ApplicationSignUp() {
  return (
    <SignUpForm>
      <FormContainer>
        <Form>
          <Header>
            <HeaderTitle>Sign up</HeaderTitle>
            <HeaderContent>Start your 30-day free trial.</HeaderContent>
          </Header>
          <SocialSignUp>
            <SocialSignUpButton
              variant="outlined"
              color="primary"
              size="large"
              href="/signup"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6051_2474)">
                  <path
                    d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6051_2474">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </SocialSignUpButton>
            <SocialSignUpButton
              variant="outlined"
              color="primary"
              size="large"
              href="/signup"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                  fill="#0A66C2"
                />
              </svg>
            </SocialSignUpButton>
          </SocialSignUp>
          <FormDivider>or use your email</FormDivider>
          <EmailSignUp>
            <NameInput>
              <FormTextFields
                required
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <FormTextFields
                required
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </NameInput>
            <FormTextFields
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <FormTextFields
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Hint>Must be at least 8 characters.</Hint>
            <FormButton variant="contained" size="large">
              Create an Account
            </FormButton>
            <div>
              Already have an account?
              <FormLink href="/login">Log in</FormLink>
            </div>
          </EmailSignUp>
        </Form>
      </FormContainer>
    </SignUpForm>
  );
}
