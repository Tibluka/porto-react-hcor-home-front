import { Button, Typography } from 'design-system-react';
import { useState } from 'react';
import * as S from './requestScheduleStepperReviewData.styles';
import { Icon } from '@/components/micros/Icon';
import useFormValidation from '@/hooks/userFormValidator';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';


const RequestScheduleStepperReviewData = ({ setStep }: any) => {
    const [selectedOption, setSelectedOption] = useState(1);

    const options = [
        { value: 1, label: 'Posto' },
        { value: 2, label: 'Domiciliar' },
    ];

    const router = useRouter();
    const { stepper } = StepperStore();
    const { form } = stepper ?? {};

    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            licensePlate: { value: form?.licensePlate, errors: null, valid: false },
            chassi: { value: form?.chassi, errors: null, valid: false }
        },
        (values) => {
            let errors: { [key: string]: string } = {};
            if (!values.licensePlate.value) {
                errors.licensePlate = 'Campo Placa é obrigatório';
            }

            if (!values.chassi.value) {
                errors.chassi = 'Campo Chassi é obrigatório';
            }

            return errors;
        }
    );

    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    function clearField(name: string, value: string) {
        handleChange({ target: { name, value: value } } as any);
    }

    function nextStep() {
        const errors = handleSubmit(values);
        if (!errors || Object.keys(errors).length === 0) {
            StepperStore.getState().setStepperForm({
                ...form,
                licensePlate: values.licensePlate.value,
                chassi: values.chassi.value
            });
            setStep(2, StepperStore.getState().stepper);
        }
    }


    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 400, lineHeight: '24px', marginBottom: 48, marginTop: 16 }}>
                Sua vistoria será realizada <span style={{ fontWeight: 700 }}>presencialmente</span>. Para concluir a solicitação, é só conferir as <br />
                informações e <span style={{ fontWeight: 700 }}>preencher o que falta</span>.
            </Typography>

            <Typography as="label" type="Label" style={{ marginBottom: 8, fontSize: 12, lineHeight: '24px' }}>
                Selecione como sua vistoria será realizada:
            </Typography>

            <S.FormCustomRadio>
                {options.map((option) => (
                    <label key={option.value}>
                        <input
                            type="radio"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={() => handleOptionChange(option.value)}
                        />
                        <S.Radio selected={selectedOption === option.value}>
                            {option.label}
                        </S.Radio>
                    </label>
                ))}
            </S.FormCustomRadio>

            <S.Action>
                <Button
                    styles="ghost"
                    variant="insurance"
                    children="Cancelar"
                    size="small"
                    onClick={() => router.back()}
                    style={{ fontSize: 16, height: 48, marginRight: 32 }} />
                <Button
                    styles="secondary"
                    variant="insurance"
                    children="Anterior"
                    size="small"
                    iconSide="left"
                    icon={<Icon size={20} color="primary" icon="Porto-ic-arrow-left" />}
                    onClick={() => setStep(2, stepper)}
                    style={{ fontSize: 16, height: 48, marginRight: 32, fontWeight: 700, lineHeight: '0' }} />

                <Button
                    styles="primary"
                    variant="insurance"
                    children="Finalizar agendamento"
                    size="small"
                    onClick={nextStep}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }} />
            </S.Action>

        </S.Container>
    );
}

export default RequestScheduleStepperReviewData;