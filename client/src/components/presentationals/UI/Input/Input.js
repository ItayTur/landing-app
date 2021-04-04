import classes from './Input.module.css'

const inputs = {
    text: ({ onChange, inputClasses, onBlur, placeholder }) => <input onChange={onChange} className={inputClasses} onBlur={onBlur} placeholder={placeholder} />,
    radio: ({ onChange, inputClasses, onBlur, placeholder }) => (
        <div className={classes.RadioContainer}>
            <input type='checkbox' onChange={onChange} className={`${inputClasses} ${classes.Radio}`} onBlur={onBlur} />
            <label className={classes.Placeholder}>{placeholder}</label>
        </div>
    ),
}

const Input = ({ label, type, onChange, isValid, isBlured, onBlur, error, placeholder }) => {

    let inputClasses = classes.Input
    let errorMsgClasses = classes.ErrorMessage
    if (!isValid && isBlured) {
        inputClasses += ` ${classes.InputError}`
        errorMsgClasses += ` ${classes.ErrorShown}`
    }
    const input = inputs[type]({ onChange, inputClasses, onBlur, placeholder })
    return (
        <div className={classes.InputContainer}>
            <label className={classes.Label}> {label} </label>
            {input}
            <p className={errorMsgClasses}>{error}</p>
        </div>
    )
}

export default Input