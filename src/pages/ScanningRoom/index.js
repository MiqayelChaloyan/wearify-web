import { QR } from "../../constants";

import './style.css';

const ScanningRoom = () => (
    <div className='container-scann'>
        <h2 className='title-scanning'>
            🖐️ Welcome to your scanning room!
        </h2>
        <p className='text-intro'>
            Scan the QR code to
            open camera in mobile!
        </p>
        <div className='image-qr-row'>
            <img src={QR} alt='QR' className='QR-img-style' />
        </div>
        <div className='line-scann' />
        <p className='step'>📱   Take 2 photos</p>
        <p className='step'>🧍‍♂️  Get your parameters</p>
        <p className='step'>👕   Find your size</p>
    </div>
);

export default ScanningRoom;