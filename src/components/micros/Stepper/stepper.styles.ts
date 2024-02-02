import styled, { css } from 'styled-components';
import { StepItemProps, StepperTotalSteps } from './stepper.types';


export const Container = styled.div`
	
`;

export const StepBar = styled.div<StepperTotalSteps>`
	${({ totalSteps }) => css`
		display: grid;
		grid-template-columns: repeat(${totalSteps}, 1fr);
		gap: 4px;
	`};
`;

export const StepHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const StepDescription = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Content = styled.div`

`;

export const Step = styled.div<StepItemProps>`
	${({ type }) => css`
		
	`};
`;
