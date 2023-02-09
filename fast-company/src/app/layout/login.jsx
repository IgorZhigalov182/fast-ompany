import React, { useState, useEffect } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта является обязательной"
            },
            isEmail: {
                message: "Email введён некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль является обязательным"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
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
                    onChange={handleChange}
                    label="Электронная почта"
                    error={errors.email}
                />
                <TextField
                    name={"password"}
                    value={data.password}
                    onChange={handleChange}
                    type={"password"}
                    label="Пароль"
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
