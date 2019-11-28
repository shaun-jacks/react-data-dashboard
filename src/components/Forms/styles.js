import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 1em;
  form {
    label {
      color: var(--textColor);
    }
    input {
      width: 100%;
      padding: 12px 20px;
      border-radius: 5px;
      border: none;
      margin: 8px 0;
      box-sizing: border-box;
      background-color: var(--bg);
      color: var(--textColor);
      &::after {
        z-index: 100;
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: #419eda;
        left: 0;
        transform: scaleX(0);
        transition: all 0.25s;
      }
      &::after {
        bottom: 0;
        transform-origin: right;
      }
      &:hover::after {
        transform: scaleX(1);
      }
      &:focus {
        outline: 0;
        outline-color: transparent;
        outline-style: none;
        border: solid 1px var(--accentColor);
      }
    }
    button {
      background: none;
      border: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  border-radius: 10px;
  padding: 0.3rem;
  text-align: center;
  background-color: var(--accentColor);
  color: var(--bg);
  padding: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`;
