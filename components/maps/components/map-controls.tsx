import { ContainerAbsolute } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    onPress: () => void;
};

export function MapControls({ onPress }: Props) {
    const color = useThemeColor();
    const insets = useSafeAreaInsets();

    return (
        <ContainerAbsolute
            right={Spacing.s20}
            zIndex={100}
            style={{ top: Spacing.s16 + insets.top }}
        >
            <PressableScale onPress={onPress}>
                <ThemedView
                    color="natural_500"
                    style={{
                        width: Spacing.s48,
                        height: Spacing.s48,
                        borderRadius: Spacing.pill,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon icon="locationOnFill" size={Spacing.icon} color={color.tint} />
                </ThemedView>
            </PressableScale>
        </ContainerAbsolute>
    );
}