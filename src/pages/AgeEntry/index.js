import { Input } from '../../ui/input';

import './style.css';

const AgeEntry = ({ age, updateFields }) => {
    return (
        <div className='container'>
            <p className='step-title'>
                What’s your age?
            </p>
            <div className='text-decoration-3' />
            <div>
                <div className='age-row'>
                    <Input
                        // required
                        name='age'
                        className='age'
                        // errors={age.trim() === '' && error}
                        type='number'
                        onChange={e => updateFields({ age: e.target.value })}
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




{/* {error && <p style={{ color: 'red', textAlign: 'center' }}>
            Please enter an age between 12 and 99 years.
</p>} */}