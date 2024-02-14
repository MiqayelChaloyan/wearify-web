import useTheme from '../../hooks/useTheme';
import { Button } from '../../ui/button';
import './style.css';

export const Modal = ({ open, handleClose, children, currentStepIndex }) => {
    const { theme } = useTheme();

    return (
        <div className="modal" style={{ right: open ? '10px' : '-500px', backgroundColor: theme }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {currentStepIndex !== 0 && currentStepIndex < 2 &&
                        <div className="modal-header">
                            <Button onClick={handleClose} text='✖' style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }} fontSize='20px' />
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
};