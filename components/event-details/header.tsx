import { Column } from "@/components/ui/flex";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { FALLBACK_IMAGE_URL } from "@/constants/fallback-image";
import { Spacing } from "@/constants/theme";
import { EventDetails, Verified } from "@/supabase/api/types";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function EventHeader({ data }: { data: Verified<EventDetails> }) {
    return (
        <Column>
            {/* Cover Image */}
            <Image
                source={data.header_image ? { uri: data.header_image } : { uri: FALLBACK_IMAGE_URL }}
                style={styles.coverImage}
            />

            {/* Logo */}
            <ThemedView style={styles.logoFrame}>
                <Image
                    source={data.icon ? { uri: data.icon } : { uri: FALLBACK_IMAGE_URL }}
                    style={styles.logoImage}
                />
            </ThemedView>

            {/* HeaderTitle */}
            <Column gap="s8" paddingHorizontal="s20" alignItems="center" marginTop="s20">
                <ThemedText type="title1" style={styles.centerText}>{data.name}</ThemedText>
                <ThemedText type="subhead" color="natural_200" style={styles.centerText}>{data.caption}</ThemedText>
            </Column>
        </Column>
    );
}

const styles = StyleSheet.create({
    coverImage: {
        width: "100%",
        aspectRatio: 1,
        maxHeight: 500,
        borderRadius: Spacing.s20,
        overflow: 'hidden',
    },
    logoFrame: {
        marginTop: -(Spacing.s80 / 2) - Spacing.s4,
        padding: Spacing.s4,
        borderRadius: Spacing.s20 + Spacing.s4,
        alignSelf: 'center',
    },
    logoImage: {
        width: Spacing.s80,
        height: Spacing.s80,
        borderRadius: Spacing.s20,
    },
    centerText: {
        textAlign: 'center',
    },
});
