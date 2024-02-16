import { useState } from "react";
import { useDebounce } from "use-debounce";

export const Input = ({ name, onChange, value: inputValue, className, type, errors }) => {
    const [text, setText] = useState(inputValue || '');
    const [value] = useDebounce(text, 100);

    const handleChange = (e) => {
        setText(e.target.value);
        onChange(e);
    };

    return (
        <div>
            <input
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={handleChange}
                className={className}
            />
            {/* <span className='error'>{errors && errors.message}</span> */}
        </div>
    );
};
