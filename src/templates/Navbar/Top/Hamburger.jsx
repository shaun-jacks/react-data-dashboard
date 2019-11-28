import React from "react";
import styled from "styled-components";

const HamburgerWrap = styled.div`
  position: fixed;
  overflow: hidden;
  top: 2px;
  right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: 0.25s;
  margin-top: 0.05em;
  margin-right: 0.05em;
  transition: all 0.25s;
  z-index: 9999;
  &:hover {
    transform: scale(1.1);
  }
  span {
    position: absolute;
    display: block;
    height: 2px;
    background: var(--accentColor);
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.25s;
    z-index: 9999;
  }
  &:hover {
    color: var(--accentColor);
  }
  span:nth-child(1) {
    top: 30%;
  }
  span:nth-child(3) {
    top: 70%;
  }
  &.active span:nth-child(1) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.active span:nth-child(2) {
    background: rgba(0, 0, 0, 0);
  }
  &.active span:nth-child(3) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  @media (min-width: 900px) {
    display: none;

    &.active {
      display: none;
    }
  }
`;

const Hamburger = ({ toggleOpen, isOpen }) => {
  return (
    <HamburgerWrap onClick={toggleOpen} className={isOpen ? "active" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerWrap>
  );
};

export default Hamburger;
