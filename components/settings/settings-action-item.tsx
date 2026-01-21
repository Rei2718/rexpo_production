import { IconName } from "@/assets/msIcon";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { View } from "react-native";
import { SettingsItem } from "./settings-item";


export interface SettingsActionItemProps {
    label: string;
    icon?: IconName;
    onPress: () => void;
    isLast?: boolean;
    isDestructive?: boolean;
    value?: string;
}

export function SettingsActionItem({
    label,
    icon,
    onPress,
    isLast = false,
    isDestructive = false,
    value,
}: SettingsActionItemProps) {
    const color = useThemeColor();

    return (
        <>
            <PressableScale onPress={onPress}>
                <Container paddingVertical="s16">
                    <SettingsItem label={label} icon={icon} labelStyle={isDestructive ? { color: color.red_500 } : undefined}>
                        <Container flexDirection="row" alignItems="center" gap="s8">
                            {value && (
                                <ThemedText type="subhead" color="tint">
                                    {value}
                                </ThemedText>
                            )}
                            <Icon icon="right" color={color.natural_300} />
                        </Container>
                    </SettingsItem>
                </Container>
            </PressableScale>
            {!isLast && (
                <View
                    style={{
                        height: 1,
                        backgroundColor: color.natural_400,
                        marginLeft: Spacing.s40,
                    }}
                />
            )}
        </>
    );
}
