import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: ""
    });
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

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
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
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
                <SelectField
                    onChange={handleChange}
                    options={professions}
                    defaultOption="Choose..."
                    value={data.profession}
                    name="profession"
                    label="Выберите вашу профессию"
                    error={errors.profession}
                />
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

export default RegisterForm;
