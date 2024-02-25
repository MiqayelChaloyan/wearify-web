import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setFalse } from "../../store/features/booleanSlice";

import Edit from "../../pages/Edit";
import Profile from "../../pages/Profile";
import SizeMatch from "../../pages/SizeMatch";
import ScanningRoom from "../../pages/ScanningRoom";

import useTheme from "../../hooks/useTheme";

import { group } from "../../constants";

import './style.css';

const steps = ['Size Match', 'Profile', 'Edit', 'Scanning'];

const PersonNavigate = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { setTheme } = useTheme();
    const dispatch = useDispatch();

    const _renderStepContent = (step, callback) => {
        switch (step) {
            case 0:
                return <SizeMatch />;
            case 1:
                return <Profile _handleNext={callback} setStep={setActiveStep} step={activeStep} />;
            case 2:
                return <Edit />;
            case 3:
               return <ScanningRoom />
        }
    };

    useEffect(() => {
        if (activeStep === 0 || activeStep === 3) {
            setTheme('#EDEDED');
        } else {
            setTheme('#0C0D34');
        }
    }, [activeStep]);

    const _handleNext = (values, actions) => {
        if (activeStep === steps.length - 1) {
            console.log('END');
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const _handleBack = (e) => {
        e.preventDefault();
        if (steps[activeStep] === 'Scanning') {
            setActiveStep(activeStep - 2);
        } else {
            setActiveStep(activeStep - 1);
        }
    };


    return (
        <div>
            {
                activeStep === 0 || activeStep === 3 ? (
                    <div className='buttons-group-person'>
                        <button type='button' onClick={activeStep === 0 ? () => dispatch(setFalse()) : _handleBack} className='button-back-person'>
                            {'< Back'}
                        </button>
                        <button onClick={_handleNext} type='submit' className={activeStep === 0 ? 'button-next-person' : 'button-info'}>
                            {activeStep === 0 ? <img src={group} alt='button' /> : <p className='button-info-text'>i</p>}
                        </button>
                    </div>
                ) : (
                    <div className='buttons-group-profile'>
                        <button type='button' onClick={_handleBack} className='button-profile'>
                            {'<'}
                        </button>
                        <h1 className='profile-title'>{steps[activeStep]}</h1>
                    </div>
                )
            }
            {_renderStepContent(activeStep, _handleNext)}
        </div>
    )
};

export default PersonNavigate;