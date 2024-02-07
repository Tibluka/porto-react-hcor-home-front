import { useState } from 'react';

interface FormValues {
    [key: string]: { value: string; errors: string | null; valid: boolean };
}

interface FormErrors {
    [key: string]: string;
}

interface ValidationFunction {
    (values: FormValues): FormErrors;
}

interface HookReturn {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (formValues: FormValues) => void;
    values: FormValues;
    errors: FormErrors;
}

const useFormValidation = (initialState: FormValues, validate: ValidationFunction): HookReturn => {
    const [values, setValues] = useState<FormValues>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
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
        } else {
            console.log('Formulário inválido, corrija os erros antes de submeter:', errors);
        }
    };

    return { handleChange, handleSubmit, values, errors };
};

export default useFormValidation;
