import { MsIcon } from 'material-symbols-react-native';

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
