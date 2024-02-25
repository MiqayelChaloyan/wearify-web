import { at } from 'lodash';
import { useField } from 'formik';
import './style.css';

const InputField = (props) => {
    const { errorText, ...rest } = props;
    const [field, meta] = useField(props);

    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return error;
        }
    };

    return (
        <div className='form-input'>
            <input type="text" {...field} {...rest} />
            {meta.touched && meta.error &&
                <span
                    className='error-field'
                >
                    {_renderHelperText()}
                </span>
            }
        </div>
    );
};

export default InputField;
