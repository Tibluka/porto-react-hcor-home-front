// Loader.js
'use client'
import * as S from './InputText.styles';
import { InputTextProps } from './InputText.types';

export default function InputText({ name, width, value, label, onChange }: InputTextProps) {


    return (
        <S.Container width={width}>
            <S.Label labelActive={value ? true : false}>
                {label}
            </S.Label>
            <S.InputText
                name={name}
                labelActive={value ? true : false}
                value={value}
                onChange={onChange} />
        </S.Container>
    );
}
