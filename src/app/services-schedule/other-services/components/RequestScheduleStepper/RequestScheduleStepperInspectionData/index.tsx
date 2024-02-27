import { Button, Typography } from 'design-system-react';
import { useState } from 'react';
import * as S from './requestScheduleStepperInspectionData.styles';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';
import { Icon } from '@/components/micros/Icon';
import useFormValidation from '@/hooks/userFormValidator';
import InputText from '@/components/micros/InputText';
import InputMask from 'react-input-mask';

const RequestScheduleStepperInspectionData = ({ setStep }: any) => {
    const [selectedOption, setSelectedOption] = useState(1);

    const router = useRouter();
    const { stepper } = StepperStore();
    const { form } = stepper ?? {};

    const options = [
        { value: 1, label: 'Sim' },
        { value: 2, label: 'Não' },
    ];


    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            number: { value: form?.number, errors: null, valid: false },
            complement: { value: form?.complement, errors: null, valid: false },
            reference: { value: form?.reference, errors: null, valid: false },
            receiverName: { value: form?.receiverName, errors: null, valid: false },
            applicantName: { value: form?.applicantName, errors: null, valid: false },
            scheduleDate: { value: form?.scheduleDate, errors: null, valid: false },
            schedulePeriod: { value: form?.schedulePeriod, errors: null, valid: false }
        },
        (values) => {
            let errors: { [key: string]: string } = {};
            if (!values.number.value) {
                errors.number = 'Campo Complemento é obrigatório';
            }
            if (!values.reference.value) {
                errors.reference = 'Campo Referência é obrigatório';
            }
            if (!values.receiverName.value) {
                errors.receiverName = 'Campo Recebedor é obrigatório';
            }
            if (!values.applicantName.value) {
                errors.applicantName = 'Campo Solicitante é obrigatório';
            }
            if (!values.scheduleDate.value) {
                errors.scheduleDate = 'Campo Data é obrigatório';
            }
            if (!values.schedulePeriod.value) {
                errors.schedulePeriod = 'Campo Período é obrigatório';
            }

            return errors;
        }
    );

    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    function nextStep() {
        const errors = handleSubmit(values);
        if (!errors || Object.keys(errors).length === 0) {
            StepperStore.getState().setStepperForm({
                ...form,
                number: values.number.value,
                complement: values.complement.value,
                reference: values.reference.value,
                receiverName: values.receiverName.value,
                applicantName: values.applicantName.value,
                scheduleDate: values.scheduleDate.value,
                schedulePeriod: values.schedulePeriod.value
            });
            setStep(3, StepperStore.getState().stepper);
        }
    }

    function clearField(name: string, value: string) {
        handleChange({ target: { name, value: value } } as any);
    }

    return (
        <S.Container>

            <Typography as="h4" type="Title6" style={{ fontSize: 24, fontWeight: 600, lineHeight: '28px', marginBottom: 24, marginTop: 40 }}>
                Endereço da Vistoria
            </Typography>

            <Typography as="h4" type="Title6" style={{ marginBottom: 24, fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                O endereço é o mesmo que está na proposta?
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


            <S.DataBlock>
                <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 16, marginTop: 32 }}>
                    Local
                </Typography>

                <S.Flex>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            CEP
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 14, fontWeight: 500, lineHeight: '18.2px', color: '#1F1F1F' }}>
                            15.025-100
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Endereço
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 14, fontWeight: 500, lineHeight: '18.2px', color: '#1F1F1F' }}>
                            Av. Nações Unidas
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Bairro
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 14, fontWeight: 500, lineHeight: '18.2px', color: '#1F1F1F' }}>
                            Centro
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Cidade
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 14, fontWeight: 500, lineHeight: '18.2px', color: '#1F1F1F' }}>
                            São Paulo
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            UF
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 14, fontWeight: 500, lineHeight: '18.2px', color: '#1F1F1F' }}>
                            SP
                        </Typography>
                    </S.Column>

                </S.Flex>
            </S.DataBlock>

            <S.Section style={{ marginBottom: 24 }}>
                <S.InputContainer>
                    <InputText
                        invalid={!!errors.number}
                        width={121}
                        label="Número"
                        name="number"
                        value={values.number.value}
                        clearField={() => clearField("number", "")}
                        onChange={handleChange} />
                </S.InputContainer>
                <S.InputContainer>
                    <InputText
                        width={456}
                        label="Complemento"
                        name="complement"
                        value={values.complement.value}
                        clearField={() => clearField("complement", "")}
                        onChange={handleChange} />
                </S.InputContainer>
                <InputText
                    invalid={!!errors.reference}
                    width={389}
                    label="Ponto de referência"
                    name="reference"
                    value={values.reference.value}
                    clearField={() => clearField("reference", "")}
                    onChange={handleChange} />
            </S.Section>

            <S.Section style={{ marginBottom: 48 }}>
                <S.InputContainer>
                    <InputText
                        invalid={!!errors.receiverName}
                        width={500}
                        label="Nome de quem vai receber o vistoriador"
                        name="receiverName"
                        value={values.receiverName.value}
                        clearField={() => clearField("receiverName", "")}
                        onChange={handleChange} />
                </S.InputContainer>

                <InputText
                    invalid={!!errors.applicantName}
                    width={475}
                    label="Nome de quem solicitou a vistoria"
                    name="applicantName"
                    value={values.applicantName.value}
                    clearField={() => clearField("applicantName", "")}
                    onChange={handleChange} />
            </S.Section>

            <Typography as="h4" type="Title6" style={{ fontSize: 24, fontWeight: 600, lineHeight: '28px', marginBottom: 24, marginTop: 40 }}>
                Dia e horário da vistoria
            </Typography>

            <Typography as="h4" type="Title6" style={{ marginBottom: 24, fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                Selecione um dia para o agendamento
            </Typography>

            <S.Section style={{ marginBottom: 24 }}>
                <InputMask
                    mask="99/99/9999" // Define a máscara para o formato dd/mm/aaaa
                    maskChar={null} // Remove o caractere de preenchimento da máscara
                    value={values.scheduleDate.value}
                    onChange={handleChange}>
                    <InputText
                        invalid={!!errors.scheduleDate}
                        width={184}
                        label="Data"
                        name="scheduleDate"
                        value={values.scheduleDate.value}
                        clearField={() => clearField("scheduleDate", "")}
                    />
                </InputMask>
            </S.Section>

            <Typography as="h4" type="Title6" style={{ marginBottom: 24, fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                Selecione um horário disponível
            </Typography>

            <S.Section style={{ marginBottom: 48 }}>
                <InputText
                    invalid={!!errors.schedulePeriod}
                    width={184}
                    label="Período"
                    name="schedulePeriod"
                    value={values.schedulePeriod.value}
                    clearField={() => clearField("schedulePeriod", "")}
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

export default RequestScheduleStepperInspectionData;