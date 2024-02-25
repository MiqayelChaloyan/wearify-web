import { useState } from 'react';

import InputField from '../../ui/input';
import ToggleSwitch from '../../ui/toggleSwitch';

import './style.css';

const StepOne = (props) => {
    const {
        formField: {
            feet,
            inches,
            weight,
            isCentimeter,
            isKilogram
        }
    } = props;

    const [isCentimeterBool, setIsCentimeterBool] = useState(true);
    const [isKilogramBool, setIsKilogramBool] = useState(true);

    const handleToggle = (name, bool) => {
        name === 'isCentimeter' ? setIsCentimeterBool(bool) : setIsKilogramBool(bool)
    };

    return (
        <div className='container-step-one'>
            <p className='step-text'>Find the size that best fits you,based on similar body frames:</p>
            <div>
                <p className='title-row'> Height </p>
                <div className='row'>
                    <div className='input-box'>
                        <InputField
                            name={feet.name}
                            className='form-input-height'
                        />
                        <span className='unit'>ft</span>
                    </div>
                    {
                        !isCentimeterBool &&
                        <div className='input-box'>
                            <InputField
                                name={inches.name}
                                className='form-input-height'
                            />
                            <span className='unit'>in</span>
                        </div>
                    }
                    <ToggleSwitch
                        name={isCentimeter.name}
                        leftLabel='cm'
                        rightLabel='in'
                        onChange={handleToggle}
                    />
                </div>
            </div>
            <div>
                <p className='title-row'> Weight </p>
                <div className='row'>
                    <div className='input-box'>
                        <InputField
                            name={weight.name}
                            className='form-input-weight'
                        />
                        <span className='unit'>{isKilogramBool ? 'kg' : 'ibs'}</span>
                    </div>
                    <ToggleSwitch
                        name={isKilogram.name}
                        leftLabel='kg'
                        rightLabel='ibs'
                        onChange={handleToggle}
                    />
                </div>
            </div>
        </div>
    );
};

export default StepOne;