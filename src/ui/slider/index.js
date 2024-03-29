import { useState } from 'react';
import { useField } from 'formik';

import './style.css';

const SliderRange = ({ name }) => {
    const [sliderValue, setSliderValue] = useState(50);
    const [, , helpers] = useField(name);

    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value, 10));

        const value = getTightnessLevel();
        return helpers.setValue(value);
    };

    const getTightnessLevel = () => {
        if (sliderValue <= 14) {
            return 'VERY TIGHT';
        } else if (sliderValue <= 28) {
            return 'TIGHT';
        } else if (sliderValue <= 42) {
            return 'SLIGHTLY TIGHT';
        } else if (sliderValue <= 56) {
            return 'AVERAGE';
        } else if (sliderValue <= 70) {
            return 'SLIGHTLY LOOSER';
        } else if (sliderValue <= 84) {
            return 'LOOSER';
        } else if (sliderValue <= 98) {
            return 'VERY LOOSE';
        }
    };

    return (
        <div className='range'>
            <span className='value top'>{getTightnessLevel()}</span>
            <input
                id={name}
                className='slider-range'
                type='range'
                min='0'
                max='96'
                step='16'
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <div className='lines'>
                <div className='line-range'></div>
                <div className='line-range'></div>
                <div className='line-range'></div>
                <div className='line-range'></div>
                <div className='line-range'></div>
                <div className='line-range'></div>
                <div className='line-range'></div>
            </div>
            <div className='size'>
                <p className='size-text'>Tighter</p>
                <p className='size-text'>Looser</p>
            </div>
        </div>
    )
}

export default SliderRange;