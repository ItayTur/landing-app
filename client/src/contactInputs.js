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
        error: 'Full name is required',
        placeholder: 'Full name',
    }),
    companyName: getInputObj({
        label: 'Company name',
        type: 'text',
        validations: [
            getValidation(validations.IS_REQUIRED)
        ],
        error: 'Company name is required',
        placeholder: 'Company Name',
    }),
    phone: getInputObj({
        label: 'Phone',
        type: 'text',
        validations: [
            getValidation(validations.IS_MOBILE_PHONE),
            getValidation(validations.IS_REQUIRED),
        ],
        error: 'Phone is required',
        placeholder: 'Phone',
    }),
    workEmail: getInputObj({
        label: 'Work email',
        type: 'text',
        validations: [
            getValidation(validations.IS_EMAIL),
            getValidation(validations.IS_REQUIRED),
        ],
        error: 'Work email is required',
        placeholder: 'Work email',
    }),
    terms: getInputObj({
        label: 'terms',
        type: 'radio',
        validations: [
            getValidation(validations.IS_REQUIRED),
        ],
        placeholder: 'I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes.',
    }),
}

export default inputs;