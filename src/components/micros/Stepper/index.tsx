import { Typography } from 'design-system-react';
import React from 'react';
import { StepBar } from './components/StepBar';
import * as S from './stepper.styles';
import { StepContentProps, StepperProps } from './stepper.types';

export const Stepper = ({
    step,
    stepName,
    setStep,
    totalSteps,
    nextStep,
    content
}: StepperProps) => {

    return (
        <S.Container>
            <S.StepHeader>
                <S.StepDescription>
                    <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px', fontWeight: 700, marginRight: 4 }}>
                        {step} de {totalSteps}
                    </Typography>
                    <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px' }}>
                        - {content[step - 1].stepDescription}
                    </Typography>
                </S.StepDescription>
                {
                    content[step]?.stepDescription ?
                        <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px' }}>
                            Próximo passo: {content[step].stepDescription}
                        </Typography> : null
                }
            </S.StepHeader>

            <S.StepBar totalSteps={totalSteps}>
                {
                    (content.map((d, index) => (
                        <StepBar key={index} type={d.type} onClick={() => setStep(index + 1)} />
                    )))
                }
            </S.StepBar>
            <S.Content>
                {
                    content.filter(f => f.type === 'active').map((func: StepContentProps) => (
                        <>{func.component()}</>
                    ))
                }
            </S.Content>
        </S.Container >
    );
};
