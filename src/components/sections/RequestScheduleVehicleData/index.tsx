import InputText from '@/components/micros/InputText';
import { Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleVehicleData.styles';
// import { Container } from './styles';

const RequestScheduleVehicleData: React.FC = () => {
    const [vehicleData, setUserData] = useState<any>({
        licensePlate: '',
        chassi: ''
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
                    <InputText width={250} label="Placa" name="licensePlate" value={vehicleData.licensePlate} onChange={handleInputChange} />
                </S.InputContainer>
                <InputText label="Chassi" name="chassi" value={vehicleData.chassi} onChange={handleInputChange} />
            </S.Section>
        </S.Container>
    );
}

export default RequestScheduleVehicleData;