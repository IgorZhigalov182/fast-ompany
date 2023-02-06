import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleEmail = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={data.email}
                        name="email"
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="radio1">
                            Radio 1 {""}
                            <input type="radio" id="radio1" name="radio" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="radio2">
                            Radio 2 {""}
                            <input type="radio" id="radio2" name="radio" />
                        </label>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
