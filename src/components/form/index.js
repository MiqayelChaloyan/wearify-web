import { useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";

import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../store/features/initialDataSlice";

import AgeEntry from "../../pages/AgeEntry";
import FitPreference from "../../pages/FitPreference";
import Measurements from "../../pages/Measurements";
import SizeMatch from "../../pages/SizeMatch";

import { href } from "../../constants";

import './style.css';

const RegistracionForm = () => {
    const INITIAL_DATA = useSelector((state) => state.initialData);
    const [data, setData] = useState(INITIAL_DATA);
    const dispatch = useDispatch();

    const updateFields = (fields) => {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Measurements {...data} updateFields={updateFields} />,
            <AgeEntry {...data} updateFields={updateFields} />,
            <FitPreference {...data} updateFields={updateFields} />,
            <SizeMatch />
        ]);


    const onSubmit = (e) => {
        e.preventDefault()
        // if (!isLastStep) return next()
        // if (currentStepIndex === 3) return dispatch(addData(data));
            console.log(data, 'data============||||||');
    }

    return (
        <div>
            {
                currentStepIndex < 3 ? (
                    <form onSubmit={onSubmit}>
                        <div className='current-step'>
                            <p className='step'>
                                Step {currentStepIndex + 1} / {steps.length - 1}
                            </p>
                            <a href={href} target="_blank" rel="noreferrer" className='privacy'>
                                Privacy
                            </a>
                        </div>
                        <div className='line' />
                        {step}
                        <div className='buttons-group'>
                            {!isFirstStep && (
                                <button type='button' onClick={back} className='button-back'>
                                    Back
                                </button>
                            )}
                            <button onClick={next} type='submit' className='button-next'>
                                {isLastStep ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </form>
                ) :
                    (
                        <>
                            {step}
                        </>
                    )
            }
        </div>
    )
};

export default RegistracionForm;