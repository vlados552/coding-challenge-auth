import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

function Main() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <>
            <Header
                setModalIsOpen={setModalIsOpen}
                setModalContent={setModalContent}
            />
            <div className="lg:w-full flex flex-col lg:gap-8 lg:px-40 lg:py-4">
                <h1 className="text-center">Main page</h1>
            </div>
            <Modal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                showCloseButton={true}
                modalContent={modalContent}
                setModalContent={setModalContent}
            />
        </>
    );
}

export default Main;
