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
                        <Route render={Main} />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        <Route render={Login} />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users
                        <Route path={"/users"} pathrender={<Users />} />
                    </Link>
                </li>
            </ul>

            {/* <Users /> */}
        </>
    );
}

export default App;
