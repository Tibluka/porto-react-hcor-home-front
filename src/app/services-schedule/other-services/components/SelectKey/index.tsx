
import { Dropdown } from "@/components/micros/Dropdown";
import { Button, Typography } from "design-system-react";
import { SelectOptionProps } from "design-system-react/dist/components/micros/Dropdown/index.types";
import { useState } from "react";
import * as S from './selectKey.styles';
import InputText from "@/components/micros/InputText";


const SelectKey = () => {
    const [service, setService] = useState<SelectOptionProps>();

    const [keyData, setData] = useState<any>({
        number: { value: 'BKJ-1930', errors: null, valid: false },
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setData({ ...keyData, [name]: value });
    };

    const [keyOptions] = useState<Array<SelectOptionProps>>([
        {
            name: 'Placa do Veículo',
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
                Selecione uma chave para realizar a busca
            </Typography>

            <S.Section>

                <Dropdown label="Selecione uma opção"
                    selectOptions={keyOptions}
                    border="cover"
                    success={false}
                    disable={false}
                    onClick={(value: any) => onClick(setService, value)}
                    selectedOption={service}
                    width={496}
                />

                <S.InputContainer>
                    <InputText  width={250} label="Digite o número para fazer a busca" name="number" value={keyData.number.value} onChange={handleInputChange} />
                </S.InputContainer>

                <Button
                    children="Procurar"
                    variant="insurance"
                    styles="primary"
                    iconSide="right"
                    size="small"
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                />

            </S.Section>
        </S.Container>
    );
}

export default SelectKey;