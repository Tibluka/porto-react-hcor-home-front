import React from 'react';
import { StepItemProps, StepperProps } from '../../stepper.types';
import * as S from './stepBar.styles';
export const StepBar = ({ type, onClick }: StepItemProps) => {

    return (
        <>
            <S.Step type={type} onClick={onClick} />
        </>
    );
};
