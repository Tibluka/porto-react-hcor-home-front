import styled, { css } from 'styled-components';
import { StepItemProps } from '../../stepper.types';


export const Step = styled.div<StepItemProps>`
	${({ type }) => css`
        background: ${type === 'active' ? '##fff' : (type === 'done' ? '#0046C0' : '#E0E0E0')};
        border: ${type === 'active' ? '1px solid #0046C0' : ''};
        height: 8px;
        width: 100%;
        border-radius: 16px;
        cursor: pointer;
        margin: 8px 0;
	`};
`;
