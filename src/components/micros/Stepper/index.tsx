import { Typography } from 'design-system-react';
import React, { useEffect } from 'react';
import { StepBar } from './components/StepBar';
import * as S from './stepper.styles';
import { StepContentProps, StepperProps } from './stepper.types';

export const Stepper = ({ stepper }: any) => {

    return (
        <S.Container>
            <S.StepHeader>
                <S.StepDescription>
                    <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px', fontWeight: 700, marginRight: 4 }}>
                        {stepper.step} de {stepper.totalSteps}
                    </Typography>
                    <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px' }}>
                        - {stepper.content[stepper.step - 1].stepDescription}
                    </Typography>
                </S.StepDescription>
                {
                    stepper.content[stepper.step]?.stepDescription ?
                        <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px' }}>
                            Próximo passo: {stepper.content[stepper.step].stepDescription}
                        </Typography> : null
                }
            </S.StepHeader>

            <S.StepBar totalSteps={stepper.totalSteps}>
                {
                    (stepper.content.map((d:any, index: any) => (
                        <StepBar key={index} type={d.type} onClick={() => stepper.setStep(index + 1, stepper)} />
                    )))
                }
            </S.StepBar>
            <S.Content>
                {
                    stepper.content.filter((f: { type: string; }) => f.type === 'active').map((func: StepContentProps) => (
                        <>{func.component()}</>
                    ))
                }
            </S.Content>
        </S.Container >
    );
};
