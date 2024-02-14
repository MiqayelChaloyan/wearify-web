import { Input } from '../../ui/input';
import { ToggleSwitch } from '../../ui/toggleSwitch';

import './style.css';

const Measurements = ({
    selectedHeight,
    selectedWeight,
    updateFields
}) => {

    const handleChange = e => updateFields({ [e.target.id]: e.target.value });

    const handleToggleChange = (e) => {
        if (e.target.id === 'selectedHeight') {
            updateFields({ [e.target.id]: selectedHeight === 'cm' ? 'in' : 'cm' });
        } else {
            updateFields({ [e.target.id]: selectedWeight === 'kg' ? 'ibs' : 'kg' });
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
                    <Input
                        type='number'
                        defaultValue=''
                        onChange={handleChange}
                        className='height'
                        name='feet'
                    />
                    <Input
                        type='number'
                        defaultValue=''
                        onChange={handleChange}
                        className='height'
                        name='inches'
                    />
                    <ToggleSwitch
                        name='selectedHeight'
                        leftLabel='cm'
                        rightLabel='in'
                        handleToggle={handleToggleChange}
                    />
                </div>
            </div>
            <div>
                <p className='title'> Weight </p>
                <div className='weight-row'>
                    <Input
                        type='number'
                        defaultValue=''
                        onChange={handleChange}
                        className='weight'
                        name='weight'
                    />
                    <ToggleSwitch
                        name='selectedWeight'
                        leftLabel='kg'
                        rightLabel='ibs'
                        handleToggle={handleToggleChange}
                    />
                </div>
            </div>
        </div>
    )
};

export default Measurements;