'use client'
import { Icon } from '@/components/micros/Icon';
import { Stepper } from '@/components/micros/Stepper';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Modal, Typography } from 'design-system-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from "react";
import RequestScheduleClientData from '../components/Domiciliar/components/RequestScheduleClientData';
import RequestScheduleGeneralData from '../components/Domiciliar/components/RequestScheduleGeneralData';
import RequestScheduleReviewData from '../components/Domiciliar/components/RequestScheduleReviewData';
import RequestScheduleServicePlace from '../components/Domiciliar/components/RequestScheduleServicePlace';
import RequestScheduleVehicleData from '../components/Domiciliar/components/RequestScheduleVehicleData';
import * as S from './request-schedule.styles';

export default function RequestSchedule() {
    const router = useRouter();
    const params = useSearchParams().get("solicitationType");
    const [stepper, setStepper] = useState<StepperProps>(
        {
            content: [
                {
                    component: function () {
                        return <RequestScheduleGeneralData />
                    },
                    type: 'active',
                    stepDescription: 'Dados gerais',
                    stepFormValid: false
                },
                {
                    component: function () {
                        return <RequestScheduleClientData />
                    },
                    type: 'todo',
                    stepDescription: 'Dados do cliente',
                    stepFormValid: false
                },
                {
                    component: function () {
                        return <RequestScheduleVehicleData />
                    },
                    type: 'todo',
                    stepDescription: 'Dados do veículo',
                    stepFormValid: false
                },
                {
                    component: function () {
                        return <RequestScheduleReviewData />
                    },
                    type: 'todo',
                    stepDescription: 'Revise os dados',
                    stepFormValid: false
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

            return;
        } else return;
        stepper.content[step - 1].type = 'active';

        setStepper(prevStatus => ({
            ...prevStatus,
            step: step,
            stepName: stepper.content[step - 1].stepDescription
        }));


    }

    useEffect(() => {
        const setup = () => {
            if (params && params == '2') {
                setStepper(
                    {
                        content: [
                            {
                                component: function () {
                                    return <RequestScheduleServicePlace stepper={stepper} setStep={setStep} />
                                },
                                type: 'active',
                                stepDescription: 'Local do serviço',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleGeneralData />
                                },
                                type: 'todo',
                                stepDescription: 'Dados gerais',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleClientData />
                                },
                                type: 'todo',
                                stepDescription: 'Dados do cliente',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleVehicleData />
                                },
                                type: 'todo',
                                stepDescription: 'Dados do veículo',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleReviewData />
                                },
                                type: 'todo',
                                stepDescription: 'Revise os dados',
                                stepFormValid: false
                            },
                        ],
                        step: 1,
                        stepName: 'Local do serviço',
                        totalSteps: 5,
                        nextStep: '',
                        setStep: setStep
                    }
                )
            }
        }
        setup()
    }, []);

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

            <Modal mode="light" title="Title" isOpen={false} setIsOpen={() => setIsOpen(false)} />
        </S.Container>
    );
}
