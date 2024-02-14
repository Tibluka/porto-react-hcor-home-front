import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { create } from 'zustand';

interface StepperStoreProps {
    stepper: StepperProps | null,
    setStepper: (stepper: StepperProps) => void
}

export const StepperStore = create<StepperStoreProps>()(
    set => ({
        stepper: null,
        setStepper: (stepper: StepperProps) => {
            set({ stepper })
        }
    })
)