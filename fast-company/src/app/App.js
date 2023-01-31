import React from "react";
import Users from "./components/users";
import { Link, Route } from "react-router-dom";
import Main from "./layout/main";
import Login from "./layout/login";

function App() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/main"
                    >
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users {<br></br>}
                    </Link>
                </li>
            </ul>

            <Route path="/main" component={Main} />
            <Route path="/login" component={Login} />
            <Route
                path="/users/:userId?"
                render={(props) => <Users {...props} />}
            />
        </>
    );
}

export default App;
