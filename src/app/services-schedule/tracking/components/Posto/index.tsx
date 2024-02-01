
'use client'
import { Dropdown } from "@/components/micros/Dropdown";
import { SelectOptionProps } from "design-system-react/dist/components/micros/Dropdown/index.types";
import React, { useState } from "react";
import * as S from './posto.styles';

export default function Posto() {
    const [service, setService] = useState<SelectOptionProps>();
    const [executionType, setExecutionType] = useState<SelectOptionProps>();

    const [serviceOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Rastreador Porto Seguro',
            value: '1'
        },
        {
            name: 'Opção 2',
            value: '2'
        },
        {
            name: 'Opção 3',
            value: '3'
        }
    ]);

    const [executionTypeOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Somente instalação',
            value: '4'
        },
        {
            name: 'Opção 2',
            value: '5'
        },
        {
            name: 'Opção 3',
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

    function onClick(dispatch: React.Dispatch<SelectOptionProps>, value: SelectOptionProps) {
        dispatch(value);
    }

    return (
        <S.Container>
            <S.DropdownContainer>
                <Dropdown label="Serviço"
                    selectOptions={serviceOptions}
                    border="cover"
                    success={false}
                    disable={false}
                    onClick={(value: any) => onClick(setService, value)}
                    selectedOption={service}
                    width={496}
                />
            </S.DropdownContainer>

            <Dropdown label="Tipo de execução"
                selectOptions={executionTypeOptions}
                border="cover"
                success={false}
                disable={false}
                onClick={(value: any) => onClick(setExecutionType, value)}
                selectedOption={executionType}
                width={496}
            />
        </S.Container>

    );
}
