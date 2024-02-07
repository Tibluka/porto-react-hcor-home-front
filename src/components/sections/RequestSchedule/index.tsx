import { Typography, Button } from 'design-system-react';
import React, { useState } from 'react';
import * as S from './requestSchedule.styles';
import { Card } from '../../../styles/globals.styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// import { Container } from './styles';

const RequestSchedule: React.FC = () => {
    const router = useRouter();

    const [cardList] = useState([
        {
            cardIcon: require('../../../../public/porto-images/Porto-ic-car-front-check.svg'),
            cardTitle: 'Vistoria Prévia',
            cardSubtitle: 'Realize agendamento com ou sem proposta.',
            route: ''
        },
        {
            cardIcon: require('../../../../public/porto-images/Porto-ic-car-pin.svg'),
            cardTitle: 'Rastreador',
            cardSubtitle: 'Realize agendamento Domiciliar ou em Posto.',
            route: 'services-schedule/tracking'
        },
        {
            cardIcon: require('../../../../public/porto-images/Porto-ic-tools.svg'),
            cardTitle: 'Outros Serviços',
            cardSubtitle: 'Serviços disponíveis para Posto.',
            route: 'services-schedule/other-services'
        }
    ])

    function accessCard(card: any) {
        router.push(card.route);
    }

    return (
        <>
            <Typography as="h1" type="Title6" style={{ marginBottom: 28, fontSize: 24 }}>
                Solicitar agendamento
            </Typography>

            <S.Container>
                {
                    cardList.map((card, index) => (
                        <Card key={index} style={{ width: '211px', marginRight: 48 }}>
                            <Image
                                src={card.cardIcon}
                                width={32}
                                height={32}
                                alt="img"
                                style={{ marginBottom: 14 }}
                            />

                            <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px' }}>
                                {card.cardTitle}
                            </Typography>

                            <Typography as="p" type="Body1" style={{ fontSize: 14, lineHeight: '20px', marginBottom: 24 }} color="black65">
                                {card.cardSubtitle}
                            </Typography>

                            <Button
                                styles="secondary"
                                variant="insurance"
                                children="Selecionar"
                                size="small"
                                onClick={() => accessCard(card)}
                                style={{ fontSize: 16, height: 48, width: '100%' }} />

                        </Card>

                    ))
                }
            </S.Container>

        </>
    );
}

export default RequestSchedule;