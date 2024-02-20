import InputText from '@/components/micros/InputText';
import { Typography } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestScheduleStepperGeneralData.styles';


const RequestScheduleStepperGeneralData = ({ setStep }: any) => {
    const [selectedOption, setSelectedOption] = useState(1);

    const options = [
        { value: 1, label: 'Posto' },
        { value: 2, label: 'Domiciliar' },
    ];

    const [contactData, setContactData] = useState<any>({
        email: { value: 'antonio.roberto@gmail.com', errors: null, valid: false },
        phone: { value: '11 9 9876-5432', errors: null, valid: false }
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setData({ ...contactData, [name]: value });
    };

    const handleOptionChange = (value: any) => {
        setSelectedOption(value);
    };

    return (
        <S.Container>
            <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 400, lineHeight: '24px', marginBottom: 48, marginTop: 16 }}>
                Sua vistoria será realizada <span style={{ fontWeight: 700 }}>presencialmente</span>. Para concluir a solicitação, é só conferir as <br />
                informações e <span style={{ fontWeight: 700 }}>preencher o que falta</span>.
            </Typography>


            <React.Fragment>


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

            </React.Fragment>

            <React.Fragment>
                <S.DataBlock>
                    <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                        Dados do cliente
                    </Typography>

                    <S.Flex>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Nome do cliente
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                José Santos da Silva
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                CPF
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                123.456.789-00
                            </Typography>
                        </S.Column>
                    </S.Flex>
                </S.DataBlock>

                <S.DataBlock>
                    <S.Section>

                        <S.InputContainer>
                            <InputText width={505} label="E-mail" name="email" value={contactData.email.value} onChange={handleInputChange} />
                        </S.InputContainer>
                        
                        <S.InputContainer>
                            <InputText width={288} label="Telefone" name="phone" value={contactData.phone.value} onChange={handleInputChange} />
                        </S.InputContainer>

                    </S.Section>

                </S.DataBlock>

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

                <S.DataBlock>
                    <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                        Veículo
                    </Typography>

                    <S.Flex>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Placa
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                GHG2202
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Chassi
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                8AGSA19907R142308
                            </Typography>
                        </S.Column>
                        <S.Column>
                            <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                                Informações adicionais
                            </Typography>
                            <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                                FIAT ARGO 1.0 6V FLEX, 5 PORTAS, GASOLINA/ALCOOL, MANUAL
                            </Typography>
                        </S.Column>
                    </S.Flex>
                </S.DataBlock>

            </React.Fragment>
        </S.Container>

    );
}

export default RequestScheduleStepperGeneralData;

function setData(arg0: any) {
    throw new Error('Function not implemented.');
}
