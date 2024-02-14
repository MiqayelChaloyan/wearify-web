import SliderRange from '../../ui/slider';

import './style.css';

const FitPreference = ({ range, updateFields }) => {

    const handleChange = value =>  updateFields({ range: value });
    
    return (
        <div className='container'>
        <p className='step-title'>
            fit preference
        </p>
        <div className='text-decoration-3' />
        <p className='text' >
            I want this item to fit ...
        </p>
        <SliderRange name={range} onChange={handleChange}/>
    </div>
    )
};

export default FitPreference;