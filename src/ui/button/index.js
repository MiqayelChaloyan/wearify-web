export const Button = ({ onClick, text, style, fontSize }) =>
    <button style={{ ...style }} onClick={onClick}>
        <p style={{ fontSize }}>
            {text}
        </p>
    </button>;