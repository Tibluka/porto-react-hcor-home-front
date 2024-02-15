import InputText from '@/components/micros/InputText';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleVehicleDataDomiciliar.styles';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';
import { Icon } from '@/components/micros/Icon';
import useFormValidation from '@/hooks/userFormValidator';
// import { Container } from './styles';

const RequestScheduleVehicleDataDomiciliar = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();

    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            licensePlate: { value: '', errors: null, valid: false },
            chassi: { value: '', errors: null, valid: false }
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

    function clearField(name: string, value: string) {
        handleChange({ target: { name, value: value } } as any);
    }

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados do veículo
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        invalid={!!errors.licensePlate}
                        width={250}
                        label="Placa"
                        name="licensePlate"
                        value={values.licensePlate.value}
                        clearField={() => clearField("licensePlate", "")}
                        onChange={handleChange} />
                </S.InputContainer>
                <InputText
                    invalid={!!errors.chassi}
                    label="Chassi"
                    name="chassi"
                    value={values.chassi.value}
                    clearField={() => clearField("chassi", "")}
                    onChange={handleChange} />
            </S.Section>

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
                    children="Próximo"
                    size="small"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    onClick={() => {
                        const errors = handleSubmit(values);
                        if (!errors || Object.keys(errors).length === 0) setStep(4, stepper);
                    }}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }} />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleVehicleDataDomiciliar;