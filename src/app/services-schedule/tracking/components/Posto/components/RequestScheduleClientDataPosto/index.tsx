import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import InputText from '@/components/micros/InputText';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleClientDataPosto.styles';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';
import { Icon } from '@/components/micros/Icon';
import useFormValidation from '@/hooks/userFormValidator';
import { validarCNPJ, validarCPF, validarEmail, validarTelefone } from '@/services/Validators';

// import { Container } from './styles';

const RequestScheduleClientDataPosto = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();


    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            cpfCnpj: { value: '', errors: null, valid: false },
            nameEntity: { value: '', errors: null, valid: false },
            email: { value: '', errors: null, valid: false },
            phone: { value: '', errors: null, valid: false }
        },
        (values) => {
            let errors: { [key: string]: string } = {};
            if (!values.nameEntity.value) {
                errors.nameEntity = 'Nome/Razão social é obrigatório';
            }

            // Validação do CPF ou CNPJ
            if (!values.cpfCnpj.value) {
                errors.cpfCnpj = 'CPF/CNPJ é obrigatório';
            } else {
                // Verifica se o valor é um CPF ou CNPJ válido
                const cpfCnpjValue = values.cpfCnpj.value.replace(/\D/g, ''); // Remove caracteres não numéricos

                if (cpfCnpjValue.length === 11 && !validarCPF(cpfCnpjValue)) {
                    errors.cpfCnpj = 'CPF inválido';
                } else if (cpfCnpjValue.length === 14 && !validarCNPJ(cpfCnpjValue)) {
                    errors.cpfCnpj = 'CNPJ inválido';
                }
            }

            // Validação do e-mail
            if (!values.email.value) {
                errors.email = 'E-mail é obrigatório';
            } else if (!validarEmail(values.email.value)) {
                errors.email = 'E-mail inválido';
            }

            // Validação do telefone
            if (!values.phone.value) {
                errors.phone = 'Telefone é obrigatório';
            } else if (!validarTelefone(values.phone.value)) {
                errors.phone = 'Telefone inválido';
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
                Dados do cliente
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        invalid={!!errors.cpfCnpj}
                        width={250}
                        label="CPF/CNPJ"
                        name="cpfCnpj"
                        value={values.cpfCnpj.value}
                        clearField={() => clearField("cpfCnpj", "")}
                        onChange={handleChange} />
                </S.InputContainer>
                <InputText
                    invalid={!!errors.nameEntity}
                    label="Nome/Razão social"
                    name="nameEntity"
                    value={values.nameEntity.value}
                    clearField={() => clearField("nameEntity", "")}
                    onChange={handleChange} />
            </S.Section>

            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Contato
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        invalid={!!errors.email}
                        width={396}
                        label="E-mail"
                        name="email"
                        value={values.email.value}
                        clearField={() => clearField("email", "")}
                        onChange={handleChange} />
                </S.InputContainer>
                <InputText
                    invalid={!!errors.phone}
                    width={250}
                    label="Celular"
                    name="phone"
                    value={values.phone.value}
                    clearField={() => clearField("phone", "")}
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
                    onClick={() => setStep(1, stepper)}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0', marginRight: 32 }} />

                <Button
                    styles="primary"
                    variant="insurance"
                    children="Próximo"
                    size="small"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    onClick={() => {
                        const errors = handleSubmit(values);
                        if (!errors || Object.keys(errors).length === 0) setStep(3, stepper);
                    }}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }} />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleClientDataPosto;