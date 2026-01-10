import { IconName } from "@/assets/msIcon";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Switch } from "react-native";
import { SettingsItem } from "./settings-item";

interface SettingsToggleItemProps {
    label: string;
    icon?: IconName;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

export function SettingsToggleItem({
    label,
    icon,
    value,
    onValueChange,
}: SettingsToggleItemProps) {
    const color = useThemeColor();

    return (
        <SettingsItem label={label} icon={icon}>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: color.natural_300, true: color.tint }}
                ios_backgroundColor={color.natural_300}
            />
        </SettingsItem>
    );
}
