import SliderRange from "../../ui/slider";

import './style.css'

const StepThree = (props) => {
    const {
        formField: {
            range,
        }
    } = props;

    return (
        <div className='container-step-three'>
            <p className='text-three' >
                I want this item to fit ...
            </p>
            <SliderRange name={range.name} />
        </div>
    );
};

export default StepThree;