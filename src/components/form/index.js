import React, { useEffect, useState } from 'react';

import { Formik, Form } from 'formik';

import { useDispatch } from "react-redux";
import { setTrue } from "../../store/features/booleanSlice";
import { addData } from "../../store/features/initialDataSlice";

import useTheme from "../../hooks/useTheme";

import validationSchema from "./validationSchema";
import checkoutFormModel from "./checkoutFormModel";
import formInitialValues from "./formInitialValues";

import StepOne from "../../pages/StepOne";
import StepTwo from "../../pages/StepTwo";
import StepThree from '../../pages/StepThree';

import { href } from "../../constants";

import './style.css';

const steps = ['Your Measurements', 'What’s your age?', 'Fit preference'];

const SteppedModal = () => {
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const { formId, formField } = checkoutFormModel;
    const { setTheme } = useTheme();
    const dispatch = useDispatch();

    const _sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const _renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <StepOne formField={formField} />;
            case 1:
                return <StepTwo formField={formField} />;
            default:
                return <StepThree formField={formField} />;
        }
    };

    const _submitForm = async (values, actions) => {
        await _sleep(1000);
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        dispatch(setTrue())
        dispatch(addData({ ...values }))
    };

    const _handleSubmit = (values, actions) => {
        if (activeStep === steps.length - 1) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    const _handleBack = (e) => {
        e.preventDefault();
        setActiveStep(activeStep - 1);
    };

    const width = activeStep === 0 ? '33.3%' : activeStep === 1 ? '66.6%' : '100%';

    useEffect(() => setTheme('#0C0D34'), [activeStep, setTheme]);

    return (
        <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form id={formId}>
                    <div className='current-step'>
                        <p className='active-step'>
                            Step {activeStep + 1} / {steps.length}
                        </p>
                        <a href={href} target='_blank' rel='noreferrer' className='privacy'>
                            Privacy
                        </a>
                    </div>
                    <div className='progressbar'>
                        <div style={{ width }}></div>
                    </div>
                    <h2 className='title'>{steps[activeStep]}</h2>
                    <div className='line' />
                    {_renderStepContent(activeStep)}
                    <div className='buttons'>
                        {activeStep !== 0 && (
                            <button onClick={_handleBack} className='button-back'>
                                Back
                            </button>
                        )}
                        <div className='wrapper'>
                            <button
                                disabled={isSubmitting}
                                type='submit'
                                variant='contained'
                                color='primary'
                                className='button-next'
                            >
                                {activeStep === steps.length - 1 ? 'Send' : 'Next'}
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default SteppedModal;

