import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "./common/form/textField";
import RadioField from "./common/form/radioField";
import MultiSelectField from "./common/form/multiSelectField";
import SelectField from "./common/form/selectField";
import api from "../api";
import { validator } from "../utils/validator";
// import { useHistory } from "react-router-dom";

const ChangeDataForm = () => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState([]);
    const [professions, setProfession] = useState([]);

    const { userId } = useParams();
    // const history = useHistory();

    console.log("данные", data);

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

    useEffect(() => {
        api.users.getById(userId).then((data) => {
            setData((prevState) => ({
                ...prevState,
                ...data,
                profession: data.profession._id,
                qualities: data.qualities.map((qual) => ({
                    label: qual.name,
                    value: qual._id
                }))
            }));
        });
    }, []);

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(data.profession._id),
                qualities: getQualities(data.qualities)
            })
            .then((data) => {
                // history.push(`users/${data._id}`);
                console.log("21222", data);
            });
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    if (data._id && qualities && professions) {
        return (
            <>
                {
                    <form onSubmit={handleSubmit}>
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
                            defaultOption="profession"
                            label="Выберите вашу профессию"
                            error={errors.profession}
                            value={data.profession}
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
                            defaultValue={data.qualities}
                        />

                        <button>Обновить</button>
                    </form>
                }
            </>
        );
    } else {
        <h1>loading</h1>;
    }
};
export default ChangeDataForm;
