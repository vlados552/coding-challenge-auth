import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import Control from "./Control";
import Button from "../Controls/Button";
import CustomerSignInPage from "../CustomerSignInPage/CustomerSignInPage";
import { HeartSVG, BoxSVG, BasketSVG, EyeSVG } from "../../images/SVGAssets";
import { useAuth } from "../../hook/useAuth";

function Header({ setModalIsOpen, setModalContent }) {
    const navigate = useNavigate();
    const { signout, token } = useAuth();

    useEffect(() => {}, [token]);

    return (
        <header className="lg:w-full flex items-center justify-between lg:gap-8 lg:px-40 lg:py-4">
            <CompanyLogo />
            <div className="flex justify-evenly items-center gap-3.5">
                <Control name={"Streams"} icon={<EyeSVG />} />
                <Control name={"Favorites"} icon={<HeartSVG />} />
                <Control name={"Orders"} icon={<BoxSVG />} />
                <Control name={"Basket"} icon={<BasketSVG />} />
                {token && (
                    <>
                        <div
                            className="w-8 h-8"
                            onClick={() => navigate("/seller-home")}
                        >
                            <img
                                className="w-full h-full rounded-full"
                                src="https://via.placeholder.com/30x30"
                                alt=""
                            />
                        </div>
                        <Button
                            name={"Log Out"}
                            background={"bg-blue-600"}
                            text={"text-white"}
                            callback={() => {
                                signout(() => console.log("signed out"));
                            }}
                        />
                    </>
                )}
                {!token && (
                    <Button
                        name={"Log In"}
                        background={"bg-blue-600"}
                        text={"text-white"}
                        callback={() => {
                            setModalContent(
                                <CustomerSignInPage callback={setModalIsOpen} />
                            );
                            setModalIsOpen(true);
                        }}
                    />
                )}
            </div>
        </header>
    );
}

export default Header;
