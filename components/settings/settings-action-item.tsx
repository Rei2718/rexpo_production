import { IconName } from "@/assets/msIcon";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
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
}

export function SettingsActionItem({
    label,
    icon,
    onPress,
    isLast = false,
    isDestructive = false,
}: SettingsActionItemProps) {
    const color = useThemeColor();

    return (
        <>
            <PressableScale onPress={onPress}>
                <SettingsItem label={label} icon={icon} labelStyle={isDestructive ? { color: color.red_500 } : undefined}>
                    <Icon icon="right" color={color.natural_300} />
                </SettingsItem>
            </PressableScale>
            {!isLast && (
                <View
                    style={{
                        height: 1,
                        backgroundColor: color.natural_400,
                        marginLeft: Spacing.s40,
                        marginVertical: Spacing.s16,
                    }}
                />
            )}
        </>
    );
}
