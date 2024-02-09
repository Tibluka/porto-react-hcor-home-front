import InputText from '@/components/micros/InputText';
import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleVehicleDataDomiciliar.styles';
// import { Container } from './styles';

const RequestScheduleVehicleDataDomiciliar = ({ setStep }: any) => {
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
        </S.Container>
    );
}

export default RequestScheduleVehicleDataDomiciliar;