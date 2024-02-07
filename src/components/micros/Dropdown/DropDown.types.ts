import { CSSProperties } from 'react';


export interface DropdownProps {
	width?: number;
	selectOptions: SelectOptionProps[];
	label: string;
	errorMessage?: string;
	helperText?: string;
	border: 'cover' | 'bottom' | 'none';
	helperLinkText?: string;
	helperLinkUrl?: string;
	helperLinkTarget?: string;
	success?: boolean;
	disable: boolean;
	selectedOption?: SelectOptionProps;
	onClick?: any;
	onKeyDown?: any;
	style?: CSSProperties;
	selectStyle?: CSSProperties;
	hasLabel?: boolean;
	isLoading?: boolean;
	testId?: string;
	loadingDuration?: number;
	iconLeft?: string;
	iconRight?: string;
}

export interface SelectProps {
	error: boolean;
	selectedOption: SelectOptionProps;
	border: 'cover' | 'bottom' | 'none';
	option: string;
}

export type SelectOptionProps = {
	value?: string | number;
	name: string;
};


export type InputProps = {
	active: boolean;
}

export type LabelActive = {
	labelActive: boolean;
	invalid?: boolean;
}

export type DropdownWidthStyle ={ 
	width?: number;
}