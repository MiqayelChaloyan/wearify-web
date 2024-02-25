import React from "react";

import SliderRange from "../../ui/slider";

import './style.css'

const StepThree = ({ formField: { range } }) => (
    <div className='container-step-three'>
        <p className='text-three' >
            I want this item to fit ...
        </p>
        <SliderRange name={range.name} />
    </div>
);

export default React.memo(StepThree);