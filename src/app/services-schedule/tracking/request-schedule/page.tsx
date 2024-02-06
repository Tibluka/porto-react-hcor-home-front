'use client'
import content from '*.bmp';
import { Icon } from '@/components/micros/Icon';
import { Stepper } from '@/components/micros/Stepper';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { tab } from '@/components/micros/Tabs/tabs.types';
import RequestScheduleClientData from '@/components/sections/RequestScheduleClientData';
import RequestScheduleGeneralData from '@/components/sections/RequestScheduleGeneralData';
import RequestScheduleReviewData from '@/components/sections/RequestScheduleReviewData';
import RequestScheduleVehicleData from '@/components/sections/RequestScheduleVehicleData';
import { Button, Modal, Typography } from 'design-system-react';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import * as S from './request-schedule.styles';

export default function RequestSchedule() {
    const router = useRouter();
    const [stepper, setStepper] = useState<StepperProps>(
        {
            content: [
                {
                    component: function () {
                        return <RequestScheduleGeneralData />
                    },
                    type: 'active',
                    stepDescription: 'Dados gerais'
                },
                {
                    component: function () {
                        return <RequestScheduleClientData />
                    },
                    type: 'todo',
                    stepDescription: 'Dados do cliente'
                },
                {
                    component: function () {
                        return <RequestScheduleVehicleData />
                    },
                    type: 'todo',
                    stepDescription: 'Dados do veículo'
                },
                {
                    component: function () {
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
    const [isOpen, setIsOpen] = useState(false);

    function setStep(step: number) {
        if (step > stepper.step && step <= stepper.totalSteps) {
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
        } else if (step > stepper.totalSteps) {
            debugger


        } else return;
        stepper.content[step - 1].type = 'active';

        setStepper(prevStatus => ({
            ...prevStatus,
            step: step,
            stepName: stepper.content[step - 1].stepDescription
        }));


    }

    return (
        <S.Container>
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

            <S.Action>
                <Button
                    children="Cancelar"
                    variant="insurance"
                    styles="ghost"
                    size="small"
                    onClick={router.back}
                    style={{ fontSize: 16, fontWeight: 700, lineHeight: '20px', marginRight: 32 }}
                />
                {
                    stepper.step > 1 ?
                        <Button
                            children="Voltar"
                            variant="insurance"
                            styles="secondary"
                            size="small"
                            iconSide="left"
                            onClick={() => {
                                if (stepper.step > 1) setStep(stepper.step - 1)
                            }}
                            icon={<Icon size={20} color="primary" icon="Porto-ic-arrow-left" />}
                            style={{ fontSize: 16, fontWeight: 700, lineHeight: '0', marginRight: 32 }}
                        /> : null
                }
                <Button
                    children={stepper.step === stepper.totalSteps ? 'Finalizar agendamento' : 'Próximo'}
                    variant="insurance"
                    styles="primary"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    size="small"
                    onClick={() => setStep(stepper.step + 1)}
                    style={{ fontSize: 16, fontWeight: 700, lineHeight: '0' }}
                />
            </S.Action>

            <Modal mode="light" title="Title" isOpen={true} setIsOpen={() => setIsOpen(false)} />
        </S.Container>
    );
}
