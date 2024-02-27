'use client'

import React, { useState } from 'react';
import { Button, Typography } from 'design-system-react';
import { Icon } from '@/components/micros/Icon';
import * as S from './other-services.styles';
import SelectCompany from './components/SelectCompany';
import { useRouter } from 'next/navigation';
import SelectKey from './components/SelectKey';
import RequestScheduleStepper from './components/RequestScheduleStepper';

export default function OtherServices() {
    const router = useRouter();
    const [schedulePart, setSchedulePart] = useState(1);

    function changePart(part: number) {
        setSchedulePart(part);
    }

    return (
        <S.Container>

            <S.Container>
                {(() => {
                    switch (schedulePart) {
                        case 1:
                            return (
                                <S.Container>
                                    <Typography as="h1" type="Title6" style={{ marginBottom: 8, fontSize: 32, lineHeight: '36px', fontWeight: 500 }}>
                                        Solicitar agendamento
                                    </Typography>
                                    <Typography as="p" type="Body2" style={{ marginBottom: 48, fontSize: 16, color: '#808080', lineHeight: '24px' }}>
                                        Realize o agendamento de vistorias
                                    </Typography>
                                    <SelectCompany />
                                </S.Container>
                            );
                        case 2:
                            return (
                                <S.Container>
                                    <Typography as="h1" type="Title6" style={{ marginBottom: 8, fontSize: 32, lineHeight: '36px', fontWeight: 500 }}>
                                        Solicitar agendamento
                                    </Typography>
                                    <Typography as="p" type="Body2" style={{ marginBottom: 48, fontSize: 16, color: '#808080', lineHeight: '24px' }}>
                                        Realize o agendamento de vistorias
                                    </Typography>
                                    < SelectKey />
                                </S.Container>
                            );
                        case 3:
                            return (
                                <S.Container>
                                    <RequestScheduleStepper setSchedulePart={changePart} />
                                </S.Container>
                            );
                        default:
                            return null;
                    }
                })()}
            </S.Container>

            {
                schedulePart < 3 ?
                    <S.Action>
                        {
                            schedulePart === 1 ?
                                (
                                    <Button
                                        children="Cancelar"
                                        variant="insurance"
                                        styles="ghost"
                                        size="small"
                                        onClick={router.back}
                                        style={{ fontSize: 16, fontWeight: 700, height: 48, lineHeight: '20px', marginRight: 32 }}
                                    />
                                ) :
                                (
                                    <Button
                                        children="Anterior"
                                        variant="insurance"
                                        styles="ghost"
                                        size="small"
                                        onClick={() => setSchedulePart(schedulePart - 1)}
                                        style={{ fontSize: 16, fontWeight: 700, height: 48, lineHeight: '20px', marginRight: 32 }}
                                    />
                                )
                        }
                        <Button
                            children="Próximo"
                            variant="insurance"
                            styles="primary"
                            size="small"
                            iconSide="right"
                            icon={<Icon size={20} color="white" icon="Porto-ic-arrow-right" />}
                            onClick={() => setSchedulePart(schedulePart + 1)}
                            style={{ fontSize: 16, height: 48, fontWeight: 700, lineHeight: '0' }}
                        />

                    </S.Action> : null
            }
        </S.Container>
    );
}
