import { MsIcon } from 'material-symbols-react-native';
import React from 'react';

export function Icon({
    icon,
    size = 24,
    color,
}: {
    icon: any;
    size?: number;
    color: string;
}) {
    return (
        <MsIcon
            icon={icon}
            size={size}
            color={color}
        />
    );
}
