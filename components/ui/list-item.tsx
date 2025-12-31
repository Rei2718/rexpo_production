import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { Colors, Spacing } from '@/constants/theme';
import { Image } from 'expo-image';
import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { Column, Row } from './flex';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface ListItemProps extends ComponentProps<typeof ThemedView> {
    image?: string | null;
    title: string;
    subtitle?: string | null;
    color?: keyof typeof Colors.light;
}

export function ListItem({ image, title, subtitle, color, style, ...props }: ListItemProps) {
    return (
        <ThemedView color={color || "natural_600"} style={[styles.container, style]} {...props}>
            <Row alignItems="center" gap="s12" padding="s12">
                <Image
                    source={image ? { uri: image } : FALLBACK_IMAGE_URL}
                    style={styles.image}
                />
                <Column flex={1} gap="s2">
                    <ThemedText type="callout" numberOfLines={1}>{title}</ThemedText>
                    {subtitle && (
                        <ThemedText type="caption1" color="natural_200" numberOfLines={1}>
                            {subtitle}
                        </ThemedText>
                    )}
                </Column>
            </Row>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s12,
        overflow: 'hidden',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: Spacing.s20, // Circular if size 40, r20
    },
});
