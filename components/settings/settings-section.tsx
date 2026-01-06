import { Container } from "@/components/ui/container";
import { ThemedText } from "@/components/ui/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ReactNode } from "react";


export interface SettingsSectionProps {
    title?: string;
    children: ReactNode;
    footer?: string;
}

export function SettingsSection({ title, children, footer }: SettingsSectionProps) {
    const color = useThemeColor();

    return (
        <Container>
            {title && (
                <Container margin="s16" marginBottom="s8">
                    <ThemedText type="footnote" color="natural_200">
                        {title}
                    </ThemedText>
                </Container>
            )}
            <Container
                style={{ backgroundColor: color.natural_500 }}
                borderRadius="s20"
                padding="s16"
            >
                {children}
            </Container>
        </Container>
    );
}