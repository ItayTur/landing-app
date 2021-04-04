const Button = ({ onClick, text, isDisabled }) => {
    return (
        <button onClick={onClick} disabled={isDisabled}>
            {text}
        </button>
    );
};

export default Button;