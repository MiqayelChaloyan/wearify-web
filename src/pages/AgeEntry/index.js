import { useSelector } from 'react-redux';

import { Input } from '../../ui/input';

import './style.css';

const AgeEntry = ({ age, updateFields }) => {
    const state = useSelector((state) => state.state);

    const handleChange = (e) => updateFields({ age: e.target.value });

    return (
        <div className='container'>
            <p className='step-title'>
                What’s your age?
            </p>
            <div className='text-decoration-3' />
            <div>
                <div className='age-row'>
                    <Input
                        name="age"
                        type="number"
                        value={state.age ? state.age : age}
                        onChange={handleChange}
                        className='input-style-age'
                        errors={{ message: 'Example error message' }}
                    />
                </div>
                <p className='instruction'>
                    We ask for this detail as age has an impact on how your weight
                    is disrupted, and ultimately helps us recommend the right size.
                </p>
            </div>
        </div>
    )
};

export default AgeEntry;