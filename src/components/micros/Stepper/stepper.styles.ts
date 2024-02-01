import styled, { css } from 'styled-components';
import { StepItemProps } from './stepper.types';


export const Container = styled.div`
	
`

export const Step = styled.div<StepItemProps>`
	${({ type }) => css`
		
	`};
`
