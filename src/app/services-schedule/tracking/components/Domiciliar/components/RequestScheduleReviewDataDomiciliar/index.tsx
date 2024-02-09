import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Typography } from 'design-system-react';
import React from 'react';
import * as S from './requestScheduleReviewDataDomiciliar.styles';

// import { Container } from './styles';

const RequestScheduleReviewDataDomiciliar = ({ setStep }: any) => {

    return (
        <S.Container>

            <Typography as="h4" type="Title5" style={{ fontSize: 24, fontWeight: 600, lineHeight: '28px', marginBottom: 32, marginTop: 24 }}>
                Revise os dados
            </Typography>

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
                <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                    Local do serviço
                </Typography>

                <S.Flex>
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
                            Posto
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            CAPS Araçatuba - R Luiz Pereira Barreto, 800 - Vila São Paulo
                        </Typography>
                    </S.Column>
                </S.Flex>
            </S.DataBlock>

            <S.DataBlock>
                <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                    Contato
                </Typography>

                <S.Flex>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            E-mail
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            jose@exemplo.com
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Telefone
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            (11) 99999-9999
                        </Typography>
                    </S.Column>
                </S.Flex>
            </S.DataBlock>
            <S.DataBlock>
                <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                    Veículos
                </Typography>

                <S.Flex>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Placa
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            ABC-1234
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
                </S.Flex>
            </S.DataBlock>

            <S.DataBlock style={{ borderBottom: 'none' }}>
                <Typography as="h4" type="Title6" style={{ fontSize: 20, fontWeight: 500, lineHeight: '24px', marginBottom: 24, marginTop: 24 }}>
                    Agendamento
                </Typography>

                <S.Flex>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            SUSEP
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            COL10J
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Empresa
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            Porto Seguro CIA de Seguros
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Data
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            22/01/2022
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Período
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            15:00
                        </Typography>
                    </S.Column>
                </S.Flex>
                <S.Flex style={{ marginTop: 24 }}>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Observações
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            Ligar para o telefone (11) 99999-9999 quando chegar ao local.
                        </Typography>
                    </S.Column>
                </S.Flex>
            </S.DataBlock>
        </S.Container>
    );
}

export default RequestScheduleReviewDataDomiciliar;