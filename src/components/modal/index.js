import React from 'react';

import useTheme from '../../hooks/useTheme';

import './style.css';

export const Modal = React.memo(({ open, handleClose, children, currentStepIndex }) => {
    const { theme } = useTheme();

    return (
        <div className="modal" style={{ right: open ? '10px' : '-500px', backgroundColor: theme }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {currentStepIndex !== 0 && currentStepIndex < 2 &&
                        <div className="modal-header">
                            <button
                                onClick={handleClose}
                                className='modal-button'
                            >
                                ✖
                            </button>
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
});