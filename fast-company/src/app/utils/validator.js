// data - {email:'', password:''}
// fieldName - ('email', 'password')
// data[fieldName] - значение email, значение password
// config = {
//     email: {
//         isRequired: {
//             message: "Email является обязательным"
//         }
//     },
//     password: {
//         isRequired: {
//             message: "пароль является обязательным"
//         }
//     }
// };

export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.message;

                break;

            default:
                break;
        }
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            // убираем undefinded из state
            if (error) {
                errors[fieldName] = error;
            }
        }
    }

    return errors;
}
