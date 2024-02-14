import { useEffect } from "react";

import RegistracionForm from "../components/form";
import { Modal } from "../components/modal"

import { useMultistepForm } from "../hooks/useMultistepForm";

import Splash from "../pages/Splash";

const Navigation = ({ open, handleClose }) => {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Splash />,
            <RegistracionForm />,
        ]);

    useEffect(() => {
        let isMounted = true;

        const intervalId = setTimeout(() => {
            if (isMounted) {
                next();
            }
        }, 5000);

        return () => {
            isMounted = false;
            clearTimeout(intervalId);
        };
    }, []);

    return (
        <Modal open={open} handleClose={handleClose} currentStepIndex={currentStepIndex}>
            {step}
        </Modal>
    )
};

export default Navigation;