import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { create } from 'zustand';

interface StepperStoreProps {
    stepper: StepperProps | null,
    setStepper: (stepper: StepperProps) => void,
    setStepperForm: (form: any) => void
}

export const StepperStore = create<StepperStoreProps>()(
    (set, get) => ({
        stepper: null,
        setStepper: (stepper: StepperProps) => {
            set({ stepper })
        },
        setStepperForm: (form: StepperProps['form']) => {
            set({ stepper: { ...get().stepper, form } });
        }
    })
)