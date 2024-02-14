import React from 'react';

import './style.css';

export const ToggleSwitch = ({ name, leftLabel, rightLabel, onChange }) => {
    return (
        <div className='toggle-switch'>
            <p className='label'>{leftLabel}</p>
            <label className="switch">
                <input type="checkbox" onChange={onChange} name={name} id={name}/>
                <span className="slider round"></span>
            </label>
            <p className='label'>{rightLabel}</p>
        </div>
    );
};