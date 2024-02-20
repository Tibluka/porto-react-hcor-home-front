
import { Dropdown } from "@/components/micros/Dropdown";
import { Typography } from "design-system-react";
import { SelectOptionProps } from "design-system-react/dist/components/micros/Dropdown/index.types";
import { useState } from "react";
import * as S from './selectCompany.styles';


const SelectCompany = () => {
    const [service, setService] = useState<SelectOptionProps>();


    const [serviceOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Porto Seguro CIA de Seguros',
            value: '1'
        },
        {
            name: 'Opção 2',
            value: '2'
        },
        {
            name: 'Opção 3',
            value: '3'
        }
    ]);

    function onClick(dispatch: React.Dispatch<SelectOptionProps>, value: SelectOptionProps) {
        dispatch(value);
    }

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Selecione a empresa
            </Typography>


            <Dropdown label="Selecione a empresa"
                selectOptions={serviceOptions}
                border="cover"
                success={false}
                disable={false}
                onClick={(value: any) => onClick(setService, value)}
                selectedOption={service}
                width={496}
            />

        </S.Container>
    );
}

export default SelectCompany;