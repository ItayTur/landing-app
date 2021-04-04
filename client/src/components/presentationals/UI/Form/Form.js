import { Component } from 'react';
import { validate } from '@itaytur/validation';

import Input from '../Input/Input';
import Button from '../Button/Button';

import classes from './Form.module.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            inputs: {
                ...props.inputs
            }
        }
    }

    blurHandler = ({ input }) => this.inputUpdateHandler({
        input, updater: inputToUpdate => inputToUpdate.isBlured = true
    })

    changeHandler = ({ input, event }) => this.inputUpdateHandler({
        input,
        updater: inputToUpdate => {
            if (this.state.inputs[input].type === 'radio') {
                inputToUpdate.value = event.target.checked;
                inputToUpdate.isValid = event.target.checked;
            } else {
                const { value } = event.target;
                inputToUpdate.isValid = validate.isValidValue(value, inputToUpdate.validations);
                inputToUpdate.value = value;
            }
            let isFormValid = true
            const { inputs } = this.state
            for (let inputIndex in inputs) {
                if (inputIndex === input) isFormValid = isFormValid && inputToUpdate.isValid
                else isFormValid = isFormValid && inputs[inputIndex].isValid
            }
            return { isFormValid }
        }
    })


    inputUpdateHandler = ({ input, updater }) => {
        const { inputs } = this.state;
        const changedInputs = { ...inputs };
        const changedInput = { ...inputs[input] };
        const statesToUpdate = updater(changedInput);
        changedInputs[input] = changedInput;
        this.setState({ inputs: changedInputs, ...statesToUpdate });
    }

    getInputsData = inputs => {
        const data = {}
        for (const input in inputs) {
            data[input] = inputs[input].value
        }
        return data
    }

    submitHandler = event => {
        try {
            event.preventDefault();
            const { inputs } = this.state;
            const { onSubmit } = this.props;
            const formData = this.getInputsData(inputs);
            const updatedInputs = { ...inputs };
            for (let input in updatedInputs) {
                const updatedInput = { ...updatedInputs[input] }
                updatedInput.isBlured = true;
                updatedInputs[input] = updatedInput;
            }
            this.setState({ inputs: updatedInputs }, () => onSubmit({ formData }));
        } catch (error) {
            alert('submit failed')
        }
    }

    getInputs = () => {
        const { inputs } = this.state
        const inputsToReturn = []
        for (const input in inputs) {
            const inputElement = (
                <Input
                    key={input}
                    {...inputs[input]}
                    onChange={event => this.changeHandler({ input, event })}
                    onBlur={() => this.blurHandler({ input })}
                />
            )
            inputsToReturn.push(inputElement)
        }
        return <div className={classes.Inputs}>
            {inputsToReturn}
        </div>
    }

    render() {
        const { submitText, title, subTitle } = this.props
        const titleJsx = title && <h2 className={classes.Title}>{title}</h2>
        const subTitleJsx = subTitle && <h4 className={classes.SubTitle}>{subTitle}</h4>
        const inputs = this.getInputs();

        return (
            <form className={classes.Form} onSubmit={this.submitHandler}>
                {titleJsx}
                {subTitleJsx}
                {inputs}
                <Button text={submitText} />
            </form>
        )
    }
}

export default Form;