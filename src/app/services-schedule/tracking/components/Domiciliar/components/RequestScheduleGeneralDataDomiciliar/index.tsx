import { Dropdown } from '@/components/micros/Dropdown';
import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import { Icon } from '@/components/micros/Icon';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleGeneralDataDomiciliar.styles';
import { StepperStore } from '@/zustand/Stepper';
import { useRouter } from 'next/navigation';

// import { Container } from './styles';

const RequestScheduleGeneralDataDomiciliar = ({ setStep }: any) => {
    const { stepper } = StepperStore();
    const router = useRouter();
    const [company, setCompany] = useState<SelectOptionProps>();
    const [vehicleType, setVehicleType] = useState<SelectOptionProps>();
    const [uf, setUf] = useState<SelectOptionProps>();
    const [city, setCity] = useState<SelectOptionProps>();
    const [region, setRegion] = useState<SelectOptionProps>();
    const [posto, setPosto] = useState<SelectOptionProps>();

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

    function onClick(dispatch: React.Dispatch<SelectOptionProps>, value: SelectOptionProps) {
        dispatch(value);
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
                        success={false}
                        disable={false}
                        onClick={(value: any) => onClick(setCompany, value)}
                        selectedOption={company}
                        width={386}
                    />
                </S.DropdownContainer>
                <Dropdown label="Tipo de veículo"
                    selectOptions={vehicleTypeOptions}
                    border="cover"
                    success={false}
                    disable={false}
                    onClick={(value: any) => onClick(setVehicleType, value)}
                    selectedOption={vehicleType}
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
                        success={false}
                        disable={false}
                        onClick={(value: any) => onClick(setUf, value)}
                        selectedOption={uf}
                        width={81}
                    />
                </S.DropdownContainer>
                <S.DropdownContainer style={{ display: 'flex' }}>
                    <Dropdown label="Cidade"
                        selectOptions={cityOptions}
                        border="cover"
                        success={false}
                        disable={false}
                        onClick={(value: any) => onClick(setCity, value)}
                        selectedOption={city}
                        width={386}
                    />
                </S.DropdownContainer>
                <S.DropdownContainer style={{ display: 'flex' }}>
                    <Dropdown label="Região"
                        selectOptions={regionOptions}
                        border="cover"
                        success={false}
                        disable={false}
                        onClick={(value: any) => onClick(setRegion, value)}
                        selectedOption={region}
                        width={185}
                    />
                </S.DropdownContainer>
                <Dropdown label="Posto"
                    selectOptions={postoOptions}
                    border="cover"
                    success={false}
                    disable={false}
                    onClick={(value: any) => onClick(setPosto, value)}
                    selectedOption={posto}
                    width={488}
                />
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
                    children="Voltar"
                    variant="insurance"
                    styles="secondary"
                    size="small"
                    iconSide="left"
                    onClick={() => setStep(1, stepper)}
                    icon={<Icon size={20} color="primary" icon="Porto-ic-arrow-left" />}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0', marginRight: 32 }}
                />
                <Button
                    children="Próximo"
                    variant="insurance"
                    styles="primary"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    size="small"
                    onClick={() => setStep(3, stepper)}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleGeneralDataDomiciliar;