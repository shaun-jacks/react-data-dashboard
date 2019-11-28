import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";
import { FormWrapper, ButtonWrapper } from "../Forms/styles";

const LoginWrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div>
      <LoginWrapper>
        <Card>
          <Title>Sign in to React Dashboard</Title>
        </Card>
        <Card>
          <FormWrapper>
            <form
              onSubmit={async e => {
                e.preventDefault();
                // await this.props.handleLocalLogin(
                //   inputs.email,
                //   inputs.password
                // );
              }}
            >
              <div>
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email Address..."
                  onChange={handleInputChange}
                  value={inputs.email}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password..."
                  onChange={handleInputChange}
                  value={inputs.password}
                  name="password"
                />
              </div>

              <button type="submit">
                <ButtonWrapper>Login</ButtonWrapper>
              </button>
            </form>
          </FormWrapper>
        </Card>
      </LoginWrapper>
    </div>
  );
};

export default Login;
