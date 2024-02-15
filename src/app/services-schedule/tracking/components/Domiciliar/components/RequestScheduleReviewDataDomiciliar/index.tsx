import { StepperProps } from '@/components/micros/Stepper/stepper.types';
import { Button, Typography } from 'design-system-react';
import React from 'react';
import * as S from './requestScheduleReviewDataDomiciliar.styles';
import { StepperStore } from '@/zustand/Stepper';
import { useRouter } from 'next/navigation';
import { Icon } from '@/components/micros/Icon';

// import { Container } from './styles';

const RequestScheduleReviewDataDomiciliar = ({ setStep }: any) => {
    const router = useRouter();
    const { stepper } = StepperStore();

    const { form } = stepper ?? {};

    function finalize() {
        console.log(form);

        setStep(5, StepperStore.getState().stepper);
    }

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
                            {form?.nameEntity}
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            CPF
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            {form?.cpfCnpj}
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
                            {form?.city.name}
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            UF
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            {form?.uf.name}
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Bairro
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            {form?.region.name}
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Posto
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            {form?.posto.name}
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
                            {form?.email}
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Telefone
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            {form?.phone}
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
                            {form?.licensePlate}
                        </Typography>
                    </S.Column>
                    <S.Column>
                        <Typography as="p" type="Body1" style={{ fontSize: 12, fontWeight: 400, lineHeight: '15.6px', marginBottom: 2 }}>
                            Chassi
                        </Typography>
                        <Typography as="h4" type="Title6" style={{ fontSize: 16, fontWeight: 500, lineHeight: '24px' }}>
                            {form?.chassi}
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
                            {form?.company.name}
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
                    iconSide="left"
                    icon={<Icon size={20} color="primary" icon="Porto-ic-arrow-left" />}
                    onClick={() => setStep(3, stepper)}
                    style={{ fontSize: 16, height: 48, marginRight: 32, fontWeight: 700, lineHeight: '0' }} />

                <Button
                    styles="primary"
                    variant="insurance"
                    children="Próximo"
                    size="small"
                    iconSide="right"
                    icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                    onClick={finalize}
                    style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }} />
            </S.Action>
        </S.Container>
    );
}

export default RequestScheduleReviewDataDomiciliar;