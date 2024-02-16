
import { useSelector } from 'react-redux';
import { average, camera } from '../../constants';

import './style.css';

const Profile = () => {
    const state = useSelector((state) => state.state);
    const { age, inches, range, selectedHeight, selectedWeight, weight } = state;

    const handleScannCamera = () => {
        console.log('scann', state);
    };

    return (
        <div>
            <div className='camera-button'>
                <span className='scann'>Scann now</span>
                <button className='button-scann' onClick={handleScannCamera}>
                    <img src={camera} alt='camera' className='camera' />
                </button>
            </div>
            <div className='background-image'>
                <img src={average} alt='average' className='average' />
            </div>
            <div className='right'>
                <div className='sizes'>
                    <p className='title-sizes'>Height</p>
                    <div className='height-person'>
                        <p className='person-size-text'>{inches} {selectedHeight}</p>
                    </div>
                    <p className='title-sizes'>Weight</p>
                    <div className='weight-person'>
                        <p className='person-size-text'>{weight} {selectedWeight}</p>
                    </div>
                </div>
                <div className='sizes'>
                    <p className='title-sizes'>Age</p>
                    <div className='age-person'>
                        <p className='person-size-text'>{age}</p>
                    </div>
                    <p className='title-sizes'>Fit</p>
                    <div className='feet-person'>
                        <p className='person-size-text'>{range}</p>
                    </div>
                    <p className='title-sizes'>Gender</p>
                    <div className='gender-person'>
                        <p className='person-size-text'>Female</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;