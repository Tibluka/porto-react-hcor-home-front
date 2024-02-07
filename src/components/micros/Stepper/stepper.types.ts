export declare type StepperProps = {
    totalSteps: number;
    step: number;
    stepName: string;
    nextStep?: string;
    content: Array<StepContentProps>;
    type?: any;
    setStep: any;
};
export declare type StepItemProps = {
    type: 'done' | 'active' | 'todo';
    onClick: any;
};

export declare type StepContentProps = {
    component: Function;
    type: 'done' | 'active' | 'todo';
    stepDescription: string;
    stepFormValid: boolean;
}

export declare type StepperTotalSteps = {
    totalSteps: number;
}
