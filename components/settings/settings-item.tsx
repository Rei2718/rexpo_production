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
}

export function SettingsItem({
    label,
    icon,
    children,
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
                    <Icon icon={icon} color={color.natural_100} />
                </Container>
            )}
            <Container
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <ThemedText type="body">
                    {label}
                </ThemedText>

                {children}
            </Container>
        </Container>
    );
}