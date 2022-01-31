import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ErrorComponent = styled.div`
  text-align: center;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  align-items: center;
`;
const Error = () => {
  return (
    <>
      <ErrorComponent>
        <h1>Error...</h1>
        <h3>Something went wrong with the application</h3>
        <Button>
          <Link to="/" className="links">
            Back home
          </Link>
        </Button>
      </ErrorComponent>
    </>
  );
};

export default Error;
