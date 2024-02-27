import { StepperProps } from "@/components/micros/Stepper/stepper.types";
import { StepperStore } from "@/zustand/Stepper";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import RequestScheduleStepperGeneralData from "./RequestScheduleStepperGeneralData";
import RequestScheduleStepperInspectionData from "./RequestScheduleStepperInspectionData";
import RequestScheduleStepperReviewData from "./RequestScheduleStepperReviewData";
import { Typography } from "design-system-react";
import { Stepper } from "@/components/micros/Stepper";
import * as S from './requestScheduleStepper.styles';

const RequestScheduleStepper = ({ setSchedulePart }: any) => {

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
                                return <RequestScheduleStepperGeneralData setStep={setStep} setSchedulePart={setSchedulePart} />
                            },
                            type: 'active',
                            stepDescription: 'Dados gerais',
                            stepFormValid: false
                        },
                        {
                            component: function () {
                                return <RequestScheduleStepperInspectionData setStep={setStep} />
                            },
                            type: 'todo',
                            stepDescription: 'Endereço da Vistoria',
                            stepFormValid: false
                        },
                        {
                            component: function () {
                                return <RequestScheduleStepperReviewData setStep={setStep} />
                            },
                            type: 'todo',
                            stepDescription: 'Revise os dados',
                            stepFormValid: false
                        }
                    ],
                    step: 1,
                    stepName: 'Dados gerais',
                    totalSteps: 3,
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

            <hr style={{ marginTop: 16, marginBottom: 16, width: '100%', height: '1px', background: '#E0E0E0', border: 'none' }} />

            <Stepper
                stepper={stepper}
            />

        </S.Container>
    );
}

export default RequestScheduleStepper;
