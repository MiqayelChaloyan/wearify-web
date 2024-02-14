import { url } from "../../constants";

import './style.css';

const Splash = () => {
    return (
        <div className='container-splash'>
            <img src={url} alt='logo' className='img'/>
        </div>
    )
};

export default Splash;