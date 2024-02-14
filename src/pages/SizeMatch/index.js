import { useSelector } from "react-redux";
import { Button } from "../../ui/button";


const SizeMatch = () => {
    const INITIAL_DATA = useSelector((state) => state.initialData);

    const handleClose = () => {
        console.log('->>>>>>>>', INITIAL_DATA);
    }

    return (
        <div>
            <p style={{ color: 'white', textAlign: 'center' }}>SizeMatch</p>
            <div>
                <Button onClick={handleClose} text='Back' style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }} fontSize='20px' />

            </div>
        </div>
    )
};

export default SizeMatch;