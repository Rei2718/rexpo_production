import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Linking, View } from "react-native";
import { ThemedText } from "../ui/themed-text";

type LicenseData = {
    key: string;
    licenses: string | string[];
    repository?: string;
    publisher?: string;
    email?: string;
    url?: string;
    [key: string]: any;
};

export function LicenseItem({ data }: { data: LicenseData }) {
    const color = useThemeColor();

    const handlePress = async () => {
        if (data.repository && data.repository.startsWith("http")) {
            const supported = await Linking.canOpenURL(data.repository);
            if (supported) {
                await Linking.openURL(data.repository);
            }
        } else if (data.url && data.url.startsWith("http")) {
            // Fallback to url if repository is missing or invalid
            const supported = await Linking.canOpenURL(data.url);
            if (supported) {
                await Linking.openURL(data.url);
            }
        }
    };

    // Extract name and version from key (format: name@version)
    // Handle scoped packages like @scope/name@version
    const lastAtIndex = data.key.lastIndexOf("@");
    const name = lastAtIndex > 0 ? data.key.substring(0, lastAtIndex) : data.key;
    const version = lastAtIndex > 0 ? data.key.substring(lastAtIndex + 1) : "";

    const licenseType = Array.isArray(data.licenses) ? data.licenses.join(", ") : data.licenses;

    return (
        <PressableScale onPress={handlePress}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: Spacing.s12,
                }}
            >
                <Icon icon={data.repository ? "link" : "contract"} color={color.natural_300} />
                <View style={{ flex: 1, gap: Spacing.s4 }}>
                    <View style={{ flexDirection: "row", alignItems: "baseline", gap: Spacing.s8, flexWrap: "wrap" }}>
                        <ThemedText type="body">{name}</ThemedText>
                        <ThemedText type="caption1" style={{ color: color.natural_300 }}>
                            v{version}
                        </ThemedText>
                    </View>
                    <ThemedText type="caption1" style={{ color: color.natural_300 }}>
                        {licenseType}
                    </ThemedText>
                </View>
            </View>
        </PressableScale>
    );
}