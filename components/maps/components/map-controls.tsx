import { ContainerAbsolute } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconName } from '@/assets/msIcon';

import { ThemedText } from '@/components/ui/themed-text';

type Props = {
    onPress: () => void;
    icon?: IconName;
    currentFloor: number;
    onFloorToggle: () => void;
};

export function MapControls({ onPress, icon = 'myLocation', currentFloor, onFloorToggle }: Props) {
    const color = useThemeColor();
    const insets = useSafeAreaInsets();

    return (
        <ContainerAbsolute
            right={Spacing.s20}
            zIndex={100}
            style={{ top: Spacing.s16 + insets.top, gap: Spacing.s8 }}
        >
            <PressableScale onPress={onPress}>
                <ThemedView
                    color="natural_400"
                    style={{
                        width: Spacing.s48,
                        height: Spacing.s48,
                        borderRadius: Spacing.pill,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon icon={icon} size={Spacing.icon} color={color.tint} />
                </ThemedView>
            </PressableScale>

            <PressableScale onPress={onFloorToggle}>
                <ThemedView
                    color="natural_400"
                    style={{
                        width: Spacing.s48,
                        height: Spacing.s48,
                        borderRadius: Spacing.pill,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ThemedText type="headline" style={{ color: color.tint, fontWeight: 'bold' }}>
                        {currentFloor}F
                    </ThemedText>
                </ThemedView>
            </PressableScale>
        </ContainerAbsolute>
    );
}