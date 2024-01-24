'use client'
import { Typography } from 'design-system-react';
import React from "react";
import styles from "../services-schedule/services-schedule.module.css";

export default function ServicesSchedule() {
    return (
        <main className={styles.main}>

            <Typography as="h1" type="Title4" style={{ marginBottom: 8 }}>
                Agendamento de serviços
			</Typography>
            <h1>teste</h1>
            <Typography as="p" type="Caption" style={{ color: '#808080' }}>
                Solicite ou consulte agendamento de serviços.
			</Typography>

            <div>

            </div>
        </main>
    );
}
