import styled, { css } from 'styled-components';
import { LabelActive } from '../Dropdown/DropDown.types';
import { InputTextProps } from './InputText.types';


export const Container = styled.div<InputTextProps>`
    ${({ width }) => css`
        width: ${width ? width + 'px' : '100%'};
        position: relative;
    `};
`

export const InputText = styled.input<LabelActive>`
    ${({ labelActive }) => css`
        border-radius: 4px;
        width: 100%;
        height: 48px;
        outline: none;
        padding: ${!labelActive ? '7px 12px' : '20px 12px 7px 12px'};
        border: 1px solid var(--neutras-black-45, #B3B3B3);
        background: transparent;
        &:focus {
            border: 1px solid #00A1FC;
        }
    `};
    

`;

export const Label = styled.label<LabelActive>`
    ${({ labelActive }) => css`
        position: absolute;
        transition: 200ms;
        left: 12px;
        top: 50%;
        transform: ${labelActive ? 'translateY(-20px)' : 'translateY(-50%)'};
        color: var(--neutras-black-75, #404040);
        font-family: "Open Sans";
        font-size: ${labelActive ? '10px' : '14px'};
        font-weight: 400;
        line-height: 20px;
        z-index: -1;
    `}    
`;
