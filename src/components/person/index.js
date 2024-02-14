import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setFalse } from "../../store/features/booleanSlice";

import Edit from "../../pages/Edit";
import Profile from "../../pages/Profile";
import SizeMatch from "../../pages/SizeMatch";

import useTheme from "../../hooks/useTheme";
import { useMultistepForm } from "../../hooks/useMultistepForm";

import { group } from "../../constants";

import './style.css';

const PersonNavigate = () => {
    const dispatch = useDispatch();
    const { setTheme } = useTheme();

    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <SizeMatch />,
            <Profile />,
            <Edit />
        ]);

    useEffect(() => {
        if (currentStepIndex === 0) {
            setTheme('#EDEDED');
        } else {
            setTheme('#0C0D34');
        }
    }, [currentStepIndex]);

    return (
        <div>
                {
                    currentStepIndex === 0 ? (
                        <div className='buttons-group-person'>
                            <button type='button' onClick={currentStepIndex === 0 ? () => dispatch(setFalse()) : back} className='button-back-person'>
                                {'< Back'}
                            </button>
                            <button onClick={next} type='submit' className='button-next-person'>
                                <img src={group} alt='button' />
                            </button>
                        </div>
                    ) : (
                        <div className='buttons-group-profile'>
                            <button type='button' onClick={back} className='button-profile'>
                                {'<'}
                            </button>
                            <h1 className='profile-title'>{currentStepIndex === 1 ? 'Profile' : 'Edit'}</h1>
                        </div>
                    )
                }
            {step}
        </div>
    )
};

export default PersonNavigate;