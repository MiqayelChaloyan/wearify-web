import Pie from "../../ui/pie";

import { puffer_jacket } from "../../constants";

import './style.css';

const SizeMatch = () => {
    return (
        <div>
            <div className='image'>
                <img src={puffer_jacket} alt='jacket' />
            </div>
            <div className='bottom-sheet'>
                <p className='title-match'>Your best fit</p>
                <div className='sheet-row-1'>
                    <div className='pie'>
                        <Pie percentage={85} colour='#2ECDCD' fill='#C2EAEA' size='s' />
                    </div>
                    <div className='text'>
                        <p className='recommendation'>
                            This recommendation is based on your body parameters
                            and size that people like you bought, and whether they returned it.
                        </p>
                    </div>
                </div>
                <div className='sheet-row-2'>
                    <Pie percentage={15} colour='#D0AEF2' fill='#EBE1F4' size='m' />
                </div>
            </div>
        </div>
    )
};

export default SizeMatch;