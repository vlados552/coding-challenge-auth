import React, { useState } from "react";

function Modal({
    modalIsOpen,
    setModalIsOpen,
    showCloseButton,
    modalContent,
    setModalContent,
}) {
    function closeButton() {
        return (
            <div className="absolute top-0 right-1 cursor-pointer">
                <p
                    onClick={() => {
                        setModalIsOpen(false);
                        setModalContent(null);
                    }}
                >
                    X
                </p>
            </div>
        );
    }

    return (
        <>
            {modalIsOpen && (
                <>
                    <div className="fixed left-0 top-0 z-50 w-full h-full overflow-hidden flex justify-center items-center">
                        <div className="flex flex-col bg-white relative p-5">
                            {showCloseButton ? closeButton() : null}
                            <div>{modalContent}</div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 opacity-25 bg-black"></div>
                </>
            )}
        </>
    );
}

export default Modal;
