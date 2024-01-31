
'use client'
import { Typography } from "design-system-react";
import React, { useState } from "react";
import * as S from './tracking.styles';

export default function Tracking() {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'posto', label: 'Posto' },
        { value: 'domiciliar', label: 'Domiciliar' },
    ];


    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    return (
        <>
            <Typography as="h1" type="Title6" style={{ marginBottom: 8, fontSize: 24, lineHeight: '36px' }}>
                Rastreador
            </Typography>
            <Typography as="p" type="Body2" style={{ marginBottom: 48, fontSize: 16, color: '#808080', lineHeight: '24px' }}>
                Escolha o local de serviço e solicite o agendamento de rastreador veicular.
            </Typography>

            <Typography as="label" type="Label" style={{ marginBottom: 8, fontSize: 12, lineHeight: '24px' }}>
                Selecione o local do serviço
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
                        <span>{option.label}</span>
                    </label>
                ))}
            </S.FormCustomRadio>

            <S.Container>

            </S.Container>

        </>
    );
}
