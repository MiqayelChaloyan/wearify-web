import SliderRange from "../../ui/slider";

import './style.css'

const StepThree = (props) => {
    const {
        formField: {
            range,
        }
    } = props;

    return (
        <div className='container'>
            <p className='text' >
                I want this item to fit ...
            </p>
            <SliderRange name={range} />
        </div>
    );
};

export default StepThree;