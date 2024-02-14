import InputText from '@/components/micros/InputText';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleVehicleDataPosto.styles';
import { useRouter } from 'next/navigation';
import { StepperStore } from '@/zustand/Stepper';
// import { Container } from './styles';

const RequestScheduleVehicleDataPosto = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();
    const [vehicleData, setUserData] = useState<any>({
        licensePlate: { value: '', errors: null, valid: false },
        chassi: { value: '', errors: null, valid: false }
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserData({
            ...vehicleData, [name]: {
                value
            }
        });
    };

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                Dados do veículo
            </Typography>

            <S.Section>
                <S.InputContainer>
                    <InputText
                        width={250}
                        label="Placa"
                        name="licensePlate"
                        value={vehicleData.licensePlate.value}
                        onChange={handleInputChange}
                        clearField={() => handleInputChange({ target: { name: "licensePlate", value: "" } })} />
                </S.InputContainer>
                <InputText
                    label="Chassi"
                    name="chassi"
                    value={vehicleData.chassi.value}
                    onChange={handleInputChange}
                    clearField={() => handleInputChange({ target: { name: "chassi", value: "" } })} />
            </S.Section>

            <S.Action>
                <Button
                    styles="ghost"
                    variant="insurance"
                    children="Cancelar"
                    size="small"
                    onClick={() => router.back()}
                    style={{ fontSize: 16, height: 48, marginRight: 32 }} />
                <Button
                    styles="secondary"
                    variant="insurance"
                    children="Anterior"
                    size="small"
                    onClick={() => setStep(2, stepper)}
                    style={{ fontSize: 16, height: 48, marginRight: 32 }} />

                <Button
                    styles="primary"
                    variant="insurance"
                    children="Próximo"
                    size="small"
                    onClick={() => setStep(4, stepper)}
                    style={{ fontSize: 16, height: 48 }} />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleVehicleDataPosto;