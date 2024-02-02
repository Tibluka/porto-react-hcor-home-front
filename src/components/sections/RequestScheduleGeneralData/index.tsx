import { Dropdown } from '@/components/micros/Dropdown';
import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import { Icon } from '@/components/micros/Icon';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleGeneralData.styles';

// import { Container } from './styles';

const RequestScheduleGeneralData: React.FC = () => {
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
                Dados do cliente
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
                Dados do cliente
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
        </S.Container>
    );
}

export default RequestScheduleGeneralData;