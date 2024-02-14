import { useEffect, useState } from "react";

import { useMultistepForm } from "../../hooks/useMultistepForm";
import useTheme from "../../hooks/useTheme";

import AgeEntry from "../../pages/AgeEntry";
import FitPreference from "../../pages/FitPreference";
import Measurements from "../../pages/Measurements";

import { setTrue } from "../../store/features/booleanSlice";
import { useDispatch, useSelector } from "react-redux";

import { href } from "../../constants";

import './style.css';
import { addData } from "../../store/features/initialDataSlice";


// const INITIAL_DATA = {
//     feet: "",
//     inches: "",
//     weight: "",
//     selectedHeight: "cm",
//     selectedWeight: "kg",
//     age: "",
//     range: ""
// }


const RegistracionForm = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.state);
    const [data, setData] = useState(state);
    const { setTheme } = useTheme();

    const updateFields = (fields) => {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, back, next } =
        useMultistepForm([
            <Measurements {...data} updateFields={updateFields} />,
            <AgeEntry {...data} updateFields={updateFields} />,
            <FitPreference {...data} updateFields={updateFields} />,
        ]);

    useEffect(() => setTheme('#0C0D34'), [currentStepIndex]);

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        // if (!isLastStep) return next()
        dispatch(addData({...data}));
    }

    return (
        <div>
            {
                currentStepIndex < 3 && (
                    <form onSubmit={onSubmit}>
                        <div className='current-step'>
                            <p className='step'>
                                Step {currentStepIndex + 1} / {steps.length}
                            </p>
                            <a href={href} target="_blank" rel="noreferrer" className='privacy'>
                                Privacy
                            </a>
                        </div>
                        <div className='line' />
                        {step}
                        <div className='buttons-group'>
                            {!isFirstStep && (
                                <button
                                    type='button'
                                    onClick={back}
                                    className='button-back'
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={currentStepIndex < 2 ? next : () => dispatch(setTrue())}
                                type='submit'
                                className='button-next'
                            >
                                Next
                            </button>
                        </div>
                    </form>
                )
            }
        </div>
    )
};

export default RegistracionForm;