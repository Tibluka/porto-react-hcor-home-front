import styled, { css } from 'styled-components';
import { RadioProps } from '../request-schedule-stepper.types';

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Action = styled.div`
	display: flex;
	justify-content: flex-end;
`;


export const DropdownContainer = styled.div`
	margin-right: 20px;
`;

export const Section = styled.div`
	display: flex;
	margin-bottom: 38px;
`;

export const FormCustomRadio = styled.div`
  margin-top: 8px;
  span {
    margin-left: 28px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    cursor: pointer;

    &.active {
      color: var(--porto-seguro-holding-porto-seguro-100, #0046c0);
    }
  }
  label{
    position: relative;
  }

  input{
    margin-left: 5px;
    cursor: pointer;
  }

  input:checked:after {
    content: url('/porto-images/Porto-radio-checked.svg');
    position: absolute;
    top: -1px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  input:before {
    content: url('/porto-images/Porto-radio-unchecked.svg');;
    position: absolute;
    top: -1px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const Radio = styled.span<RadioProps>`
    ${({ selected }) => css`
        color: ${selected ? 'var(--porto-seguro-holding-porto-seguro-100, #0046C0)' : 'var(--neutras-black-75, #404040);'}
    `};

`