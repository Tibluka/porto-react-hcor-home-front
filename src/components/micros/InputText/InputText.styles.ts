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
    ${({ labelActive, invalid }) => css`
        border-radius: 4px;
        width: 100%;
        height: 48px;
        outline: none;
        padding: ${!labelActive ? '7px 12px' : '20px 12px 7px 12px'};
        border: ${invalid ? '1px solid var(--paleta-estendida-red-red-85, #97453C)' : '1px solid var(--neutras-black-45, #B3B3B3)'};
        background: transparent;
        &:focus {
            border: ${!invalid ? '1px solid #00A1FC' : ''};
        }
        &:disabled {
            cursor: not-allowed;
        }
    `};
    

`;

export const Label = styled.label<LabelActive>`
    ${({ labelActive, invalid }) => css`
        position: absolute;
        transition: 200ms;
        left: 12px;
        top: 50%;
        transform: ${labelActive ? 'translateY(-20px)' : 'translateY(-50%)'};
        color: ${invalid ? 'var(--paleta-estendida-red-red-85, #97453C)' : 'var(--neutras-black-75, #404040)'} ;
        font-family: "Open Sans";
        font-size: ${labelActive ? '10px' : '14px'};
        font-weight: 400;
        line-height: 20px;
        z-index: -1;
    `}    
`;

export const ImageContainer = styled.div`
    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        cursor: pointer;
    }
`;