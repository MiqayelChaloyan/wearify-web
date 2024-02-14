import { Button } from '../../ui/button';
import './style.css';

export const Modal = ({ open, handleClose, children, currentStepIndex }) => {
    return (
        <div className="modal" style={{ right: open ? '10px' : '-500px' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {currentStepIndex !== 0 &&
                        <div className="modal-header">
                            <Button onClick={handleClose} text='X' style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }} fontSize='20px' />
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
};