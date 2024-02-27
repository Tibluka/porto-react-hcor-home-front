import InputText from '@/components/micros/InputText';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleStepperGeneralData.styles';
import { Icon } from '@/components/micros/Icon';
import { StepperStore } from '@/zustand/Stepper';
import useFormValidation from '@/hooks/userFormValidator';
import { useRouter } from 'next/navigation';
import { validarCNPJ, validarCPF, validarEmail, validarTelefone } from '@/services/Validators';


const RequestScheduleStepperGeneralData = ({ setStep, setSchedulePart }: any) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const router = useRouter();
    const { stepper } = StepperStore();
    const { form } = stepper ?? {};

    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            email: { value: form?.email, errors: null, valid: false },
            phone: { value: form?.phone, errors: null, valid: false }
        },
        (values) => {
            let errors: { [key: string]: string } = {};


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
                email: values.email.value,
                phone: values.phone.value
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

            {selectedOption === 1 && (
                <S.Container>
                    <S.DataBlock>
                        <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                            Dados do cliente
                        </Typography>

                        <S.Flex>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Nome do cliente
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    Antonio Roberto da Costa
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    CPF
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    321.445.784-41
                                </Typography>
                            </S.Column>
                        </S.Flex>
                    </S.DataBlock>

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

                    <S.DataBlock>
                        <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                            Veículo
                        </Typography>

                        <S.Flex>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Placa                            </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    GHG2202
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Chassi
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    8AGSA19907R142308
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Informações adicionais
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    FIAT ARGO 1.0 6V FLEX, 5 PORTAS, GASOLINA/ALCOOL, MANUAL
                                </Typography>
                            </S.Column>
                        </S.Flex>
                    </S.DataBlock>

                </S.Container>
            )}

            {selectedOption === 2 && (
                <S.Container>
                    <S.DataBlock>
                        <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                            Dados do cliente
                        </Typography>

                        <S.Flex>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Nome do cliente
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    Antonio Roberto da Costa
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    CPF
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    321.445.784-41
                                </Typography>
                            </S.Column>
                        </S.Flex>
                    </S.DataBlock>


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
                    <S.DataBlock>
                        <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                            Endereço da proposta
                        </Typography>

                        <S.Flex>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    CEP
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    15025-100
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Endereço
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    Av. Nações Unidas
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Bairro
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    Centro
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Cidade
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    São Paulo
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    UF
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    SP
                                </Typography>
                            </S.Column>
                        </S.Flex>
                    </S.DataBlock>

                    <S.DataBlock>
                        <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                            Veículo
                        </Typography>

                        <S.Flex>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Placa                            </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    GHG2202
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Chassi
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    8AGSA19907R142308
                                </Typography>
                            </S.Column>
                            <S.Column>
                                <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                    Informações adicionais
                                </Typography>
                                <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                    FIAT ARGO 1.0 6V FLEX, 5 PORTAS, GASOLINA/ALCOOL, MANUAL
                                </Typography>
                            </S.Column>
                        </S.Flex>
                    </S.DataBlock>

                </S.Container>

            )}

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
                    onClick={() => setSchedulePart(2)}
                    style={{ fontSize: 16, height: 48, marginRight: 32, fontWeight: 700, lineHeight: '0' }} />

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
