import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { PARTNERS } from "@/constants/partners-data";
import { Spacing } from "@/constants/theme";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useInAppBrowser } from "@/hooks/use-in-app-browser";
import { useScreenView } from "@/hooks/use-screen-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import { FlatList, StyleSheet, useWindowDimensions } from "react-native";

export default function PartnersScreen() {
    const color = useThemeColor();
    const router = useRouter();
    const { modal } = useBottomPadding();
    const { width } = useWindowDimensions();
    const openInAppBrowser = useInAppBrowser();

    useScreenView({
        screen: "partners",
        label: "Partners",
    });

    const gap = Spacing.s12;
    const itemWidth = (width - Spacing.s20 * 2 - gap) / 2;

    const handlePress = async (id: string) => {
        if (id.startsWith("https")) {
            await openInAppBrowser(id);
        } else {
            router.push({
                pathname: "/(detail)/organization-details",
                params: {
                    organization_public_id: id,
                },
            });
        }
    };

    return (
        <ThemedView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: "パートナー",
                    headerLeft: ({ canGoBack }) =>
                        canGoBack ? (
                            <PressableScale onPress={() => router.back()}>
                                <Icon icon="left" color={color.natural_100} />
                            </PressableScale>
                        ) : null,
                }}
            />
            <FlatList
                data={PARTNERS}
                keyExtractor={(item) => item.organization_public_id}
                numColumns={2}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: modal,
                    paddingHorizontal: Spacing.s20,
                    paddingTop: Spacing.s20,
                }}
                columnWrapperStyle={{ gap }}
                ListHeaderComponent={
                    <Container marginBottom="s48">
                        <ThemedText type="caption1" color="tint" style={{ textAlign: 'center' }}>
                            本イベントをご支援いただいている{"\n"}
                            パートナー企業の皆様です。{"\n"}
                            {"\n"}
                            （五十音順・敬称略）
                        </ThemedText>
                    </Container>
                }
                renderItem={({ item }) => (
                    <PressableScale
                        onPress={() => handlePress(item.organization_public_id)}
                        style={{ width: itemWidth, marginBottom: gap }}
                    >
                        <Container gap="s8">
                            <ThemedText type="caption1" color="natural_200" numberOfLines={1}>
                                {item.name}
                            </ThemedText>
                            <Image
                                source={item.image}
                                style={[
                                    styles.image,
                                    {
                                        borderColor: color.border,
                                        backgroundColor: color.natural_500,
                                    }
                                ]}
                                contentFit="cover"
                            />
                        </Container>
                    </PressableScale>
                )}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 16 / 9,
        borderRadius: Spacing.s12,
        borderWidth: 1,
    },
});
