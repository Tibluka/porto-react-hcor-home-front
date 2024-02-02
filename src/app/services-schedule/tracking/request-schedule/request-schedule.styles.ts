import styled, { css } from 'styled-components';
import { RadioProps } from './request-schedule.types';

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 48px;
`;

export const Radio = styled.span<RadioProps>`
    ${({ selected }) => css`
        color: ${selected ? 'var(--porto-seguro-holding-porto-seguro-100, #0046C0)' : 'var(--neutras-black-75, #404040);'}
    `};

`

export const Action = styled.div`
	display: flex;
	justify-content: flex-end;
`;
