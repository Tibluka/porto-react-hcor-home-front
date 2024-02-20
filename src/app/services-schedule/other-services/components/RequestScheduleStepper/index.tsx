import { StepperProps } from "@/components/micros/Stepper/stepper.types";
import { StepperStore } from "@/zustand/Stepper";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import RequestScheduleStepperGeneralData from "./RequestScheduleStepperGeneralData";

const RequestScheduleStepper = () => {

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
            setStepper(
                {
                    content: [
                        {
                            component: function () {
                                return <RequestScheduleStepperGeneralData setStep={setStep} />
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
                        }
                    ],
                    step: 1,
                    stepName: 'Local do serviço',
                    totalSteps: 5,
                    nextStep: '',
                    setStep: setStep
                }
            )
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

export default RequestScheduleStepper;
