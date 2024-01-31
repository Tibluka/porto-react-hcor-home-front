import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
`;


export const FormCustomRadio = styled.div`
  position: relative;
  margin-top: 8px;
  span {
    margin-left: 28px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 400;
    color: var(--neutras-black-75, #404040);
    line-height: 24px; /* 150% */

    &.active {
      color: var(--porto-seguro-holding-porto-seguro-100, #0046c0);
    }
  }

  input:checked:after {
    content: url('../../../../public/porto-images/Porto-radio-checked.svg');
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  input:before {
    content: "";
    position: absolute;
    top: 0;
    background: white;
    border: 2px solid #5F5F5F;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;