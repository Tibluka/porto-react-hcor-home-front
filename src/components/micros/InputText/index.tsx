// Loader.js
'use client'
import Image from 'next/image';
import * as S from './InputText.styles';
import { InputTextProps } from './InputText.types';

export default function InputText({ invalid, disabled, name, width, value, label, onChange, clearField }: InputTextProps) {

    return (
        <S.Container width={width}>
            <S.Label invalid={invalid}
                labelActive={value ? true : false}>
                {label}
            </S.Label>
            <S.InputText invalid={invalid}
                disabled={disabled}
                name={name}
                labelActive={value ? true : false}
                value={value}
                onChange={onChange} />

            <S.ImageContainer>
                {
                    value ?
                        <Image onClick={clearField}
                            src={require(`../../../../public/porto-images/Porto-ic-circle-close-${invalid ? 'red' : 'black'}.svg`)}
                            alt="close-btn"
                            width={20}
                            height={20}
                        /> : null
                }
            </S.ImageContainer>
        </S.Container>
    );
}
