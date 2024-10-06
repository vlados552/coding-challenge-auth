import { useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { signIn } from "../../functions/fetch";
import { EyeSVG, EyeSlashSVG } from "../../images/SVGAssets";

const initialState = {
    email: "",
    password: "",
};

const initialErrorState = {
    email: "",
    password: "",
};

let initialIsPasswordVisible = false;

function CustomerSignInPage({ callback }) {
    const { signin } = useAuth();
    const [formValues, setFormValues] = useState(initialState);
    const [formErrorValues, setFormErrorValues] = useState(initialErrorState);
    const [isPasswordVisible, setIsPasswordVisible] = useState(
        initialIsPasswordVisible
    );

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormErrorValues(initialErrorState);
        const token = signIn(formValues);
        signin(token, () => callback(false));
    }

    function handlePasswordVisible() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <div className="flex">
            <div className="flex flex-col items-start justify-center gap-6 mx-16 my-14 w-full">
                <h3 className="font-bold text-2xl">Log In</h3>
                <form
                    id="signup"
                    action=""
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 w-full"
                >
                    <div className="flex flex-col">
                        <label
                            className="font-medium text-base"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="border rounded-lg px-3 py-2.5 focus:outline-none"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            required={true}
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p id="emailError">{formErrorValues.email}</p>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-medium text-base"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="flex items-center border rounded-lg pr-2.5">
                            <input
                                className="w-full h-full px-3 py-2.5 rounded-lg focus:outline-none"
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Enter a password"
                                required={true}
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <div onClick={handlePasswordVisible}>
                                {isPasswordVisible ? (
                                    <EyeSlashSVG />
                                ) : (
                                    <EyeSVG />
                                )}
                            </div>
                        </div>
                        <p id="passwordError">{formErrorValues.password}</p>
                    </div>

                    <button
                        className="bg-blue-700 text-white rounded-lg text-base px-3 py-2.5"
                        type="submit"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CustomerSignInPage;
