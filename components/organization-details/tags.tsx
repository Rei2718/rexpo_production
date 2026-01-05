import { Row } from '@/components/ui/flex';
import { ThemedText } from '@/components/ui/themed-text';
import { NO_DATA } from "@/constants/no-data";
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { EventDetails, Verified } from '@/supabase/api/types';
import { Link } from 'expo-router';
import { PressableScale } from 'pressto';
import { ScrollView, StyleSheet } from 'react-native';

export function EventTags(data: Verified<EventDetails>) {
    const color = useThemeColor();

    if (!data.tags || data.tags.length === 0) return null;

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            contentInsetAdjustmentBehavior="automatic"
        >
            {data.tags.map((tag) => (
                <Link
                    key={tag.tag_public_id}
                    href={{
                        pathname: "/tag",
                        params: {
                            tag_public_id: tag.tag_public_id,
                            name: tag.name,
                        },
                    }}
                    asChild
                >
                    <PressableScale>
                        <Row
                            alignItems="center"
                            gap="s12"
                            paddingHorizontal="s16"
                            paddingVertical="s12"
                            style={[
                                styles.tagContainer,
                                { backgroundColor: color.natural_500 }
                            ]}
                        >
                            <ThemedText
                                type="footnote"
                                color="natural_100"
                                numberOfLines={1}
                            >
                                {tag.name ?? NO_DATA}
                            </ThemedText>
                        </Row>
                    </PressableScale>
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: Spacing.s20,
        gap: Spacing.s12,
    },
    tagContainer: {
        borderRadius: Spacing.pill,
    },
});