import styled, { css } from 'styled-components';
import { ContainerProps } from './tab.types';



export const Container = styled.button<ContainerProps>`
    ${({ selected }) => css`
        background: white;
        border: none;
        border-bottom: ${selected ?
            '4px solid var(--seguros-porto-seguros-100, #0046C0)' :
            ''};
        padding: 16px;
        cursor: pointer;
    `};

`;


export const Text = styled.div`
	display: flex;
`;