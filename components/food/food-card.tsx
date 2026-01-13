import { Column, Row } from "@/components/ui/flex";
import { Icon } from "@/components/ui/icon";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Food, Verified } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import * as Linking from "expo-linking";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export function FoodCard(data: Verified<Food>) {
    const color = useThemeColor();

    const handlePressWebsite = () => {
        if (data.website) {
            Linking.openURL(data.website);
        }
    };

    return (
        <ThemedView color="natural_500" style={styles.container}>
            <Column padding="s16" gap="s12">
                {/* Header: Icon + Title + Caption */}
                <Row gap="s16" alignItems="center">
                    <Image
                        source={data.icon ? { uri: `${supabaseStorageUrl}/${data.icon}` } : FALLBACK_IMAGE_URL}
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
                </Row>

                {/* Description */}
                {data.description && (
                    <ThemedText type="body" color="natural_100">
                        {data.description}
                    </ThemedText>
                )}

                {/* Access Info */}
                <Row gap="s16" flexWrap="wrap">
                    {(data.minutes !== null || data.distance !== null) && (
                        <Row gap="s4" alignItems="center">
                            <Icon icon="myLocation" size={16} color={color.natural_300} />
                            <ThemedText type="caption1" color="natural_300">
                                {data.minutes ? `${data.minutes}分` : ''} {data.distance ? `(${data.distance}m)` : ''}
                            </ThemedText>
                        </Row>
                    )}
                    {data.address && (
                        <Row gap="s4" alignItems="center" flex={1}>
                            <Icon icon="locationOn" size={16} color={color.natural_300} />
                            <ThemedText type="caption1" color="natural_300" numberOfLines={1}>
                                {data.address}
                            </ThemedText>
                        </Row>
                    )}
                </Row>

                {/* Website Link */}
                {data.website && (
                    <TouchableOpacity onPress={handlePressWebsite} activeOpacity={0.7}>
                        <Row gap="s4" alignItems="center" justifyContent="flex-end">
                            <ThemedText type="callout" color="tint">
                                Webサイトを見る
                            </ThemedText>
                            <Icon icon="link" size={16} color={color.tint} />
                        </Row>
                    </TouchableOpacity>
                )}
            </Column>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s16,
        overflow: 'hidden',
    },
    image: {
        width: Spacing.s56,
        height: Spacing.s56,
        borderRadius: Spacing.s12,
    },
});