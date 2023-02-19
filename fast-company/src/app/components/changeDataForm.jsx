import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TextField from "./common/form/textField";
import RadioField from "./common/form/radioField";
import MultiSelectField from "./common/form/multiSelectField";
import SelectField from "./common/form/selectField";
import api from "../api";
// import userApi from "../api/fake.api/user.api";
// import * as from "../api/fake.api/user.api";
// import fetchAll from "../api/fake.api/user.api";
import { validator } from "../utils/validator";

// , getById, update
const ChangeDataForm = () => {
    const [data, setData] = useState({
        // qualities: [{ name: "_id", value: data.qualities._id }]
    });
    // const [user, setUser] = useState({});
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState([]);
    const [professions, setProfession] = useState();

    const { userId } = useParams();

    console.log("данные", data);

    // Валидация
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя является обязательным"
            }
        },
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
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Нужна для того, чтобы реализовать отключение кнопки при некорректной валидации

    const getById = (id) =>
        new Promise((resolve) => {
            window.setTimeout(function () {
                resolve(
                    JSON.parse(localStorage.getItem("users")).find(
                        (user) => user._id === id
                    )
                );
            }, 1000);
        });

    useEffect(() => {
        getById(userId)
            .then()
            .then((d) => setData(d));
    }, []);

    const update = (id, data) =>
        new Promise((resolve) => {
            const users = JSON.parse(localStorage.getItem("users"));
            const userIndex = users.findIndex((u) => u._id === id);
            users[userIndex] = { ...users[userIndex], ...data };
            localStorage.setItem("users", JSON.stringify(users));
            resolve(users[userIndex]);
        });

    const handleSubmit = update(userId, data);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const isValid = validate();
    //     // if (!isValid) return;

    //     update(userId, data);
    // };

    const handleChange = (target) => {
        console.log(target);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // useEffect(() => {
    //     const array = data.qualities.map((obj) => {
    //         console.log(obj);
    //         return { color: obj.color, value: obj.name, ID: obj._id };
    //     });
    //     console.log(array);
    // }, []);

    return (
        <>
            <h1>
                <form>
                    <TextField
                        onChange={handleChange}
                        label="Имя"
                        type="text"
                        name="name"
                        value={data.name}
                        error={errors.name}
                    />
                    <TextField
                        onChange={handleChange}
                        label="Электронная почта"
                        type="email"
                        name="email"
                        value={data.email}
                        error={errors.email}
                    />
                    <SelectField
                        onChange={handleChange}
                        options={professions}
                        // defaultOption={"data.profession.name"}
                        value={data.profession}
                        name="data.profession.name"
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
                        // value={data.qualities}
                        name="qualities"
                        label="Выберите ваши качества"
                        defaultValue={data.qualities}
                    />
                    <button onSubmit={handleSubmit}>
                        <Link to={`/users/${userId}?`}>Обновить</Link>
                    </button>
                </form>
            </h1>
        </>
    );

    // ChangeDataForm.propTypes = {
    //     data: PropTypes.array,
    //     user: PropTypes.object
    // };
};
export default ChangeDataForm;
