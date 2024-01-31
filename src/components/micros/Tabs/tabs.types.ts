import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export type tab = {
    title: string;
    content: ReactNode;
};
export type TabsProps = {
    tabs: tab[];
    style?: CSSProperties;
};
