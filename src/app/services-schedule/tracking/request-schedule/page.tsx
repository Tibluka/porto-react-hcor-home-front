'use client'
import { Stepper } from '@/components/micros/Stepper';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Modal, Typography } from 'design-system-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from "react";
import RequestScheduleClientDataDomiciliar from '../components/Domiciliar/components/RequestScheduleClientDataDomiciliar';
import RequestScheduleGeneralDataDomiciliar from '../components/Domiciliar/components/RequestScheduleGeneralDataDomiciliar';
import RequestScheduleReviewDataDomiciliar from '../components/Domiciliar/components/RequestScheduleReviewDataDomiciliar';
import RequestScheduleServicePlaceDomiciliar from '../components/Domiciliar/components/RequestScheduleServicePlaceDomiciliar';
import RequestScheduleVehicleDataDomiciliar from '../components/Domiciliar/components/RequestScheduleVehicleDataDomiciliar';
import RequestScheduleClientDataPosto from '../components/Posto/components/RequestScheduleClientDataPosto';
import RequestScheduleGeneralDataPosto from '../components/Posto/components/RequestScheduleGeneralDataPosto';
import RequestScheduleReviewDataPosto from '../components/Posto/components/RequestScheduleReviewDataPosto';
import RequestScheduleVehicleDataPosto from '../components/Posto/components/RequestScheduleVehicleDataPosto';
import * as S from './request-schedule.styles';
import { StepperStore } from '@/zustand/Stepper';

export default function RequestSchedule() {
    const router = useRouter();
    const params = useSearchParams().get("solicitationType");
    const { stepper, setStepper } = StepperStore();

    function setStep(step: number, stepper: StepperProps) {
        
        if (step > stepper!.step && step <= stepper!.totalSteps) {
            stepper!.content.forEach((s: { type: string; }, index: number) => {
                if (index < (step - 1)) {
                    s.type = 'done';
                }
            })
        } else if (step < stepper!.step) {
            stepper!.content.forEach((s: { type: string; }, index: number) => {
                if ((index + 1) > step) {
                    s.type = 'todo';
                } else if (step === index) {
                    s.type = 'active';
                }
            })
        } else if (step > stepper!.totalSteps) {
            

            return;
        } else return;
        stepper.content[step - 1].type = 'active';
        stepper.step = step;
        stepper.stepName = stepper.content[step - 1].stepDescription;

        setStepper(stepper);
    }

    useEffect(() => {
        const setup = () => {
            if (params && params == '2') {
                setStepper(
                    {
                        content: [
                            {
                                component: function () {
                                    return <RequestScheduleServicePlaceDomiciliar setStep={setStep} />
                                },
                                type: 'active',
                                stepDescription: 'Local do serviço',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleGeneralDataDomiciliar setStep={setStep} />
                                },
                                type: 'todo',
                                stepDescription: 'Dados gerais',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleClientDataDomiciliar setStep={setStep} />
                                },
                                type: 'todo',
                                stepDescription: 'Dados do cliente',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleVehicleDataDomiciliar setStep={setStep} />
                                },
                                type: 'todo',
                                stepDescription: 'Dados do veículo',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleReviewDataDomiciliar setStep={setStep} />
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
            } else {
                setStepper(
                    {
                        content: [
                            {
                                component: function () {
                                    return <RequestScheduleGeneralDataPosto setStep={setStep} />
                                },
                                type: 'active',
                                stepDescription: 'Dados gerais',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleClientDataPosto setStep={setStep} />
                                },
                                type: 'todo',
                                stepDescription: 'Dados do cliente',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleVehicleDataPosto setStep={setStep} />
                                },
                                type: 'todo',
                                stepDescription: 'Dados do veículo',
                                stepFormValid: false
                            },
                            {
                                component: function () {
                                    return <RequestScheduleReviewDataPosto setStep={setStep} />
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
            }
        }
        setup();
    }, []);

    if (!stepper) {
        return null;
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
                stepper={stepper}
            />

        </S.Container>
    );
}
