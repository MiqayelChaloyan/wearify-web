export const Input = ({ name, onChange, className, defaultValue, type, errors }) => {
    return (
        <div>
            <input
                name={name}
                id={name}
                type={type}
                defaultValue={defaultValue}
                onChange={onChange}
                className={className}
            />
            {/* <span className='error'>{errors.message}</span> */}
        </div>
    )
};