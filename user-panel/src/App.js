import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import User from "./Components/User";
import Users from "./Components/Users";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Modal from "./Components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3002/users").then((res) => setUsers(res.data));
  }, [change]);
  const currentUser = users?.find((user) => user.isLoggedIn === true);

  return (
    <>
      //{" "}
      <Router>
        //{" "}
        <div className="App">
          //{" "}
          <Routes>
            //{" "}
            <Route
              element={
                <>
                  //{" "}
                  <Header
                    change={change}
                    setChange={setChange}
                    currentUser={currentUser}
                  />
                  <Form change={change} setChange={setChange} users={users} />
                </>
              }
              exact
              path="/form"
            ></Route>
            <Route
              element={
                <>
                  <Header
                    change={change}
                    setChange={setChange}
                    currentUser={currentUser}
                  />
                  <Input
                    change={change}
                    setChange={setChange}
                    users={users}
                    currentUser={currentUser}
                  />
                </>
              }
              exact
              path="/input"
            ></Route>
            <Route
              element={
                <>
                  <Header
                    change={change}
                    setChange={setChange}
                    currentUser={currentUser}
                  />
                  <Users currentUser={currentUser} />
                </>
              }
              exact
              path="/users"
            ></Route>
            <Route
              element={
                <>
                  <Header
                    change={change}
                    setChange={setChange}
                    currentUser={currentUser}
                  />
                  <Error currentUser={currentUser} />
                </>
              }
              exact
              path="/error"
            ></Route>
            <Route
              element={
                <>
                  <Header
                    change={change}
                    setChange={setChange}
                    currentUser={currentUser}
                  />{" "}
                  <User />
                </>
              }
              exact
              path="/user/:id"
            ></Route>
            <Route
              element={
                <>
                  <Header
                    change={change}
                    setChange={setChange}
                    currentUser={currentUser}
                  />{" "}
                  <User currentUser={currentUser} />
                </>
              }
              exact
              path={`/user/:${currentUser?.id}`}
            ></Route>
            <Route
              element={<Modal change={change} setChange={setChange} />}
              exact
              path="modal"
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
