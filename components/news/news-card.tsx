import { Column, Row } from "@/components/ui/flex";
import { Icon } from "@/components/ui/icon";
import { PressableScale } from "@/components/ui/pressable-scale";
import { ThemedText } from "@/components/ui/themed-text";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { News, Verified } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import { useRouter } from "expo-router";
import { Image, StyleSheet } from "react-native";

export function NewsCard(data: Verified<News>) {
    const router = useRouter();
    const color = useThemeColor();

    const handlePress = () => {
        router.push(`/(detail)/news/${data.news_public_id}`);
    };

    return (
        <PressableScale onPress={handlePress}>
            <Row gap="s16" alignItems="center">
                <Image
                    source={data.thumbnail ? { uri: `${supabaseStorageUrl}/${data.thumbnail}` } : FALLBACK_IMAGE_URL}
                    style={[styles.image, { backgroundColor: color.natural_200 }]}
                />
                <Column flex={1} gap="s4">
                    <ThemedText type="subhead" numberOfLines={1}>
                        {data.name}
                    </ThemedText>
                    <ThemedText type="caption2" color="natural_200" numberOfLines={2}>
                        {data.caption ?? NO_DATA}
                    </ThemedText>
                </Column>
                <Icon icon="right" color={color.natural_300} />
            </Row>
        </PressableScale>
    );
}

const styles = StyleSheet.create({
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s12,
    },
});
