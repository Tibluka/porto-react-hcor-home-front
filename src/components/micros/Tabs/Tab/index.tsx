'use client'
import { Typography } from "design-system-react";
import React from "react";

import * as S from './tab.styles';
import { TabProps } from "./tab.types";

export default function Tab({
    mode = 'light',
    selected = false,
    label,
    gtmName = label,
    icon,
    onClick,
    headingTag = 'h3',
}: TabProps) {

    return (
        <S.Container
            mode={mode} // Altere para hasIcon
            selected={selected}
            onClick={onClick}
        >
            <S.Text>
                <Typography as="p" type="Title6" weight={selected ? "bold" : "semibold"}
                    style={{ fontSize: 20, lineHeight: '24px', color: selected ? '#000' : '#5F5F5F' }}>
                    {label}
                </Typography>
            </S.Text>
        </S.Container>
    );
}
