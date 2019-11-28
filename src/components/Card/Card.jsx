import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 1em 0;
  padding: 1px;
  background: var(--bgLess);
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.9);
`;

const CardHeader = styled.div`
  padding-left: 1em;
  h2 {
    color: var(--accentColor);
  }
`;

const CardContent = styled.div`
  padding: 1em;
  background: var(--bgLess);
`;

const Card = ({ children, title }) => {
  return (
    <CardWrapper>
      <CardHeader>{title && <h2>{title}</h2>}</CardHeader>
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

export default Card;
