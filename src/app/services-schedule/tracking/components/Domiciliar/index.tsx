
'use client'
import { Dropdown } from "@/components/micros/Dropdown";
import { SelectOptionProps } from "design-system-react/dist/components/micros/Dropdown/index.types";
import React, { useState } from "react";
import * as S from './domiciliar.styles';

export default function Posto() {

    function onClick(dispatch: React.Dispatch<SelectOptionProps>, value: SelectOptionProps) {
        dispatch(value);
    }

    return (
        <S.Container>
          
        </S.Container>

    );
}
