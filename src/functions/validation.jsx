import validator from 'validator';

export function formValidation(formValues){
    try {
        const result = {};

        for (const [key, value] of Object.entries(formValues)) {
            let msg = "";
            switch (key) {
                case 'email':
                    if (validator.isEmpty(value)){
                        msg = msg + "Email can not be blank. "
                    }
                    if (!validator.isEmail(value)){
                        msg = msg + "Email is not valid. ";
                    };
                    break;
                case 'firstName':
                    if (validator.isEmpty(value)){
                        msg = msg + "Name can not be blank. "
                    }
                    if (!validator.isAlpha(value)){
                        msg = msg + "Name can contain only letters. "
                    };
                    break;
                case 'password':
                    if (validator.isEmpty(value)){
                        msg = msg + "Password can not be blank. "
                    }
                    if (!validator.isStrongPassword(value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0})){
                        msg = msg + "Password must contain at least one lowercase letter, one uppercase letter and one number."
                    }
                    break;
            }
            if (msg.length > 0){
                result[key] = msg.trim();
            }
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

export function handleFormValidationResult(formValidationResult, values, setter){
    try {
        for (const [key, value] of Object.entries(formValidationResult)) {
            setter({...value, [key]: value});
        }
    } catch (error) {
        console.log(error);
    }
}