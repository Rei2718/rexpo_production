import { PressableScale } from "@/components/ui/pressable-scale";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Category, Verified } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";

export default function CategoryCard(data: Verified<Category>) {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/category",
                params: {
                    category_public_id: data.category_public_id,
                    name: data.name,
                },
            }}
            asChild
        >
            <PressableScale>
                <Container
                    paddingHorizontal="s16"
                    paddingVertical="s8"
                    gap="s8"
                    backgroundColor={color.natural_500}
                    flexDirection="row"
                    alignItems="center"
                    style={styles.container}
                >
                    {data.icon && (
                        <Image
                            source={{ uri: supabaseStorageUrl + data.icon }}
                            style={styles.icon}
                        />
                    )}
                    <ThemedText type="caption1" numberOfLines={1} ellipsizeMode="tail">
                        {data.name ?? NO_DATA}
                    </ThemedText>
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