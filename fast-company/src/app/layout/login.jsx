import React, { useState, useEffect } from "react";
import TextField from "../components/textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validate();
    }, [data]);

    const handleEmail = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        const errors = {};
        for (const fieldName in data) {
            if (data[fieldName].trim() === "") {
                errors[fieldName] = `${fieldName} обязательна для заполнения`;
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    name={"email"}
                    value={data.email}
                    onChange={handleEmail}
                    label={"Электронная почта"}
                    error={errors.email}
                />
                <TextField
                    name={"password"}
                    value={data.password}
                    onChange={handleEmail}
                    type={"password"}
                    label={"Пароль"}
                    error={errors.password}
                />

                <button type="submit">Отправить</button>
                <button type="reset">Сбросить</button>

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
