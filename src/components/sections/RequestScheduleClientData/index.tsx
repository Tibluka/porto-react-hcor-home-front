import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import InputText from '@/components/micros/InputText';
import { Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleClientData.styles';

// import { Container } from './styles';

const RequestScheduleClientData: React.FC = () => {
    const [userData, setUserData] = useState<any>({
        cpfCnpj: '',
        nameEntity: '',
        email: '',
        phone: ''
    });

    function onClick(dispatch: React.Dispatch<SelectOptionProps>, value: SelectOptionProps) {
        dispatch(value);
    }

    const handleInputChange = (event: any) => {
        debugger
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };


    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados do cliente
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText width={250} label="CPF/CNPJ" name="cpfCnpj" value={userData.cpfCnpj} onChange={handleInputChange} />
                </S.InputContainer>
                <InputText label="Nome/Razão social" name="nameEntity" value={userData.nameEntity} onChange={handleInputChange} />
            </S.Section>

            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Contato
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText width={396} label="E-mail" name="email" value={userData.email} onChange={handleInputChange} />
                </S.InputContainer>
                <InputText width={250} label="Celular" name="phone" value={userData.phone} onChange={handleInputChange} />
            </S.Section>

        </S.Container>
    );
}

export default RequestScheduleClientData;