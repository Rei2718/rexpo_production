import { Column } from "@/components/ui/flex";
import { ThemedText } from "@/components/ui/themed-text";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { Spacing } from "@/constants/theme";
import { EventDetails, Verified } from "@/supabase/api/types";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { NO_DATA } from "@/constants/no-data";
import { getImageUrl } from "@/supabase/supabase";

import { useThemeColor } from "@/hooks/use-theme-color";

export function EventHeader(data: Verified<EventDetails>) {
    const color = useThemeColor();
    const imageUrl = getImageUrl(data.header_image);

    return (
        <Column>
            {/* Cover Image */}
            <Column
                paddingTop="s20"
                paddingHorizontal="s80">
                <Image
                    source={imageUrl ? { uri: imageUrl } : FALLBACK_IMAGE_URL}
                    style={[
                        styles.coverImage,
                        {
                            borderWidth: Spacing.s1,
                            borderColor: color.border,
                            backgroundColor: color.border,
                        }
                    ]}
                />
            </Column>

            {/* HeaderTitle */}
            <Column gap="s8" paddingHorizontal="s32" alignItems="center" marginTop="s20">
                <ThemedText type="title2" style={styles.centerText}>{data.name ?? NO_DATA}</ThemedText>
                <ThemedText type="subhead" color="natural_200" style={styles.centerText}>{data.caption ?? NO_DATA}</ThemedText>
            </Column>
        </Column >
    );
}

const styles = StyleSheet.create({
    coverImage: {
        width: "100%",
        aspectRatio: 1,

        borderRadius: Spacing.s20,
        overflow: 'hidden',
    },
    centerText: {
        textAlign: 'center',
    },
});