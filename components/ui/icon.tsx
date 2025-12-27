import { IconName, icons } from '@/assets/msIcon';
import { Image } from 'expo-image';

interface IconProps {
    icon: IconName;
    size?: number;
    color: string;
    onLoad?: () => void;
}

export function Icon({ icon, size = 24, color, onLoad }: IconProps) {
    return (
        <Image
            source={icons[icon]}
            style={{ width: size, height: size }}
            tintColor={color}
            contentFit="contain"
            onLoad={onLoad}
        />
    );
}
