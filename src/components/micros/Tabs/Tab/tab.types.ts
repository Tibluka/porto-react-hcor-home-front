import { HeadingTags } from "design-system-react/dist/components/micros/Typography/types";

export type TabProps = {
    mode: 'light' | 'dark';
    label: string;
    gtmName?: string;
    icon?: string;
    className?: string;
    selected: boolean;
    onClick?: () => void;
    index: number;
    headingTag?: HeadingTags;
};

export type ContainerProps = {
    mode: 'light' | 'dark';
    selected: boolean;
};