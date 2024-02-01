'use client'
import { tab } from '@/components/micros/Tabs/tabs.types';
import RequestSchedule from '@/components/sections/RequestSchedule';
import { Typography } from 'design-system-react';
import React from "react";
import Tabs from '../../components/micros/Tabs';
import * as S from './services-schedule.styles';

export default function ServicesSchedule() {

    const tabs: tab[] = [
        {
            title: 'Visão geral',
            content: (
                <>
                    <RequestSchedule />
                </>
            ),
        },
        {
            title: 'Financeiro',
            content: (
                <>
                    {/* <Installments /> */}
                </>
            ),
        },
    ];

    return (

        <S.Container>
            {/* <Breadcrumb
                breadcrumbList={[
                    {
                        name: 'Home',
                        url: 'www.google.com.br'
                    },
                    {
                        name: 'Seguro Auto',
                        url: 'www.google.com.br'
                    },
                    {
                        name: 'Seguro Auto Jovem',
                        url: 'www.google.com.br'
                    },
                    {
                        name: 'Simulação',
                        url: 'www.google.com.br'
                    }
                ]}
            /> */}
            <Typography as="p" type="Title4" style={{ marginBottom: 8, fontSize: 32, lineHeight: '36px' }}>
                Agendamento de serviços
			</Typography>
            <Typography as="p" type="Caption" style={{ color: '#808080', fontSize: 16, lineHeight: '24px' }}>
                Solicite ou consulte agendamento de serviços.
			</Typography>

            <Tabs tabs={tabs} />
        </S.Container>
    );
}
