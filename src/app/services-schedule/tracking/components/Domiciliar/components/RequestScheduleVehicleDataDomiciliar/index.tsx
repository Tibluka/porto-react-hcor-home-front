import InputText from '@/components/micros/InputText';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleVehicleDataDomiciliar.styles';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';
import { Icon } from '@/components/micros/Icon';
// import { Container } from './styles';

const RequestScheduleVehicleDataDomiciliar = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();

    const [vehicleData, setUserData] = useState<any>({
        licensePlate: { value: '', errors: null, valid: false },
        chassi: { value: '', errors: null, valid: false }
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserData({ ...vehicleData, [name]: value });
    };
    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados do veículo
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText disabled={!vehicleData.licensePlate.valid} width={250} label="Placa" name="licensePlate" value={vehicleData.licensePlate.value} onChange={handleInputChange} />
                </S.InputContainer>
                <InputText disabled={!vehicleData.chassi.valid} label="Chassi" name="chassi" value={vehicleData.chassi.value} onChange={handleInputChange} />
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
                    onClick={() => setStep(3, stepper)}
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
                    onClick={() => setStep(5, stepper)}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleVehicleDataDomiciliar;