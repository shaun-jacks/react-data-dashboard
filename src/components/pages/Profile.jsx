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

const Profile = () => {
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
          <Title>Edit Profile</Title>
        </Card>
        <Card>
          <FormWrapper>
            <form
              onSubmit={async e => {
                e.preventDefault();
              }}
            >
              <div>
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Edit Email Address..."
                  onChange={handleInputChange}
                  value={inputs.email}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Edit Password..."
                  onChange={handleInputChange}
                  value={inputs.password}
                  name="password"
                />
              </div>
              <div>
                <label>Password Confirmation</label>
                <input
                  type="password"
                  placeholder="Edit Password Confirmation..."
                  onChange={handleInputChange}
                  value={inputs.password2}
                  name="password2"
                />
              </div>
              <button type="submit">
                <ButtonWrapper>Submit</ButtonWrapper>
              </button>
            </form>
          </FormWrapper>
        </Card>
      </LoginWrapper>
    </div>
  );
};

export default Profile;
