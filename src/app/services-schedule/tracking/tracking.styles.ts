import styled, { css } from 'styled-components';
import { RadioProps } from './tracking.types';

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 48px;
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