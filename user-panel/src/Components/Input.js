import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 12px;
  width: 200px;
  margin: 12px;
`;

const Input = ({ children, ...props }) => {
  return <StyledInput {...props}>{children}</StyledInput>;
};

export default Input;
