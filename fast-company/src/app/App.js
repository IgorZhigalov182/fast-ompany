import React from "react";
import Users from "./layout/users";
import { Route, Redirect } from "react-router-dom";
import Main from "./layout/main";
import Login from "./layout/login";
import NavBar from "./components/ui/navBar";
import RegisterForm from "./components/ui/registerForm";
// import Test from "./components/test";
import ChangeDataForm from "./components/changeDataForm";

function App() {
    return (
        <>
            <NavBar />
            <Route path="/" exact component={Main} />
            <Route path="/login:type?" component={Login} />
            <Route
                path="/users/:userId?"
                render={(props) => <Users {...props} />}
                exact
            />
            <Route
                path="/users/:userId?/edit"
                render={(props) => <ChangeDataForm {...props} />}
            />
            <Route
                path="/users/login/register"
                render={() => <RegisterForm />}
            />

            <Redirect to="/" />
        </>
    );
}

export default App;
