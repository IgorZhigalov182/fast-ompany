import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "Male",
        qualities: [],
        license: false
    });
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

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
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        license: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
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
                <RadioField
                    onChange={handleChange}
                    label="Выберите ваш пол"
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" },
                        { name: "Other", value: "other" }
                    ]}
                    value={data.sex}
                    name="sex"
                />
                <MultiSelectField
                    options={qualities}
                    onChange={handleChange}
                    name="qualities"
                    label="Выберите ваши качества"
                />
                <CheckBoxField
                    name="license"
                    onChange={handleChange}
                    value={data.license}
                    error={errors.license}
                >
                    Подтвердить <a>лицензионное соглашение</a>
                </CheckBoxField>
                <div className="mb-4">
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="btn btn-primary w-100 mx-auto"
                    >
                        Отправить
                    </button>
                </div>
                {/* <button type="reset">Сбросить</button> */}
            </form>
        </>
    );
};

export default RegisterForm;
