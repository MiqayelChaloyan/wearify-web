import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Input } from '../../ui/input';
import { ToggleSwitch } from '../../ui/toggleSwitch';

import './style.css';

const Measurements = ({ feet, weight, inches, updateFields }) => {
    const [isCheckedHeight, setIsCheckedHeight] = useState(false);
    const [isCheckedWeight, setIsCheckedWeight] = useState(false);

    const state = useSelector((state) => state.state);

    const handleChange = e => updateFields({ [e.target.id]: e.target.value });

    const handleToggle = (e) => {
        if (e.target.id === 'selectedHeight') {
            setIsCheckedHeight(!isCheckedHeight);
            updateFields({ [e.target.id]: isCheckedHeight ? 'in' : 'cm' });
        } else {
            setIsCheckedWeight(!isCheckedWeight);
            updateFields({ [e.target.id]: isCheckedWeight ? 'ibs' : 'kg' });
        }
    };

    return (
        <div className='container'>
            <p className='step-title'>
                Your Measurements
            </p>
            <div className='text-decoration-1' />
            <p className='step-text'>
                Find the size that best fits you,based on similar body frames:
            </p>
            <div>
                <p className='title'> Height </p>
                <div className='height-row'>
                    <div className='input-box'>
                        <Input
                            name="feet"
                            type="number"
                            value={state.feet ? state.feet : feet}
                            onChange={handleChange}
                            className='input-style-height'
                            errors={{ message: 'Example error message' }}
                        />
                        <span className='unit'>ft</span>
                    </div>
                    {isCheckedHeight && (
                        <div className='input-box'>
                            <Input
                                name="inches"
                                type="number"
                                value={state.inches ? state.inches : inches}
                                onChange={handleChange}
                                className='input-style-height'
                                errors={{ message: 'Example error message' }}
                            />
                            <span className='unit'>in</span>
                        </div>
                    )}
                    <ToggleSwitch
                        name="selectedHeight"
                        leftLabel="cm"
                        rightLabel="in"
                        onChange={handleToggle}
                    />
                </div>
            </div>
            <div>
                <p className='title'> Weight </p>
                <div className='weight-row'>
                    <div className='input-box'>
                        <Input
                            name="weight"
                            type="number"
                            value={state.weight ? state.weight : weight}
                            onChange={handleChange}
                            className='input-style-weight'
                            errors={{ message: 'Example error message' }}
                        />
                        <span className='unit'>{isCheckedWeight ? 'ibs' : 'kg'}</span>
                    </div>
                    <ToggleSwitch
                        name='selectedWeight'
                        leftLabel='kg'
                        rightLabel='ibs'
                        onChange={handleToggle}
                    />
                </div>
            </div>
        </div>
    )
};

export default Measurements;