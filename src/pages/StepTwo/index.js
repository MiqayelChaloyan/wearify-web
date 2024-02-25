import React from "react";

import InputField from "../../ui/input";

import './style.css';

const StepTwo = ({ formField: { age, } }) => (
    <div className='container-step-two'>
        <div className='age-row'>
            <InputField name={age.name} className='input-style-age' />
        </div>
        <p className='instruction'>
            We ask for this detail as age has an impact on how your weight
            is disrupted, and ultimately helps us recommend the right size.
        </p>
    </div>
);

export default React.memo(StepTwo);