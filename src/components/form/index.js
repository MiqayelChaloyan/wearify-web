import { useEffect, useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import useTheme from "../../hooks/useTheme";

import AgeEntry from "../../pages/AgeEntry";
import FitPreference from "../../pages/FitPreference";
import Measurements from "../../pages/Measurements";
import SizeMatch from "../../pages/SizeMatch";
import Profile from "../../pages/Profile";

import { group, href } from "../../constants";

import './style.css';


const INITIAL_DATA = {
    feet: "",
    inches: "",
    weight: "",
    selectedHeight: "cm",
    selectedWeight: "kg",
    age: "",
    range: ""
}

const RegistracionForm = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const { setTheme } = useTheme();

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
            <SizeMatch />,
            <Profile />
        ]);

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        // if (!isLastStep) return next()
    }

    useEffect(() => {
        if (currentStepIndex === 3) return setTheme('#EDEDED');
        if (currentStepIndex > 3) return setTheme('#0C0D34');
        if (currentStepIndex < 3) return setTheme('#0C0D34');
    }, [currentStepIndex]);

    return (
        <div>
            {
                currentStepIndex < 3 ? (
                    <form onSubmit={onSubmit}>
                        <div className='current-step'>
                            <p className='step'>
                                Step {currentStepIndex + 1} / {steps.length - 2}
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
                            {!isFirstStep && (
                                <div className='buttons-group-size'>
                                    <button type='button' onClick={back} className='button-back-size'>
                                        {'<'} Back
                                    </button>
                                    <button onClick={next} type='submit' className='button-next-size'>
                                        <img src={group} alt='button' />
                                    </button>
                                </div>
                            )}
                            {step}
                        </>
                    )
            }
        </div>
    )
};

export default RegistracionForm;