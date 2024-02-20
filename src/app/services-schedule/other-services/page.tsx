'use client'

import React, { useState } from 'react';
import { Button, Icon, Typography } from 'design-system-react';
import * as S from './other-services.styles';
import SelectCompany from './components/SelectCompany';
import { useRouter } from 'next/navigation';
import SelectKey from './components/SelectKey';
import RequestScheduleStepper from './components/RequestScheduleStepper';

export default function OtherServices() {
    const router = useRouter();
    const [showSelectCompany, setShowSelectCompany] = useState(true);
    const [showSelectKey, setShowSelectKey] = useState(false);
    const [showRequestScheduleStepper, setShowRequestScheduleStepper] = useState(false);

    const handleNextButtonClick = () => {
        if (showSelectCompany) {
            setShowSelectCompany(false);
            setShowSelectKey(true);
        } else if (showSelectKey) {
            setShowSelectKey(false);
            setShowRequestScheduleStepper(true);
        }
    };

    const handlePreviousButtonClick = () => {
        if (showSelectKey) {
            setShowSelectKey(false);
            setShowSelectCompany(true);
        } else if (showRequestScheduleStepper) {
            setShowRequestScheduleStepper(false);
            setShowSelectKey(true);
        }
    };

    return (
        <S.Container>
            <Typography as="h1" type="Title6" style={{ marginBottom: 8, fontSize: 32, lineHeight: '36px', fontWeight: 500 }}>
                Solicitar agendamento
            </Typography>

            {!showRequestScheduleStepper && (
                <Typography as="p" type="Body2" style={{ marginBottom: 48, fontSize: 16, color: '#808080', lineHeight: '24px' }}>
                    Realize o agendamento de vistorias.
                </Typography>
            )}

            {showSelectCompany && <SelectCompany />}
            {showSelectKey && <SelectKey />}
            {showRequestScheduleStepper && <RequestScheduleStepper />}

            <S.Action>
                <Button
                    children="Cancelar"
                    variant="insurance"
                    styles="ghost"
                    size="small"
                    onClick={router.back}
                    style={{ fontSize: 16, fontWeight: 700, height: 48, lineHeight: '20px', marginRight: 32 }}
                />
                {showSelectCompany && (
                    <Button
                        children="Próximo"
                        variant="insurance"
                        styles="primary"
                        size="small"
                        onClick={handleNextButtonClick}
                        style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                    />
                )}
                {showSelectKey && (
                    <React.Fragment>
                        <Button
                            children="Anterior"
                            variant="negative"
                            styles="primary"
                            iconSide="left"
                            icon={<Icon size="small" color="white" icon="Porto-ic-arrow-left" />}
                            size="small"
                            onClick={handlePreviousButtonClick}
                            style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0', borderWidth: 1, borderColor: '#0046C0', marginRight: 32 }}
                        />
                        <Button
                            children="Próximo"
                            variant="insurance"
                            styles="primary"
                            iconSide="right"
                            icon={<Icon size="small" color="white" icon="Porto-ic-arrow-right" />}
                            size="small"
                            onClick={handleNextButtonClick}
                            style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                        />
                    </React.Fragment>
                )}
                {showRequestScheduleStepper && (
                    <React.Fragment>
                        <Button
                            children="Anterior"
                            variant="negative"
                            styles="primary"
                            iconSide="left"
                            icon={<Icon size="small" color="white" icon="Porto-ic-arrow-left" />}
                            size="small"
                            onClick={handlePreviousButtonClick}
                            style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0', borderWidth: 1, borderColor: '#0046C0', marginRight: 32 }}
                        />
                        <Button
                            children="Próximo"
                            variant="insurance"
                            styles="primary"
                            iconSide="right"
                            icon={<Icon size="small" color="white" icon="Porto-ic-arrow-right" />}
                            size="small"
                            onClick={router.back}
                            style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                        />
                    </React.Fragment>
                )}
            </S.Action>
        </S.Container>
    );
}
