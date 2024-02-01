import styled, { css } from 'styled-components';
import { DropdownWidthStyle, InputProps, LabelActive } from './DropDown.types';


export const Container = styled.div<DropdownWidthStyle>`
	${({ width }) => css`
	height: 48px;
		cursor: pointer;
		position: relative;
		width: ${width}px;
	`}
	
`;

export const Select = styled.div<InputProps>`
	${({ active }) => css`
		border-radius: 4px;
		padding: 7px 12px;
		height: 100%;
		border: ${active ? '1px solid #00A1FC;' : '1px solid var(--neutras-black-45, #B3B3B3)'};

		&:hover{
			border: 1px solid #00A1FC;
		}
	`};
`;

export const Label = styled.label<LabelActive>`
	${({ labelActive }) => css`
		position: absolute;
		transition: 200ms;
		top: 50%;
		transform: ${labelActive ? 'translateY(-20px)' : 'translateY(-50%)'};
		color: var(--neutras-black-75, #404040);
		font-family: "Open Sans";
		font-size: ${labelActive ? '10px' : '14px'};
		font-weight: 400;
		line-height: 20px;
	`};
`

export const Value = styled.span`
	color: var(--neutras-black-100, #000);
	font-family: "Open Sans";
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	position: absolute;
    transform: translateY(14px);
`

export const DropdDownList = styled.div`
	.dropdown {
		position: absolute;
		z-index: 9999;
		top: 50px;
		left: 0;
		border-radius: 4px;
		border: 1px solid var(--neutras-black-45, #B3B3B3);
		display: grid;
		width: 100%;
		grid-template-columns: 1fr;
		background: white;

		.option {
			height: 48px;
			cursor: pointer;
			border-radius: 4px;
			display: flex;
			justify-content: flex-start;
			padding-left: 12px;
			align-items: center;
			color: var(--neutras-black-75, #404040);
			font-family: "Open Sans";
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;				
			&:hover{
				background: var(--porto-seguro-holding-porto-seguro-05, #F2FAFF);
			}
		}
	}
`

export const ImageContainer = styled.div`
	img {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
	}
`
