import React, { useState } from "react";
import useModal from "../Hooks/useModal";
import Modal from "../components/Modal.jsx";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
    const { modalType, closeModal, isModal } = useModal();
    const [currentAuthMode, setCurrentAuthMode] = useState(modalType);

    const switchToSignup = () => setCurrentAuthMode('signup');
    const switchToLogin = () => setCurrentAuthMode('login');

    const renderAuthComponent = () => {
        switch (currentAuthMode) {
            case 'signup':
                return <Signup onSwitchToLogin={switchToLogin} />;
            default:
                return <Login onSwitchToSignup={switchToSignup} />;
        }
    };

    return (
        <Modal isOpen={isModal} onClose={closeModal}>
            {renderAuthComponent()}
        </Modal>
    );
};

export default Auth;