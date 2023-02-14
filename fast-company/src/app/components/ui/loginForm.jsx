import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
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
            },
            isCapitalSymbol: {
                message: "В пароле должна быть заглавная буква"
            },
            isContainDigit: {
                message: "В пароле должна быть минимум одна цифра"
            },
            min: {
                message: "В пароле должно быть минимум 8 символов",
                value: 8
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

    // Нужна для того, чтобы реализовать отключение кнопки при некорректной валидации
    const isValid = Object.keys(errors).length === 0;

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
                <CheckBoxField
                    name="stayOn"
                    onChange={handleChange}
                    value={data.stayOn}
                >
                    Оставаться в системе
                </CheckBoxField>

                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary w-100 mx-auto"
                >
                    Отправить
                </button>
                {/* <button type="reset">Сбросить</button> */}
            </form>
        </>
    );
};

export default LoginForm;
