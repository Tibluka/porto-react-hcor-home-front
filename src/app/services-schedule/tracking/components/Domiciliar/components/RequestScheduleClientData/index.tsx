import { SelectOptionProps } from '@/components/micros/Dropdown/DropDown.types';
import InputText from '@/components/micros/InputText';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleClientData.styles';

// import { Container } from './styles';

const RequestScheduleClientData = ({ setStep }: any) => {
    const [userData, setUserData] = useState<any>({
        cpfCnpj: { value: '', errors: null, valid: false },
        nameEntity: { value: '', errors: null, valid: false },
        email: { value: '', errors: null, valid: false },
        phone: { value: '', errors: null, valid: false }
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserData({
            ...userData, [name]: { value: value }
        });
    };


    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados do cliente
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText disabled={!userData.cpfCnpj.valid} width={250} label="CPF/CNPJ" name="cpfCnpj" value={userData.cpfCnpj} onChange={handleInputChange} />
                </S.InputContainer>
                <InputText disabled={!userData.nameEntity.valid} label="Nome/Razão social" name="nameEntity" value={userData.nameEntity} onChange={handleInputChange} />
            </S.Section>

            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Contato
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText disabled={!userData.email.valid} width={396} label="E-mail" name="email" value={userData.email} onChange={handleInputChange} />
                </S.InputContainer>
                <InputText disabled={!userData.phone.valid} width={250} label="Celular" name="phone" value={userData.phone} onChange={handleInputChange} />
            </S.Section>

        </S.Container>
    );
}

export default RequestScheduleClientData;