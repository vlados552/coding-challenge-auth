import { useState } from "react";
import Modal from "../Modal/Modal";
import CustomerSignInPage from "../CustomerSignInPage/CustomerSignInPage";

function LogIn({ setToken }) {
    const [showModal, setShowModal] = useState(false);

    function ModalContent() {
        return (
            <CustomerSignInPage
                setShowModal={setShowModal}
                setToken={setToken}
            />
        );
    }

    return (
        <>
            <div
                className="bg-white rounded-lg px-3 h-full flex justify-center items-center"
                onClick={() => setShowModal(true)}
            >
                <p className="text-sm">Log In</p>
            </div>
            {showModal ? (
                <Modal
                    showCloseButton={true}
                    content={ModalContent()}
                    setShowModal={setShowModal}
                />
            ) : null}
        </>
    );
}

export default LogIn;
