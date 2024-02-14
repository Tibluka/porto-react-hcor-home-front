import { Icon } from '@/components/micros/Icon';
import InputText from '@/components/micros/InputText';
import { Button, Typography } from 'design-system-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as S from './requestScheduleClientDataDomiciliar.styles';
import { StepperStore } from '@/zustand/Stepper';

// import { Container } from './styles';

const RequestScheduleClientDataDomiciliar = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();

    const [userData, setUserData] = useState<any>({
        cpfCnpj: { value: '', errors: null, valid: false },
        nameEntity: { value: '', errors: null, valid: false },
        email: { value: '', errors: null, valid: false },
        phone: { value: '', errors: null, valid: false }
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserData({
            ...userData, [name]: { value }
        });
    };


    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados do cliente
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        width={250}
                        label="CPF/CNPJ"
                        name="cpfCnpj"
                        value={userData.cpfCnpj}
                        onChange={handleInputChange}
                        clearField={() => handleInputChange({ target: { name: "cpfCnpj", value: "" } })} />
                </S.InputContainer>
                <InputText
                    label="Nome/Razão social"
                    name="nameEntity"
                    value={userData.nameEntity}
                    onChange={handleInputChange}
                    clearField={() => handleInputChange({ target: { name: "nameEntity", value: "" } })} />
            </S.Section>

            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Contato
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        width={396}
                        label="E-mail"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        clearField={() => handleInputChange({ target: { name: "email", value: "" } })} />
                </S.InputContainer>
                <InputText
                    width={250}
                    label="Celular"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    clearField={() => handleInputChange({ target: { name: "phone", value: "" } })} />
            </S.Section>

            <S.Action>
                <Button
                    children="Cancelar"
                    variant="insurance"
                    styles="ghost"
                    size="small"
                    onClick={router.back}
                    style={{ fontSize: 16, fontWeight: 700, height: 48, lineHeight: '20px', marginRight: 32 }}
                />
                <Button
                    children="Voltar"
                    variant="insurance"
                    styles="secondary"
                    size="small"
                    iconSide="left"
                    onClick={() => setStep(2, stepper)}
                    icon={<Icon size={20} color="primary" icon="Porto-ic-arrow-left" />}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0', marginRight: 32 }}
                />
                <Button
                    children="Próximo"
                    variant="insurance"
                    styles="primary"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    size="small"
                    onClick={() => setStep(4, stepper)}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                />
            </S.Action>

        </S.Container>
    );
}

export default RequestScheduleClientDataDomiciliar;