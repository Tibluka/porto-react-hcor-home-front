
'use client'
import { Typography, Button, Stepper } from "design-system-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Posto from "./components/Posto";
import * as S from './tracking.styles';

export default function Tracking() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(1);

    const options = [
        { value: 1, label: 'Posto' },
        { value: 2, label: 'Domiciliar' },
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
                        <S.Radio selected={selectedOption === option.value}>
                            {option.label}
                        </S.Radio>
                    </label>
                ))}
            </S.FormCustomRadio>

            <S.Container>
                {(() => {
                    switch (selectedOption) {
                        case 1:
                            return <Posto />;
                        case 2:
                            return null;
                        default:
                            return null;
                    }
                })()}
            </S.Container>

            <Button
                styles="primary"
                variant="insurance"
                children="Solicitar agendamento"
                size="small"
                onClick={() => router.push(`tracking/request-schedule?solicitationType=${selectedOption}`)}
                style={{ fontSize: 16, height: 48 }} />

        </>
    );
}
