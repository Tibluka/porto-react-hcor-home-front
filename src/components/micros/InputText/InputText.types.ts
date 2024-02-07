import { SelectOptionProps } from "../Dropdown/DropDown.types";


export interface InputTextProps {
    name?: any;
    width?: number;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    invalid?: boolean;
    clearField?: (event: any) => void;
}



export interface ContainerProps {
    width: number;
}


export type LabelActive = {
    labelActive: boolean;
}
