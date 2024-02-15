import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import { formatarCEP, formatarCpfCnpj, formatarTelefone } from '@/services/Validators';
import { useState } from 'react';

interface FormValues {
    [key: string]: { value: string | SelectOptionProps | any; errors: string | null; valid: boolean };
}

interface FormErrors {
    [key: string]: string;
}

interface ValidationFunction {
    (values: FormValues): FormErrors;
}

interface HookReturn {
    handleChange: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
    handleSubmit: (formValues: FormValues) => { [key: string]: any } | null;
    values: FormValues;
    errors: FormErrors;
}

const useFormValidation = (initialState: FormValues, validate: ValidationFunction): HookReturn => {
    const [values, setValues] = useState<FormValues>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.target;

        if (name === 'cpfCnpj') value = formatarCpfCnpj(value);
        if (name === 'phone') value = formatarTelefone(value);
        if (name === 'zipCode') value = formatarCEP(value);

        setValues({
            ...values,
            [name]: { value, errors: null, valid: false },
        });
    };

    const handleSubmit = (formValues: FormValues) => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Formulário válido, pronto para ser submetido:', values);
            return null;
        } else {
            console.log('Formulário inválido, corrija os erros antes de submeter:', validationErrors);
            return validationErrors;
        }
    };

    return { handleChange, handleSubmit, values, errors };
};

export default useFormValidation;
