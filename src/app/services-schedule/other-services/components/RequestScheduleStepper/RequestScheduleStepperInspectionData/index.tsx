import { Typography } from 'design-system-react';
import { useState } from 'react';
import * as S from './requestScheduleStepperInspectionData.styles';


const RequestScheduleStepperInspectionData = ({ setStep }: any) => {
    const [selectedOption, setSelectedOption] = useState(1);

    const options = [
        { value: 1, label: 'Sim' },
        { value: 2, label: 'Não' },
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

            <Typography as="h4" type="Title6" style={{ marginBottom: 8, fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
               O endereço é o mesmo que está na proposta?
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


            <S.DataBlock>
                    <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                        Endereço da proposta
                    </Typography>

                    <S.Flex>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                CEP
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                15.025-100
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Endereço
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                Av. Nações Unidas
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Bairro
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                Centro
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Cidade
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                São Paulo
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                UF
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                SP
                            </Typography>
                        </S.Column>

                    </S.Flex>
                </S.DataBlock>
        </S.Container>
    );
}

export default RequestScheduleStepperInspectionData;