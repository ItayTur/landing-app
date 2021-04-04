import { validations } from '@itaytur/validation';
import { getInputObj, getValidation } from './components/presentationals/UI/Form/FormUtils/FormUtils';

const inputs = {
    fullName: getInputObj({
        label: 'Full name',
        type: 'text',
        validations: [
            getValidation(validations.IS_REQUIRED),
            getValidation(validations.IS_WORDS),
        ],
        error: 'Full name is required'
    }),
    companyName: getInputObj({
        label: 'Company name',
        type: 'text',
        validations: [
            getValidation(validations.IS_REQUIRED)
        ],
        error: 'Company name is required',
    }),
    phone: getInputObj({
        label: 'Phone',
        type: 'text',
        validations: [
            getValidation(validations.IS_MOBILE_PHONE),
            getValidation(validations.IS_REQUIRED),
        ],
        error: 'Phone name is required',
    }),
    workEmail: getInputObj({
        label: 'Work email',
        type: 'text',
        validations: [
            getValidation(validations.IS_EMAIL),
            getValidation(validations.IS_REQUIRED),
        ],
        error: 'Phone name is required',
    }),
}

export default inputs;