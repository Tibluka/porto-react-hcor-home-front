import { Icon } from '@/components/micros/Icon';
import InputText from '@/components/micros/InputText';
import useFormValidation from '@/hooks/userFormValidator';
import { Button, Typography } from 'design-system-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as S from './requestScheduleServicePlaceDomiciliar.styles';
import { StepperStore } from '@/zustand/Stepper';

// import { Container } from './styles';

const RequestScheduleServicePlaceDomiciliar = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();

    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            zipCode: { value: '', errors: null, valid: false }
        },
        (values) => {
            let errors: { [key: string]: string } = {};

            if (!values.zipCode.value) {
                errors.zipCode = 'CEP é obrigatório';
            } else if (!/^\d{5}-\d{3}$/.test(values.zipCode.value)) {
                errors.zipCode = 'Formato inválido de CEP';
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
                Local do serviço
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        invalid={!!errors.zipCode}
                        disabled={false}
                        width={181}
                        label="CEP"
                        name="zipCode"
                        value={values.zipCode.value}
                        clearField={() => clearField("zipCode", "")}
                        onChange={handleChange} />
                    {/* {errors.zipCode && <p>{errors.zipCode}</p>} */}
                </S.InputContainer>

                <Button
                    styles="primary"
                    variant="insurance"
                    children="Buscar"
                    size="small"
                    onClick={() => handleSubmit(values)}
                    style={{ fontSize: 16, height: 48 }} />
            </S.Section>

            <S.Action>
                <Button
                    children="Cancelar"
                    variant="insurance"
                    styles="ghost"
                    size="small"
                    onClick={router.back}
                    style={{ fontSize: 16, fontWeight: 700, height: 48, lineHeight: '20px', marginRight: 32 }}
                />
                <Button
                    children="Próximo"
                    variant="insurance"
                    styles="primary"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    size="small"
                    onClick={() => {
                        const errors = handleSubmit(values);
                        if (!errors || Object.keys(errors).length === 0) setStep(2, stepper);
                    }}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleServicePlaceDomiciliar;