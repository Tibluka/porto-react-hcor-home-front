'use client'
import content from '*.bmp';
import { Stepper } from '@/components/micros/Stepper';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { tab } from '@/components/micros/Tabs/tabs.types';
import RequestScheduleClientData from '@/components/sections/RequestScheduleClientData';
import RequestScheduleGeneralData from '@/components/sections/RequestScheduleGeneralData';
import RequestScheduleReviewData from '@/components/sections/RequestScheduleReviewData';
import RequestScheduleVehicleData from '@/components/sections/RequestScheduleVehicleData';
import { Typography } from 'design-system-react';
import React, { useState } from "react";
import * as S from './request-schedule.styles';

export default function RequestSchedule() {
    const [stepper, setStepper] = useState<StepperProps>(
        {
            content: [
                {
                    content: function () {
                        return <RequestScheduleGeneralData />
                    },
                    type: 'active',
                    stepDescription: 'Dados gerais'
                },
                {
                    content: function () {
                        return <RequestScheduleClientData />
                    },
                    type: 'todo',
                    stepDescription: 'Dados do cliente'
                },
                {
                    content: function () {
                        return <RequestScheduleVehicleData />
                    },
                    type: 'todo',
                    stepDescription: 'Dados do veículo'
                },
                {
                    content: function () {
                        return <RequestScheduleReviewData />
                    },
                    type: 'todo',
                    stepDescription: 'Revise os dados'
                },
            ],
            step: 1,
            stepName: 'teste',
            totalSteps: 4,
            nextStep: '',
            setStep: setStep
        }
    )

    function setStep(step: number) {
        debugger
        if (step > stepper.step) {
            stepper.content.forEach((s, index) => {
                if (index < step) {
                    s.type = 'done';
                }
            })
        } else if (step < stepper.step) {
            stepper.content.forEach((s, index) => {
                if ((index + 1) > step) {
                    s.type = 'todo';
                } else if (step === index) {
                    s.type = 'active';
                }
            })
        } else return;
        stepper.content[step - 1].type = 'active';

        setStepper(prevStatus => ({
            ...prevStatus,
            step: step,
            stepName: stepper.content[step - 1].stepDescription
        }));


    }

    return (
        <>
            <Typography
                as="h1"
                type="Title6"
                style={{ marginBottom: 8, fontSize: 24, lineHeight: '36px' }}>
                Solicitar agendamento
            </Typography>

            <Typography
                as="p"
                type="Body2"
                style={{ marginBottom: 2, fontSize: 12, lineHeight: '15.6px', color: 'var(--neutras-black-85, #1F1F1F)' }}>
                Serviço
            </Typography>

            <Typography
                as="p"
                type="Title4"
                style={{ fontSize: 14, lineHeight: '130%', color: 'var(--neutras-black-85, #1F1F1F)' }}>
                Posto - Rastreador Porto Seguro
            </Typography>

            <hr style={{ marginTop: 16, marginBottom: 16, width: '100%', height: '1px', background: '#E0E0E0', border: 'none' }} />

            <Stepper
                content={stepper.content}
                step={stepper.step}
                stepName={stepper.stepName}
                totalSteps={stepper.totalSteps}
                setStep={setStep}
            />
        </>
    );
}
