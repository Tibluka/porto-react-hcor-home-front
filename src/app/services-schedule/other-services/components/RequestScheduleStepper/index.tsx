import RequestScheduleClientDataPosto from '@/app/services-schedule/tracking/components/Posto/components/RequestScheduleClientDataPosto';
import RequestScheduleVehicleDataPosto from '@/app/services-schedule/tracking/components/Posto/components/RequestScheduleVehicleDataPosto';
import { Stepper } from '@/components/micros/Stepper';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Modal } from 'design-system-react';
import { useState } from 'react';
import * as S from './requestScheduleStepper.styles';
import RequestScheduleStepperGeneralData from './RequestScheduleStepperGeneralData';
import RequestScheduleStepperInspectionData from './RequestScheduleStepperInspectionData';
import RequestScheduleStepperReviewData from './RequestScheduleStepperReviewData';

const RequestScheduleStepper = () => {

    const [stepper, setStepper] = useState<StepperProps>(
        {
            content: [
                {
                    component: function () {
                        return <RequestScheduleStepperGeneralData />
                    },
                    type: 'active',
                    stepDescription: 'Dados gerais',
                    stepFormValid: false
                },
                {
                    component: function () {
                        return <RequestScheduleStepperInspectionData />
                    },
                    type: 'todo',
                    stepDescription: 'Endereço da vistoria',
                    stepFormValid: false
                },
                {
                    component: function () {
                        return <RequestScheduleStepperReviewData />
                    },
                    type: 'todo',
                    stepDescription: 'Revise os dados',
                    stepFormValid: false
                }
            ],
            step: 1,
            stepName: 'teste',
            totalSteps: 3,
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

            return;
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

export default RequestScheduleStepper;
