import { Typography } from 'design-system-react';
import { useState } from 'react';
import * as S from './requestScheduleStepperReviewData.styles';


const RequestScheduleStepperReviewData = ({ setStep }: any) => {
    const [selectedOption, setSelectedOption] = useState(1);

    const options = [
        { value: 1, label: 'Posto' },
        { value: 2, label: 'Domiciliar' },
    ];


    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 400, lineHeight: '24px', marginBottom: 48, marginTop: 16 }}>
                Sua vistoria será realizada <span style={{ fontWeight: 700 }}>presencialmente</span>. Para concluir a solicitação, é só conferir as <br />
                informações e <span style={{ fontWeight: 700 }}>preencher o que falta</span>.
            </Typography>

            <Typography as="label" type="Label" style={{ marginBottom: 8, fontSize: 12, lineHeight: '24px' }}>
                Selecione como sua vistoria será realizada:
            </Typography>

            <S.FormCustomRadio>
                {options.map((option) => (
                    <label key={option.value}>
                        <input
                            type="radio"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={() => handleOptionChange(option.value)}
                        />
                        <S.Radio selected={selectedOption === option.value}>
                            {option.label}
                        </S.Radio>
                    </label>
                ))}
            </S.FormCustomRadio>

        </S.Container>
    );
}

export default RequestScheduleStepperReviewData;