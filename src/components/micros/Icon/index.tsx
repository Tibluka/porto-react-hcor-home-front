
import Image from 'next/image';
import React from 'react';
import * as S from './icon.styles';
import { IconProps } from './icon.types';

export const Icon = ({
    size,
    icon,
    disabled,
    color
}: IconProps) => {
    return (
        <S.Container>
            <Image
                src={require(`../../../../public/porto-images/${icon}${color && !disabled ? `-${color}` : ''}${disabled ? '-disabled' : ''}.svg`)}
                alt=""
                width={size}
                height={size}
            />
        </S.Container>
    );
};
