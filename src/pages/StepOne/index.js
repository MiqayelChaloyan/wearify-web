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
                            unit='cm'
                            name={feet.name}
                            className='form-input-height-style'
                        />
                    </div>
                    {
                        !isCentimeterBool &&
                        <div className='input-box'>
                            <InputField
                                unit='in'
                                name={inches.name}
                                className='form-input-height-style'
                            />
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
                    <div className='input-box-weight'>
                        <InputField
                            unit={isKilogramBool ? 'kg' : 'ibs'}
                            name={weight.name}
                            className='form-input-weight-style'
                        />
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