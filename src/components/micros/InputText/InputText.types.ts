

export interface InputTextProps {
    name?: string;
    width?: number;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}


export type LabelActive = {
    labelActive: boolean;
}
