import { Dropdown } from '@/components/micros/Dropdown';
import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import { Icon } from '@/components/micros/Icon';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleGeneralDataPosto.styles';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';
import useFormValidation from '@/hooks/userFormValidator';

// import { Container } from './styles';

const RequestScheduleGeneralDataPosto = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();

    const { form } = stepper ?? {};

    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        {
            company: { value: form?.company, errors: null, valid: false },
            vehicleType: { value: form?.vehicleType, errors: null, valid: false },
            uf: { value: form?.uf, errors: null, valid: false },
            city: { value: form?.city, errors: null, valid: false },
            region: { value: form?.region, errors: null, valid: false },
            posto: { value: form?.posto, errors: null, valid: false }
        },
        (values) => {
            let errors: { [key: string]: string } = {};

            if (!values.company.value) {
                errors.company = 'Campo Empresa é obrigatório';
            }
            if (!values.vehicleType.value) {
                errors.vehicleType = 'Campo Veículo é obrigatório';
            }
            if (!values.uf.value) {
                errors.uf = 'Campo Estado é obrigatório';
            }
            if (!values.city.value) {
                errors.city = 'Campo Cidade é obrigatório';
            }
            if (!values.region.value) {
                errors.region = 'Campo Região é obrigatório';
            }
            if (!values.posto.value) {
                errors.posto = 'Campo Posto é obrigatório';
            }

            return errors;
        }
    );

    const [companyOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Empresa 1',
            value: '1'
        },
        {
            name: 'Empresa 2',
            value: '2'
        },
        {
            name: 'Empresa 3',
            value: '3'
        }
    ]);

    const [vehicleTypeOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Veículo 1',
            value: '4'
        },
        {
            name: 'Veículo 2',
            value: '5'
        },
        {
            name: 'Veículo 3',
            value: '6'
        },
        {
            name: 'Opção 3',
            value: '7'
        },
        {
            name: 'Opção 3',
            value: '8'
        },
        {
            name: 'Opção 3',
            value: '9'
        }
    ]);

    const [ufOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'SP',
            value: '1'
        },
        {
            name: 'RJ',
            value: '2'
        },
        {
            name: 'PR',
            value: '3'
        }
    ]);

    const [cityOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Empresa 1',
            value: '1'
        },
        {
            name: 'Empresa 2',
            value: '2'
        },
        {
            name: 'Empresa 3',
            value: '3'
        }
    ]);

    const [regionOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Empresa 1',
            value: '1'
        },
        {
            name: 'Empresa 2',
            value: '2'
        },
        {
            name: 'Empresa 3',
            value: '3'
        }
    ]);

    const [postoOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Empresa 1',
            value: '1'
        },
        {
            name: 'Empresa 2',
            value: '2'
        },
        {
            name: 'Empresa 3',
            value: '3'
        }
    ]);

    function onClick(name: string, value: SelectOptionProps) {
        handleChange({ target: { name, value } });
    }

    function nextStep() {
        const errors = handleSubmit(values);
        if (!errors || Object.keys(errors).length === 0) {
            StepperStore.getState().setStepperForm({
                ...form,
                company: values.company.value,
                vehicleType: values.vehicleType.value,
                uf: values.uf.value,
                region: values.region.value,
                city: values.city.value,
                posto: values.posto.value
            });
            setStep(2, StepperStore.getState().stepper);
        }
    }

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados gerais
            </Typography>

            <S.Section>
                <S.DropdownContainer style={{ display: 'flex' }}>
                    <Dropdown label="Empresa"
                        selectOptions={companyOptions}
                        border="cover"
                        errorMessage={!!errors.company}
                        success={false}
                        disable={false}
                        onClick={(value: SelectOptionProps) => onClick('company', value)}
                        selectedOption={values.company.value}
                        width={386}
                    />
                </S.DropdownContainer>
                <Dropdown label="Tipo de veículo"
                    selectOptions={vehicleTypeOptions}
                    border="cover"
                    success={false}
                    errorMessage={!!errors.vehicleType}
                    disable={false}
                    onClick={(value: SelectOptionProps) => onClick('vehicleType', value)}
                    selectedOption={values.vehicleType.value}
                    width={386}
                />
            </S.Section>

            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Local
            </Typography>

            <S.Section>
                <S.DropdownContainer style={{ display: 'flex' }}>
                    <Dropdown label="UF"
                        selectOptions={ufOptions}
                        border="cover"
                        errorMessage={!!errors.uf}
                        success={false}
                        disable={false}
                        onClick={(value: SelectOptionProps) => onClick('uf', value)}
                        selectedOption={values.uf.value}
                        width={81}
                    />
                </S.DropdownContainer>
                <S.DropdownContainer style={{ display: 'flex' }}>
                    <Dropdown label="Cidade"
                        selectOptions={cityOptions}
                        border="cover"
                        success={false}
                        errorMessage={!!errors.city}
                        disable={false}
                        onClick={(value: SelectOptionProps) => onClick('city', value)}
                        selectedOption={values.city.value}
                        width={386}
                    />
                </S.DropdownContainer>
                <S.DropdownContainer style={{ display: 'flex' }}>
                    <Dropdown label="Região"
                        selectOptions={regionOptions}
                        border="cover"
                        success={false}
                        errorMessage={!!errors.region}
                        disable={false}
                        onClick={(value: SelectOptionProps) => onClick('region', value)}
                        selectedOption={values.region.value}
                        width={185}
                    />
                </S.DropdownContainer>
                <Dropdown label="Posto"
                    selectOptions={postoOptions}
                    border="cover"
                    success={false}
                    errorMessage={!!errors.posto}
                    disable={false}
                    onClick={(value: SelectOptionProps) => onClick('posto', value)}
                    selectedOption={values.posto.value}
                    width={488}
                />
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
                    styles="primary"
                    variant="insurance"
                    children="Próximo"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    size="small"
                    onClick={nextStep}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }} />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleGeneralDataPosto;