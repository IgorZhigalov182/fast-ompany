import React from "react";
import Users from "./layout/users";
import { Route, Redirect } from "react-router-dom";
import Main from "./layout/main";
import Login from "./layout/login";
import NavBar from "./components/navBar";

function App() {
    return (
        <>
            <NavBar />
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route
                path="/users/:userId?"
                render={(props) => <Users {...props} />}
            />
            <Redirect to="/" />
        </>
    );
}

export default App;
