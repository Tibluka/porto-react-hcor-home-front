import InputText from '@/components/micros/InputText';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleStepperGeneralData.styles';
import { Icon } from '@/components/micros/Icon';
import { StepperStore } from '@/zustand/Stepper';
import useFormValidation from '@/hooks/userFormValidator';
import { useRouter } from 'next/navigation';


const RequestScheduleStepperGeneralData = ({ setStep }: any) => {
    const [selectedOption, setSelectedOption] = useState(null);

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
           /*  if (!values.licensePlate.value) {
                errors.licensePlate = 'Campo Placa é obrigatório';
            } */

            return errors;
        }
    );

    const options = [
        { value: 1, label: 'Posto' },
        { value: 2, label: 'Domiciliar' }
    ];

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

    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ color: '#404040', fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 48, marginTop: 16 }}>
                Sua vistoria será realizada <span style={{ fontWeight: 700 }}>presencialmente</span>. Para concluir a solicitação, é só conferir as <br />
                informações e <span style={{ fontWeight: 700 }}>preencher o que falta</span>.
            </Typography>

            <Typography as="p" type="Body2" style={{ marginBottom: 8, fontSize: 12, color: '#1C1C1C', lineHeight: '16.34px' }}>
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
                    styles="primary"
                    variant="insurance"
                    children="Próximo"
                    size="small"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    onClick={nextStep}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }} />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleStepperGeneralData;
