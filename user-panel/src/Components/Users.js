import { React, useEffect } from "react";
import { AppContext, useGlobalContext } from "../context";
import User from "./User";
import styled from "styled-components";

import Button from "./Button";
import { Link } from "react-router-dom";

const UsersContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  margin-top: 20px;
`;

const UsersHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px;
  width: 80vw;
  font-size: 1.3em;
  margin: 0 auto;
`;

const Small = styled.h4`
  padding: 10px;
  text-align: center;
`;
const Users = () => {
  const { users, renderUsers, isLoading } = useGlobalContext();

  useEffect(() => {
    renderUsers();
  }, [isLoading]);

  return (
    <UsersContainer>
      <UsersHeader>
        <span>
          <h4>User area</h4>
          <p>Select user to edit info</p>
        </span>
        <Button>
          <Link to="/register" className="links">
            New User
          </Link>
        </Button>
      </UsersHeader>
      <div>
        {isLoading
          ? "loading..."
          : users.map((user, key) => {
              return <User id={key} user={user} />;
            })}
        <Small>Displaying {users.length} users </Small>
      </div>
    </UsersContainer>
  );
};

export default Users;
