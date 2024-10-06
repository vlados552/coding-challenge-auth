import { useNavigate } from "react-router-dom";
import Button from "../../../components/Controls/Button";

function SellerHome() {
    const navigate = useNavigate();

    return (
        <>
            <h3 className="font-main text-2xl mb-6 text-center">Seller Home</h3>
            <div className="flex items-center justify-center">
                <Button
                    name={"Home"}
                    background={"bg-blue-600"}
                    text={"text-white"}
                    callback={() => {
                        navigate("/");
                    }}
                />
            </div>
        </>
    );
}

export default SellerHome;
