import { useEffect } from "react";

import { useMultistepForm } from "../hooks/useMultistepForm";

import { useSelector } from "react-redux";

import RegistracionForm from "../components/form";
import { Modal } from "../components/modal"
import PersonNavigate from "../components/person";

import Splash from "../pages/Splash";

const Navigation = ({ open, handleClose }) => {
    const booleanValue = useSelector((state) => state.boolean);

    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <Splash />,
            <RegistracionForm />,
            <PersonNavigate/>
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

    useEffect(() => {
        if(booleanValue) {
            return next()
        } else {
            return back()
        }
    }, [booleanValue]);

    return (
        <Modal open={open} handleClose={handleClose} currentStepIndex={currentStepIndex}>
            {step}
        </Modal>
    )
};

export default Navigation;