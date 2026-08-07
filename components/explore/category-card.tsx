import { PressableScale } from "@/components/ui/pressable-scale";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Category, Verified } from "@/supabase/api/types";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";

const LOCAL_CATEGORY_ICONS: Record<string, any> = {
    "1": require("@/assets/category/1.png"),
    "2": require("@/assets/category/2.png"),
    "3": require("@/assets/category/3.png"),
    "4": require("@/assets/category/4.png"),
    "5": require("@/assets/category/5.png"),
    "1.png": require("@/assets/category/1.png"),
    "2.png": require("@/assets/category/2.png"),
    "3.png": require("@/assets/category/3.png"),
    "4.png": require("@/assets/category/4.png"),
    "5.png": require("@/assets/category/5.png"),
    "/categories/1.png": require("@/assets/category/1.png"),
    "/categories/2.png": require("@/assets/category/2.png"),
    "/categories/3.png": require("@/assets/category/3.png"),
    "/categories/4.png": require("@/assets/category/4.png"),
    "/categories/5.png": require("@/assets/category/5.png"),
};

export default function CategoryCard(data: Verified<Category>) {
    const color = useThemeColor();

    const order = ((data.display_order ?? 1) - 1) % 5 + 1;
    const localAsset = LOCAL_CATEGORY_ICONS[data.icon ?? ""] || LOCAL_CATEGORY_ICONS[`/categories/${order}.png`];
    const iconSource = localAsset || (data.icon?.startsWith('http') ? { uri: data.icon } : null);

    return (
        <Link
            href={{
                pathname: "/(detail)/category",
                params: {
                    category_public_id: data.category_public_id,
                    name: data.name,
                },
            }}
            asChild
        >
            <PressableScale>
                <Container marginVertical="s8">
                    <Container
                        paddingHorizontal="s16"
                        paddingVertical="s8"
                        gap="s8"
                        backgroundColor={color.natural_500}
                        flexDirection="row"
                        alignItems="center"
                        style={[
                            styles.container,
                            {
                                borderWidth: Spacing.s1,
                                borderColor: color.border,
                            },
                        ]}
                    >
                        {iconSource && (
                            <Image
                                source={iconSource}
                                style={styles.icon}
                            />
                        )}
                        <ThemedText type="caption1" numberOfLines={1} ellipsizeMode="tail">
                            {data.name ?? NO_DATA}
                        </ThemedText>
                    </Container>
                </Container>
            </PressableScale>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.pill,
    },
    icon: {
        width: Spacing.s24,
        height: Spacing.s24,
    },
});