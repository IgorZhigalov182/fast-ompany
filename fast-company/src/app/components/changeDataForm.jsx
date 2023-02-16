import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "./common/form/textField";

const ChangeDataForm = ({ user }) => {
    const [data, setData] = useState({
        name: user.name,
        email: "",
        password: "",
        profession: "",
        sex: "Male",
        qualities: [],
        license: false
    });
    // const [qualities, setQualities] = useState([]);
    // const [professions, setProfession] = useState();
    // const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     api.professions.fetchAll().then((data) => {
    //         const professionsList = Object.keys(data).map((professionName) => ({
    //             label: data[professionName].name,
    //             value: data[professionName]._id
    //         }));
    //         setProfession(professionsList);
    //     });
    //     api.qualities.fetchAll().then((data) => {
    //         const qualitiesList = Object.keys(data).map((optionName) => ({
    //             label: data[optionName].name,
    //             value: data[optionName]._id,
    //             color: data[optionName].color
    //         }));
    //         setQualities(qualitiesList);
    //     });
    // }, []);

    const handleChange = (target) => {
        console.log(target);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // const validatorConfig = {
    //     name: {
    //         isRequired: {
    //             message: "Имя является обязательным"
    //         }
    //     },
    //     email: {
    //         isRequired: {
    //             message: "Электронная почта является обязательной"
    //         },
    //         isEmail: {
    //             message: "Email введён некорректно"
    //         }
    //     },
    //     password: {
    //         isRequired: {
    //             message: "Пароль является обязательным"
    //         },
    //         isCapitalSymbol: {
    //             message: "В пароле должна быть заглавная буква"
    //         },
    //         isContainDigit: {
    //             message: "В пароле должна быть минимум одна цифра"
    //         },
    //         min: {
    //             message: "В пароле должно быть минимум 8 символов",
    //             value: 8
    //         }
    //     },
    //     profession: {
    //         isRequired: {
    //             message: "Обязательно выберите вашу профессию"
    //         }
    //     },
    //     license: {
    //         isRequired: {
    //             message:
    //                 "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
    //         }
    //     }
    // };

    // useEffect(() => {
    //     validate();
    // }, [data]);

    // const validate = () => {
    //     const errors = validator(data, validatorConfig);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };

    // Нужна для того, чтобы реализовать отключение кнопки при некорректной валидации
    // const isValid = Object.keys(errors).length === 0;

    // const getProfessionById = (id) => {
    //     for (const prof of professions) {
    //         if (prof.value === id) {
    //             return { _id: prof.value, name: prof.label };
    //         }
    //     }
    // };

    // const getQualities = (elements) => {
    //     const qualitiesArray = [];
    //     for (const elem of elements) {
    //         for (const quality in qualities) {
    //             if (elem.value === qualities[quality].value) {
    //                 qualitiesArray.push({
    //                     _id: qualities[quality].value,
    //                     name: qualities[quality].label,
    //                     color: qualities[quality].color
    //                 });
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const isValid = validate();
    //     if (!isValid) return;
    //     const { profession, qualities } = data;
    //     console.log({
    //         ...data,
    //         profession: getProfessionById(profession),
    //         qualities: getQualities(qualities)
    //     });
    // };

    console.log(user);
    return (
        <>
            <div
                className="mb-4"
                style={{
                    width: "40%",
                    margin: "0 auto"
                }}
            >
                {/* <label htmlFor={user.name} className="formGroupExampleInput">
                    Имя
                </label> */}

                <TextField
                    label="Имя"
                    type="text"
                    name={data.name}
                    value={user.name}
                    onChange={handleChange}
                />
                {/* <input
                    type="text"
                    className="form-control"
                    id={user._id}
                    defaultValue={user.name}
                /> */}
            </div>
            <div
                className="mb-4"
                style={{
                    width: "40%",
                    margin: "0 auto"
                }}
            >
                <label htmlFor={user.name} className="formGroupExampleInput">
                    Электронная почта
                </label>
                <input
                    type="email"
                    className="form-control"
                    id={user._id}
                    defaultValue={user.email}
                />
            </div>
        </>
    );
};

ChangeDataForm.propTypes = {
    data: PropTypes.array,
    user: PropTypes.object
};

export default ChangeDataForm;
