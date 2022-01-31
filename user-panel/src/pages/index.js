import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Form from "./Form";
import Header from "../components/Header";
import Users from "../components/Users";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/register">
          <Form />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
