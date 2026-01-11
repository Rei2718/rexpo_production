import { IconName } from "@/assets/msIcon";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ThemedText } from "@/components/ui/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ReactNode } from "react";


export interface SettingsItemProps {
    label: string;
    icon?: IconName;
    children?: ReactNode;
    labelStyle?: object;
}

export function SettingsItem({
    label,
    icon,
    children,
    labelStyle,
}: SettingsItemProps) {
    const color = useThemeColor();

    return (
        <Container
            flexDirection="row"
            alignItems="center"
            gap="s16"
        >
            {icon && (
                <Container>
                    <Icon icon={icon} color={color.tint} />
                </Container>
            )}
            <Container
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <ThemedText type="body" style={labelStyle}>
                    {label}
                </ThemedText>

                {children}
            </Container>
        </Container>
    );
}