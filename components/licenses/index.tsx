import licensesData from "@/assets/licenses.json";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Spacing } from "@/constants/theme";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";
import { FlatList } from "react-native";
import { LicenseItem } from "./license-item";

import { LicenseSeparator } from "./separator";

import { ThemedText } from "@/components/ui/themed-text";

const licenses = Object.entries(licensesData).map(([key, value]) => ({
    key,
    ...value,
}));

export default function LicensesScreen() {
    const { modal } = useBottomPadding();
    const color = useThemeColor();

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "ライセンス",
                }}
            />
            <FlatList
                data={licenses}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <LicenseItem data={item} />}
                contentContainerStyle={{
                    paddingHorizontal: Spacing.s20,
                    paddingBottom: modal,
                    paddingTop: Spacing.s20,
                }}
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: color.natural_600 }}
                ListEmptyComponent={
                    <Container alignItems="center" justifyContent="center" style={{ marginTop: Spacing.s40 }}>
                        <Icon icon="contract" color={color.natural_300} />
                    </Container>
                }
                ItemSeparatorComponent={LicenseSeparator}
                ListHeaderComponent={
                    <Container paddingBottom="s32" alignItems="center">
                        <ThemedText type="caption1" color="tint">
                            本アプリは、数え切れないほどの歴史と
                        </ThemedText>
                        <ThemedText type="caption1" color="tint">
                            世界中の開発者たちが紡いできた資産の上に成り立っています。
                        </ThemedText>
                        <ThemedText type="caption1" color="tint">
                            全ての開発者とコミュニティに、心より感謝を申し上げます。
                        </ThemedText>
                    </Container>
                }
            />
        </>
    );
}