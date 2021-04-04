export const getInputObj = ({ type = 'text', label, value = '', validations = [], error, isValid = false, attrs = {}, placeholder = '' }) => {
    return {
        type,
        label,
        value,
        attrs,
        isValid,
        isBlured: false,
        validations,
        error,
        placeholder,
    }
}

export const getValidation = (type, options) => {
    return {
        type,
        options
    }
}