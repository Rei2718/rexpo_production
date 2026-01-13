import { IconName } from "@/assets/msIcon";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { useInAppBrowser } from "@/hooks/use-in-app-browser";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SettingsItem } from "./settings-item";


export interface SettingsLinkItemProps {
    label: string;
    icon?: IconName;
    href: string;
    isLast?: boolean;
}

export function SettingsLinkItem({
    label,
    icon,
    href,
    isLast = false,
}: SettingsLinkItemProps) {
    const color = useThemeColor();
    const router = useRouter();
    const openInAppBrowser = useInAppBrowser();

    const handlePress = async () => {
        if (href.startsWith("http")) {
            await openInAppBrowser(href);
        } else {
            router.push(href as any);
        }
    };

    return (
        <>
            <PressableScale onPress={handlePress}>
                <SettingsItem label={label} icon={icon}>
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